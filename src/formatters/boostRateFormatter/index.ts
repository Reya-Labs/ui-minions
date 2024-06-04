import { DEFAULT_FORMATTING_LOCALE } from '~/constants';

export const boostRateFormatter = (boostRate: number): string =>
  boostRate.toLocaleString(DEFAULT_FORMATTING_LOCALE, {
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  });
