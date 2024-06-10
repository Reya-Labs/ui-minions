import { formatToUTCShortDateTime } from '.';

describe('formatToUTCShortDateTime', () => {
  it('should correctly format a known timestamp', () => {
    const timestamp = Date.UTC(2024, 1, 26, 12, 0, 0); // Note: Months are 0-indexed in JavaScript Date
    const formattedDate = formatToUTCShortDateTime(timestamp);

    expect(formattedDate).toContain('26');
    expect(formattedDate).toContain('02');
    expect(formattedDate).toContain('24');
    expect(formattedDate).toContain('12');
    expect(formattedDate).toContain('00');
  });

  it('should handle the turn of the year', () => {
    const timestamp = Date.UTC(2023, 11, 31, 23, 59, 0);
    const formattedDate = formatToUTCShortDateTime(timestamp);

    expect(formattedDate).toContain('31');
    expect(formattedDate).toContain('12');
    expect(formattedDate).toContain('23');
    expect(formattedDate).toContain('23');
    expect(formattedDate).toContain('59');
  });

  it('should handle leap years', () => {
    const timestamp = Date.UTC(2024, 1, 29, 0, 0, 0);
    const formattedDate = formatToUTCShortDateTime(timestamp);

    expect(formattedDate).toContain('29');
    expect(formattedDate).toContain('02');
    expect(formattedDate).toContain('24');
    expect(formattedDate).toContain('00');
    expect(formattedDate).toContain('00');
  });

  it('should return "---" for invalid input', () => {
    const invalidInputs = [NaN, Infinity, -Infinity];

    invalidInputs.forEach((input) => {
      const formattedDate = formatToUTCShortDateTime(input);
      expect(formattedDate).toBe('---');
    });
  });
});
