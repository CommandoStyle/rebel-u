import gsap from 'gsap';

// Mr Ebel post intro reveal

const ebelPostIntroOnce = (container) => {

gsap.registerPlugin(SplitText);

gsap.set(['.home-logo', ".menu-txt", ".touch-print-open__wrap", ".beta__txt", '.mrebel-says__deets-txt', ".mrebel-says__date-txt", ".query-txt", ".query-away__track"], {autoAlpha: 0});
gsap.set([".redact-cover-logo", ".redact-cover-query", ".redact-cover-nav", ".redact-cover-date", ".redact-cover-qa"], {scaleX: 0 });
gsap.set('.mrebel-says__bg', { scaleX: 0});
//gsap.set(".mrebel-says__img-wrap", { yPercent: 100 })
gsap.set(".mrebel-says__img-inner", { autoAlpha: 0 })
gsap.set('.cookie__wrap', { xPercent: -105 });
gsap.set('.cookie__container', { xPercent: 105 });
gsap.set('.cookie-txt__reveal', { x: -30, opacity: 0 });
gsap.set('.cookie__notice', { overflow: "hidden" });
gsap.set(".revert-arrow__track", { x: 100, overwrite: "auto" });
gsap.set('.beta__contain', {clipPath: "inset(0% 100% 0% 0%)"});

gsap.utils.toArray(".split-lines").forEach(function(elem) {
  
    const innerSplit = new SplitText(elem, {
      type: "lines",
      linesClass: "lineChild"
    });
    //const outerSplit = new SplitText(elem, {
      //type: "lines",
      //linesClass: "lineParent"
    //});

    gsap.set(innerSplit.lines, { x: -30, opacity: 0 });
    //gsap.set(outerSplit.lines, { yPercent: 100 });

var ebelPostIntroOnce = gsap.timeline();

ebelPostIntroOnce

    .to(".redact-cover-logo", { delay: 1, scaleX: 1, transformOrigin: "0% 100%", duration: 0.567, ease: "linear"})
    .to(['.home-logo', '.mrebel-says__deets-txt', ".beta__txt"], { autoAlpha: 1, duration: 0.001})
    .to(".redact-cover-logo", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.567, ease: "linear"}) 
    .to('.beta__contain', {delay: 0.12, clipPath: "inset(0% 0% 0% 0%)", duration: 0.18, ease: "power1.eastOut"}) 
    .to(".redact-cover-date", { delay: 1.37, scaleX: 1, transformOrigin: "0% 100%", duration: 0.2, ease: "linear"})
    .to(".mrebel-says__date-txt", { autoAlpha: 1, duration: 0.001})
    .to(".redact-cover-date", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.2, ease: "linear"})
    .to([".redact-cover-query", ".redact-cover-qa"], { delay: 1.03, scaleX: 1, transformOrigin: "0% 100%", duration: 0.186, ease: "linear"})
    .to([".query-txt", ".query-away__track"], { autoAlpha: 1, duration: 0.001})
    .to([".redact-cover-query", ".redact-cover-qa"], { scaleX: 0, transformOrigin: "100% 0%", duration: 0.186, ease: "linear"})
    .to(".redact-cover-nav", { delay: 0.48, scaleX: 1, transformOrigin: "0% 100%", duration: 0.129, ease: "linear"})
    .to([".menu-txt", ".touch-print-open__wrap"], { autoAlpha: 1, duration: 0.001})
    .to(".redact-cover-nav", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.129, ease: "linear"})
    .to(".mrebel-says__bg", { delay: 0.25, scaleX: 1, transformOrigin: "0% 100%", duration: 0.45, ease: "linear"})
    .to(".mrebel-says__img-inner", { autoAlpha: 1, duration: 0.001})
    .to(".mrebel-says__bg", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.45, ease: "linear"}, "-=0.02")
    .to(innerSplit.lines, { duration: 1.6, x: 0, stagger: 0.03, ease: "expo.out" }, "-=0.912")
    .to(innerSplit.lines, { duration: 0.4, opacity: 1, stagger: 0.03, ease: "linear" }, "<")
    .to(".revert-arrow__track", { x: 0, ease: "power3.easeOut", duration: 0.75 })
	  .to('.cookie__wrap', { delay: 0.5, xPercent: 0, duration: 1.6, ease: "expo.easeOut" })
    .to('.cookie__container', { xPercent: 0, duration: 1.6, ease: "expo.easeOut" }, "<")
	  .to(".cookie-txt__reveal", { x: 0, opacity: 1, duration: 0.3, ease: "power1.out" }, "-=0.2")
	  .to('.cookie__notice', { overflow: "visible", duration: 0.001 });

});

}

export default ebelPostIntroOnce;