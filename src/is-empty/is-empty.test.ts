import { isEmpty } from '.';

describe('isEmpty', () => {
  it('returns true for an empty string', () => {
    expect(isEmpty('')).toBe(true);
  });

  it('returns false for a non-empty string', () => {
    expect(isEmpty('text')).toBe(false);
  });

  it('returns true for an empty array', () => {
    expect(isEmpty([])).toBe(true);
  });

  it('returns false for a non-empty array', () => {
    expect(isEmpty([1, 2, 3])).toBe(false);
  });

  it('returns true for an empty object', () => {
    expect(isEmpty({})).toBe(true);
  });

  it('returns false for a non-empty object', () => {
    expect(isEmpty({ key: 'value' })).toBe(false);
  });

  it('returns true for null', () => {
    expect(isEmpty(null)).toBe(true);
  });

  it('returns true for undefined', () => {
    expect(isEmpty(undefined)).toBe(true);
  });

  it('returns false for a number', () => {
    expect(isEmpty(0)).toBe(false);
  });

  it('returns false for boolean false', () => {
    expect(isEmpty(false)).toBe(false);
  });
});
