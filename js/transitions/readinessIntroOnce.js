export const readinessIntroOnce = (container) => {

//gsap.set(".quiz__h-contain", { "will-change": "transform, opacity", x: -30, opacity: 0 });
gsap.set("#quizstampimg", {autoAlpha: 0});
gsap.set(".stamp-redact-cover", {scaleX: 0 });
gsap.set('.cookie__wrap', { xPercent: -105 });
gsap.set('.cookie__container', { xPercent: 105 });
gsap.set('.cookie-txt__reveal', { x: -30, opacity: 0 });
gsap.set('.cookie__notice', { overflow: "hidden", display: "flex" });
//gsap.set('.beta__contain', {clipPath: "inset(0% 100% 0% 0%)"});
//gsap.set([".sneaky__dot-bg", ".ampersand-redact-cover"], { "will-change": "transform", scaleX: 0 });
//gsap.set([".sneaky__dot-contain", ".sneaky__dot-round"], {autoAlpha: 0});

const readinessCircled = document.getElementById("reb-ready__circled");
const readinessCircdata = readinessCircled.getAttribute("lottie-data");
readinessCircled.load(readinessCircdata);
               
      var readyIntroOnce = gsap.timeline();

    readyIntroOnce
	  //.to(".redact-cover-logo", { delay: 1, scaleX: 1, transformOrigin: "0% 100%", duration: 0.711, ease: "linear"})
	  //.to('.home-logo', { autoAlpha: 1, duration: 0.001})
	  //.to(".redact-cover-logo", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.711, ease: "linear"})
	  //.to('.beta__contain', {delay: 0.12, clipPath: "inset(0% 0% 0% 0%)", duration: 0.18, ease: "power1.eastOut"})
	  //.to(".redact-cover-info", { delay: 0.548, scaleX: 1, transformOrigin: "0% 100%", duration: 0.468, ease: "linear"})
	  //.to('.hero-info__marquee-wrap', { autoAlpha: 1, duration: 0.001})
	  //.to(".redact-cover-info", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.468, ease: "linear"})
	  //.to(".redact-cover-nav", { delay: 1.134, scaleX: 1, transformOrigin: "0% 100%", duration: 0.129, ease: "linear"})
	  //.to([".menu-txt", ".touch-print-open__wrap"], { autoAlpha: 1, duration: 0.001})
	  //.to(".redact-cover-nav", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.129, ease: "linear"})
	  //.to(".quiz__h-contain", { delay: 0.3, duration: 0.8, x: 0, ease: "expo.out" })
	  //.to(".quiz__h-contain", { duration: 0.3, opacity: 1, ease: "linear" }, "<")
	  .to(".stamp-redact-cover", { delay: 0.6, scaleX: 1, transformOrigin: "0% 100%", duration: 0.45, ease: "linear"})
	  .to("#quizstampimg", { autoAlpha: 1, duration: 0.001})
	  .to(".stamp-redact-cover", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.45, ease: "linear"})
	  .add(gsap.delayedCall(0.3, function() { readinessCircled.play(); }))
	  .to('.cookie__wrap', { delay: 0.5, xPercent: 0, duration: 1.6, ease: "expo.easeOut" })
          .to('.cookie__container', { xPercent: 0, duration: 1.6, ease: "expo.easeOut" }, "<")
	  .to(".cookie-txt__reveal", { x: 0, opacity: 1, duration: 0.3, ease: "power1.out" }, "-=0.2")
	  .to('.cookie__notice', { overflow: "visible", duration: 0.001 });
	  
    }
