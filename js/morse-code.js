const morseCharArry = [
    {"charKey":"A","morseCode":".-"},
    {"charKey":"B","morseCode":"-..."},
    {"charKey":"C","morseCode":"-.-."},
    {"charKey":"D","morseCode":"-.."},
    {"charKey":"E","morseCode":"."},
    {"charKey":"F","morseCode":"..-."},
    {"charKey":"G","morseCode":"--."},
    {"charKey":"H","morseCode":"...."},
    {"charKey":"I","morseCode":".."},
    {"charKey":"J","morseCode":".---"},
    {"charKey":"K","morseCode":"-.-"},
    {"charKey":"L","morseCode":".-.."},
    {"charKey":"M","morseCode":"--"},
    {"charKey":"N","morseCode":"-."},
    {"charKey":"O","morseCode":"---"},
    {"charKey":"P","morseCode":".--."},
    {"charKey":"Q","morseCode":"--.-"},
    {"charKey":"R","morseCode":".-."},
    {"charKey":"S","morseCode":"..."},
    {"charKey":"T","morseCode":"-"},
    {"charKey":"U","morseCode":"..-"},
    {"charKey":"V","morseCode":"...-"},
    {"charKey":"W","morseCode":".--"},
    {"charKey":"X","morseCode":"-..-"},
    {"charKey":"Y","morseCode":"-.--"},
    {"charKey":"Z","morseCode":"--.."}
]

export const filterValidChars = (wordInput) => {
    const wordArry = wordInput.split("");
    const regFilter = new RegExp( `([A-Z0-9&'@)(:,=!.%+"?/])`, `gi`)
    const filteredWordArray = wordArry.filter((arryChar) => arryChar.match(regFilter));
    return filteredWordArray;
}

export const translateArray = (charsArray) => {
    let morseString = "";
    charsArray.forEach(wordChar => {
        wordChar = wordChar.toUpperCase();
        let morseObj = morseCharArry.find(o => o.charKey == wordChar);
        morseString += morseObj.morseCode;
        morseString += " "

    });
    return morseString.trim();
}

export const translateToMorse = (wordInput) => {
    const filteredWordArray = filterValidChars(wordInput);
    return translateArray(filteredWordArray);
}