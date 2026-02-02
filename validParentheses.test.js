const isValid = require('./validParantheses');

describe('Valid Parentheses', () => {

    test('should return true for simple pair ()', () => {
        expect(isValid('()')).toBe(true);
    });

    test('should return true for multiple types ()[]{}', () => {
        expect(isValid('()[]{}')).toBe(true);
    });

    test('should return false for wrong order (]', () => {
        expect(isValid('(]')).toBe(false);
    });

    test('should return false for incorrect nesting ([)]', () => {
        expect(isValid('([)]')).toBe(false);
    });

    test('should return true for nested {[]}', () => {
        expect(isValid('{[]}')).toBe(true);
    });

    test('should return false for single opening bracket [', () => {
        expect(isValid('[')).toBe(false);
    });

    test('should return false for single closing bracket }', () => {
        expect(isValid('}')).toBe(false);
    });

    test('should return true for empty string', () => {
        expect(isValid('')).toBe(true);
    });

});
