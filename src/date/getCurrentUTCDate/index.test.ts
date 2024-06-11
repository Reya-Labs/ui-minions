import { getCurrentUTCDate } from '.';

describe('getCurrentUTCDate', () => {
  it('should return a Date object', () => {
    const currentDate = getCurrentUTCDate();
    expect(currentDate).toBeInstanceOf(Date);
  });

  it('should return the current date and time in UTC', () => {
    const currentDate = getCurrentUTCDate();
    const now = new Date();
    const nowUTC = new Date(now.toUTCString());

    // Allowing for slight differences in time due to the execution delay
    expect(currentDate.getUTCFullYear()).toBe(nowUTC.getUTCFullYear());
    expect(currentDate.getUTCMonth()).toBe(nowUTC.getUTCMonth());
    expect(currentDate.getUTCDate()).toBe(nowUTC.getUTCDate());
    expect(currentDate.getUTCHours()).toBe(nowUTC.getUTCHours());
    expect(currentDate.getUTCMinutes()).toBeCloseTo(nowUTC.getUTCMinutes(), 1);
  });
});
