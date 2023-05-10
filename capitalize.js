const capitalize = (str) => {
    const fistLetterCap = str.charAt(0).toUpperCase();
    remainingLetters = str.slice(1);
    return fistLetterCap + remainingLetters;
}
module.exports = capitalize;