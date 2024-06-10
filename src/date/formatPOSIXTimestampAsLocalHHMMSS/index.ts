/**
 * Formats a POSIX timestamp as a local time string in the format HH:MM:SS.
 *
 * @param {number} timestamp - The POSIX timestamp to format.
 * @returns {string} The formatted time string.
 */
export const formatPOSIXTimestampAsLocalHHMMSS = (timestamp: number): string => {
  const jsDate = new Date(timestamp || 0);
  return jsDate.toLocaleString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
};
