const lettersToMorse = (wordInput) => {
    const wordArry = wordInput.split("");
    const regFilter = new RegExp( `([A-Z0-9&'@)(:,=!.%+"?/])`, `gi`)
    const filteredWordArray = wordArry.filter((arryChar) => arryChar.match(regFilter));
    console.log(filteredWordArray);
}

lettersToMorse("bobby &&>HUdfuehgIO@~>?@:L{)");