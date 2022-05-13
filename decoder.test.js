import { decoder } from "./decoder";



describe("Testing decoder function for Morse code application", () => {
    // console.log(perimeter(10, 10));
    it("should return the correct translation for a given string in English characters", () => {
        // 1. run our functions
        // 2. jest to validate that the function are returning the right thing
        expect(decoder("test")).toBe("-/./.../-");
        expect(decoder("Morse Code Testing")).toBe("--/---/.-./..././ /-.-./---/-.././ /-/./.../-/../-./--.");
        expect(decoder("The quick brown fox jumps over the lazy dog 0123456789")).toBe('-/...././ /--.-/..-/../-.-./-.-/ /-.../.-./---/.--/-./ /..-./---/-..-/ /.---/..-/--/.--./.../ /---/...-/./.-./ /-/...././ /.-../.-/--../-.--/ /-../---/--./ /-----/.----/..---/...--/....-/...../-..../--.../---../----.');
    });

     it("should return the correct translation for a given string of dots and dashes", () => {
        // 1. run our functions
        // 2. jest to validate that the function are returning the right thing
        expect(decoder("-/./.../-")).toBe("test");
        expect(decoder("--/---/.-./..././ /-.-./---/-.././ /-/./.../-/../-./--.")).toBe("morse code testing");
        expect(decoder("-/...././ /--.-/..-/../-.-./-.-/ /-.../.-./---/.--/-./ /..-./---/-..-/ /.---/..-/--/.--./.../ /---/...-/./.-./ /-/...././ /.-../.-/--../-.--/ /-../---/--./ /-----/.----/..---/...--/....-/...../-..../--.../---../----.")).toBe('the quick brown fox jumps over the lazy dog 0123456789');
    });

    it("should return a string advising that the input is incorrect if starting with an unsupported character", () => {
        // 1. run our functions
        // 2. jest to validate that the function are returning the right thing
        expect(decoder("$")).toBe("ERROR! :Please see instructions for correct use");
        expect(decoder("       ")).toBe("ERROR! :Please see instructions for correct use");
        expect(decoder("_")).toBe("ERROR! :Please see instructions for correct use");
        expect(decoder([])).toBe("ERROR! :Please see instructions for correct use");
        expect(decoder({})).toBe("ERROR! :Please see instructions for correct use");
        expect(decoder("")).toBe("ERROR! :Please see instructions for correct use");
    });


});
