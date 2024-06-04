import { unreadNotificationsFormatter } from '.';

describe('unreadNotificationsFormatter', () => {
  test.each([
    // en-GB
    [undefined, 'en-GB', '---'],
    [null, 'en-GB', '---'],
    ['notANumber', 'en-GB', '---'],
    [NaN, 'en-GB', '---'],
    [0, 'en-GB', '0'],
    [5, 'en-GB', '5'],
    [15, 'en-GB', '15'],
    [94, 'en-GB', '94'],
    [115, 'en-GB', '99+'],
    // 'ja' (Japanese)
    [0, 'ja', '0'],
    [5, 'ja', '5'],
    [15, 'ja', '15'],
    [94, 'ja', '94'],
    [115, 'ja', '99+'],
    // 'ru' (Russian)
    [0, 'ru', '0'],
    [5, 'ru', '5'],
    [15, 'ru', '15'],
    [94, 'ru', '94'],
    [115, 'ru', '99+'],
  ])(
    'given value=%p, navigator.language=%p - should return expected output',
    (value, mockedNavigatorLanguage, expected) => {
      // Call the formatter function
      const retValue = unreadNotificationsFormatter(value as number, {
        locale: mockedNavigatorLanguage,
      });

      // Assert the result
      expect(retValue).toEqual(expected);
    },
  );
});
