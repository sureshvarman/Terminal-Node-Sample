const { expect } = require('@jest/globals');
const {arrayToString} = require('./parser');

describe("PARSER", () => {

    it("Positive test", () => {
        const input = [0, 1];
        const expectedOutput = "0, 1"

        const actualOutput = arrayToString(input);

        expect(actualOutput).toEqual(expectedOutput);
    });

    it("Non Array - string", () => {
        try {
            arrayToString("String")
            expect(true).toEqual(false); // line to make the test fail, on no error.
        }
        catch(e) {
            expect(e).toBeInstanceOf(TypeError);
        }
    });

    it("Non Array - Number", () => {
        try {
            arrayToString(10)
            expect(true).toEqual(false); // line to make the test fail, on no error.
        }
        catch(e) {
            expect(e).toBeInstanceOf(TypeError);
        }
    });

    it("Non Array - null", () => {
        try {
            arrayToString(null)
            expect(true).toEqual(false); // line to make the test fail, on no error.
        }
        catch(e) {
            expect(e).toBeInstanceOf(TypeError);
        }
    });
});