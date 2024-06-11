import { toUSFormat } from '../formatToUSFormat';

/**
 * It takes a string, removes any commas, and returns a number
 * @param {string} stringValue - The string value that you want to convert to a number.
 * @param {string} locale - Preferred value for locale.
 * @returns A function that takes a string and returns a number.
 */
export const stringToBigFloat = (stringValue: string, locale: string): number => {
  let formattedValue = toUSFormat(stringValue, locale) as string;
  if (formattedValue.includes(',')) {
    formattedValue = formattedValue.split(',').join('');
  }
  return parseFloat(formattedValue);
};
