import { isEmpty } from '~/is-empty';

export type BoostRateFormatterOptions = {
  defaultValue?: string;
  locale: string;
};

/**
 * Formats a boost rate number to a string with locale-specific formatting.
 *
 * @param {number} value - The boost rate to be formatted.
 * @param {Options} [options={}] - The options for formatting.
 * @param {string} [options.defaultValue] - The default value if the input is empty. Defaults to '---'.
 * @param {string} [options.locale] - The locale for formatting. .
 * @returns {string} The formatted boost rate string with a maximum of 2 decimal places and a minimum of 0 decimal places.
 */
export const boostRateFormatter = (value: number, options: BoostRateFormatterOptions): string => {
  const { defaultValue = '---', locale } = { ...options };
  if (isEmpty(value) || typeof value !== 'number' || isNaN(value)) {
    return defaultValue;
  }
  if (value === 0) {
    return '0';
  }

  return (value as number).toLocaleString(locale, {
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  });
};
