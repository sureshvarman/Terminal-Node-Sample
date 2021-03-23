const { expect } = require('@jest/globals');
const getFibonacci = require('./fibonacci');

describe("FIBONACCI", () => {

    it("Positive test", () => {
        const input = 2;
        const expectedOutput = [0, 1];

        const actualOutput = getFibonacci(input);

        expect(actualOutput).toEqual(expectedOutput);
    });

    it("Non Number", () => {
        try {
            getFibonacci("test");
            expect(true).toEqual(false); // line to make the test fail, on no error.
        }
        catch(e) {
            expect(e).toBeInstanceOf(TypeError);
        }
    });

    it("Negative Number", () => {
        try {
            getFibonacci(-10);
            expect(true).toEqual(false); // line to make the test fail, on no error.
        }
        catch(e) {
            expect(e).toBeInstanceOf(TypeError);
        }
    });

    it("Float Number", () => {
        try {
            getFibonacci(10.9);
            expect(true).toEqual(false); // line to make the test fail, on no error.
        }
        catch(e) {
            expect(e).toBeInstanceOf(TypeError);
        }
    });

    it("null", () => {
        try {
            getFibonacci(null);
            expect(true).toEqual(false); // line to make the test fail, on no error.
        }
        catch(e) {
            expect(e).toBeInstanceOf(TypeError);
        }
    });

    it("undefined", () => {
        try {
            const input = undefined;
            getFibonacci(input);
            expect(true).toEqual(false); // line to make the test fail, on no error.
        }
        catch(e) {
            expect(e).toBeInstanceOf(TypeError);
        }
    });
});