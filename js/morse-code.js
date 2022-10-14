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
        switch(wordChar){
            case "A":
                morseString += ".-";
                break;
        }
    });
    return morseString;
}

console.log(translateToMorse(["A","a","&"]));