const {translateToMorse} = require('./morse-code.js');

describe(translateToMorse,() => {
    it("B should translate to -...", () => {
        const result = translateToMorse("B");
        expect(result).toEqual("-...");
    });

    it("b should translate to -...", () => {
        const result = translateToMorse("b");
        expect(result).toEqual("-...");
    });

    it("tAb should translate to - .- -...", () => {
        const result = translateToMorse("tAb");
        expect(result).toEqual("- .- -...");
    });

    it("B aT should translate to - .- -...", () => {
        const result = translateToMorse("B aT");
        expect(result).toEqual("-... .- -");
    });

    it("5 should translate to .....", () => {
        const result = translateToMorse(5);
        expect(result).toEqual(".....");
    });

    it("& should translate to .-...", () => {
        const result = translateToMorse("&");
        expect(result).toEqual(".-...");
    });
    it("An empty input returns nothing", () => {
        const result = translateToMorse("");
        expect(result).toEqual("");
    });
    it("> should translate to nothing", () => {
        const result = translateToMorse(">");
        expect(result).toEqual("");
    });
    it(">p should translate to .--.", () => {
        const result = translateToMorse(">p");
        expect(result).toEqual(".--.");
    });

});