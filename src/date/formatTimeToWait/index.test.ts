import { formatTimeToWait } from '.';

describe('formatTimeToWait', () => {
  it("should return 'Few seconds' for a timestamp within the last minute", () => {
    const timestamp = 30000; // 30 seconds
    expect(formatTimeToWait(timestamp)).toBe('Few seconds');
  });

  it("should return 'A Minute' for a timestamp within the last minute", () => {
    const timestamp = 60000; // 60 seconds
    expect(formatTimeToWait(timestamp)).toBe('A Minute');
  });

  it("should return '2 Minutes' for a timestamp within the last minute", () => {
    const timestamp = 125000; // 125 seconds
    expect(formatTimeToWait(timestamp)).toBe('2 Minutes');
  });

  it("should return '1 Hour' for a timestamp 1 hour", () => {
    const timestamp = 3600000; // 1 hour
    expect(formatTimeToWait(timestamp)).toBe('1 Hour');
  });

  it("should return '2 Hours' for a timestamp 2 hours", () => {
    const timestamp = 7200000; // 2 hours
    expect(formatTimeToWait(timestamp)).toBe('2 Hours');
  });

  it("should return '1 Day' for a timestamp 1 day", () => {
    const timestamp = 86400000; // 1 day
    expect(formatTimeToWait(timestamp)).toBe('1 Day');
  });

  it("should return '2 Days' for a timestamp 2 days", () => {
    const timestamp = 172800000; // 2 days
    expect(formatTimeToWait(timestamp)).toBe('2 Days');
  });

  it("should return '1 Month' for a timestamp 1 month", () => {
    const timestamp = 2628000000; // 1 month
    expect(formatTimeToWait(timestamp)).toBe('1 Month');
  });

  it("should return '2 Months' for a timestamp 2 months", () => {
    const timestamp = 5256000000; // 2 months
    expect(formatTimeToWait(timestamp)).toBe('2 Months');
  });

  it("should return '1 Year' for a timestamp 1 year", () => {
    const timestamp = 31536000000; // 1 year
    expect(formatTimeToWait(timestamp)).toBe('1 Year');
  });

  it("should return '2 Years' for a timestamp 2 years", () => {
    const timestamp = 63072000000; // 2 years
    expect(formatTimeToWait(timestamp)).toBe('2 Years');
  });
});
