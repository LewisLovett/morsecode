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
    {"charKey":"Z","morseCode":"--.."},
    {"charKey":"0","morseCode":"-----"},
    {"charKey":"1","morseCode":".----"},
    {"charKey":"2","morseCode":"..---"},
    {"charKey":"3","morseCode":"...--"},
    {"charKey":"4","morseCode":"....-"},
    {"charKey":"5","morseCode":"....."},
    {"charKey":"6","morseCode":"-...."},
    {"charKey":"7","morseCode":"--..."},
    {"charKey":"8","morseCode":"---.."},
    {"charKey":"9","morseCode":"----."},
    {"charKey":"&","morseCode":".-..."},
    {"charKey":"'","morseCode":".----."},
    {"charKey":"@","morseCode":".--.-."},
    {"charKey":")","morseCode":"-.--.-"},
    {"charKey":"(","morseCode":"-.--."},
    {"charKey":":","morseCode":"---..."},
    {"charKey":",","morseCode":"--..--"},
    {"charKey":"=","morseCode":"-...-"},
    {"charKey":"!","morseCode":"-.-.--"},
    {"charKey":".","morseCode":".-.-.-"},
    {"charKey":"-","morseCode":"-....-"},
    {"charKey":"%","morseCode":"----- -..-. -----"},
    {"charKey":"+","morseCode":".-.-."},
    {"charKey":'"',"morseCode":".-..-."},
    {"charKey":"?","morseCode":"..--.."},
    {"charKey":"/","morseCode":"-..-."}
]

export const filterValidChars = (wordInput) => {
    wordInput = String(wordInput);
    const wordArry = wordInput.split("");
    const regFilter = new RegExp( `([A-Z0-9&'@)(:,=!.%+"?/])`, `gi`)
    const filteredWordArray = wordArry.filter((arryChar) => arryChar.match(regFilter));
    return filteredWordArray;
}

export const translateCharArray = (charsArray) => {
    let morseString = "";
    charsArray.forEach(wordChar => {
        wordChar = wordChar.toUpperCase();
        let morseObj = morseCharArry.find(obj => obj.charKey == wordChar);
        morseString += morseObj.morseCode;
        morseString += " "

    });
    return morseString.trim();
}

export const translateToMorse = (wordInput) => {
    const filteredWordArray = filterValidChars(wordInput);    
    return translateCharArray(filteredWordArray);
}


export const validMorse = (morseInput) => {
    morseInput = String(morseInput);
    const morstArry = morseInput.split(" ");
    const regFilter = new RegExp( `([^. -])`, `gi`);
    let validInput = true;

    if(!regFilter.test(morseInput)){
        morstArry.forEach(morseCode => {
            if (morseCode.length == 1 || morseCode.length > 6){
                validInput = false;
            }
        }) 
    }else{
        validInput = false;
    }

    if (validInput){
        return morstArry;
    }else{
        return "INVALID INPUT";
    }
}

export const translateMorseArray = (morseArray) => {
    let charString = "";
    morseArray.forEach(morseCode => {
        let morseObj = morseCharArry.find(obj => obj.morseCode == morseCode);
        if (morseObj == undefined){
            charString += "CANNOT FIND CODE";
        }else{
            charString += morseObj.charKey;
        }
    });
    return charString;
}

export const translateToChars = (morseInput) => {
    const validMorseArray = validMorse(morseInput);
    let htmlOutput =  "";
    if (validMorseArray != "INVALID INPUT"){
        htmlOutput = translateMorseArray(validMorseArray);
    }else{
        htmlOutput = "INVALID INPUT"
    }
    return htmlOutput;
}