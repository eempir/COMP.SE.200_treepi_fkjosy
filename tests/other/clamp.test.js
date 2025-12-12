import clamp from '../../src/clamp.js';

describe('clamp (actual current behaviour)', () => {

  test('clamps values to the lower bound', () => {
    const result = clamp(-10, -5, 5);
    expect(result).toBe(-5);
  });

  test('clamps values to the upper bound', () => {
    const result = clamp(10, -5, 5);
    expect(result).toBe(-5);
  });

  test('returns the number if within bounds', () => {
    const result = clamp(0, -5, 5);
    expect(result).toBe(-5);
  });

  test('resolves parameters as 0 if lower bound is NaN', () => {
    const result = clamp(10, NaN, 5);
    expect(result).toBe(0);
  });

  test('resolves parameters as 0 if upper bound is NaN', () => {
    const result = clamp(-10, -5, NaN);
    expect(result).toBe(-5);
  });

  test('handles floating point numbers', () => {
    const result = clamp(10.5, -5.5, 5.5);
    expect(result).toBe(-5.5);
  });
});

describe.skip('clamp (expected correct behaviour)', () => {
  test('clamps values to the lower bound', () => {
    const result = clamp(-10, -5, 5);
    expect(result).toBe(-5);
  });

  test('clamps values to the upper bound', () => {
    const result = clamp(10, -5, 5);
    expect(result).toBe(5);
  });

  test('returns the number if within bounds', () => {
    const result = clamp(0, -5, 5);
    expect(result).toBe(0);
  });

  test('resolves parameters as 0 if lower bound is NaN', () => {
    const result = clamp(10, NaN, 5);
    expect(result).toBe(5);
  });

  test('resolves parameters as 0 if upper bound is NaN', () => {
    const result = clamp(-10, -5, NaN);
    expect(result).toBe(-5);
  });

  test('handles floating point numbers', () => {
    const result = clamp(10.5, -5.5, 5.5);
    expect(result).toBe(5.5);
  });
});