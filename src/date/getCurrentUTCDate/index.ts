/**
 * Gets the current date and time in UTC.
 *
 * @returns {Date} The current UTC date and time.
 */
export const getCurrentUTCDate = () => {
  return new Date(new Date().toUTCString());
};
