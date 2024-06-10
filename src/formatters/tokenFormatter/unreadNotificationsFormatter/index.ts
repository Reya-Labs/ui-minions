import { DEFAULT_FORMATTING_LOCALE } from '~/constants';
import { isEmpty } from '~/is-empty';

type Options = {
  defaultValue?: string;
  locale?: string;
};

/**
 * Formats a number of unread notifications into a string based on the provided options.
 *
 * @param {number} value - The number of unread notifications to be formatted.
 * @param {Options} [options={}] - The options for formatting.
 * @param {string} [options.defaultValue] - The default value if the input is empty. Defaults to '---'.
 * @param {string} [options.locale] - The locale for formatting. Defaults to `DEFAULT_FORMATTING_LOCALE`.
 * @returns {string} The formatted unread notifications string.
 */
export function unreadNotificationsFormatter(value: number, options: Options = {}): string {
  const { defaultValue = '---', locale = DEFAULT_FORMATTING_LOCALE } = { ...options };
  if (isEmpty(value) || typeof value !== 'number' || isNaN(value)) {
    return defaultValue;
  }
  if (value === 0) {
    return '0';
  }

  if (value > 99) {
    return '99+';
  }
  const localeFormatter = new Intl.NumberFormat(locale, {
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  });
  return localeFormatter.format(value);
}
