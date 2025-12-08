import words from '../../src/words.js';

describe('words', () => {

    test('splits a string into words using default pattern', () => {
        const result = words('jouni, aleksi, & pikkarainen');
        expect(result).toEqual(['jouni', 'aleksi', 'pikkarainen']);
    });

    test('splits a string using a custom pattern', () => {
        const result = words('jouni, aleksi, & pikkarainen', /[^, ]+/g);
        expect(result).toEqual(['jouni', 'aleksi', '&', 'pikkarainen']);
    });

    test('handles strings with characters and numbers', () => {
        const result = words('aleksi123 bertta456');
        expect(result).toEqual(['aleksi', '123', 'bertta', '456']);
    });

    test('returns an empty array for an empty string', () => {
        const result = words('');
        expect(result).toEqual([]);
    });

    test('handles strings with mixed symbols and text', () => {
        const result = words('Kettu-The_Mestari');
        expect(result).toEqual(['Kettu', 'The', 'Mestari']);
    });

});