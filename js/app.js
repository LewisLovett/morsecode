import {translateToChars, translateToMorse,} from "./morse-code.js";

const handleTranslateBtnClick = () => {
    const wordInput = document.querySelector("#word-input").value;

    if(document.querySelector("#charToMorseRd").checked){
        document.querySelector("#morse-output").innerHTML = translateToMorse(wordInput);

    }else if (document.querySelector("#morseToCharRd").checked){
        document.querySelector("#morse-output").innerHTML = translateToChars(wordInput);
    }
    
}

document.querySelector("#translateBtn").addEventListener("click",handleTranslateBtnClick);