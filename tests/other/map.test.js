import map from "../../src/map";

describe('map', () => {
  test('maps numbers using square function', () => {
    function square(n) {
      return n * n;
    }
    expect(map([1, 2, 3], square)).toEqual([1, 4, 9]);
  });

  test('maps strings to their lengths', () => {
    function getLength(s) {
      return s.length;
    }
    expect(map(['apple', 'banana', 'cherry'], getLength)).toEqual([5, 6, 6]);
  });

  test('handles empty input array', () => {
    const result = map([], x => x * 2);
    expect(result).toEqual([]);
  });

  test('handles null input array', () => {
    const result = map(null, x => x * 2);
    expect(result).toEqual([]);
  });

  test('handles undefined input array', () => {
    const result = map(undefined, x => x * 2);
    expect(result).toEqual([]);
  });
});