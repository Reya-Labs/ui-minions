import { notEmpty } from '.';

describe('notEmpty', () => {
  it('should return false for null', () => {
    const value = null;
    expect(notEmpty(value)).toBe(false);
  });

  it('should return false for undefined', () => {
    const value = undefined;
    expect(notEmpty(value)).toBe(false);
  });

  it('should return true for a non-empty string', () => {
    const value = 'Hello';
    expect(notEmpty(value)).toBe(true);
  });

  it('should return true for an empty string', () => {
    const value = '';
    expect(notEmpty(value)).toBe(true);
  });

  it('should return true for a number', () => {
    const value = 123;
    expect(notEmpty(value)).toBe(true);
  });

  it('should return true for zero', () => {
    const value = 0;
    expect(notEmpty(value)).toBe(true);
  });

  it('should return true for an object', () => {
    const value = { key: 'value' };
    expect(notEmpty(value)).toBe(true);
  });

  it('should return true for an empty object', () => {
    const value = {};
    expect(notEmpty(value)).toBe(true);
  });

  it('should return true for an array', () => {
    const value = [1, 2, 3];
    expect(notEmpty(value)).toBe(true);
  });

  it('should return true for an empty array', () => {
    const value: string[] = [];
    expect(notEmpty(value)).toBe(true);
  });

  it('should return true for a boolean true', () => {
    const value = true;
    expect(notEmpty(value)).toBe(true);
  });

  it('should return true for a boolean false', () => {
    const value = false;
    expect(notEmpty(value)).toBe(true);
  });
});
