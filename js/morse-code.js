const filterValidChars = (wordInput) => {
    const wordArry = wordInput.split("");
    const regFilter = new RegExp( `([A-Z0-9&'@)(:,=!.%+"?/])`, `gi`)
    const filteredWordArray = wordArry.filter((arryChar) => arryChar.match(regFilter));
    return filteredWordArray;
}

lettersToMorse("bobby &&>HUdfuehgIO@~>?@:L{)");