const stringLength = (str) => {
    if(str.length >= 1 && str.length <= 10) {
        return str.length;
    } else throw "invalid string!";
}
module.exports = stringLength;