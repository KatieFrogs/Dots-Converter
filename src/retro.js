import { onClickImageTo6Dots } from "./onClickImageTo6Dots.js";
import { createBrailleInstructions } from "./createBrailleInstructions.js";

(function extendDotsObject() {
  console.log("extendDotsObject");

  dots = dots || {};

  dots.onClickImageTo6Dots = onClickImageTo6Dots;

  dots.onClickCreateBrailleInstructions = () => {
    console.log("click - onClickCreateBrailleInstructions");
    const brailleInstructionObj = createBrailleInstructions(
      document.getElementById("txt").value
    );

    document.getElementById(
      "txt-braille-instructions"
    ).value = brailleInstructionObj.instructions.join("");

    document.getElementById(
      "txt-braille-instructions"
    ).value += `\n\nMax line length: Row ${brailleInstructionObj.maxRow}, ${brailleInstructionObj.maxLineLength} characters.`;
  };
})();

(function initInputValues() {
  console.log("initInputValues");
  // set Width and Height
  document.getElementById("widt").value = 40;
  document.getElementById("heig").value = 50;

  // set Brightness slider
  document.getElementById("fuzzw").value = 30;
})();
