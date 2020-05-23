export const onClickImageTo6Dots = () => {
  if (dots.file) {
    dots.file();
    // hack - wait 1 sec for the dot.file() to finish, then execute the actual imageTo6Dots code
    setTimeout(() => {
      document.getElementById("txt").value = convertTo6Dots(di("txt").value);
    }, 1000);
  } else {
    console.error("Failed - Could not find dots.file()");
  }
};

const convertTo6Dots = (unicodeBrailleText) => {
  var newImageWith6Dots = "";
  for (i = 0; i < unicodeBrailleText.length; i++) {
    // clear dot 7 and 8, only want dots 1 to 6
    newImageWith6Dots += String.fromCharCode(
      unicodeBrailleText[i].charCodeAt() & 0xff3f
    );
  }
  return newImageWith6Dots;
};
