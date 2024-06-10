export type MapPercentageToRangeParams = {
  max: number;
  min: number;
  percentage: number;
};

export function mapPercentageToRange({ percentage, min, max }: MapPercentageToRangeParams): number {
  return min + (max - min) * (percentage / 100);
}
