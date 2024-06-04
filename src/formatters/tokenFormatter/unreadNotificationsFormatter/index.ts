import { isEmpty } from '~/.';
import { DEFAULT_FORMATTING_LOCALE } from '~/constants';

type Options = {
  defaultValue?: string;
  locale?: string;
};

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
