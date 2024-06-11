/**
 * Formats a POSIX timestamp as a human-readable "time ago" string.
 *
 * @param {number} timestamp - The POSIX timestamp to format.
 * @returns {string} The formatted "time ago" string.
 */
export function formatTimeAgo(timestamp: number): string {
  const now = Date.now();
  const difference = now - timestamp;

  const minutes = Math.floor(difference / (60 * 1000));
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30); // Average number of days in a month
  const years = Math.floor(months / 12);

  if (years >= 2) {
    return `${years} Years ago`;
  } else if (years === 1) {
    return `1 Year ago`;
  } else if (months >= 2) {
    return `${months} Months ago`;
  } else if (months === 1) {
    return `1 Month ago`;
  } else if (days >= 2) {
    return `${days} Days ago`;
  } else if (days === 1) {
    return `1 Day ago`;
  } else if (hours >= 2) {
    return `${hours} Hours ago`;
  } else if (hours === 1) {
    return `1 Hour ago`;
  } else if (minutes > 1) {
    return `${minutes} Minutes ago`;
  } else if (minutes === 1) {
    return `A Minute ago`;
  } else {
    return 'Few seconds ago';
  }
}
