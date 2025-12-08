import get from '../../src/get.js';

describe('get', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }] };

    test('retrieves value using a path', () => {
        const result = (get(object, 'a[0].b.c'));
        expect(result).toBe(3);
    });

    test('retrieves value using an array path', () => {
        const result = (get(object, ['a', '0', 'b', 'c']))
        expect(result).toBe(3);
    });

    test('returns default value if resolution is undefined', () => {
        const result = get(object, 'a.b.c', 'default');
        expect(result).toBe('default');
    });

    test('returns undefined if path does not exist and no default value is provided', () => {
        const result = get(object, 'no.such.path');
        expect(result).toBeUndefined();
    });

    test('handles null object input by returning default value', () => {
        const result = get(null, 'a.b.c', 'null object');
        expect(result).toBe('null object');
    });

    test('handles undefined object input by returning default value', () => {
        const result = get(undefined, 'a.b.c', 'undefined object');
        expect(result).toBe('undefined object');
    });

    test('returns the value itself if it exists, even if it is 0 or false', () => {
        const falsyObject = { a: 0, b: false };
        const resultA = get(falsyObject, 'a', 'default');
        expect(resultA).toBe(0);
        const resultB = get(falsyObject, 'b', 'default');
        expect(resultB).toBe(false);
    });

});