import { formatTimestampAsUTCHHMM } from '.';

describe('formatTimestampAsUTCHHMM', () => {
  it('should format a given POSIX timestamp as a UTC time string in the format HH:MM', () => {
    const timestamp = new Date('2023-06-10T12:34:56Z').getTime();
    const formattedTime = formatTimestampAsUTCHHMM(timestamp);
    const expectedTime = new Date(timestamp).toLocaleTimeString(undefined, {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'UTC',
    });

    expect(formattedTime).toBe(expectedTime);
  });

  it('should return "00:00" when the timestamp is 0', () => {
    const timestamp = 0;
    const formattedTime = formatTimestampAsUTCHHMM(timestamp);
    const expectedTime = new Date(timestamp).toLocaleTimeString(undefined, {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'UTC',
    });

    expect(formattedTime).toBe(expectedTime);
  });

  it('should correctly format a timestamp representing noon UTC', () => {
    const timestamp = new Date('2023-06-10T12:00:00Z').getTime();
    const formattedTime = formatTimestampAsUTCHHMM(timestamp);
    const expectedTime = new Date(timestamp).toLocaleTimeString(undefined, {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'UTC',
    });

    expect(formattedTime).toBe(expectedTime);
  });

  it('should correctly format a timestamp representing midnight UTC', () => {
    const timestamp = new Date('2023-06-10T00:00:00Z').getTime();
    const formattedTime = formatTimestampAsUTCHHMM(timestamp);
    const expectedTime = new Date(timestamp).toLocaleTimeString(undefined, {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'UTC',
    });

    expect(formattedTime).toBe(expectedTime);
  });

  it('should correctly format a timestamp representing a random time', () => {
    const timestamp = new Date('2023-06-10T15:45:30Z').getTime();
    const formattedTime = formatTimestampAsUTCHHMM(timestamp);
    const expectedTime = new Date(timestamp).toLocaleTimeString(undefined, {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'UTC',
    });

    expect(formattedTime).toBe(expectedTime);
  });
});
