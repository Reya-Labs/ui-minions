import { formatTimestampToLocaleDateTimeGmt } from '.';

test('formatTimestampToLocaleDateTimeGmt should format a timestamp correctly', () => {
  const timestamp = Date.UTC(2023, 5, 10, 12, 30); // June 10, 2023, 12:30 GMT
  const formattedDate = formatTimestampToLocaleDateTimeGmt(timestamp);
  expect(formattedDate).toBe('Saturday, 10 June 2023 at 12:30 GMT');
});

test('formatTimestampToLocaleDateTimeGmt should handle a different timestamp correctly', () => {
  const timestamp = Date.UTC(2024, 0, 1, 0, 0); // January 1, 2024, 00:00 GMT
  const formattedDate = formatTimestampToLocaleDateTimeGmt(timestamp);
  expect(formattedDate).toBe('Monday, 1 January 2024 at 00:00 GMT');
});

test('formatTimestampToLocaleDateTimeGmt should handle timestamps in the past correctly', () => {
  const timestamp = Date.UTC(2000, 0, 1, 0, 0); // January 1, 2000, 00:00 GMT
  const formattedDate = formatTimestampToLocaleDateTimeGmt(timestamp);
  expect(formattedDate).toBe('Saturday, 1 January 2000 at 00:00 GMT');
});

test('formatTimestampToLocaleDateTimeGmt should handle leap years correctly', () => {
  const timestamp = Date.UTC(2020, 1, 29, 0, 0); // February 29, 2020, 00:00 GMT
  const formattedDate = formatTimestampToLocaleDateTimeGmt(timestamp);
  expect(formattedDate).toBe('Saturday, 29 February 2020 at 00:00 GMT');
});
