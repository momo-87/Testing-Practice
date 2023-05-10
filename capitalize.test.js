const capitalize = require('./capitalize');

test('Compiling capitalise function goes as expected', () => {
    expect(capitalize('christian')).toBe('Christian');
});