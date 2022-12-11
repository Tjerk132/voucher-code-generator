import { CharSet } from "./CharSet"
import { Delimiter } from "./Delimiter"

const randomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const randomElement = (array: Array<string>) => {
    return array[randomInt(0, array.length - 1)]
}

const charset = (charSet: CharSet): string => {
    const charsets: { [key: string]: string } = {
        numbers: "0123456789",
        letters: "abcdefghijklmnopqrstuvwxyz",
        alphanumeric: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    return charsets[CharSet[charSet]]
}

/**
* Generates a voucher code with the given pattern. All alphanumeric characters get replaced with a randomized
* char of the same CharSet and casing in case of a letter
 **/
export const generate = (pattern: string): string => {

    const alphanumerics = charset(CharSet.alphanumeric)

    const chars = Array.from(pattern)

    let delimiters: Array<Delimiter | undefined> = chars.map((char, index) => {
        if (!alphanumerics.includes(char)) {
            return <Delimiter>{ index: index, char: char }
        }
    })

    let result = chars

    for (let index = 0; index < pattern.length; index++) {
        let char = pattern.charAt(index)

        const delimiter = delimiters.find(x => x?.index === index)
        if (delimiter) {
            result.splice(index, 1, delimiter.char)
            continue
        }
        if (parseInt(char) || !isNaN(parseInt(char))) {
            let numbers = Array.from(charset(CharSet.numbers))
            let element = randomElement(numbers)
            result.splice(index, 1, element)
            continue
        }
        if (char === char.toUpperCase()) {
            let letters = Array.from(charset(CharSet.letters).toUpperCase())
            let element = randomElement(letters)
            result.splice(index, 1, element)
            continue
        }
        let letters = Array.from(charset(CharSet.letters))
        let element = randomElement(letters)
        result.splice(index, 1, element)
    }

    return result.join('')
}