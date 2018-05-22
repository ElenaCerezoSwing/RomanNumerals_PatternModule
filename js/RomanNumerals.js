var RomanNumerals = function () { };

var numerals = [
    // { value: 4, numeral: "IV" },
    // { value: 4, numeral: "IV" },
    // { value: 4, numeral: "IV" },
    // { value: 4, numeral: "IV" },
    // { value: 4, numeral: "IV" },
    // { value: 4, numeral: "IV" },
    // { value: 4, numeral: "IV" },
    // { value: 4, numeral: "IV" },
    // { value: 4, numeral: "IV" },
    // { value: 4, numeral: "IV" },
    // { value: 4, numeral: "IV" },
    { value: 1000, numeral: "M" },
    { value: 500, numeral: "D" },
    { value: 100, numeral: "C" },
    { value: 99, numeral: "IC" },
    { value: 50, numeral: "L" },
    { value: 49, numeral: "IL" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" }
]
RomanNumerals.prototype.fromNumber = function (n) {
    var result = "";
    numerals.forEach(function (item) {
        while (n >= item.value) {
            result += item.numeral;
            n -= item.value;
        }
    });
    return result;
};
module.exports = new RomanNumerals();