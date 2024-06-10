export type RemainingTimeParts = {
  remaining: number;
  remainingFormatted: string;
  suffix: 'Day' | 'Hour' | 'Minute' | 'Second' | 'Days' | 'Hours' | 'Minutes' | 'Seconds' | '';
};

/**
 * Formats a duration in milliseconds as a human-readable remaining time string.
 *
 * @param {number} milliseconds - The duration in milliseconds.
 * @returns {RemainingTimeParts} The formatted remaining time parts.
 */
export function remainingTimeFormatter(milliseconds: number): RemainingTimeParts {
  if (milliseconds < 0) {
    return { remaining: 0, remainingFormatted: '--', suffix: '' };
  }

  const seconds = milliseconds / 1000;
  if (seconds < 60) {
    return {
      remaining: Math.floor(seconds),
      remainingFormatted: '< 1',
      suffix: 'Minute',
    };
  }

  const minutes = seconds / 60;
  if (minutes < 60) {
    return {
      remaining: Math.floor(minutes),
      remainingFormatted: Math.floor(minutes).toLocaleString(),
      suffix: minutes === 1 ? 'Minute' : 'Minutes',
    };
  }

  const hours = minutes / 60;
  if (hours < 24) {
    return {
      remaining: Math.floor(hours),
      remainingFormatted: Math.floor(hours).toLocaleString(),
      suffix: hours === 1 ? 'Hour' : 'Hours',
    };
  }

  const days = hours / 24;
  return {
    remaining: Math.floor(days),
    remainingFormatted: Math.floor(days).toLocaleString(),
    suffix: days === 1 ? 'Day' : 'Days',
  };
}
