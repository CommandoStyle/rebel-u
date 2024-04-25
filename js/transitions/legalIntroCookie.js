export const legalIntroCookie = (container) => {

    gsap.registerPlugin(ExpoScaleEase);

    gsap.set(".legal-reveal", { x: -30, opacity: 0 });
    gsap.set(['.home-logo', '.beta__txt', '.hero-info__marquee-wrap', '.legal-lottie__contain'], {autoAlpha: 1});
    gsap.set( '.legal-lottie__contain', {autoAlpha: 0});
    gsap.set([".redact-cover-logo", ".redact-cover-info", ".redact-cover-nav", ".sub-hero__spacer-line", ".legal-lottie__cover"], {scaleX: 0 });
    gsap.set(".cookie__bg", {scaleX: 35, transformOrigin: "50% 50%"});

var legalIntroCookie = gsap.timeline();
      
legalIntroCookie

.to(".cookie__bg", { scale: 1, transformOrigin: "50% 50%", ease: "expoScale(35, 1)", duration: 1.1 },"<")
.to(".sub-hero__spacer-line", { duration: 1, scaleX: 1, transformOrigin: "0% 100%", ease: "power2.easeOut" })
.to(".legal-reveal", { duration: 1, x: 0, stagger: 0.03, ease: "expo.out" }, "<")
.to(".legal-reveal", { duration: 0.4, opacity: 1, stagger: 0.03, ease: "linear" }, "<")
.to(".legal-lottie__cover", { scaleX: 1, transformOrigin: "0% 100%", duration: 0.3, ease: "linear" })
.to(".legal-lottie__contain", { autoAlpha: 1, duration: 0.001 })
.to(".legal-lottie__cover", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.3, ease: "linear"}, "-=0.01")
.set(".cookie__bg", { autoAlpha: 0});


}
    
