import difference from '../../src/difference.js';

describe('Part 1 Planned Tests: Difference Function', () => {

    test('Basic exclusion: removes values present in the exclusion array', () => {
        // Plan: Array [2, 1], values [2, 3] -> Expected [1]
        expect(difference([2, 1], [2, 3])).toEqual([1]);
    });

    test('No exclusions: returns original array if no matches found', () => {
        // Plan: Array [2, 1, 3], values [4, 5] -> Expected [2, 1, 3]
        expect(difference([2, 1, 3], [4, 5])).toEqual([2, 1, 3]);
    });

    test('Handles duplicates: removes all instances of excluded values', () => {
        // Plan: Array [2, 2, 1, 3, 3], values [2, 3] -> Expected [1]
        expect(difference([2, 2, 1, 3, 3], [2, 3])).toEqual([1]);
    });

    test('Empty values: returns original array when exclusion list is empty', () => {
        // Plan: Array [2, 1], values [] -> Expected [2, 1]
        expect(difference([2, 1], [])).toEqual([2, 1]);
    });

    test('Multiple values: supports multiple exclusion arrays', () => {
        // Plan: Array [1, 2, 3, 4], values [1], [3, 5] -> Expected [2, 4]
        expect(difference([1, 2, 3, 4], [1], [3, 5])).toEqual([2, 4]);
    });

    test('Non array values: ignores exclusion arguments that are not arrays', () => {
        // Plan: Array [1, 2, 3], values 2 (number) -> Expected [1, 2, 3]
        // Note: This tests robustness. Since '2' is not an array, it shouldn't filter anything.
        expect(difference([1, 2, 3], 2)).toEqual([1, 2, 3]);
    });

    test('null in values: can filter out null values', () => {
        // Plan: Array [1, null, 3], values [null] -> Expected [1, 3]
        expect(difference([1, null, 3], [null])).toEqual([1, 3]);
    });

    test('undefined in values: can filter out undefined values', () => {
        // Plan: Array [undefined, 3], values [undefined] -> Expected [3]
        expect(difference([undefined, 3], [undefined])).toEqual([3]);
    });

    test('input not array: returns empty array if first argument is null', () => {
        // Plan: Array null, values [1, 2] -> Expected []
        expect(difference(null, [1, 2])).toEqual([]);
    });

});