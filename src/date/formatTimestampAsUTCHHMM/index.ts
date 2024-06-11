/**
 * Formats a timestamp as a UTC time string in the format HH:MM.
 *
 * @param {number} timestamp - The POSIX timestamp to format.
 * @returns {string} The formatted UTC time string.
 */
export const formatTimestampAsUTCHHMM = (timestamp: number): string => {
  const jsDate = new Date(timestamp || 0);
  return jsDate.toLocaleString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'UTC',
  });
};
