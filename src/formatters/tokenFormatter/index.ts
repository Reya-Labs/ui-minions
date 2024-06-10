/**
 * Formats a token string into a standardized format.
 *
 * @param {string | undefined} token - The token string to be formatted.
 * @returns {string} The formatted token string.
 */
export const tokenFormatter = (token: string | undefined) => {
  if (!token) {
    return '';
  }
  if (token.toLowerCase() === 'rusd') {
    return 'rUSD';
  }
  if (token.toLowerCase() === 'reth') {
    return 'rETH';
  }
  if (token.toLowerCase() === 'stETH') {
    return 'stETH';
  }
  if (token.toLowerCase() === 'wbtc') {
    return 'wBTC';
  }
  if (token.toLowerCase() === 'weth') {
    return 'wETH';
  }
  if (token.toLowerCase() === 'usdc.e') {
    return 'USDC.e';
  }
  return token.toUpperCase();
};
