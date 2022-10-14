const {translateToMorse,translateToChars} = require('./morse-code.js');

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

    describe(translateToChars,() => {
        it("-. should translate to N", () => {
            const result = translateToChars("-.");
            expect(result).toEqual("N");
        });
        it("--- ... should translate to OS", () => {
            const result = translateToChars("--- ...");
            expect(result).toEqual("OS");
        });

        it("FJSn 54 should translate to IVALID INPUT", () => {
            const result = translateToChars("FJSn 54");
            expect(result).toEqual("INVALID INPUT");
        });

        it("---------- should translate to IVALID INPUT", () => {
            const result = translateToChars("----------");
            expect(result).toEqual("INVALID INPUT");
        });
    })

});