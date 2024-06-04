import { compactFormatToParts, stringToBigFloat, toUSFormat } from '.';

describe('number', () => {
  describe('toUSFormat', () => {
    test.each([
      ['1,00', 'en-US', '1,00'],
      ['100', 'en-US', '100'],
      ['100,23', 'en-US', '100,23'],
      ['-1,00', 'en-US', '-1,00'],
      ['-100', 'en-US', '-100'],
      ['-100,23', 'en-US', '-100,23'],
      ['1,234,567,890,123.43', 'en-US', '1,234,567,890,123.43'],
      ['1,00', 'en-DE', '1.00'],
      ['100', 'en-DE', '100'],
      ['100,23', 'en-DE', '100.23'],
      ['-1,00', 'en-DE', '-1.00'],
      ['-100', 'en-DE', '-100'],
      ['-100,23', 'en-DE', '-100.23'],
      ['1.234.567.890.123,43', 'en-DE', '1,234,567,890,123.43'],
      ['10 339,23', 'ru', '10,339.23'],
      ['1 234 567 890 123.43', 'ru', '1,234,567,890,123.43'],
    ])(
      'given value=%p, navigator.language=%p - toUSFormat should return expected output',
      (value, mockedNavigatorLanguage, expected) => {
        const retValue = toUSFormat(value, mockedNavigatorLanguage);
        expect(retValue).toEqual(expected);
      },
    );
  });

  describe('stringToBigFloat', () => {
    test.each([
      ['1,00', 'en-US', 100],
      ['100', 'en-US', 100],
      ['1,2345', 'en-US', 12345],
      ['1.0', 'en-US', 1],
      ['1,234,567,890,123.43', 'en-US', 1234567890123.43],
      ['-1.0', 'en-US', -1],
      ['1.2', 'en-US', 1.2],
      ['-1.2', 'en-US', -1.2],
      ['1,123.0', 'en-US', 1123],
      ['-1,123.0', 'en-US', -1123],
      ['1,123.5', 'en-US', 1123.5],
      ['-1,123.5', 'en-US', -1123.5],
      ['1,0', 'en-DE', 1],
      ['-1,0', 'en-DE', -1],
      ['1,2', 'en-DE', 1.2],
      ['-1,2', 'en-DE', -1.2],
      ['1.123,0', 'en-DE', 1123],
      ['-1.123,0', 'en-DE', -1123],
      ['1.123,5', 'en-DE', 1123.5],
      ['-1.123,5', 'en-DE', -1123.5],
      ['1.234.567.890.123,43', 'en-DE', 1234567890123.43],
    ])(
      'given stringValue=%p - stringToBigFloat should return expected output',
      (stringValue, mockedNavigatorLanguage, expected) => {
        const retValue = stringToBigFloat(stringValue, mockedNavigatorLanguage);
        expect(retValue).toEqual(expected);
      },
    );
  });

  describe('compactFormatToParts', () => {
    let languageGetter: ReturnType<typeof jest.spyOn>;

    beforeEach(() => {
      languageGetter = jest.spyOn(window.navigator, 'language', 'get');
    });

    test.each([
      [1000, 'en-US', '1', 'K'],
      [1000000, 'en-US', '1', 'M'],
      [1000000000, 'en-US', '1', 'B'],
      [-1000, 'en-US', '-1', 'K'],
      [-1000000, 'en-US', '-1', 'M'],
      [-1000000000, 'en-US', '-1', 'B'],
      [-1000000000000, 'en-US', '-1', 'T'],
      [-1000000000000000, 'en-US', '-1000', 'T'],
      // eslint-disable-next-line @typescript-eslint/no-loss-of-precision
      [123456789123456789123, 'en-US', '1.23', 'E20'],
      [1.0, 'en-US', '1', ''],
      [123, 'en-US', '123', ''],
      [1233, 'en-US', '1.23', 'K'],
      [1233222, 'en-US', '1.23', 'M'],
      [1233222111, 'en-US', '1.23', 'B'],
      [-1.0, 'en-US', '-1', ''],
      [-123, 'en-US', '-123', ''],
      [-1233, 'en-US', '-1.23', 'K'],
      [-1233222, 'en-US', '-1.23', 'M'],
      [-1233222111, 'en-US', '-1.23', 'B'],
      [1000, 'en-DE', '1', 'K'],
      [1000000, 'en-DE', '1', 'M'],
      [1000000000, 'en-DE', '1', 'B'],
      [-1000, 'en-DE', '-1', 'K'],
      [-1000000, 'en-DE', '-1', 'M'],
      [-1000000000, 'en-DE', '-1', 'B'],
      [1.0, 'en-DE', '1', ''],
      [123, 'en-DE', '123', ''],
      [1233, 'en-DE', '1,23', 'K'],
      [1233222, 'en-DE', '1,23', 'M'],
      [1233222111, 'en-DE', '1,23', 'B'],
      [-1.0, 'en-DE', '-1', ''],
      [-123, 'en-DE', '-123', ''],
      [-1233, 'en-DE', '-1,23', 'K'],
      [-1233222, 'en-DE', '-1,23', 'M'],
      [-1233222111, 'en-DE', '-1,23', 'B'],
      [1000, 'ja', '1', 'K'],
      [1000000, 'ja', '1', 'M'],
      [1000000000, 'ja', '1', 'B'],
      [-1000, 'ja', '-1', 'K'],
      [-1000000, 'ja', '-1', 'M'],
      [-1000000000, 'ja', '-1', 'B'],
      [1.0, 'ja', '1', ''],
      [123, 'ja', '123', ''],
      [1233, 'ja', '1.23', 'K'],
      [1233222, 'ja', '1.23', 'M'],
      [1233222111, 'ja', '1.23', 'B'],
      [-1.0, 'ja', '-1', ''],
      [-123, 'ja', '-123', ''],
      [-1233, 'ja', '-1.23', 'K'],
      [-1233222, 'ja', '-1.23', 'M'],
      [-1233222111, 'ja', '-1.23', 'B'],
      [1000, 'ru', '1', 'K'],
      [1000000, 'ru', '1', 'M'],
      [1000000000, 'ru', '1', 'B'],
      [-1000, 'ru', '-1', 'K'],
      [-1000000, 'ru', '-1', 'M'],
      [-1000000000, 'ru', '-1', 'B'],
      [1.0, 'ru', '1', ''],
      [123, 'ru', '123', ''],
      [1233, 'ru', '1,23', 'K'],
      [1233222, 'ru', '1,23', 'M'],
      [1233222111, 'ru', '1,23', 'B'],
      [-1.0, 'ru', '-1', ''],
      [-123, 'ru', '-123', ''],
      [-1233, 'ru', '-1,23', 'K'],
      [-1233222, 'ru', '-1,23', 'M'],
      [-1233222111, 'ru', '-1,23', 'B'],
    ])(
      'given value=%p, navigator.language=%p - compactFormat should return expected output',
      (value, mockedNavigatorLanguage, expectedValue, expectedSuffix) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
        languageGetter.mockReturnValue(mockedNavigatorLanguage);
        const retValue = compactFormatToParts(value);
        expect(retValue.value).toEqual(expectedValue);
        expect(retValue.suffix).toEqual(expectedSuffix);
      },
    );
  });
});
