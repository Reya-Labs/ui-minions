import { CompactFormatParts, compactFormatToParts, isEmpty } from '~/.';
import { DEFAULT_FORMATTING_LOCALE } from '~/constants';

const extractDigitsAndTokens = (value: string) =>
  value.split('').map((char) => (/[\s\u00A0\u202F]/.test(char) ? NaN : Number(char)));

type Options = {
  defaultValue?: string;
  locale?: string;
  showPlusSign?: boolean;
};

function _defaultNumberCompactFormatter(value: number, locale: string) {
  if (value > 99999) {
    const formatted = compactFormatToParts(value, 0, 5, locale);
    const digitsAndTokens = extractDigitsAndTokens(formatted.value);
    const decimalTokenCount = digitsAndTokens.filter(isNaN).length;
    const substringLimit = 5 + decimalTokenCount;

    return {
      suffix: formatted.suffix,
      value: formatted.value.substring(0, substringLimit),
    };
  }

  const maximumFractionDigits =
    value > 9999 && value <= 99999
      ? 0
      : value > 999 && value <= 9999
      ? 1
      : value > 99 && value <= 999
      ? 2
      : value > 9 && value <= 99
      ? 3
      : value > 0 && value <= 9
      ? 4
      : 5;
  const localeFormatter = new Intl.NumberFormat(locale, {
    maximumFractionDigits,
    minimumFractionDigits: 0,
  });
  const zeroLocaleFormatter = new Intl.NumberFormat(locale, {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  });
  const formattedNumber = localeFormatter.format(value);
  const digitsAndTokens = extractDigitsAndTokens(formattedNumber);
  const decimalTokenCount = digitsAndTokens.filter(isNaN).length;
  let substringLimit = 5 + decimalTokenCount;
  const formatted = localeFormatter.format(value).substring(0, substringLimit);
  const isLastToken = isNaN(Number(formatted[formatted.length - 1]));

  substringLimit = isLastToken ? substringLimit - 1 : substringLimit;

  const localeFormattedValue = localeFormatter.format(value).substring(0, substringLimit);

  return {
    suffix: '',
    value: localeFormattedValue === '0' ? zeroLocaleFormatter.format(0) : localeFormattedValue,
  };
}

export function defaultNumberCompactFormatter(
  value: number | null | undefined,
  options: Options = {},
): CompactFormatParts {
  const {
    showPlusSign = false,
    defaultValue = '',
    locale = DEFAULT_FORMATTING_LOCALE,
  } = {
    ...options,
  };
  if (isEmpty(value) || typeof value !== 'number' || isNaN(value)) {
    return {
      suffix: '',
      value: defaultValue,
    };
  }
  if (value === 0) {
    return {
      suffix: '',
      value: '0',
    };
  }

  const isNegative = value < 0;
  const absValue = Math.abs(value);
  const formatted = _defaultNumberCompactFormatter(absValue, locale);

  const sign = isNegative ? '-' : showPlusSign ? '+' : '';
  return {
    suffix: formatted.suffix,
    value: `${sign}${formatted.value}`,
  };
}
