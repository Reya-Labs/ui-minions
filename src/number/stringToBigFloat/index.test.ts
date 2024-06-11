import { stringToBigFloat } from '.';

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
