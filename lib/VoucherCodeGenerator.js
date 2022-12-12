"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = void 0;
const CharSet_1 = require("./CharSet");
const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
const randomElement = (array) => {
    return array[randomInt(0, array.length - 1)];
};
const charset = (charSet) => {
    const charsets = {
        numbers: "0123456789",
        letters: "abcdefghijklmnopqrstuvwxyz",
        alphanumeric: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    };
    return charsets[CharSet_1.CharSet[charSet]];
};
/**
* Generates a voucher code with the given pattern. All alphanumeric characters get replaced with a randomized
* char of the same CharSet and casing in case of a letter
 **/
const generate = (pattern) => {
    const alphanumerics = charset(CharSet_1.CharSet.alphanumeric);
    const chars = Array.from(pattern);
    let delimiters = chars.map((char, index) => {
        if (!alphanumerics.includes(char)) {
            return { index: index, char: char };
        }
    });
    let result = chars;
    for (let index = 0; index < pattern.length; index++) {
        let char = pattern.charAt(index);
        const delimiter = delimiters.find(x => (x === null || x === void 0 ? void 0 : x.index) === index);
        if (delimiter) {
            result.splice(index, 1, delimiter.char);
            continue;
        }
        if (parseInt(char) || !isNaN(parseInt(char))) {
            let numbers = Array.from(charset(CharSet_1.CharSet.numbers));
            let element = randomElement(numbers);
            result.splice(index, 1, element);
            continue;
        }
        if (char === char.toUpperCase()) {
            let letters = Array.from(charset(CharSet_1.CharSet.letters).toUpperCase());
            let element = randomElement(letters);
            result.splice(index, 1, element);
            continue;
        }
        let letters = Array.from(charset(CharSet_1.CharSet.letters));
        let element = randomElement(letters);
        result.splice(index, 1, element);
    }
    return result.join('');
};
exports.generate = generate;
