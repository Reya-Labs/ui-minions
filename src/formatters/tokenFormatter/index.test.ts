import { tokenFormatter } from '~/formatters';

describe('tokenFormatter', () => {
  test.each([
    [undefined, ''],
    [null, ''],
    ['', ''],
    ['rusd', 'rUSD'],
    ['reth', 'rETH'],
    ['stETH', 'stETH'],
    ['wbtc', 'wBTC'],
    ['weth', 'wETH'],
    ['usdc.e', 'USDC.e'],
    ['sol', 'SOL'],
  ])('given value=%p - should return expected output %p', (value, expected) => {
    // Call the formatter function
    const retValue = tokenFormatter(value as string);

    // Assert the result
    expect(retValue).toEqual(expected);
  });
});
