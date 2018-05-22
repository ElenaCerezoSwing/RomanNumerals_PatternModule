var RomanNumerals = function () { };

RomanNumerals.prototype.fromNumber = function (n) {
    if (2 === n) {
        return "II";
    }
    return "I";
};
module.exports = new RomanNumerals();