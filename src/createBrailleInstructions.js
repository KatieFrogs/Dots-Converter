import { brailleTable } from "./brailleTable.js";

export const createBrailleInstructions = (braillePatternString) => {
  let maxLine = 0;
  let maxRow = 0;
  let rows = [];

  if (braillePatternString) {
    console.log("createBrailleInstructions:\n", braillePatternString);
    const lines = braillePatternString.split("\n");
    lines.forEach((line, index) => {
      if (line.length > maxLine) {
        maxLine = line.length;
        maxRow = index + 1;
      }

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

      rows.push(
        `Row ${(index + 1).toString().padStart(2, "0")}: ${rowInstructions.join(
          ", "
        )}\n`
      );
    });
  }

  return {
    instructions: rows,
    maxLineLength: maxLine,
    maxRow: maxRow,
  };
};
