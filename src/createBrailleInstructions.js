import { brailleTable } from "./brailleTable.js";

export const createBrailleInstructions = (braillePatternString) => {
  if (braillePatternString) {
    console.log("createBrailleInstructions: ", braillePatternString);
    const lines = braillePatternString.split("\n");

    let instructions = "";
    lines.forEach((line, index) => {
      // process line
      instructions += `Row ${index + 1}:`;

      if (line.length > 1) {
        let repeatCharCount = 1;

        for (let chrIndex = 1; chrIndex < line.length; chrIndex++) {
          const brailleChar = line[chrIndex];
          let previousBrailleChar = line[chrIndex - 1];
          const mappedPreviousBraille = brailleTable.find(
            (brailleMap) => brailleMap.brailleForm === previousBrailleChar
          );
          instructions += ` ${mappedPreviousBraille.meaning},`;

          if (brailleChar != previousBrailleChar) {
            const mappedBraille = brailleTable.find(
              (brailleMap) => brailleMap.brailleForm === brailleChar
            );

            if (repeatCharCount > 1) {
              instructions += `(x${repeatCharCount}),`;
              repeatCharCount = 0;
            } else {
              instructions += `${mappedPreviousBraille.meaning}`;
            }
          } else {
            repeatCharCount += 1;
          }
          previousBrailleChar = brailleChar;
        }

        if (repeatCharCount > 1) {
          // remove last comma
          instructions = instructions.substr(0, instructions.length - 1);
          //print repeats
          instructions += `(x${repeatCharCount}),`;
        }
      } else {
        // one char in line
        const mappedBraille = brailleTable.find(
          (brailleMap) => brailleMap.brailleForm === line[0]
        );
        instructions += ` ${mappedBraille.meaning},`;
      }
      // remove last comma
      instructions = instructions.substr(0, instructions.length - 1);
      instructions += "\n";
    });
    return instructions;
  }
};
