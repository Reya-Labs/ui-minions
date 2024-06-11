/**
 * Formats a timestamp as a short UTC date-time string.
 *
 * @param {number} milliseconds - The timestamp in milliseconds.
 * @returns {string} The formatted UTC date-time string.
 */
export const formatToUTCShortDateTime = (milliseconds: number): string => {
  if (isNaN(milliseconds) || !isFinite(milliseconds)) {
    return '---';
  }

  const date = new Date(milliseconds);

  if (isNaN(date.getTime())) {
    return '---';
  }

  return date.toLocaleString(undefined, {
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    month: '2-digit',
    timeZone: 'UTC',
    year: '2-digit',
  });
};
