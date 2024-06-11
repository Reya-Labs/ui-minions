import { remainingTimeFormatter, RemainingTimeParts } from '.';

describe('remainingTimeFormatter', () => {
  it('should return "--" and 0 remaining for negative milliseconds', () => {
    const result: RemainingTimeParts = remainingTimeFormatter(-1000);
    expect(result).toEqual({
      remaining: 0,
      remainingFormatted: '--',
      suffix: '',
    });
  });

  it('should format durations less than 60 seconds correctly', () => {
    const result: RemainingTimeParts = remainingTimeFormatter(45000); // 45 seconds
    expect(result).toEqual({
      remaining: 45,
      remainingFormatted: '< 1',
      suffix: 'Minute',
    });
  });

  it('should format durations in minutes correctly', () => {
    const result: RemainingTimeParts = remainingTimeFormatter(120000); // 2 minutes
    expect(result).toEqual({
      remaining: 2,
      remainingFormatted: '2',
      suffix: 'Minutes',
    });
  });

  it('should format durations in hours correctly', () => {
    const result: RemainingTimeParts = remainingTimeFormatter(7200000); // 2 hours
    expect(result).toEqual({
      remaining: 2,
      remainingFormatted: '2',
      suffix: 'Hours',
    });
  });

  it('should format durations in days correctly', () => {
    const result: RemainingTimeParts = remainingTimeFormatter(172800000); // 2 days
    expect(result).toEqual({
      remaining: 2,
      remainingFormatted: '2',
      suffix: 'Days',
    });
  });

  it('should format 1 minute correctly', () => {
    const result: RemainingTimeParts = remainingTimeFormatter(60000); // 1 minute
    expect(result).toEqual({
      remaining: 1,
      remainingFormatted: '1',
      suffix: 'Minute',
    });
  });

  it('should format 1 hour correctly', () => {
    const result: RemainingTimeParts = remainingTimeFormatter(3600000); // 1 hour
    expect(result).toEqual({
      remaining: 1,
      remainingFormatted: '1',
      suffix: 'Hour',
    });
  });

  it('should format 1 day correctly', () => {
    const result: RemainingTimeParts = remainingTimeFormatter(86400000); // 1 day
    expect(result).toEqual({
      remaining: 1,
      remainingFormatted: '1',
      suffix: 'Day',
    });
  });
});
