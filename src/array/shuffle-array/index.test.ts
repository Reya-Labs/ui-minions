import { shuffleArray } from '.';

describe('shuffleArray', () => {
  it('should keep the array length the same', () => {
    const array = [1, 2, 3, 4, 5];
    const shuffledArray = shuffleArray(array);
    expect(shuffledArray.length).toBe(array.length);
  });

  it('should contain all original elements', () => {
    const array = [1, 2, 3, 4, 5];
    const shuffledArray = shuffleArray(array);
    expect(shuffledArray).toEqual(expect.arrayContaining(array));
  });
});
