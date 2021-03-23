const { expect } = require('@jest/globals');
const compose = require('./composer');

describe("COMPOSE", () => {

    it("Positive test", () => {
        const input = 6;
        const expectedOutput = true;

        const isGreaterThanTen = function(x) {
            if (x > 10) {
                return true;
            } else {
                return false;
            }
        }

        const multiplyNumber = function(x) {
            return x * 2;
        }

        const actualOutput = compose(isGreaterThanTen, multiplyNumber)(input);

        expect(actualOutput).toEqual(expectedOutput);
    });
});