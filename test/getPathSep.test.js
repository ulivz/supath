const getPathSep = require('../src/getPathSep.js');

test('("C:\\Users\\" Separator is \\ ) to be true', () => {
    expect(getPathSep("C:\\Users\\")).toBe('\\');
});


test('("C:\/Users\/" Separator is \/ ) to be true', () => {
    expect(getPathSep("C:\/Users\/")).toBe('\/');
});

test('("C:\/Users\\" Separator is undefined ) to be true', () => {
    expect(getPathSep("C:\/Users\\")).toBeUndefined()
});