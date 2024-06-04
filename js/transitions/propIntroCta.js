export const propIntroCta = (container) => {

    gsap.set(".prop-reveal", {  "will-change": "transform, opacity", x: -30, opacity: 0 });
    gsap.set(['.home-logo', ".menu-txt", '.beta__txt', ".currencies-txt", '.hero-info__marquee-wrap', ".currencies-list__contain"], {autoAlpha: 1});
    gsap.set([".redact-cover-logo", ".redact-cover-info", ".redact-cover-currency-lg", ".redact-cover-nav"], {scaleX: 0 });
    gsap.set(['.repackaged__wrap', ".currency-exit-txt"], { autoAlpha: 0 });
    gsap.set('.redact-cover-repack', { scaleX: 0 });
    gsap.set('.hero-yes-you__bg', { "will-change": "transform", scaleX: 0, display: "none" });
    gsap.set(".hero-scroll", { display: "none" });

    const packagedCirc = document.getElementById("packaged-circle");
    const packagedCircdata = packagedCirc.getAttribute("lottie-data");
    packagedCirc.load(packagedCircdata);
             
        var propIntroCta = gsap.timeline();
        
        propIntroCta
        
        .to(".prop-reveal", { delay: 1.1, duration: 1, x: 0, stagger: 0.03, ease: "expo.out" })
        .to(".prop-reveal", { duration: 0.4, opacity: 1, stagger: 0.03, ease: "linear" }, "<")
        .call(function() { packagedCirc.play(); })
        .set(".menu-txt", { color: '#000000'}, "-=0.9")
        .to(".redact-cover-repack", { scaleX: 1, transformOrigin: "0% 100%", duration: 0.3, ease: "linear"}, "+=1.3")
        .to('.repackaged__wrap', { autoAlpha: 1, duration: 0.001})
        .to(".redact-cover-repack", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.3, ease: "linear"}, "-=0.01")
        .set(".hero-scroll", { display: "block" }, "<");
  
        return propIntroCta;
  
  }
