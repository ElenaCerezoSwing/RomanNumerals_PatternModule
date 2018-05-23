// const Application = require("../js/RomanNumerals");

import Application from "./RomanNumerals";
let app;

beforeEach(function () {
    app = Application();
});

describe("Roman Numerals", function () {

    it("convert numbers to roman numerals", function () {
        expect(app.fromNumber(1)).toBe("I");
        expect(app.fromNumber(2)).toBe("II");
        expect(app.fromNumber(3)).toBe("III");
        expect(app.fromNumber(4)).toBe("IV");
        expect(app.fromNumber(7777)).toBe("MMMMMMMDCCLXXVII");
    });

});
