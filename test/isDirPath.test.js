const isDirPath = require('../src/isDirPath.js');

test('("C:\\Users\\" is a dir path) to be true', () => {
    expect(isDirPath("C:\\Users\\")).toBe(true);
});

test('("C:\\Users\\test.js" is a dir path) to be false', () => {
    expect(isDirPath("C:\\Users\\test.js")).toBe(false);
});

test('("/Users/test." is a dir path) to be true', () => {
    expect(isDirPath("/Users/test.")).toBe(true);
});


test('("/Users/test" is a dir path) to be true', () => {
    expect(isDirPath("/Users/test")).toBe(true);
});

test('("/Users/test.js" is a dir path) to be false', () => {
    expect(isDirPath("/Users/test.js")).toBe(false);
});

