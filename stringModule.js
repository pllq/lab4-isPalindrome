function reverseString(str) {
    return str.split('').reverse().join('');
}

function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

module.exports = { reverseString, isPalindrome };  