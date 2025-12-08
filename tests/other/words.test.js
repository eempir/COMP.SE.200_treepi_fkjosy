import words from '../../src/words.js';

describe('words', () => {

    test('splits a string into words using default pattern', () => {
        const result = words('fred, barney, & pebbles');
        expect(result).toEqual(['fred', 'barney', 'pebbles']);
    });

    test('splits a string using a custom pattern', () => {
        const result = words('fred, barney, & pebbles', /[^, ]+/g);
        expect(result).toEqual(['fred', 'barney', '&', 'pebbles']);
    });

    test('handles strings with characters and numbers', () => {
        const result = words('alpha123 beta456');
        expect(result).toEqual(['alpha', '123', 'beta', '456']);
    });

    test('returns an empty array for an empty string', () => {
        const result = words('');
        expect(result).toEqual([]);
    });

    test('handles strings with mixed symbols and text', () => {
        const result = words('Hello-World_Test');
        expect(result).toEqual(['Hello', 'World', 'Test']);
    });

});