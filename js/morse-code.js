const morseCharArry = [
    {"charKey":"A","morseC":".-"},
    {"charKey":"B","morseC":""},
    {"charKey":"C","morseC":""},
    {"charKey":"D","morseC":""},
    {"charKey":"E","morseC":""},
    {"charKey":"F","morseC":""},
    {"charKey":"G","morseC":""},
    {"charKey":"H","morseC":""},
    {"charKey":"I","morseC":""},
    {"charKey":"J","morseC":""},
    {"charKey":"K","morseC":""},
    {"charKey":"L","morseC":""},
    {"charKey":"M","morseC":""},
    {"charKey":"N","morseC":""},
    {"charKey":"O","morseC":""},
    {"charKey":"P","morseC":""},
    {"charKey":"Q","morseC":""},
    {"charKey":"R","morseC":""},
    {"charKey":"S","morseC":""},
    {"charKey":"T","morseC":""},
    {"charKey":"U","morseC":""},
    {"charKey":"V","morseC":""},
    {"charKey":"W","morseC":""},
    {"charKey":"X","morseC":""},
    {"charKey":"Y","morseC":""},
    {"charKey":"Z","morseC":""},
]

const filterValidChars = (wordInput) => {
    const wordArry = wordInput.split("");
    const regFilter = new RegExp( `([A-Z0-9&'@)(:,=!.%+"?/])`, `gi`)
    const filteredWordArray = wordArry.filter((arryChar) => arryChar.match(regFilter));
    return filteredWordArray;
}

const translateToMorse = (charsArray) => {
    let morseString = "";
    charsArray.forEach(wordChar => {
        wordChar = wordChar.toUpperCase();
        let obj =morseCharArry.find(o => o.charKey == wordChar);
        morseString += obj.morseC;
    });
    return morseString;
}

console.log(translateToMorse(["A"]));