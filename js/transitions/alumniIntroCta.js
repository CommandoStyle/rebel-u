export const alumniIntroCta = (container) => {
  
  var targets = gsap.utils.toArray(".hero-cases__slide-contain");
  var offset = 120;
  var max = -(targets.length - 1) * offset;
  
  gsap.set(".alumni-reveal", { x: -30, opacity: 0 });
  gsap.set(['.home-logo', ".menu-txt", '.beta__txt', '.hero-info__marquee-wrap'], {autoAlpha: 1});
  gsap.set('.reb-tag__wrap', {autoAlpha: 0});
  gsap.set([".redact-cover-logo", ".redact-cover-beta", ".redact-cover-info", ".redact-cover-nav"], {scaleX: 0 });
  gsap.set(".redact-cover-tag", {scaleX: 0 });
  gsap.set(".hero-cases__slider-track", { yPercent: 0, autoAlpha: 1 });
  gsap.set(targets, { yPercent: (i) => {return i * offset; }, });
  gsap.set(".hero-scroll", { display: "none" });
    
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
  
  var alumniIntroCta = gsap.timeline();
        
  alumniIntroCta
        
        .set('.revert-back__btn', { display: "none" })
        .set(".redact-cover-tag", {scaleX: 0 })
        .to(".alumni-reveal", { delay: 1.1, duration: 1, x: 0, stagger: 0.03, ease: "expo.out" }, "-=0.25")
        .to(".alumni-reveal", { duration: 0.4, opacity: 1, stagger: 0.03, ease: "linear" }, "<")
        .set(".menu-txt", { color: '#000000'}, "-=0.9")
        .add(tlx.play(), ">")
        .to(".redact-cover-tag", { scaleX: 1, transformOrigin: "0% 100%", duration: 0.35, ease: "linear"}, "-=0.7")
        .to(".reb-tag__wrap", { autoAlpha: 1, duration: 0.001})
        .to(".redact-cover-tag", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.35, ease: "linear"}, "-=0.01")
        .set(".hero-scroll", { display: "block" }, "<");
  
}
