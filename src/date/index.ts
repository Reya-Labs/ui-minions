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

/**
 * Gets the current date and time in UTC.
 *
 * @returns {Date} The current UTC date and time.
 */
export const getCurrentUTCDate = () => {
  return new Date(new Date().toUTCString());
};

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
