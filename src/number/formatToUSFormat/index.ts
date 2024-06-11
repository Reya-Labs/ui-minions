/**
 * It converts a string with a comma decimal separator to a string with a dot decimal separator
 * @param {string | undefined} value - string | undefined
 * @param {string} locale - Preferred value for locale.
 * @returns A function that takes a string or undefined and returns a string or undefined.
 */
export const toUSFormat = (value: string = '', locale: string): string | undefined => {
  const thousandSeparator = Intl.NumberFormat(locale).formatToParts(11111)[1].value;
  const decimalSeparator = Intl.NumberFormat(locale).formatToParts(1.1)[1].value;
  return value
    .replace(new RegExp(`\\${thousandSeparator}`, 'g'), '#')
    .replace(new RegExp(`\\${decimalSeparator}`, 'g'), '.')
    .replace(new RegExp('#', 'g'), ',');
};
