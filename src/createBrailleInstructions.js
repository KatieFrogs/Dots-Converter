import { brailleTable } from "./brailleTable.js";

export const createBrailleInstructions = (braillePatternString) => {
  if (braillePatternString) {
    console.log("click - createBrailleInstructions", braillePatternString);
    const lines = braillePatternString.split("\n");

    let instructions = "";
    lines.forEach((line, index) => {
      // process line
      instructions += `Row ${index + 1}: `;
      for (let chrIndex = 0; chrIndex < line.length; chrIndex++) {
        const brailleChar = line[chrIndex];
        const mappedBraille = brailleTable.find(
          (brailleMap) => brailleMap.brailleForm === brailleChar
        );
        instructions += `${mappedBraille.meaning},`;
      }
      instructions += "\n";
    });
    return instructions;
  }
};
