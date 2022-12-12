/**
* Generates a voucher code with the given pattern. All alphanumeric characters get replaced with a randomized
* char of the same CharSet and casing in case of a letter
 **/
export declare const generate: (pattern: string) => string;
