import { boostRateFormatter } from '.';

describe('boostRateFormatter', () => {
  test.each([
    // en-GB
    [undefined, 'en-GB', '---'],
    [null, 'en-GB', '---'],
    ['notANumber', 'en-GB', '---'],
    [NaN, 'en-GB', '---'],
    [10, 'en-GB', '10'],
    [10.46, 'en-GB', '10.46'],
    [10.04, 'en-GB', '10.04'],
    // 'ja' (Japanese)
    [undefined, 'ja', '---'],
    [null, 'ja', '---'],
    ['notANumber', 'ja', '---'],
    [NaN, 'ja', '---'],
    [10, 'ja', '10'],
    [10.46, 'ja', '10.46'],
    [10.04, 'ja', '10.04'],
    // 'ru' (Russian)
    [undefined, 'ru', '---'],
    [null, 'ru', '---'],
    ['notANumber', 'ru', '---'],
    [NaN, 'ru', '---'],
    [10, 'ru', '10'],
    [10.46, 'ru', '10,46'],
    [10.04, 'ru', '10,04'],
  ])(
    'given value=%p, navigator.language=%p - should return expected output',
    (value, mockedNavigatorLanguage, expected) => {
      // Call the formatter function
      const retValue = boostRateFormatter(value as number, {
        locale: mockedNavigatorLanguage,
      });

      // Assert the result
      expect(retValue).toEqual(expected);
    },
  );
});
