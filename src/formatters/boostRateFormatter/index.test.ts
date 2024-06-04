import { boostRateFormatter } from '.';

describe('boostRateFormatter', () => {
  it('formats whole numbers with one decimal place', () => {
    expect(boostRateFormatter(10)).toEqual('10');
  });

  it('maintains existing decimal places without rounding', () => {
    expect(boostRateFormatter(9.1)).toEqual('9.1');
    expect(boostRateFormatter(10.46)).toEqual('10.46');
  });

  it('displays small decimals without rounding', () => {
    expect(boostRateFormatter(10.04)).toEqual('10.04');
  });
});
