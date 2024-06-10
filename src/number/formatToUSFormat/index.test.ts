import { toUSFormat } from '.';

describe('toUSFormat', () => {
  it('should convert a string with a comma as a decimal separator to a string with a dot', () => {
    const result = toUSFormat('12345,67', 'de-DE'); // German locale uses comma as decimal separator
    expect(result).toBe('12345.67');
  });

  it('should convert a string with a dot as a decimal separator to a string with a dot', () => {
    const result = toUSFormat('12345.67', 'en-US'); // US locale uses dot as decimal separator
    expect(result).toBe('12345.67');
  });

  it('should handle a string with thousand separators', () => {
    const result = toUSFormat('12.345,67', 'de-DE'); // German locale
    expect(result).toBe('12,345.67');
  });

  it('should handle a string without any decimal separator', () => {
    const result = toUSFormat('12345', 'de-DE'); // German locale
    expect(result).toBe('12345');
  });

  it('should return an empty string when given an empty string', () => {
    const result = toUSFormat('', 'en-US');
    expect(result).toBe('');
  });

  it('should handle locale with different thousand separator', () => {
    const result = toUSFormat('12,345.67', 'en-IN'); // Indian locale uses comma as thousand separator and dot as decimal
    expect(result).toBe('12,345.67');
  });

  it('should handle large numbers correctly', () => {
    const result = toUSFormat('1.234.567,89', 'de-DE'); // German locale
    expect(result).toBe('1,234,567.89');
  });
});
