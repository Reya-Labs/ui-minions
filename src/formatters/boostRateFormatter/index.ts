/**
 * Formats a boost rate number to a string with locale-specific formatting.
 *
 * @param {number} boostRate - The boost rate to be formatted.
 * @param {string} locale - The locale provided by the integrator.
 * @returns {string} The formatted boost rate string with a maximum of 2 decimal places and a minimum of 0 decimal places.
 */
export const boostRateFormatter = (boostRate: number, locale: string): string =>
  boostRate.toLocaleString(locale, {
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  });
