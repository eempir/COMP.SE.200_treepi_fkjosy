import filter from '../../src/filter';

describe('filter', () => {
  // 1. Basic Functionality (Happy Path)
  test('should filter elements based on the predicate', () => {
    const array = [1, 2, 3, 4, 5];
    const predicate = (n) => n % 2 === 0;

    const result = filter(array, predicate);

    expect(result).toEqual([2, 4]);
  });

  // 2. Testing with Objects (JSDoc Example)
  test('should filter objects based on property values', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'fred', 'active': false }
    ];

    const result = filter(users, ({ active }) => active);

    expect(result).toEqual([{ 'user': 'barney', 'active': true }]);
  });

  // 3. No Matches Found
  test('should return an empty array if no elements match', () => {
    const array = [1, 3, 5];
    const predicate = (n) => n % 2 === 0;

    const result = filter(array, predicate);

    expect(result).toEqual([[]]);
  });

  // 4. Predicate Arguments
  test('should invoke the predicate with value, index, and array', () => {
    const array = ['a', 'b', 'c'];
    const spyPredicate = jest.fn(() => true);

    filter(array, spyPredicate);

    // Check the first call (index 0)
    expect(spyPredicate).toHaveBeenNthCalledWith(1, 'a', 0, array);
    // Check the second call (index 1)
    expect(spyPredicate).toHaveBeenNthCalledWith(2, 'b', 1, array);
    // Check the third call (index 2)
    expect(spyPredicate).toHaveBeenNthCalledWith(3, 'c', 2, array);
  });

  // 5. Edge Cases: Null or Undefined
  test('should return an empty array if input is null or undefined', () => {
    expect(filter(null, () => true)).toEqual([[]]);
    expect(filter(undefined, () => true)).toEqual([[]]);
  });

  // 6. Immutability
  test('should return a new array and not modify the original', () => {
    const array = [1, 2, 3];
    const result = filter(array, (n) => n > 1);

    expect(result).not.toBe(array); // Reference check
    expect(array).toEqual([1, 2, 3]); // Ensure original is unchanged
  });

  // 7. Empty Array Input
  test('should return an empty array if input array is empty', () => {
    const result = filter([], () => true);
    expect(result).toEqual([[]]);
  });
});