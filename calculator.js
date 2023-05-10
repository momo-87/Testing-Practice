class Calculator{
    add = (a, b) => a + b;
    substract = (a, b) => a - b;
    divide = (a, b) => {
        if(b === 0) {
            throw "can not divide by 0";
        } else {
            return a/b;
        }
    };
    multiply = (a, b) => a*b;
}

module.exports = Calculator;