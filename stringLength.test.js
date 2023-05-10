const stringLength = require('./stringLength');

test("stringLength('Christian') is equal to 9", () => {
    expect(stringLength('Christian')).toBe(9);
});