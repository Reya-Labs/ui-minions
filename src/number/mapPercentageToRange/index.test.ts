import { mapPercentageToRange, MapPercentageToRangeParams } from '.';

describe('mapPercentageToRange', () => {
  it('should map 0% to the minimum value of the range', () => {
    const params: MapPercentageToRangeParams = { max: 20, min: 10, percentage: 0 };
    const result = mapPercentageToRange(params);
    expect(result).toBe(10);
  });

  it('should map 100% to the maximum value of the range', () => {
    const params: MapPercentageToRangeParams = { max: 20, min: 10, percentage: 100 };
    const result = mapPercentageToRange(params);
    expect(result).toBe(20);
  });

  it('should map 50% to the midpoint of the range', () => {
    const params: MapPercentageToRangeParams = { max: 20, min: 10, percentage: 50 };
    const result = mapPercentageToRange(params);
    expect(result).toBe(15);
  });

  it('should map 25% to a quarter way in the range', () => {
    const params: MapPercentageToRangeParams = { max: 20, min: 10, percentage: 25 };
    const result = mapPercentageToRange(params);
    expect(result).toBe(12.5);
  });

  it('should map 75% to three quarters way in the range', () => {
    const params: MapPercentageToRangeParams = { max: 20, min: 10, percentage: 75 };
    const result = mapPercentageToRange(params);
    expect(result).toBe(17.5);
  });

  it('should handle negative ranges correctly', () => {
    const params: MapPercentageToRangeParams = { max: 10, min: -10, percentage: 50 };
    const result = mapPercentageToRange(params);
    expect(result).toBe(0);
  });

  it('should handle negative percentages correctly', () => {
    const params: MapPercentageToRangeParams = { max: 20, min: 10, percentage: -50 };
    const result = mapPercentageToRange(params);
    expect(result).toBe(5);
  });

  it('should handle percentages greater than 100 correctly', () => {
    const params: MapPercentageToRangeParams = { max: 20, min: 10, percentage: 150 };
    const result = mapPercentageToRange(params);
    expect(result).toBe(25);
  });

  it('should handle percentages equal to 0 correctly', () => {
    const params: MapPercentageToRangeParams = { max: 100, min: 0, percentage: 0 };
    const result = mapPercentageToRange(params);
    expect(result).toBe(0);
  });

  it('should handle percentages equal to 100 correctly', () => {
    const params: MapPercentageToRangeParams = { max: 100, min: 0, percentage: 100 };
    const result = mapPercentageToRange(params);
    expect(result).toBe(100);
  });
});
