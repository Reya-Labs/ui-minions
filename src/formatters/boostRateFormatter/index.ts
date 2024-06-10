import { DEFAULT_FORMATTING_LOCALE } from '~/constants';

/**
 * Formats a boost rate number to a string with locale-specific formatting.
 *
 * @param {number} boostRate - The boost rate to be formatted.
 * @returns {string} The formatted boost rate string with a maximum of 2 decimal places and a minimum of 0 decimal places.
 */
export const boostRateFormatter = (boostRate: number): string =>
  boostRate.toLocaleString(DEFAULT_FORMATTING_LOCALE, {
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  });
