import reduce from '../../src/reduce.js';

describe('reduce', () => {

    test('reduces an array to a sum', () => {
        const result = reduce([1, 2], (sum, n) => sum + n, 0);
        expect(result).toBe(3);
    });

    test('reduces an object to a grouped object (keys by value)', () => {
        const collection = { 'a': 1, 'b': 2, 'c': 1 };
        const iteratee = (result, value, key) => {
            (result[value] || (result[value] = [])).push(key);
            return result;
        };
        const result = reduce(collection, iteratee, {});
        expect(result).toEqual({ '1': ['a', 'c'], '2': ['b'] });
    });

    test('uses the first element as accumulator if none is provided', () => {
        const result = reduce([1, 2, 3], (sum, n) => sum + n);
        expect(result).toBe(6);
    });

    test('handles empty array with an initial accumulator', () => {
        const result = reduce([], (sum, n) => sum + n, 0);
        expect(result).toBe(0);
    });

    test('iterates correctly passing index and collection to iteratee', () => {
        const keys = [];
        reduce([10, 20], (acc, value, index, collection) => {
            keys.push(index);
            return acc + value;
        }, 0);
        expect(keys).toEqual([0, 1]);
    });

});