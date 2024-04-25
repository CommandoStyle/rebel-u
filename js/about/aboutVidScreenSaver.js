export const aboutVidScreenSaver = () => {

var dot = document.querySelector(".screensaver"),
    sScontainer = document.querySelector(".screensaver__contain"),
    dotBounds = dot.getBoundingClientRect(),
    containerBounds = sScontainer.getBoundingClientRect(),
    xMax = containerBounds.right - dotBounds.right,
    xMin = containerBounds.left - dotBounds.left,
    yMax = containerBounds.bottom - dotBounds.bottom,
    yMin = containerBounds.top - dotBounds.top;

//make x and y go as high (or low) as you want, and the modifier will always keep it within the xMin/xMax and yMin/yMax ranges. 
gsap.to(".screensaver", {
  x: "+=2000", 
  y: "+=1000", 
  duration: 40, 
  repeat: -1,
  repeatRefresh: true,
  ease: "none", 
  modifiers:{
    x: bounceModifier(xMin, xMax),
    y: bounceModifier(yMin, yMax)
  }
});

//this function spits back a modifier function that'll keep the value within a range, bouncing off the min/max boundaries. 
function bounceModifier(min, max) {
  var range = max - min;
  return function(value) {
    value = parseFloat(value); // comes in as px, like "10px"
    var cycle, clippedValue;
    if (value > max) {
      cycle = (value - max) / range;
      clippedValue = (cycle % 1) * range;
      value = ((cycle | 0) & 1 !== 0) ? min + clippedValue : max - clippedValue; //on even cycles, go backwards.
    } else if (value < min) {
      cycle = (min - value) / range;
      clippedValue = (cycle % 1) * range;
      value = ((cycle | 0) & 1 !== 0) ? max - clippedValue : min + clippedValue; //on even cycles, go backwards.
    }
    return value + "px";
    }
  }
}
