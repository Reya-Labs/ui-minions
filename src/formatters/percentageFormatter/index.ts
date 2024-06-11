import { isEmpty } from '~/is-empty';

export type PercentageFormatterOptions = {
  defaultValue?: string;
  locale: string;
  smallGasFeeLimit: number;
};

/**
 * Formats a percentage value into a string based on the provided options.
 *
 * @param {number} value - The percentage value to be formatted.
 * @param {Options} [options={}] - The options for formatting.
 * @param {string} [options.defaultValue] - The default value if the input is empty. Defaults to '---'.
 * @param {string} [options.locale] - The locale for formatting. .
 * @returns {string} The formatted percentage string.
 */
export function percentageFormatter(value: number, options: PercentageFormatterOptions): string {
  const { defaultValue = '---', locale, smallGasFeeLimit } = { ...options };
  if (isEmpty(value) || typeof value !== 'number' || isNaN(value)) {
    return defaultValue;
  }
  if (value === 0) {
    return '0';
  }

  const isNegative = value < 0;
  const absValue = Math.abs(value);
  const lessThan10 = absValue < 10;
  const extraSmallValue = absValue < smallGasFeeLimit;
  if (extraSmallValue) {
    const smallLocale = new Intl.NumberFormat(locale, {
      maximumFractionDigits: 4,
      minimumFractionDigits: 4,
    });
    const formatted = smallLocale.format(0.0);
    return `~${formatted}`;
  }

  const localeFormatter = lessThan10
    ? new Intl.NumberFormat(locale, {
        maximumSignificantDigits: 2,
        minimumSignificantDigits: 1,
      })
    : new Intl.NumberFormat(locale, {
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
      });

  const formatted = localeFormatter.format(absValue);
  if (isNegative) {
    return `-${formatted}`;
  }
  return formatted;
}
