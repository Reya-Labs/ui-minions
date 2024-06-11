export const lowerCase = (text: string): Lowercase<string> =>
  !text ? ('' as Lowercase<string>) : (text.toLowerCase() as Lowercase<string>);
