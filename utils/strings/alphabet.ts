import {range} from '../general/range';

export const ALPHABET: string | string[] = range(String('A').charCodeAt(0), String('Z').charCodeAt(0)).map(code => String.fromCharCode(code));

export const getAlphabetLetter = (idx: number) => ALPHABET[idx];
