import { DEFAULT_FORMATTING_LOCALE } from '~/constants';

/**
 * It converts a string with a comma decimal separator to a string with a dot decimal separator
 * @param {string | undefined} value - string | undefined
 * @param {string} locale - Preferred value for locale, if not passed defaults to DEFAULT_FORMATTING_LOCALE
 * @returns A function that takes a string or undefined and returns a string or undefined.
 */
export const toUSFormat = (
  value: string = '',
  locale: string = DEFAULT_FORMATTING_LOCALE,
): string | undefined => {
  const thousandSeparator = Intl.NumberFormat(locale).formatToParts(11111)[1].value;
  const decimalSeparator = Intl.NumberFormat(locale).formatToParts(1.1)[1].value;
  return value
    .replace(new RegExp(`\\${thousandSeparator}`, 'g'), '#')
    .replace(new RegExp(`\\${decimalSeparator}`, 'g'), '.')
    .replace(new RegExp('#', 'g'), ',');
};

/**
 * It takes a string, removes any commas, and returns a number
 * @param {string} stringValue - The string value that you want to convert to a number.
 * @param {string} locale - Preferred value for locale, if not passed defaults to DEFAULT_FORMATTING_LOCALE
 * @returns A function that takes a string and returns a number.
 */
export const stringToBigFloat = (
  stringValue: string,
  locale = DEFAULT_FORMATTING_LOCALE,
): number => {
  let formattedValue = toUSFormat(stringValue, locale) as string;
  if (formattedValue.includes(',')) {
    formattedValue = formattedValue.split(',').join('');
  }
  return parseFloat(formattedValue);
};

export type CompactFormatParts = {
  suffix: string;
  value: string;
};

/**
 * It takes a number and returns a string using Intl.NumberFormat formatter
 * it creates compact number format
 * @param {number} number - The number to format.
 * @param {number} minimumFractionDigits - Min. fraction digits
 * @param {number} maximumFractionDigits - Max. fraction digits
 * @param {string} locale - Preferred value for locale, if not passed defaults to browser locale
 * @returns {Object} compactFormatToParts containing the compacted number and suffix.
 * @returns {string} compactFormatToParts.value, representing a
 * language-sensitive representation of the compacted number.
 * @returns {string} compactFormatToParts.suffix, representing the compact
 * suffix (e.g., K, M, etc).
 */
export const compactFormatToParts = (
  number: number,
  minimumFractionDigits: number = 0,
  maximumFractionDigits: number = 2,
  locale: string = navigator.language,
): CompactFormatParts => {
  const notation = number < 1e15 ? 'compact' : 'scientific';

  // Create formatter instances for the 'en-US' locale and the user's locale
  const enUsFormatter = new Intl.NumberFormat('en-US', {
    maximumFractionDigits,
    minimumFractionDigits,
    notation,
  });
  const localeFormatter = new Intl.NumberFormat(locale, {
    maximumFractionDigits,
    minimumFractionDigits,
    notation,
  });

  // Get the parts of the formatted number for both locales
  const enUsNumberParts = enUsFormatter.formatToParts(number);
  const localeNumberParts = localeFormatter.formatToParts(number);

  // Extract the non-compact parts of the formatted numbers for both locales
  const enUsNumberValue = enUsNumberParts
    .filter(
      (part) =>
        part.type !== 'compact' &&
        part.type !== 'exponentSeparator' &&
        part.type !== 'exponentInteger',
    )
    .map(({ value }) => value)
    .join('')
    .trim();
  const localeNumberValue = localeNumberParts
    .filter(
      (part) =>
        part.type !== 'compact' &&
        part.type !== 'exponentSeparator' &&
        part.type !== 'exponentInteger',
    )
    .map(({ value }) => value)
    .join('')
    .trim();

  // Determine which formatted number to use based on the user's locale
  let compactNumber = enUsNumberValue;
  if (
    enUsNumberValue !== localeNumberValue &&
    enUsNumberValue.indexOf('.') !== -1 &&
    enUsNumberValue.indexOf('.') === localeNumberValue.indexOf(',')
  ) {
    compactNumber = localeNumberValue;
  }

  // Get the compact suffix for the formatted number
  const compactSuffix = enUsNumberParts
    .filter(
      (part) =>
        part.type === 'compact' ||
        part.type === 'exponentSeparator' ||
        part.type === 'exponentInteger',
    )
    .map(({ value }) => value)
    .join('');

  return {
    suffix: compactSuffix,
    value: compactNumber,
  };
};

type MapPercentageToRangeParams = {
  max: number;
  min: number;
  percentage: number;
};

export function mapPercentageToRange({ percentage, min, max }: MapPercentageToRangeParams): number {
  return min + (max - min) * (percentage / 100);
}
