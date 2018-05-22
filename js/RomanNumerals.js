var RomanNumerals = function () { };

var numerals = [
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