export const legalIntroNav = (container) => {

    gsap.set(".legal-reveal", { x: -30, opacity: 0 });
    gsap.set(['.home-logo', '.beta__txt', '.hero-info__marquee-wrap', '.legal-lottie__contain'], {autoAlpha: 1});
    gsap.set( '.legal-lottie__contain', {autoAlpha: 0});
    gsap.set([".redact-cover-logo", ".redact-cover-info", ".redact-cover-nav", ".sub-hero__spacer-line", ".legal-lottie__cover"], {scaleX: 0 });

    var navHideTopInner = gsap.utils.toArray(".menu__txt-inner");
    var navBotRev = gsap.utils.toArray(".nav-bot-rev");

var legalIntroNav = gsap.timeline();
      
legalIntroNav

.set(".redact-cover-nav", { scaleX: 0, backgroundColor: '#ffffff'}) 
.set(".menu-txt", { color: '#ffffff', autoAlpha: 0}) 
.to(".redact-cover-nav", { delay: 0.3, scaleX: 1, transformOrigin: "0% 100%", duration: 0.129, ease: "linear"})
.to(".exit-txt", { autoAlpha: 0, duration: 0.001 })
.to(".menu-txt", { autoAlpha: 1, duration: 0.001 }, "<")
.to(".redact-cover-nav", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.129, ease: "linear"})
.to([navHideTopInner, ".current-arrow-right__track", ".current-arrow-left__track"], { duration: 1, x: 30, stagger: 0, ease: "expo.out" },"<")
.to([navHideTopInner, ".current-arrow-right__track", ".current-arrow-left__track"], { duration: 0.4, opacity: 0, stagger: 0, ease: "linear" },"<")
.to(navBotRev, { x: 30, opacity: 0, ease: "expo.out", duration: 0.3 },"<" )
.to(".nav-bot-rev-vert", { y: -15, opacity: 0, ease: "expo.out", duration: 0.3 },"<")
.to(".sub-hero__spacer-line", { duration: 1, scaleX: 1, transformOrigin: "0% 100%", ease: "power2.easeOut" }, "-=0.25")
.to(".legal-reveal", { duration: 1, x: 0, stagger: 0.03, ease: "expo.out" }, "<")
.to(".legal-reveal", { duration: 0.4, opacity: 1, stagger: 0.03, ease: "linear" }, "<")
.set(".menu-txt", { color: '#000000'}, "-=0.85")
.to(".legal-lottie__cover", { delay: 2, scaleX: 1, transformOrigin: "0% 100%", duration: 0.3, ease: "linear" })
.to(".legal-lottie__contain", { autoAlpha: 1, duration: 0.001 })
.to(".legal-lottie__cover", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.3, ease: "linear"}, "-=0.01");


}
