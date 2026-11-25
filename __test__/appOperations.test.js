const appOperations = require('../src/appOperations');

test("multiplication property of zero ",() => {
    expect(appOperations.multiply(5,0)).toBe(0);
});

test("additon of two values", () => {
    expect(appOperations.add(5,0)).toBe(5);
});

test("subtraction of two values", () => {
 expect(appOperations.subtract(7,2)).toBe(5);
});

test("divide of two values", () => {
 expect(appOperations.divide(8,2)).toBe(4);
});