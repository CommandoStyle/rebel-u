import gsap from 'gsap';

const propIntroOnce = (container) => {

gsap.registerPlugin(SplitText);

gsap.set(".prop-reveal", { "will-change": "transform, opacity", x: -20, opacity: 0 });
gsap.set(['.home-logo', ".menu-txt", ".touch-print-open__wrap", '.beta__txt', ".currencies-txt", '.hero-info__marquee-wrap', ".currencies-list__contain"], {autoAlpha: 0});
gsap.set([".redact-cover-logo", ".redact-cover-info", ".redact-cover-currency-lg", ".redact-cover-nav"], {scaleX: 0 });
gsap.set(['.repackaged__wrap', ".hero-yes-you__wrap"], { autoAlpha: 0 });
gsap.set(['.redact-cover-repack', '.hero-yes-you__bg'], { scaleX: 0 });
gsap.set('.hero-yes-you__bg', { "will-change": "transform", scaleX: 0, display: "block" });
gsap.set('.cookie__wrap', { xPercent: -105 });
gsap.set('.cookie__container', { xPercent: 105 });
gsap.set('.cookie-txt__reveal', { x: -30, opacity: 0 });
gsap.set('.cookie__notice', { overflow: "hidden" });
gsap.set('.beta__contain', {clipPath: "inset(0% 100% 0% 0%)"});

const packagedCirc = document.getElementById("packaged-circle");
const packagedCircdata = packagedCirc.getAttribute("lottie-data");
packagedCirc.load(packagedCircdata);
               
var propIntroOnce = gsap.timeline();
        
propIntroOnce
        
        .to(".hero__yes-you-contain", { delay: 1, autoAlpha: 1, duration: 0.001})
        .to(".redact-cover-logo", { delay: 1, scaleX: 1, transformOrigin: "0% 100%", duration: 0.492, ease: "linear"})
        .to(['.home-logo', '.beta__txt'], { autoAlpha: 1, duration: 0.001})
        .to(".redact-cover-logo", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.492, ease: "linear"})
        .to('.beta__contain', {delay: 0.12, clipPath: "inset(0% 0% 0% 0%)", duration: 0.18, ease: "power1.eastOut"})
        .to(".redact-cover-info", { delay: 0.765, scaleX: 1, transformOrigin: "0% 100%", duration: 0.468, ease: "linear"})
        .to('.hero-info__marquee-wrap', { autoAlpha: 1, duration: 0.001})
        .to(".redact-cover-info", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.468, ease: "linear"})
        .to(".redact-cover-currency-lg", { delay: 0.477, scaleX: 1, transformOrigin: "0% 100%", duration: 0.184, ease: "linear"})
        .to(".currencies-list__contain", { autoAlpha: 1, duration: 0.001})
        .to(".redact-cover-currency-lg", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.184, ease: "linear"})
        .to(".redact-cover-nav", { delay: 0.48, scaleX: 1, transformOrigin: "0% 100%", duration: 0.129, ease: "linear"})
        .to([".menu-txt", ".touch-print-open__wrap"], { autoAlpha: 1, duration: 0.001})
        .to(".redact-cover-nav", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.129, ease: "linear"})
        .to(".hero-yes-you__bg", { delay: 0.25, scaleX: 1, transformOrigin: "0% 100%", duration: 0.55, ease: "linear"})
        .to(".hero-yes-you__wrap", { autoAlpha: 1, duration: 0.001})
        .to(".hero-yes-you__bg", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.55, ease: "linear"}, "-=0.02")
        .to(".prop-reveal", { duration: 1.2, x: 0, stagger: 0.03, ease: "expo.out" }, "-=1.112")
        .to(".prop-reveal", { duration: 0.4, opacity: 1, stagger: 0.03, ease: "linear" }, "<")
        .to(".redact-cover-repack", { scaleX: 1, transformOrigin: "0% 100%", duration: 0.4, ease: "linear"}, "-=0.212")
        .to('.repackaged__wrap', { autoAlpha: 1, duration: 0.001})
        .to(".redact-cover-repack", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.4, ease: "linear"}, "-=0.01")
        .call(function() { packagedCirc.play(); })
        .to('.cookie__wrap', { delay: 0.5, xPercent: 0, duration: 1.6, ease: "expo.easeOut" })
        .to('.cookie__container', { xPercent: 0, duration: 1.6, ease: "expo.easeOut" }, "<")
        .to(".cookie-txt__reveal", { x: 0, opacity: 1, duration: 0.3, ease: "power1.out" }, "-=0.2")
        .to('.cookie__notice', { overflow: "visible", duration: 0.001 });
        
        return tl;
  
  }

export default propIntroOnce;