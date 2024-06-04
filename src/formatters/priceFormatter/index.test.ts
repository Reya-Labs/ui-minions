import { priceFormatter } from '.';

describe('priceFormatter', () => {
  test.each([
    // en-GB
    [undefined, 'en-GB', '---'],
    [null, 'en-GB', '---'],
    ['notANumber', 'en-GB', '---'],
    [NaN, 'en-GB', '---'],
    [0.34, 'en-GB', '0.34'],
    [5.0, 'en-GB', '5'],
    [5.5, 'en-GB', '5.5'],
    [15, 'en-GB', '15'],
    [15.4, 'en-GB', '15.4'],
    [15.5, 'en-GB', '15.5'],
    [94, 'en-GB', '94'],
    [94.4, 'en-GB', '94.4'],
    [94.5, 'en-GB', '94.5'],
    [100, 'en-GB', '100'],
    [115, 'en-GB', '115'],
    [115.4, 'en-GB', '115.4'],
    [115.5, 'en-GB', '115.5'],
    [115.52, 'en-GB', '115.52'],
    [115.523, 'en-GB', '115.52'],
    [115.525, 'en-GB', '115.52'],
    // 'ja' (Japanese)
    [0.34, 'ja', '0.34'],
    [5.0, 'ja', '5'],
    [5.5, 'ja', '5.5'],
    [15, 'ja', '15'],
    [15.4, 'ja', '15.4'],
    [15.5, 'ja', '15.5'],
    [94, 'ja', '94'],
    [94.4, 'ja', '94.4'],
    [94.5, 'ja', '94.5'],
    [100, 'ja', '100'],
    [115, 'ja', '115'],
    [115.4, 'ja', '115.4'],
    [115.5, 'ja', '115.5'],
    [115.52, 'ja', '115.52'],
    [115.523, 'ja', '115.52'],
    [115.525, 'ja', '115.52'],
    // 'ru' (Russian)
    [0.34, 'ru', '0,34'],
    [5.0, 'ru', '5'],
    [5.5, 'ru', '5,5'],
    [15, 'ru', '15'],
    [15.4, 'ru', '15,4'],
    [15.5, 'ru', '15,5'],
    [94, 'ru', '94'],
    [94.4, 'ru', '94,4'],
    [94.5, 'ru', '94,5'],
    [100, 'ru', '100'],
    [115, 'ru', '115'],
    [115.4, 'ru', '115,4'],
    [115.5, 'ru', '115,5'],
    [115.52, 'ru', '115,52'],
    [115.523, 'ru', '115,52'],
    [115.525, 'ru', '115,52'],
  ])(
    'given value=%p, navigator.language=%p - should return expected output',
    (value, mockedNavigatorLanguage, expected) => {
      // Call the formatter function
      const retValue = priceFormatter(value as number, {
        locale: mockedNavigatorLanguage,
        precision: 2,
      });

      // Assert the result
      expect(retValue).toEqual(expected);
    },
  );
});
