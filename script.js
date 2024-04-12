//RGB Colours

//Variables to store elements
let preWidthEl = document.getElementById("widthIn");
let preHeightEl = document.getElementById("heightIn");
let redInEl = document.getElementById("redIn");
let greenInEl = document.getElementById("greenIn");
let blueInEl = document.getElementById("blueIn");
let rgbStringOutEl = document.getElementById("rgbStrOut");
let displayEl = document.getElementById("display");

//Event listener
preWidthEl.addEventListener("input", previewBox);
preHeightEl.addEventListener("input", previewBox);
redInEl.addEventListener("input", rgbPreview);
greenInEl.addEventListener("input", rgbPreview);
blueInEl.addEventListener("input", rgbPreview);

//Event Function
function rgbPreview() {
  //Input: get values
  let redVal = +redInEl.value;
  let greenVal = +greenInEl.value;
  let blueVal = +blueInEl.value;

  //Validate Colours(constrain between 0-255)
  if (redVal < 0) {
    redVal = 0;
    redInEl.value = 0;
  } else if (redVal > 255) {
    redVal = 255;
    redInEl.value = 255;
  }
  if (greenVal < 0) {
    greenVal = 0;
    greenInEl.value = 0;
  } else if (greenVal > 255) {
    greenVal = 255;
    greenInEl.value = 255;
  }
  if (blueVal < 0) {
    blueVal = 0;
    blueInEl.value = 0;
  } else if (blueVal > 255) {
    blueVal = 255;
    blueInEl.value = 255;
  }

  //Process: Build String
  let rgbString = "rgb(" + redVal + ", " + greenVal + ", " + blueVal + ")";

  //Output: Display Colour
  rgbStringOutEl.innerHTML = rgbString;
  displayEl.style.background = rgbString;
}

function previewBox() {
  //Get vals
  let heightVal = +preHeightEl.value;
  let widthVal = +preWidthEl.value;

  //Constrict vals
  if (heightVal < 50) {
    heightVal = 50;
    preHeightEl.value = 50;
  } else if (heightVal > 200) {
    heightVal = 200;
    preHeightEl.value = 200;
  }

  if (widthVal < 50) {
    widthVal = 50;
    preWidthEl.value = 50;
  } else if (widthVal > 400) {
    widthVal = 400;
    preWidthEl.value = 400;
  }

  //Output
  displayEl.style.width = widthVal + "px";
  displayEl.style.height = heightVal + "px";
}
