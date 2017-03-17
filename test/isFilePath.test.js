const isFilePath = require('../src/isFilePath.js');

test('("C:\\Users\\" is a file path) to be false', () => {
    expect(isFilePath("C:\\Users\\")).toBe(false);
});

test('("C:\\Users\\test.js" is a file path) to be true', () => {
    expect(isFilePath("C:\\Users\\test.js")).toBe(true);
});

test('("/Users/test." is a file path) to be false', () => {
    expect(isFilePath("/Users/test.")).toBe(false);
});


test('("/Users/test" is a file path) to be false', () => {
    expect(isFilePath("/Users/test")).toBe(false);
});

test('("/Users/test.js" is a file path) to be true', () => {
    expect(isFilePath("/Users/test.js")).toBe(true);
});

