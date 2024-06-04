import { xpFormatter } from '.';

describe('xpFormatter', () => {
  test.each([
    // en-GB
    [undefined, 'en-GB', '---'],
    [null, 'en-GB', '---'],
    ['notANumber', 'en-GB', '---'],
    [NaN, 'en-GB', '---'],
    [0, 'en-GB', '0'],
    [1234.56, 'en-GB', '1,235'],
    [123456789012345, 'en-GB', '123,456,789,012,345'],
    // 'ja' (Japanese)
    [1234.56, 'ja', '1,235'],
    [123456789012345, 'ja', '123,456,789,012,345'],
    // 'ru' (Russian)
    [1234.56, 'ru', '1 235'],
    [123456789012345, 'ru', '123 456 789 012 345'],
  ])(
    'given value=%p, navigator.language=%p - should return expected output',
    (value, mockedNavigatorLanguage, expected) => {
      // Call the formatter function
      const retValue = xpFormatter(value as number, { locale: mockedNavigatorLanguage });

      // Assert the result
      expect(retValue).toEqual(expected);
    },
  );
});
