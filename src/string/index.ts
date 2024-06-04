/**
 * Capitalizes a string
 * @param {string} text - string
 * @returns The capitalized version of text
 */
export const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

export const lowerCase = (text: string): Lowercase<string> =>
  !text ? ('' as Lowercase<string>) : (text.toLowerCase() as Lowercase<string>);
