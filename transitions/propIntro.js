import gsap from 'gsap';

const propIntro = (container) => {

    var navHideTopInner = gsap.utils.toArray(".menu__txt-inner");
    var navBotRev = gsap.utils.toArray(".nav-bot-rev");

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
             
        var propIntro = gsap.timeline();
        
        propIntro
        
        .set(".redact-cover-nav", { backgroundColor: '#ffffff'}) 
        .set(".menu-txt", { color: '#ffffff', autoAlpha: 0}) 
        .to(".redact-cover-nav", { delay: 0.3, scaleX: 1, transformOrigin: "0% 100%", duration: 0.129, ease: "linear"})
        .to(".exit-txt", { autoAlpha: 0, duration: 0.001 })
        .to(".menu-txt", { autoAlpha: 1, duration: 0.001 }, "<")
        .to(".redact-cover-nav", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.129, ease: "linear"})
        .to([navHideTopInner, ".current-arrow-right__track", ".current-arrow-left__track"], { duration: 1, x: 30, stagger: 0, ease: "expo.out" },"<")
        .to([navHideTopInner, ".current-arrow-right__track", ".current-arrow-left__track"], { duration: 0.4, opacity: 0, stagger: 0, ease: "linear" },"<")
        .to(navBotRev, { x: 30, opacity: 0, ease: "expo.out", duration: 0.3 },"<" )
        .to(".nav-bot-rev-vert", { y: -15, opacity: 0, ease: "expo.out", duration: 0.3 },"<")
        .to(".prop-reveal", { duration: 1, x: 0, stagger: 0.03, ease: "expo.out" }, "-=0.25")
        .to(".prop-reveal", { duration: 0.4, opacity: 1, stagger: 0.03, ease: "linear" }, "<")
        .call(function() { packagedCirc.play(); })
        .set(".menu-txt", { color: '#000000'}, "-=1")
        .to(".redact-cover-repack", { scaleX: 1, transformOrigin: "0% 100%", duration: 0.3, ease: "linear"}, "+=1.3")
        .to('.repackaged__wrap', { autoAlpha: 1, duration: 0.001})
        .to(".redact-cover-repack", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.3, ease: "linear"}, "-=0.01")
        .set(".hero-scroll", { display: "block" },"<");
  
        return propIntro;
  
  }

export default propIntro;