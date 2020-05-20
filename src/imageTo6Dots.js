export const imageTo6Dots = () => {
  if (dots.file) {
    dots.file();
    // hack - wait 1 sec for the dot.file() to finish, then execute the actual imageTo6Dots code
    setTimeout(() => {
      var brailleText = di("txt").value;
      var newImageWith6Dots = "";
      for (i = 0; i < brailleText.length; i++) {
        // clear dot 7 and 8, only want dots 1 to 6
        newImageWith6Dots += String.fromCharCode(
          brailleText[i].charCodeAt() & 0xff3f
        );
      }
      // console.log(newImage);
      di("txt").value = newImageWith6Dots;
    }, 1000);
  } else {
    console.error("Failed - Could not find dots.file()");
  }
};
