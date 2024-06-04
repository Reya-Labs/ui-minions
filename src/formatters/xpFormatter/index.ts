import { DEFAULT_FORMATTING_LOCALE } from '~/constants';
import { isEmpty } from '~/.';

type Options = {
  defaultValue?: string;
  locale?: string;
};

export const xpFormatter = (value: number, options: Options = {}) => {
  const { defaultValue = '---', locale = DEFAULT_FORMATTING_LOCALE } = { ...options };
  if (isEmpty(value) || typeof value !== 'number' || isNaN(value)) {
    return defaultValue;
  }
  if (value === 0) {
    return '0';
  }
  const localeFormatter = new Intl.NumberFormat(locale, {
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  });
  return localeFormatter.format(Math.ceil(value));
};
