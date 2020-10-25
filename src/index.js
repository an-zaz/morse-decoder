const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const MORSE_SYMBOLS = {
    '10': '.',
    '11': '-',
};

const WORD_SIZE = 10;

function decode(expr) {
    let decodedWord = '';
    for (let i = 0; i < expr.length / WORD_SIZE; i++) {
        let currentWord = expr.slice(i * WORD_SIZE, (i + 1) * WORD_SIZE);

        if (currentWord === '**********') {
            decodedWord += ' ';
            continue;
        }
        let morseWord = '';
        for (let j = 0; j < 10 / 2; j++) {
            let morseSymbol = currentWord.slice(j * 2, (j + 1) * 2);
            if (morseSymbol === '00') {
                continue;
            }
            morseWord += MORSE_SYMBOLS[morseSymbol];
        }
        decodedWord += MORSE_TABLE[morseWord];
    }
    return decodedWord;
}

module.exports = {
    decode
};
