const palindromes = function (word) {
    word = word.toLowerCase().replace(/[^a-z]/g,'')
    let reverse = word.split("").reverse().join('')

    return word === reverse
};
// Do not edit below this line
module.exports = palindromes;
