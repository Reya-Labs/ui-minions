import { determineCountdownTimeInSeconds, formatTimeAgo, formatToUTCShortDateTime } from '.';

describe('utils/date', () => {
  describe('formatTimeAgo', () => {
    it("should return 'Few seconds ago' for a timestamp within the last minute", () => {
      const now = Date.now();
      const timestamp = now - 30000; // 30 seconds ago
      expect(formatTimeAgo(timestamp)).toBe('Few seconds ago');
    });

    it("should return 'A Minute ago' for a timestamp within the last minute", () => {
      const now = Date.now();
      const timestamp = now - 60000; // 60 seconds ago
      expect(formatTimeAgo(timestamp)).toBe('A Minute ago');
    });

    it("should return '2 Minutes ago' for a timestamp within the last minute", () => {
      const now = Date.now();
      const timestamp = now - 125000; // 125 seconds ago
      expect(formatTimeAgo(timestamp)).toBe('2 Minutes ago');
    });

    it("should return '1 Hour ago' for a timestamp 1 hour ago", () => {
      const now = Date.now();
      const timestamp = now - 3600000; // 1 hour ago
      expect(formatTimeAgo(timestamp)).toBe('1 Hour ago');
    });

    it("should return '2 Hours ago' for a timestamp 2 hours ago", () => {
      const now = Date.now();
      const timestamp = now - 7200000; // 2 hours ago
      expect(formatTimeAgo(timestamp)).toBe('2 Hours ago');
    });

    it("should return '1 Day ago' for a timestamp 1 day ago", () => {
      const now = Date.now();
      const timestamp = now - 86400000; // 1 day ago
      expect(formatTimeAgo(timestamp)).toBe('1 Day ago');
    });

    it("should return '2 Days ago' for a timestamp 2 days ago", () => {
      const now = Date.now();
      const timestamp = now - 172800000; // 2 days ago
      expect(formatTimeAgo(timestamp)).toBe('2 Days ago');
    });

    it("should return '1 Month ago' for a timestamp 1 month ago", () => {
      const now = Date.now();
      const timestamp = now - 2628000000; // 1 month ago
      expect(formatTimeAgo(timestamp)).toBe('1 Month ago');
    });

    it("should return '2 Months ago' for a timestamp 2 months ago", () => {
      const now = Date.now();
      const timestamp = now - 5256000000; // 2 months ago
      expect(formatTimeAgo(timestamp)).toBe('2 Months ago');
    });

    it("should return '1 Year ago' for a timestamp 1 year ago", () => {
      const now = Date.now();
      const timestamp = now - 31536000000; // 1 year ago
      expect(formatTimeAgo(timestamp)).toBe('1 Year ago');
    });

    it("should return '2 Years ago' for a timestamp 2 years ago", () => {
      const now = Date.now();
      const timestamp = now - 63072000000; // 2 years ago
      expect(formatTimeAgo(timestamp)).toBe('2 Years ago');
    });
  });

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
});

describe('determineCountdownTimeInSeconds', () => {
  it('returns a positive number when endDate is in the future', () => {
    const startDate = new Date();
    const endDate = new Date(startDate.getTime() + 1000 * 60 * 60);
    const seconds = determineCountdownTimeInSeconds(startDate, endDate);
    expect(seconds).toBeGreaterThan(0);
    expect(seconds).toEqual(3600);
  });

  it('returns zero when startDate and endDate are the same', () => {
    const startDate = new Date();
    const endDate = new Date(startDate.getTime());
    const seconds = determineCountdownTimeInSeconds(startDate, endDate);
    expect(seconds).toEqual(0);
  });

  it('returns a negative number when endDate is in the past', () => {
    const startDate = new Date();
    const endDate = new Date(startDate.getTime() - 1000 * 60 * 60);
    const seconds = determineCountdownTimeInSeconds(startDate, endDate);
    expect(seconds).toBeLessThan(0);
  });

  it('returns null for invalid startDate', () => {
    const startDate = new Date('Invalid date');
    const endDate = new Date();
    const seconds = determineCountdownTimeInSeconds(startDate, endDate);
    expect(seconds).toEqual(0);
  });

  it('returns null for invalid endDate', () => {
    const startDate = new Date();
    const endDate = new Date('invalid date');
    const seconds = determineCountdownTimeInSeconds(startDate, endDate);
    expect(seconds).toEqual(0);
  });

  it('returns null for both dates invalid', () => {
    const startDate = new Date('invalid date');
    const endDate = new Date('invalid date');
    const seconds = determineCountdownTimeInSeconds(startDate, endDate);
    expect(seconds).toEqual(0);
  });
});
