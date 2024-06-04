export function isEmpty<TValue>(
  value?: TValue | null | boolean | number | string | unknown[] | Record<string, unknown>,
): value is TValue {
  if (value === undefined) return true;
  if (value === null) return true;

  if (typeof value === 'string' || Array.isArray(value)) {
    return value.length === 0;
  }

  if (typeof value === 'object') {
    return Object.keys(value).length === 0;
  }

  return false;
}
