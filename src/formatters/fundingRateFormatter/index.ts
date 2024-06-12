import { isEmpty } from '~/is-empty';

export type FundingRateFormatterOptions = {
  defaultValue?: string;
  locale: string;
  showPlusSign?: boolean;
  smallGasFeeValue: number;
};

/**
 * Formats a funding rate number into a string based on the provided options.
 *
 * @param {number} value - The funding rate to be formatted.
 * @param {Options} [options={}] - The options for formatting.
 * @param {string} [options.defaultValue] - The default value if the input is empty. Defaults to '---'.
 * @param {string} [options.locale] - The locale for formatting. .
 * @param {boolean} [options.showPlusSign] - Whether to show a plus sign for positive numbers. Defaults to false.
 * @returns {string} The formatted funding rate string.
 */
export function fundingRateFormatter(value: number, options: FundingRateFormatterOptions): string {
  const { showPlusSign = false, defaultValue = '---', locale, smallGasFeeValue } = { ...options };
  if (isEmpty(value) || typeof value !== 'number' || isNaN(value)) {
    return defaultValue;
  }
  if (value === 0) {
    return '0';
  }

  const isNegative = value < 0;
  const absValue = Math.abs(value);
  const extraSmallValue = absValue < smallGasFeeValue;
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
