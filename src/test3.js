/************************************************
*
*  3. Buatlah fungsi dengan input string
*  jika string tersebut dibalik dan tetap sama
*  dengan string yang diinputkan
*  maka return true jika tidak return false
*
************************************************/

function isPalindrome(str) {
    // Lowercase the string and use the Regular Expression
    let re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');

    let len = str.length;

    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) return false; // If the character don't match, exit loop
    }

    return true;
}

console.log(isPalindrome("peep"));
console.log(isPalindrome("palindrome"));

module.exports = isPalindrome;