/**
 * Extracts time details (days, hours, minutes, seconds) from a time duration in seconds.
 *
 * @param {number} time - The time duration in seconds.
 * @returns {object} An object containing the extracted time details.
 */
export function extractTimeDetails(time: number) {
  const days = Math.floor(time / (24 * 60 * 60));
  const hours = Math.floor((time % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((time % (60 * 60)) / 60);
  const seconds = Math.floor(time % 60);

  return { days, hours, minutes, seconds };
}
