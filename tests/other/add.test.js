import add from '../../src/add.js'

describe('add', () => {
  test('add two positive numbers', () => {
    expect(add(10, 5)).toBe(15);
  });

  test('add two negative numbers', () => {
    expect(add(-5, -10)).toBe(-15);
  });

  test('add positive and negative number', () => {
    expect(add(10, -5)).toBe(5);
  });

  test('add decimal numbers', () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3, 10);
  });

  test('1 undefined treated as 0', () => {
    expect(add(5, undefined)).toBe(5);
    expect(add(undefined, 5)).toBe(5);
  });

  test('both undefined returns 0', () => {
    expect(add(undefined, undefined)).toBe(0);
  });
});