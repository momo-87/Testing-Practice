const stringLength = require('./stringLength');

test('compiling stringLength function goes as expected', () => {
    expect(stringLength('Christian')).toBe(9);
    expect(() => stringLength('')).toThrow('invalid string!');
    expect(() => stringLength("Hello I'm Christian")).toThrow(/^invalid string!$/);
});