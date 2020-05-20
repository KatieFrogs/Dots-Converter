(function extendDotsObject() {
  console.log("extendDotsObject");

  dots = dots || {};

  dots.imageTo6Dots = function () {
    if (dots.file) {
      dots.file();
      // hack a wait for the dot.file() to finish before convert to 6-dot will run
      setTimeout(() => {
        var brailleText = di("txt").value;
        var newImage = "";
        for (i = 0; i < brailleText.length; i++) {
          // clear dot 7 and 8, only want dots 1 to 6
          newImage += String.fromCharCode(brailleText[i].charCodeAt() & 0xff3f);
        }
        // console.log(newImage);
        di("txt").value = newImage;
      }, 1000);
    } else {
      console.error("Failed - Could not find dots.file()");
    }
  };
})();

(function initInputValues() {
  console.log("initInputValues");
  // set Width and Height
  di("widt").value = 80;
  di("heig").value = 80;

  // set Brightness slider
  di("fuzzw").value = 30;
})();
