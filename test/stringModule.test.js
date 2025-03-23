const chai = require('chai');
const expect = chai.expect;

const { reverseString, isPalindrome } = require('../stringModule');

describe('String Module Tests', () => {
    describe('reverseString', () => {
        it('should reverse a string', () => {
            expect(reverseString('hello')).to.equal('olleh');
        });

        it('should reverse an empty string', () => {
            expect(reverseString('')).to.equal('');
        });

        it('should reverse a string with special characters', () => {
            expect(reverseString('!abc!')).to.equal('!cba!');
        });
    });

    describe('isPalindrome', () => {
        it('should return true for a palindrome', () => {
            expect(isPalindrome('racecar')).to.equal(true);
        });

        it('should return false for a non-palindrome', () => {
            expect(isPalindrome('hello')).to.equal(false);
        });

        it('should ignore case and special characters', () => {
            expect(isPalindrome('A man, a plan, a canal, Panama')).to.equal(true);
        });
    });
});
