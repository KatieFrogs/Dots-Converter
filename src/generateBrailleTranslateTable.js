// reference used to create lookup table - http://interglacial.com/~sburke/braille/table.html
// or view PDF in ../docs/Braille character chart.pdf

function toDotsNotation(unicodeValue) {
  const binaryRepresentation = hex2bin(unicodeValue.toString(16));
  let dotsNotation = "";
  for (let i = 0; i <= 6; i++) {
    if (binaryRepresentation[6 - i] === "1") {
      dotsNotation += i.toString();
    }
  }
  return parseInt(dotsNotation) || "";
}

function hex2bin(hexString) {
  return parseInt(hexString, 16).toString(2).padStart(6, "0");
}

function generate() {
  let brailleLookup = [];
  for (let i = 0x2800; i <= 0x283f; i++) {
    brailleLookup.push({
      unicodeDecimal: i,
      unicodeCharNumber: "U+" + i.toString(16).toUpperCase(),
      brailleForm: String.fromCharCode(i),
      dots: toDotsNotation(i & 0x00ff), // eg: i=0x283f, then 0x3f will be passed to function
      dotsBinary: hex2bin((i & 0x00ff).toString(16)),
      meaning: "ToDo",
    });
  }
  console.log(JSON.stringify(brailleLookup, null, 2));
}

generate();
