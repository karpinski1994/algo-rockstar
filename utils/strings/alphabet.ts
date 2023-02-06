import {range} from '../general/range';

export const ALPHABET = range('A'.charCodeAt(), 'Z'.charCodeAt()).map(code => String.fromCharCode(code));

export const getAlphabetLetter = (idx) => ALPHABET[idx];
