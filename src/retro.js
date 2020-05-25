import { onClickImageTo6Dots } from "./onClickImageTo6Dots.js";
import { createBrailleInstructions } from "./createBrailleInstructions.js";

(function extendDotsObject() {
  console.log("extendDotsObject");

  dots = dots || {};

  dots.onClickImageTo6Dots = onClickImageTo6Dots;

  dots.onClickCreateBrailleInstructions = () => {
    console.log("click - onClickCreateBrailleInstructions");
    document.getElementById(
      "txt-braille-instructions"
    ).value = createBrailleInstructions(document.getElementById("txt").value);
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
