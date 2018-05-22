describe("Roman Numerals", function () {
    it("convert numbers to roman numerals", function () {
        var romanNumerals = require("../js/RomanNumerals");

        expect(romanNumerals.fromNumber(1)).toBe("I");
        expect(romanNumerals.fromNumber(2)).toBe("II");
        expect(romanNumerals.fromNumber(3)).toBe("III");
    });

});
