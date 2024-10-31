export const mrebelIntroOnce = (container) => {

gsap.set(".mrebel-reveal", { x: -30, opacity: 0 });
//gsap.set(".mrebel-rev__mask", { yPercent: 101 });
gsap.set(['.home-logo', ".menu-txt", ".touch-print-open__wrap", '.beta__txt', ".query-txt", ".query-away__track"], {autoAlpha: 0});
gsap.set([".redact-cover-logo", ".redact-cover-query", ".redact-cover-nav", ".redact-cover-qa"], {scaleX: 0 });
gsap.set(['.indie-advisory__img', '.ebel-42__wrap'], { autoAlpha: 0 });
gsap.set(['.redact-cover-advisory', '.redact-cover-42'], { scaleX: 0 });
gsap.set('.cookie__wrap', { xPercent: -105 });
gsap.set('.cookie__container', { xPercent: 105 });
gsap.set('.cookie-txt__reveal', { x: -30, opacity: 0 });
gsap.set('.cookie__notice', { overflow: "hidden" });
gsap.set('.beta__contain', {clipPath: "inset(0% 100% 0% 0%)"});

const circleXL = document.getElementById("hero__lottie-answer");
const circleXLdata = circleXL.getAttribute("lottie-data");
circleXL.load(circleXLdata);

const fortyTwo = document.getElementById("ebel-42__circled");
const fortyTwodata = fortyTwo.getAttribute("lottie-data");
fortyTwo.load(fortyTwodata);

var ebelIntroOnce = gsap.timeline();

ebelIntroOnce

.to(".redact-cover-logo", { delay: 1, scaleX: 1, transformOrigin: "0% 100%", duration: 0.507, ease: "linear"})
.to(['.home-logo', '.beta__txt'], { autoAlpha: 1, duration: 0.001})
.to(".redact-cover-logo", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.507, ease: "linear"}) 
.to('.beta__contain', {delay: 0.12, clipPath: "inset(0% 0% 0% 0%)", duration: 0.18, ease: "power1.eastOut"})
.to([".redact-cover-query", ".redact-cover-qa"], { delay: 1.695, scaleX: 1, transformOrigin: "0% 100%", duration: 0.186, ease: "linear"})
.to([".query-txt", ".query-away__track"], { autoAlpha: 1, duration: 0.001})
.to([".redact-cover-query", ".redact-cover-qa"], { scaleX: 0, transformOrigin: "100% 0%", duration: 0.186, ease: "linear"})
.to(".redact-cover-nav", { delay: 0.48, scaleX: 1, transformOrigin: "0% 100%", duration: 0.129, ease: "linear"})
.to([".menu-txt", ".touch-print-open__wrap"], { autoAlpha: 1, duration: 0.001})
.to(".redact-cover-nav", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.129, ease: "linear"})
.to(".redact-cover-advisory", { delay: 0.3, scaleX: 1, transformOrigin: "0% 100%", duration: 0.35, ease: "linear"}, "<")
.to(".indie-advisory__img", { autoAlpha: 1, duration: 0.001})
.to(".redact-cover-advisory", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.35, ease: "linear"}, "-=0.01")
.to(".redact-cover-42", { scaleX: 1, transformOrigin: "0% 100%", duration: 0.125, ease: "linear"}, "+=0.3")
.to('.ebel-42__wrap', { autoAlpha: 1, duration: 0.001, onComplete: () => { circleXL.play(); }})
.to(".redact-cover-42", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.125, ease: "linear"}, "-=0.02")
.to(".mrebel-reveal", { duration: 1.6, x: 0, stagger: 0.03, ease: "expo.out" }, "-=2.252")
.to(".mrebel-reveal", { duration: 0.4, opacity: 1, stagger: 0.03, ease: "linear" }, "<")
.add(gsap.delayedCall(0.8, function() { fortyTwo.play(); }))
.to('.cookie__wrap', { delay: 0.5, xPercent: 0, duration: 1.6, ease: "expo.easeOut" })
.to('.cookie__container', { xPercent: 0, duration: 1.6, ease: "expo.easeOut" }, "<")
.to(".cookie-txt__reveal", { x: 0, opacity: 1, duration: 0.3, ease: "power1.out" }, "-=0.2")
.to('.cookie__notice', { overflow: "visible", duration: 0.001 });

}
