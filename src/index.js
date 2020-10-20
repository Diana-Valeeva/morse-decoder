const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
    let resultStr = '';

    let wordArr = expr.match(/.{10}/g),
        newArr = [];
    
    wordArr.map(elem => {
        newArr.push(MORSE_TABLE[elem
            .replace(/00/g, "")
            .replace(/11/g, "-")
            .replace(/10/g, ".").replace(/\*{10}/g, `/\s/`)])
    });
    for (symb of newArr) {
        if (symb == undefined) symb = " ";
        resultStr += symb;
    }
    return resultStr;

}
module.exports = {
  decode,
};
