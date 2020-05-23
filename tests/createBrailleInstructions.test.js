import { expect } from "chai";
import { createBrailleInstructions } from "../src/createBrailleInstructions.js";

describe("createBrailleInstructions", function () {
  it("should return 1 row with one character", function () {
    const result = createBrailleInstructions("⠁");
    expect(result).to.equal("Row 1: a\n");
  });

  it("should handle repeat characters in a row", function () {
    const result = createBrailleInstructions("⠁⠁");
    expect(result).to.equal("Row 1: a(x2)\n");
  });
});
