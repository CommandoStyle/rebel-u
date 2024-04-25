import gsap from 'gsap';

// About hero intro after nav

const aboutIntro = (container) => {

  gsap.registerPlugin(MorphSVGPlugin);

  gsap.set(".about-reveal", { x: -30, opacity: 0 });
  //gsap.set(".about-rev__mask", { yPercent: 101 });
  gsap.set(['.home-logo', ".menu-txt", '.beta__txt', ".sml__square", '.hero-info__marquee-wrap', '.reb-globe-html'], {autoAlpha: 1});
  gsap.set([".redact-cover-logo", ".redact-cover-beta", ".redact-cover-info", ".redact-cover-nav"], {scaleX: 0 });
  gsap.set([".redact-cover-globe", ".redact-cover-your"], {scaleY: 0 });
  gsap.set('.about-hero__cm-bg', { yPercent: 0 });
  //gsap.set('.about-hero-logo__wrap', { autoAlpha: 0 });
  gsap.set('.u-txt', { autoAlpha: 1 });
  gsap.set(['.about-hero__cm-wrap', ".about-hero-logo__wrap"], { rotationY: -180 });
 gsap.set([".about-hero-o__contain", ".about-hero-u__contain"], { transformStyle: "preserve-3d" });
 gsap.set(".hero-scroll", { display: "none" });

  //var navHideTop = gsap.utils.toArray(".menu__txt-wrap");
  var navHideTopInner = gsap.utils.toArray(".menu__txt-inner");
  var navBotRev = gsap.utils.toArray(".nav-bot-rev");
  //var navBotRevMask = gsap.utils.toArray(".nav-bot__mask");
              
      var aboutIntro = gsap.timeline();
      
      aboutIntro

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
           .to(".about-reveal", { duration: 1, x: 0, stagger: 0.03, ease: "expo.out" }, "-=0.25")
           .to(".about-reveal", { duration: 0.4, opacity: 1, stagger: 0.03, ease: "linear" }, "<")
           .to('.about-hero-o__wrap', { duration: 0.5, rotationY: 180, ease: "power1.inOut" })
           .to('.about-hero__cm-wrap', { duration: 0.5, rotationY: 0, ease: "power1.inOut" }, "<")
           .to('.about-hero__cm-wrap', { z: 50, duration: 0.001 }, "-=0.32")
           .to('.about-hero-u__wrap', { duration: 0.5, rotationY: 180, ease: "power1.inOut" }, "-=0.3")
           .to('.about-hero-logo__wrap', { duration: 0.5, rotationY: 0, ease: "power1.inOut" }, "<")
           .to('.about-hero-logo__wrap', { z: 50, duration: 0.001 }, "-=0.32")
           .set(".menu-txt", { color: '#000000'}, "-=1.6")
           .set(".hero-scroll", { delay: 1, display: "block" });
  
  //REB GLOBE SVG ROTATION
  gsap.registerPlugin();
  
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

export default aboutIntro;
