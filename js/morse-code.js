const lettersToMorse = (wordInput) => {
    const wordArry = wordInput.split("");
    const regFilter = `/([A-Za-z0-9&'@)(:,=!.\-%+"?/])/gi`
    console.log(regFilter);
    // const filteredWordArray = wordArry.filter()
}

lettersToMorse("bobby");