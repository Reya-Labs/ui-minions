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
