import { brailleTable } from "./brailleTable.js";

export const createBrailleInstructions = (braillePatternString) => {
  if (braillePatternString) {
    console.log("createBrailleInstructions: ", braillePatternString);
    const lines = braillePatternString.split("\n");

    let rows = [];
    lines.forEach((line, index) => {
      line = "B" + line + "E"; // append 2 known characters to the line =>  B=Begin; E=End

      let rowInstructions = [];
      let repeatRecorded = [];

      // process line
      for (let chrIndex = 1; chrIndex < line.length; chrIndex++) {
        const brailleChar = line[chrIndex];
        let previousBrailleChar = line[chrIndex - 1];

        // find braille character meaning
        const mappedBraille = brailleTable.find(
          (brailleMap) => brailleMap.brailleForm === brailleChar
        );

        if (brailleChar != previousBrailleChar) {
          if (mappedBraille) {
            rowInstructions.push(mappedBraille.meaning);
            repeatRecorded = [];
            repeatRecorded.push(mappedBraille.meaning);
          }
        } else {
          repeatRecorded.push(mappedBraille.meaning);
          // replace last array element as a repeat was detected
          rowInstructions[
            rowInstructions.length - 1
          ] = `${mappedBraille.meaning}[${repeatRecorded.length} times]`;
        }
      }

      rows.push(`Row ${index + 1}: ${rowInstructions.join(", ")}\n`);
    });
    return rows.join("");
  }
};
