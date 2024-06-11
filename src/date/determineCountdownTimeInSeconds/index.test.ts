import { determineCountdownTimeInSeconds } from '.';

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
