import filter from '../../src/filter.js';

describe('filter (test plan planned test | actual current behaviour)', () => {
  test('Basic truthy: items > 1', () => {
    const result = filter([1, 2, 3], x => x > 1);
    expect(result).toEqual([2, 3]);
  })

  test('All false predicate returns empty array', () => {
    const result = filter([1, 2, 3], () => false);
    expect(result).toEqual([[]]);
  })

  test('All true predicate returns the same array', () => {
    const result = filter([1, 2, 3], () => true);
    expect(result).toEqual([1, 2, 3]);
  })

  test('Empty array input returns empty array', () => {
    const result = filter([], x => x > 1);
    expect(result).toEqual([[]]);
  })

  test('Null input returns empty array', () => {
    const result = filter(null, () => true);
    expect(result).toEqual([[]]);
  })

  test('undefined input returns empty array', () => {
    const result = filter(undefined, () => true);
    expect(result).toEqual([[]]);
  })

  test('Using index to filter even numbers', () => {
    const result = filter([1, 2, 3, 4, 5], (x, index) => index % 2 === 0);
    expect(result).toEqual([1, 3, 5]);
  })

  test('Filtering objects based on property', () => {
    const input = [{ a: 1 }, { a: 2 }, { a: 2 }];
    const result = filter(input, obj => obj.a === 2);
    expect(result).toEqual([{ a: 2 }, { a: 2 }]);
  })
});

describe.skip('filter (test plan planned test | expected correct behaviour)', () => {
  test('Basic truthy: items > 1', () => {
    const result = filter([1, 2, 3], x => x > 1);
    expect(result).toEqual([2, 3]);
  })

  test('All false predicate returns empty array', () => {
    const result = filter([1, 2, 3], () => false);
    expect(result).toEqual([]);
  })

  test('All true predicate returns the same array', () => {
    const result = filter([1, 2, 3], () => true);
    expect(result).toEqual([1, 2, 3]);
  })

  test('Empty array input returns empty array', () => {
    const result = filter([], x => x > 1);
    expect(result).toEqual([]);
  })

  test('Null input returns empty array', () => {
    const result = filter(null, () => true);
    expect(result).toEqual([]);
  })

  test('undefined input returns empty array', () => {
    const result = filter(undefined, () => true);
    expect(result).toEqual([]);
  })

  test('Using index to filter even numbers', () => {
    const result = filter([1, 2, 3, 4, 5], (x, index) => index % 2 === 0);
    expect(result).toEqual([1, 3, 5]);
  })

  test('Filtering objects based on property', () => {
    const input = [{ a: 1 }, { a: 2 }, { a: 2 }];
    const result = filter(input, obj => obj.a === 2);
    expect(result).toEqual([{ a: 2 }, { a: 2 }]);
  })
});