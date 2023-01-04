const isPalindrome = require('../src/test3');  // Assumes that isPalindrome.js is in the same directory

describe('isPalindrome', () => {
    test('palindrome string should return true', () => {
        expect(isPalindrome('peep')).toBe(true);
    });

    test('non-palindrome string should return false', () => {
        expect(isPalindrome('palindrome')).toBe(false);
    });
})
