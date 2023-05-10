const Calculator = require('./calculator');
const calculator = new Calculator;

// describe('compiling calculator methods goes as expected', () => {
    describe('compiling add method goes as expected', () => {
        test('Test add Method', () => {
            expect(calculator.add(1, 2)).toBe(3);
            expect(calculator.add(5, -5)).toBe(0);
            expect(calculator.add(1, -2)).toBe(-1);
        });
    });
    describe('compiling substract method goes as expected', () => {
        test('test substract method', () => {
            expect(calculator.substract(15, 5)).toBe(10);
            expect(calculator.substract(-5, 5)).toBe(-10);
            expect(calculator.substract(-5, -5)).toBe(0); 
        });
    });
    describe('compiling divide method goes as expectred', () => {
        test('test divide method', () => {
            expect(calculator.divide(18, 6)).toBe(3);
            expect(() => calculator.divide(4, 0)).toThrow("can not divide by 0");
            expect(calculator.divide(3, 6)).toBeCloseTo(0.5);
        });
    });
    describe('compiling multiply method goes as expected', () => {
        test('test multiply method', () => {
            expect(calculator.multiply(4, 8)).toBe(32);
            expect(calculator.multiply(2, -8)).toBe(-16);
            expect(calculator.multiply(-4, -3)).toBe(12);
        });
    })
// });