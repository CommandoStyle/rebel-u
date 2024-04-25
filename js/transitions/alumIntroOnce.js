import gsap from 'gsap';

// Case files hero intro reveal

const alumIntroOnce = (container) => {

gsap.set(".alum-reveal", { x: -30, opacity: 0 });
gsap.set(['.home-logo', ".menu-txt", ".touch-print-open__wrap", '.beta__txt', '.hero-info__marquee-wrap', '.alumni-name__inner', '.mrebel-says__deets-txt'], {autoAlpha: 0});
gsap.set([".redact-cover-logo", ".redact-cover-info", ".redact-cover-nav", ".redact-cover-year"], {scaleX: 0 });
gsap.set('.alum-img__bg', { scaleX: 0 });
gsap.set('.cookie__wrap', { xPercent: -105 });
gsap.set('.cookie__container', { xPercent: 105 });
gsap.set('.cookie-txt__reveal', { x: -30, opacity: 0 });
gsap.set('.cookie__notice', { overflow: "hidden" });
gsap.set('.revert-arrow__track', { x: 100, overwrite: "auto" });
gsap.set(".alum-img__inner", { autoAlpha: 0 });
gsap.set('.beta__contain', {clipPath: "inset(0% 100% 0% 0%)"});


var alumIntroOnce = gsap.timeline();
      
alumIntroOnce

.to(".redact-cover-logo", { delay: 1, scaleX: 1, transformOrigin: "0% 100%", duration: 0.668, ease: "linear"})
.to(['.home-logo', '.beta__txt'], { autoAlpha: 1, duration: 0.001})
.to(".redact-cover-logo", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.668, ease: "linear"})
.to('.beta__contain', {delay: 0.12, clipPath: "inset(0% 0% 0% 0%)", duration: 0.18, ease: "power1.eastOut"})
.to(".redact-cover-year", { delay: 1.22,  scaleX: 1, transformOrigin: "0% 100%", duration: 0.407, ease: "linear"})
.to('.mrebel-says__deets-txt', { autoAlpha: 1, duration: 0.001})
.to(".redact-cover-year", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.407, ease: "linear"})
.to(".redact-cover-nav", { delay: 1.71, scaleX: 1, transformOrigin: "0% 100%", duration: 0.129, ease: "linear"})
.to([".menu-txt", ".touch-print-open__wrap"], { autoAlpha: 1, duration: 0.001})
.to(".redact-cover-nav", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.129, ease: "linear"})
.to(".alum-img__bg", { delay: 0.25, scaleX: 1, transformOrigin: "0% 100%", duration: 0.4, ease: "linear"})
.to(".alum-img__inner", { autoAlpha: 1, duration: 0.001})
.to(".alum-img__bg", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.4, ease: "linear"}, "-=0.01")
.to(".alum-reveal", { duration: 1.2, x: 0, stagger: 0.03, ease: "expo.out" }, "-=1.041")
.to(".alum-reveal", { duration: 0.4, opacity: 1, stagger: 0.03, ease: "linear" }, "<")
.to(".revert-arrow__track", { x: 0, ease: "power3.easeOut", duration: 0.75 })
.to('.cookie__wrap', { delay: 0.5, xPercent: 0, duration: 1.6, ease: "expo.easeOut" })
.to('.cookie__container', { xPercent: 0, duration: 1.6, ease: "expo.easeOut" }, "<")
.to(".cookie-txt__reveal", { x: 0, opacity: 1, duration: 0.3, ease: "power1.out" }, "-=0.2")
.to('.cookie__notice', { overflow: "visible", duration: 0.001 });

}

export default alumIntroOnce;