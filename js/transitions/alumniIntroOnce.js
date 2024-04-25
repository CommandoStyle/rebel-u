export const alumniIntroOnce = (container) => {

var targets = gsap.utils.toArray(".hero-cases__slide-contain");
var offset = 120;
var max = -(targets.length - 1) * offset;

gsap.set(".alumni-reveal", { x: -30, opacity: 0 });
gsap.set(['.home-logo', ".menu-txt", ".touch-print-open__wrap", '.beta__txt', ".sml__square", '.hero-info__marquee-wrap', '.reb-tag__wrap'], {autoAlpha: 0});
gsap.set([".redact-cover-logo", ".redact-cover-beta", ".redact-cover-info", ".redact-cover-nav"], {scaleX: 0 });
gsap.set(".redact-cover-tag", {scaleX: 0 });
gsap.set('.cookie__wrap', { xPercent: -105 });
gsap.set('.cookie__container', { xPercent: 105 });
gsap.set('.cookie-txt__reveal', { x: -30, opacity: 0 });
gsap.set('.cookie__notice', { overflow: "hidden" });
gsap.set(".hero-cases__slider-track", { yPercent: 300, autoAlpha: 0 });
gsap.set(targets, { yPercent: (i) => {return i * offset; }, });
gsap.set('.beta__contain', {clipPath: "inset(0% 100% 0% 0%)"});
  
var tlx = gsap.timeline({ paused: true, repeat: -1,
repeatDelay: 1, repeatRefresh: true });

  tlx.to(targets, {
    ease: "expo.inOut",
    duration: 1.6,
    yPercent: "-=" + offset,
    modifiers: {
      yPercent: (value) => {
        return gsap.utils.wrap(offset, max, value);
      }
    }
  });


var alumniIntroOnce = gsap.timeline();
      
alumniIntroOnce

.to(".redact-cover-logo", { delay: 1, scaleX: 1, transformOrigin: "0% 100%", duration: 0.381, ease: "linear"})
.to(['.home-logo', '.beta__txt'], { autoAlpha: 1, duration: 0.001})
.to(".redact-cover-logo", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.381, ease: "linear"})
.to('.beta__contain', {delay: 0.12, clipPath: "inset(0% 0% 0% 0%)", duration: 0.18, ease: "power1.eastOut"})
.to(".redact-cover-info", { delay: 0.876, scaleX: 1, transformOrigin: "0% 100%", duration: 0.468, ease: "linear"})
.to('.hero-info__marquee-wrap', { autoAlpha: 1, duration: 0.001})
.to(".redact-cover-info", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.468, ease: "linear"})
.to(".redact-cover-nav", { delay: 1.134, scaleX: 1, transformOrigin: "0% 100%", duration: 0.129, ease: "linear"})
.to([".menu-txt", ".touch-print-open__wrap"], { autoAlpha: 1, duration: 0.001})
.to(".redact-cover-nav", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.129, ease: "linear"})
.to(".redact-cover-tag", { delay: 0.25, scaleX: 1, transformOrigin: "0% 100%", duration: 0.35, ease: "linear"})
.to(".reb-tag__wrap", { autoAlpha: 1, duration: 0.001})
.to(".redact-cover-tag", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.35, ease: "linear"}, "-=0.01")
.to(".alumni-reveal", { duration: 1.2, x: 0, stagger: 0.03, ease: "expo.out" }, "-=0.941")
.to(".alumni-reveal", { duration: 0.4, opacity: 1, stagger: 0.03, ease: "linear" }, "<")
.set (".hero-cases__slider-track", { autoAlpha: 1}, "-=0.15")
.fromTo(".hero-cases__slider-track", { yPercent: 300 }, { yPercent: 0, ease: Power3.easeIn, duration: 0.2 }, "<")
.to(targets, { ease: "linear", duration: 0.06, yPercent: "-=" + offset, modifiers: { yPercent: (value) => { return gsap.utils.wrap(offset, max, value); }}, repeat: 14, repeatRefresh: true }, "<")
.add(tlx.play(), ">")
.to('.cookie__wrap', { delay: 0.5, xPercent: 0, duration: 1.6, ease: "expo.easeOut" })
.to('.cookie__container', { xPercent: 0, duration: 1.6, ease: "expo.easeOut" }, "<")
.to(".cookie-txt__reveal", { x: 0, opacity: 1, duration: 0.3, ease: "power1.out" }, "-=0.2")
.to('.cookie__notice', { overflow: "visible", duration: 0.001 });

}
