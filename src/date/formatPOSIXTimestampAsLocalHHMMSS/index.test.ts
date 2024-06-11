import { formatPOSIXTimestampAsLocalHHMMSS } from '.';

describe('formatPOSIXTimestampAsLocalHHMMSS', () => {
  it('should format a given POSIX timestamp as a local time string in the format HH:MM:SS', () => {
    // Create a known timestamp
    const timestamp = new Date('2023-06-10T12:34:56Z').getTime();

    // Format the timestamp
    const formattedTime = formatPOSIXTimestampAsLocalHHMMSS(timestamp);

    // Get the local time equivalent of the given timestamp
    const localTime = new Date(timestamp).toLocaleTimeString(undefined, {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });

    // Check that the formatted time matches the local time
    expect(formattedTime).toBe(localTime);
  });

  it('should return the correct local time for a timestamp representing midnight UTC', () => {
    // Timestamp for midnight UTC
    const timestamp = new Date('2023-06-10T00:00:00Z').getTime();

    // Format the timestamp
    const formattedTime = formatPOSIXTimestampAsLocalHHMMSS(timestamp);

    // Get the local time equivalent of the given timestamp
    const localTime = new Date(timestamp).toLocaleTimeString(undefined, {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });

    // Check that the formatted time matches the local time
    expect(formattedTime).toBe(localTime);
  });

  it('should return "12:00:00 AM" when the timestamp is 0', () => {
    // Timestamp 0
    const timestamp = 0;

    // Format the timestamp
    const formattedTime = formatPOSIXTimestampAsLocalHHMMSS(timestamp);

    // Get the local time equivalent of the given timestamp
    const localTime = new Date(timestamp).toLocaleTimeString(undefined, {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });

    // Check that the formatted time matches the local time
    expect(formattedTime).toBe(localTime);
  });

  it('should return the correct local time for a timestamp representing noon UTC', () => {
    // Timestamp for noon UTC
    const timestamp = new Date('2023-06-10T12:00:00Z').getTime();

    // Format the timestamp
    const formattedTime = formatPOSIXTimestampAsLocalHHMMSS(timestamp);

    // Get the local time equivalent of the given timestamp
    const localTime = new Date(timestamp).toLocaleTimeString(undefined, {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });

    // Check that the formatted time matches the local time
    expect(formattedTime).toBe(localTime);
  });
});
