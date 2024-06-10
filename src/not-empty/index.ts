/**
 * Checks if a value is not empty. A value is considered not empty if it is neither null nor undefined.
 *
 * @param {TValue | null | undefined} value - The value to check for non-emptiness.
 * @returns {boolean} True if the value is not empty, false otherwise.
 */
export function notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
  return value !== null && value !== undefined;
}
