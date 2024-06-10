import { DEFAULT_FORMATTING_LOCALE, INPUT_DECIMAL_LIMITS } from '~/constants';
import { isEmpty } from '~/is-empty';

/**
 * Rounds down a number to the specified precision.
 *
 * @param {number} value - The number to round down.
 * @param {number} precision - The number of decimal places to round down to.
 * @returns {number} The rounded down number.
 */
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

/**
 * Formats a price value into a string based on the provided options.
 *
 * @param {number} value - The price value to be formatted.
 * @param {Options} [options={}] - The options for formatting.
 * @param {string} [options.defaultValue] - The default value if the input is empty. Defaults to '---'.
 * @param {string} [options.locale] - The locale for formatting. Defaults to `DEFAULT_FORMATTING_LOCALE`.
 * @param {number} [options.precision] - The number of decimal places to format to. Defaults to `INPUT_DECIMAL_LIMITS`.
 * @param {Intl.NumberFormatOptions['useGrouping']} [options.useGrouping] - Whether to use grouping separators.
 * @returns {string} The formatted price string.
 */
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
