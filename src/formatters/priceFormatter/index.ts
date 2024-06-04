import { isEmpty } from '~/.';
import { DEFAULT_FORMATTING_LOCALE, INPUT_DECIMAL_LIMITS } from '~/constants';

function roundDown(value: number, precision: number) {
  const roundDownBy = Math.pow(10, precision);
  return Math.trunc(value * roundDownBy) / roundDownBy;
}

type Options = {
  defaultValue?: string;
  locale?: string;
  precision?: number;
  useGrouping?: Intl.NumberFormatOptions['useGrouping'];
};

export function priceFormatter(value: number, options: Options = {}): string {
  const {
    defaultValue = '---',
    locale = DEFAULT_FORMATTING_LOCALE,
    useGrouping = undefined,
    precision = INPUT_DECIMAL_LIMITS,
  } = { ...options };
  if (isEmpty(value) || typeof value !== 'number' || isNaN(value)) {
    return defaultValue;
  }
  if (value === 0) {
    return '0';
  }

  const localeFormatter = new Intl.NumberFormat(locale, {
    maximumFractionDigits: precision,
    minimumFractionDigits: precision,
    useGrouping,
  });
  const rounded = roundDown(value, precision);
  let formatted = localeFormatter.format(rounded);
  while (formatted[formatted.length - 1] === '0') {
    formatted = formatted.slice(0, -1);
  }
  if (isNaN(Number(formatted[formatted.length - 1]))) {
    // trim the token
    return formatted.slice(0, -1);
  }
  return formatted;
}
