/**
 * Determines the countdown time in seconds between two dates.
 *
 * @param {Date} startDate - The start date.
 * @param {Date} endDate - The end date.
 * @returns {number} The countdown time in seconds.
 */
export function determineCountdownTimeInSeconds(startDate: Date, endDate: Date) {
  if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
    return 0;
  }

  const difference = endDate.getTime() - startDate.getTime();
  return Math.floor(difference / 1000);
}
