import { extractError } from '.';

describe('extractError', () => {
  it('should return the input string when the input is a string', () => {
    const input = 'This is an error message';
    const result = extractError(input);
    expect(result).toEqual(input);
  });

  it('should return the proper message when input is SignatureExpired', () => {
    const input = new Error('SignatureExpired');
    const result = extractError(input);
    expect(result).toEqual('Signature expired! Please adjust the time in your device.');
  });

  it('should return the error message when the input is an Error object', () => {
    const input = new Error('This is an error message');
    const result = extractError(input);
    expect(result).toEqual(input.message);
  });

  it('should return the error message when the input is an object that satisfies the isError type guard', () => {
    const input = { message: 'This is an error message', stack: 'stack trace' };
    const result = extractError(input);
    expect(result).toEqual(input.message);
  });

  it('should return an empty string when the input is not a string, Error object, or object that satisfies the isError type guard', () => {
    const input = 123;
    const result = extractError(input);
    expect(result).toEqual('');
  });

  it('should return the error message when the input is an Error object containing user rejected action', () => {
    const input = new Error('user rejected action 0x12344');
    const result = extractError(input);
    expect(result).toEqual('Action rejected by User');
  });
});
