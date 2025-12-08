import difference from '../../src/difference.js';

describe ('difference (testplan planned test)', () => {
    test('basic execution', () => {
        const result = difference([2, 1], [2, 3]);
        expect(result).toEqual([1]);
    });

    test('no exclusions', () => {
        const result = difference([2, 1, 3], [4, 5]);
        expect(result).toEqual([2, 1, 3]);
    });

    test('handles duplicates', () => {
        const result = difference([2, 2, 1, 3, 3], [2, 3]);
        expect(result).toEqual([1]);
    });

    test('empty values', () => {
        const result = difference([2, 1], []);
        expect(result).toEqual([2, 1]);
    });

    test('multiple values', () => {
        const result = difference([1, 2, 3, 4], [1], [3, 5]);
        expect(result).toEqual([2, 4]);
    });
});