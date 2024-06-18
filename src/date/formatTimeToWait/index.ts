/**
 * Formats a POSIX timestamp as a human-readable "time to wait" string.
 *
 * @param {number} timestamp - The POSIX timestamp to format.
 * @returns {string} The formatted "time ago" string.
 */
export function formatTimeToWait(timeMiliseconds: number): string {
  const now = Date.now();

  const minutes = Math.floor(timeMiliseconds / (60 * 1000));
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30); // Average number of days in a month
  const years = Math.floor(months / 12);

  if (years >= 2) {
    return `${years} Years`;
  } else if (years === 1) {
    return `1 Year`;
  } else if (months >= 2) {
    return `${months} Months`;
  } else if (months === 1) {
    return `1 Month`;
  } else if (days >= 2) {
    return `${days} Days`;
  } else if (days === 1) {
    return `1 Day`;
  } else if (hours >= 2) {
    return `${hours} Hours`;
  } else if (hours === 1) {
    return `1 Hour`;
  } else if (minutes > 1) {
    return `${minutes} Minutes`;
  } else if (minutes === 1) {
    return `A Minute`;
  } else {
    return 'Few seconds';
  }
}
