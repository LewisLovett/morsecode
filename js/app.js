import {translateToMorse} from "./morse-code.js";

const handleTranslateBtnClick = () => {
    const wordInput = document.querySelector("#word-input").value;
    document.querySelector("#morse-output").innerHTML = translateToMorse(wordInput);;
}

document.querySelector("#translateBtn").addEventListener("click",handleTranslateBtnClick);