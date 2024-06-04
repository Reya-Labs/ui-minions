import { isEmpty } from '~/.';
import { DEFAULT_FORMATTING_LOCALE, SMALL_GAS_FEE_LIMIT } from '~/constants';

type Options = {
  defaultValue?: string;
  locale?: string;
  showPlusSign?: boolean;
};

export function fundingRateFormatter(value: number, options: Options = {}): string {
  const {
    showPlusSign = false,
    defaultValue = '---',
    locale = DEFAULT_FORMATTING_LOCALE,
  } = { ...options };
  if (isEmpty(value) || typeof value !== 'number' || isNaN(value)) {
    return defaultValue;
  }
  if (value === 0) {
    return '0';
  }

  const isNegative = value < 0;
  const absValue = Math.abs(value);
  const extraSmallValue = absValue < SMALL_GAS_FEE_LIMIT;
  if (extraSmallValue) {
    const smallLocale = new Intl.NumberFormat(locale, {
      maximumFractionDigits: 4,
      minimumFractionDigits: 4,
    });
    const formatted = smallLocale.format(0.0);
    return `~${formatted}`;
  }
  const localeFormatter = new Intl.NumberFormat(locale, {
    maximumSignificantDigits: 2,
    minimumSignificantDigits: 1,
  });
  const formatted = localeFormatter.format(absValue);
  const sign = isNegative ? '-' : showPlusSign ? '+' : '';
  return `${sign}${formatted}`;
}
