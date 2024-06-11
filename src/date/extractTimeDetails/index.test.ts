import { extractTimeDetails } from '.';

describe('extractTimeDetails', () => {
  it('should correctly extract time details for a given duration in seconds', () => {
    const time = 90061; // 1 day, 1 hour, 1 minute, 1 second
    const result = extractTimeDetails(time);
    expect(result).toEqual({
      days: 1,
      hours: 1,
      minutes: 1,
      seconds: 1,
    });
  });

  it('should correctly extract time details for zero duration', () => {
    const time = 0;
    const result = extractTimeDetails(time);
    expect(result).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it('should correctly extract time details for less than a minute', () => {
    const time = 45; // 45 seconds
    const result = extractTimeDetails(time);
    expect(result).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 45,
    });
  });

  it('should correctly extract time details for less than an hour', () => {
    const time = 3599; // 59 minutes, 59 seconds
    const result = extractTimeDetails(time);
    expect(result).toEqual({
      days: 0,
      hours: 0,
      minutes: 59,
      seconds: 59,
    });
  });

  it('should correctly extract time details for less than a day', () => {
    const time = 86399; // 23 hours, 59 minutes, 59 seconds
    const result = extractTimeDetails(time);
    expect(result).toEqual({
      days: 0,
      hours: 23,
      minutes: 59,
      seconds: 59,
    });
  });

  it('should correctly extract time details for multiple days', () => {
    const time = 172800; // 2 days
    const result = extractTimeDetails(time);
    expect(result).toEqual({
      days: 2,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });
});
