export const responsiveText = () => {

const mmObj = window.matchMedia("(max-width: 480px)")

//iPad and Mobile
if (mmObj.matches) {
  
function clampBuilder(minWidthPx, maxWidthPx, minFontSize, maxFontSize) {
  const root = document.querySelector("html");
  const pixelsPerRem = Number(getComputedStyle(root).fontSize.slice(0, -2));

  const minWidth = minWidthPx / pixelsPerRem;
  const maxWidth = maxWidthPx / pixelsPerRem;

  const slope = (maxFontSize - minFontSize) / (maxWidth - minWidth);
  const yAxisIntersection = -minWidth * slope + minFontSize;

  return `clamp(${minFontSize}rem, ${yAxisIntersection}rem + ${
    slope * 100
  }vw, ${maxFontSize}rem)`;
}

function calculateCh(element, fontSize) {
  const zero = document.createElement("span");
  zero.innerText = "0";
  zero.style.position = "absolute";
  zero.style.fontSize = fontSize;

  element.appendChild(zero);
  const chPixels = zero.getBoundingClientRect().width;
  element.removeChild(zero);

  return chPixels;
}

//Headline text 100% width
document.querySelectorAll(".h-full").forEach((hfull) => {
  hfull.style.fontSize = clampBuilder(320, 640, 2.65, 5.3);
  hfull.style.width = `${(320 / calculateCh(hfull, "2.65rem")) * 0.92}ch`;
  });

//Sub 100% width text w. indent
document.querySelectorAll(".sub-full-indent").forEach((subfullind) => {
  subfullind.style.fontSize = clampBuilder(320, 640, 1.456, 2.912);
  subfullind.style.width = `${(320 / calculateCh(subfullind, "1.456rem")) * 0.88}ch`;
  subfullind.style.textIndent = "2.5rem";
  });
  
//Paragraph 100% width text
document.querySelectorAll(".p-full").forEach((pfull) => {
  pfull.style.fontSize = clampBuilder(320, 640, 0.82, 1.64);
  pfull.style.width = `${(320 / calculateCh(pfull, "0.82rem")) * 0.92}ch`;
  });

//Paragraph 100% width text w. indent
document.querySelectorAll(".p-full-indent").forEach((pfullind) => {
  pfullind.style.fontSize = clampBuilder(320, 640, 0.82, 1.64);
  pfullind.style.width = `${(320 / calculateCh(pfullind, "0.82rem")) * 0.92}ch`;
  pfullind.style.textIndent = "1.9rem";
  });
  
 }

}
