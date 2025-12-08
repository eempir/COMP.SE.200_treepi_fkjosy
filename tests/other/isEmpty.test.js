import isEmpty from "../../src/isEmpty";

describe('isEmpty', () => {
  test('returns true for null and undefined', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  test('returns true for numbers and booleans', () => {
    expect(isEmpty(1)).toBe(true);
    expect(isEmpty(true)).toBe(true);
    expect(isEmpty(false)).toBe(true);
  })

  test('return true for empty arrays/strings/objects', () => {
    expect(isEmpty([])).toBe(true);
    expect(isEmpty('')).toBe(true);
    expect(isEmpty({})).toBe(true);
  });

  test('returns false for non-empty arrays/strings/objects', () => {
    expect(isEmpty([1, 2, 3])).toBe(false);
    expect(isEmpty('123')).toBe(false);
    expect(isEmpty({ a: 1 })).toBe(false);
  });
});