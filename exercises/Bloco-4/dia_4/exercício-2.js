function checkPalindrome(str) {     
    for(var index = 0; index < str.length / 2; index += 1) {
        if (str[index] != str[str.length - index - 1]) {
            return false;
        } else {
        return true;
        }
    }
}

console.log(checkPalindrome("arara"));
console.log(checkPalindrome("palindromo"));
