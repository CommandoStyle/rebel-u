import gsap from 'gsap';

// Case files hero intro reveal

const alumniIntro = (container) => {
  
  var targets = gsap.utils.toArray(".hero-cases__slide-contain");
  //var navHideTop = gsap.utils.toArray(".menu__txt-wrap");
  var navHideTopInner = gsap.utils.toArray(".menu__txt-inner");
  var navBotRev = gsap.utils.toArray(".nav-bot-rev");
  //var navBotRevMask = gsap.utils.toArray(".nav-bot__mask");
  var offset = 120;
  var max = -(targets.length - 1) * offset;
  gsap.set(".hero-scroll", { display: "none" });
  
  gsap.set(".alumni-reveal", { x: -30, opacity: 0 });
  gsap.set(['.home-logo', ".menu-txt", '.beta__txt', '.hero-info__marquee-wrap'], {autoAlpha: 1});
  gsap.set('.reb-tag__wrap', {autoAlpha: 0});
  gsap.set([".redact-cover-logo", ".redact-cover-beta", ".redact-cover-info", ".redact-cover-nav"], {scaleX: 0 });
  gsap.set(".redact-cover-tag", {scaleX: 0 });
  gsap.set(".hero-cases__slider-track", { yPercent: 0, autoAlpha: 1 });
  gsap.set(targets, { yPercent: (i) => {return i * offset; }, });
    
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
  
  var alumniIntro = gsap.timeline();
        
  alumniIntro
        
        .set('.revert-back__btn', { display: "none" })
        .set(['.home-logo', ".menu-txt", '.beta__txt', ".sml__square", '.hero-info__marquee-wrap'], {autoAlpha: 1})
        .set([".redact-cover-logo", ".redact-cover-beta", ".redact-cover-info", ".redact-cover-nav"], {scaleX: 0 })
        .set(".redact-cover-tag", {scaleX: 0 })
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
        .to(".alumni-reveal", { duration: 1, x: 0, stagger: 0.03, ease: "expo.out" }, "-=0.25")
        .to(".alumni-reveal", { duration: 0.4, opacity: 1, stagger: 0.03, ease: "linear" }, "<")
        .set(".menu-txt", { color: '#000000'}, "-=1")
        .add(tlx.play(), ">")
        .to(".redact-cover-tag", { scaleX: 1, transformOrigin: "0% 100%", duration: 0.35, ease: "linear"}, "-=0.7")
        .to(".reb-tag__wrap", { autoAlpha: 1, duration: 0.001})
        .to(".redact-cover-tag", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.35, ease: "linear"}, "-=0.01")
        .set(".hero-scroll", { display: "block" }, "<");
  
}

export default alumniIntro;