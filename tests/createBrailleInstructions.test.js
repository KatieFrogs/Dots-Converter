import { expect } from "chai";
import { createBrailleInstructions } from "../src/createBrailleInstructions.js";

describe("createBrailleInstructions", function () {
  describe("with one row", function () {
    describe("should handle repeated characters", function () {
      it("when repeats are the first characters in the line", function () {
        const result = createBrailleInstructions("⠁⠁");
        expect(result).to.equal("Row 1: a[2 times]\n");
      });

      it("when repeats are in the last part of line", function () {
        const result = createBrailleInstructions("⠃⠁⠁");
        expect(result).to.equal("Row 1: b, a[2 times]\n");
      });

      it("when more than 2 repeats in the middle of sentence", function () {
        const result = createBrailleInstructions("⠃⠁⠁⠁⠁⠁⠁⠃");
        expect(result).to.equal("Row 1: b, a[6 times], b\n");
      });

      it("when repeats are in the middle of line", function () {
        const result = createBrailleInstructions("⠃⠁⠁⠃");
        expect(result).to.equal("Row 1: b, a[2 times], b\n");
      });
    });

    it("should handle only one character in row", function () {
      const result = createBrailleInstructions("⠁");
      expect(result).to.equal("Row 1: a\n");
    });
  });
});
