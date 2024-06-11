import { CompactFormatParts, compactFormatToParts } from '.';

describe('compactFormatToParts', () => {
  it('should correctly format a small number without a compact suffix', () => {
    const result: CompactFormatParts = compactFormatToParts(123);
    expect(result).toEqual({
      suffix: '',
      value: '123',
    });
  });

  it('should correctly format a number in the thousands with a compact suffix', () => {
    const result: CompactFormatParts = compactFormatToParts(12345);
    expect(result).toEqual({
      suffix: 'K',
      value: '12.35',
    });
  });

  it('should correctly format a number in the millions with a compact suffix', () => {
    const result: CompactFormatParts = compactFormatToParts(1234567);
    expect(result).toEqual({
      suffix: 'M',
      value: '1.23',
    });
  });

  it('should correctly format a number in the billions with a compact suffix', () => {
    const result: CompactFormatParts = compactFormatToParts(1234567890);
    expect(result).toEqual({
      suffix: 'B',
      value: '1.23',
    });
  });

  it('should correctly format a number in the trillions with a compact suffix', () => {
    const result: CompactFormatParts = compactFormatToParts(1234567890123);
    expect(result).toEqual({
      suffix: 'T',
      value: '1.23',
    });
  });

  it('should handle different fraction digit limits', () => {
    const result: CompactFormatParts = compactFormatToParts(12345, 1, 1, 'en-US');
    expect(result).toEqual({
      suffix: 'K',
      value: '12.3',
    });
  });

  it('should handle a number less than 1000 without a compact suffix', () => {
    const result: CompactFormatParts = compactFormatToParts(999);
    expect(result).toEqual({
      suffix: '',
      value: '999',
    });
  });
});
