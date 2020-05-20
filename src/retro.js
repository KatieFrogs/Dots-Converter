import { imageTo6Dots } from "./imageTo6Dots.js";

(function extendDotsObject() {
  console.log("extendDotsObject");

  dots = dots || {};
  dots.imageTo6Dots = imageTo6Dots;
})();

(function initInputValues() {
  console.log("initInputValues");
  // set Width and Height
  di("widt").value = 80;
  di("heig").value = 80;

  // set Brightness slider
  di("fuzzw").value = 30;
})();
