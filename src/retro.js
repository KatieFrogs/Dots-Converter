import { onClickImageTo6Dots } from "./onClickImageTo6Dots.js";

(function extendDotsObject() {
  console.log("extendDotsObject");

  dots = dots || {};
  dots.onClickImageTo6Dots = onClickImageTo6Dots;
})();

(function initInputValues() {
  console.log("initInputValues");
  // set Width and Height
  di("widt").value = 80;
  di("heig").value = 80;

  // set Brightness slider
  di("fuzzw").value = 30;
})();
