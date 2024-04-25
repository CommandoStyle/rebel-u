import gsap from 'gsap';

const legalIntroOnce = (container) => {

    gsap.set(".legal-reveal", { x: -30, opacity: 0 });
    gsap.set(['.home-logo', ".menu-txt", ".touch-print-open__wrap", '.beta__txt', '.hero-info__marquee-wrap', '.legal-lottie__contain'], {autoAlpha: 0});
    gsap.set([".redact-cover-logo", ".redact-cover-info", ".redact-cover-nav", ".sub-hero__spacer-line", ".legal-lottie__cover"], {scaleX: 0 });
    gsap.set('.cookie__wrap', { xPercent: -105 });
    gsap.set('.cookie__container', { xPercent: 105 });
    gsap.set('.cookie-txt__reveal', { x: -30, opacity: 0 });
    gsap.set('.cookie__notice', { overflow: "hidden" });
    gsap.set('.beta__contain', {clipPath: "inset(0% 100% 0% 0%)"});

var legalIntroOnce = gsap.timeline();
      
legalIntroOnce

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
.to(".legal-lottie__cover", { scaleX: 1, transformOrigin: "0% 100%", duration: 0.3, ease: "linear" })
.to(".legal-lottie__contain", { autoAlpha: 1, duration: 0.001 })
.to(".legal-lottie__cover", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.3, ease: "linear"}, "-=0.01")
.to(".sub-hero__spacer-line", { duration: 1.2, scaleX: 1, transformOrigin: "0% 100%", ease: "power2.easeOut" }, "<")
.to(".legal-reveal", { duration: 1.2, x: 0, stagger: 0.03, ease: "expo.out" }, "-=1.001")
.to(".legal-reveal", { duration: 0.4, opacity: 1, stagger: 0.03, ease: "linear" }, "<")
.to('.cookie__wrap', { delay: 0.5, xPercent: 0, duration: 1.6, ease: "expo.easeOut" })
.to('.cookie__container', { xPercent: 0, duration: 1.6, ease: "expo.easeOut" }, "<")
.to(".cookie-txt__reveal", { x: 0, opacity: 1, duration: 0.3, ease: "power1.out" }, "-=0.2")
.to('.cookie__notice', { overflow: "visible", duration: 0.001 });

}
    
export default legalIntroOnce;