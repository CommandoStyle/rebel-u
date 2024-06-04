export const aboutIntroOnce = (container) => {

gsap.registerPlugin(MorphSVGPlugin);

gsap.set(".about-reveal", { x: -30, opacity: 0 });
gsap.set(['.home-logo', ".menu-txt", ".touch-print-open__wrap", '.beta__txt', '.hero-info__marquee-wrap', '.reb-globe-html'], {autoAlpha: 0});
gsap.set([".redact-cover-logo", ".redact-cover-info", ".redact-cover-nav"], {scaleX: 0 });
gsap.set([".redact-cover-globe", ".redact-cover-your"], {scaleX: 0 });
gsap.set('.cookie__wrap', { xPercent: -105 });
gsap.set('.cookie__container', { xPercent: 105 });
gsap.set('.cookie-txt__reveal', { x: -30, opacity: 0 });
gsap.set('.cookie__notice', { overflow: "hidden" });
gsap.set('.u-txt', { autoAlpha: 1 });
gsap.set(['.about-hero__cm-wrap', ".about-hero-logo__wrap"], { rotationY: -180 });
gsap.set([".about-hero-o__contain", ".about-hero-u__contain"], { transformStyle: "preserve-3d" });
gsap.set('.beta__contain', {clipPath: "inset(0% 100% 0% 0%)"});
               
var aboutIntroOnce = gsap.timeline();
      
aboutIntroOnce

.to(".redact-cover-logo", { delay: 1, scaleX: 1, transformOrigin: "0% 100%", duration: 0.36, ease: "linear"})
.to(['.home-logo', '.beta__txt'], { autoAlpha: 1, duration: 0.001})
.to(".redact-cover-logo", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.36, ease: "linear"})
.to('.beta__contain', {delay: 0.12, clipPath: "inset(0% 0% 0% 0%)", duration: 0.18, ease: "power1.eastOut"})
.to(".redact-cover-info", { delay: 0.897, scaleX: 1, transformOrigin: "0% 100%", duration: 0.468, ease: "linear"})
.to('.hero-info__marquee-wrap', { autoAlpha: 1, duration: 0.001})
.to(".redact-cover-info", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.468, ease: "linear"})
.to(".redact-cover-nav", { delay: 1.134, scaleX: 1, transformOrigin: "0% 100%", duration: 0.129, ease: "linear"})
.to([".menu-txt", ".touch-print-open__wrap"], { autoAlpha: 1, duration: 0.001})
.to(".redact-cover-nav", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.129, ease: "linear"})
.to(".redact-cover-globe", { delay: 0.25, scaleX: 1, transformOrigin: "0% 100%", duration: 0.5, ease: "linear"})
.to( ".reb-globe-html", { autoAlpha: 1, duration: 0.001})
.to(".redact-cover-globe", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.5, ease: "linear"}, "+=0.01")
.to(".about-reveal", { duration: 1.2, x: 0, stagger: 0.03, ease: "expo.out" }, "-=1.001")
.to(".about-reveal", { duration: 0.4, opacity: 1, stagger: 0.03, ease: "linear" }, "<")
.to('.about-hero-o__wrap', { duration: 0.5, rotationY: 180, ease: "power1.inOut" }, "-=0.501")
.to('.about-hero__cm-wrap', { duration: 0.5, rotationY: 0, ease: "power1.inOut" }, "<")
.to('.about-hero__cm-wrap', { z: 50, duration: 0.001 }, "-=0.32")
.to('.about-hero-u__wrap', { duration: 0.5, rotationY: 180, ease: "power1.inOut" }, "-=0.3")
.to('.about-hero-logo__wrap', { duration: 0.5, rotationY: 0, ease: "power1.inOut" }, "<")
.to('.about-hero-logo__wrap', { z: 50, duration: 0.001 }, "-=0.32")
.to('.cookie__wrap', { delay: 0.5, xPercent: 0, duration: 1.6, ease: "expo.easeOut" })
.to('.cookie__container', { xPercent: 0, duration: 1.6, ease: "expo.easeOut" }, "<")
.to(".cookie-txt__reveal", { x: 0, opacity: 1, duration: 0.3, ease: "power1.out" }, "-=0.2")
.to('.cookie__notice', { overflow: "visible", duration: 0.001 });

  
  //REB GLOBE SVG ROTATION
  
  [2, 3, 4, 5, 6].forEach((idx) => {
  const sourceEl = document.querySelector(`#line_${idx}`);
  const targetEl = document.querySelector(`#line_${idx - 1}`);
  
  gsap.to(sourceEl, {
    duration: 2,
    ease: "none",
    repeat: -1,
    morphSVG: targetEl
      });
    });
    
  }
