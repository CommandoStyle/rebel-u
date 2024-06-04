export const homeIntroOnce = (container) => {

gsap.registerPlugin(ScrollTrigger);

gsap.set(".home-reveal", { "will-change": "transform, opacity", x: -30, opacity: 0 });
gsap.set(['.home-logo', ".menu-txt", ".touch-print-open__wrap", '.beta__txt', '.hero-info__marquee-wrap'], {autoAlpha: 0});
gsap.set([".redact-cover-logo", ".redact-cover-info", ".redact-cover-nav"], {scaleX: 0 });
gsap.set([".sneaky__dot-contain", ".sneaky__dot-round"], {autoAlpha: 0});
gsap.set('.cookie__wrap', { xPercent: -105 });
gsap.set('.cookie__container', { xPercent: 105 });
gsap.set('.cookie-txt__reveal', { x: -30, opacity: 0 });
gsap.set('.cookie__notice', { overflow: "hidden", display: "flex" });
gsap.set([".sneaky__dot-bg", ".ampersand-redact-cover"], { "will-change": "transform", scaleX: 0 });
gsap.set('.beta__contain', {clipPath: "inset(0% 100% 0% 0%)"});

let roundsAnim = gsap.timeline({repeat:-1, paused: true});
let rounds = gsap.utils.toArray(".sneaky__dot-round");
let roundsHidden = gsap.utils.toArray(".sneaky__dot-hidden");
let imgHidden = gsap.utils.toArray(".sneaky-img__hidden");
let duration = 3.2; 
let pause = 0.6; 
let stagger = duration;
let repeatDelay = pause;

roundsAnim.fromTo(rounds, {
	clipPath: "inset(0% 0% 0% 0%)", //"circle(110% at center)"
	zIndex: 0,
	xPercent: 0
}, {
	clipPath: "inset(0% 0% 0% 0%)", //"circle(110% at center)"
	zIndex: 0,
	xPercent: 0,
	duration: duration
})
.fromTo(rounds, {
	zIndex: 50,
	xPercent: -10,
	clipPath: "inset(0% 100% 0% 0%)"}, { //"circle(0% at center)"
	clipPath: "inset(0% 0% 0% 0%)", //"circle(110% at center)"
	duration: duration, 
	zIndex: 50,
	xPercent: 0,
	ease: Expo.easeInOut,
	stagger:{
		each: stagger,
		repeatDelay: repeatDelay 
	}
}, pause);




const employeeScrub = document.getElementById("employee-nope__scrub");
const employeeScrubdata = employeeScrub.getAttribute("lottie-data");
employeeScrub.load(employeeScrubdata);
               
      var homeIntroOnce = gsap.timeline();

      homeIntroOnce
	  .to(".redact-cover-logo", { delay: 1, scaleX: 1, transformOrigin: "0% 100%", duration: 0.711, ease: "linear"})
	  .to(['.home-logo', '.beta__txt'], { autoAlpha: 1, duration: 0.001})
	  .to(".redact-cover-logo", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.711, ease: "linear"})
	  .to('.beta__contain', {delay: 0.12, clipPath: "inset(0% 0% 0% 0%)", duration: 0.18, ease: "power1.eastOut"})
	  .to(".redact-cover-info", { delay: 0.548, scaleX: 1, transformOrigin: "0% 100%", duration: 0.468, ease: "linear"})
	  .to('.hero-info__marquee-wrap', { autoAlpha: 1, duration: 0.001})
	  .to(".redact-cover-info", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.468, ease: "linear"})
	  .to(".redact-cover-nav", { delay: 1.134, scaleX: 1, transformOrigin: "0% 100%", duration: 0.129, ease: "linear"})
	  .to([".menu-txt", ".touch-print-open__wrap"], { autoAlpha: 1, duration: 0.001})
	  .to(".redact-cover-nav", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.129, ease: "linear"})
	  .to(".home-reveal", { delay: 0.3, duration: 1.6, x: 0, stagger: 0.03, ease: "expo.out" })
	  .to(".home-reveal", { duration: 0.4, opacity: 1, stagger: 0.03, ease: "linear" }, "<")
	  .to(".sneaky__dot-contain", { autoAlpha: 1, duration: 0.001 }, "-=0.4")
	  .to([".ampersand-redact-cover", ".sneaky__dot-bg"], { scaleX: 1, transformOrigin: "0% 100%", duration: 0.45, ease: "linear" }, "<")
	  .from(".ampersand__img", { autoAlpha: 0, duration: 0.001 })
	  .to(".sneaky__dot-round", { autoAlpha: 1, duration: 0.001 }, "<")
	  .to(roundsHidden, {display: 'flex', duration: 0.001}, "<")
          .to(imgHidden, {autoAlpha: 1, duration: 0.001}, "<")
	  .call(function() {roundsAnim.play()}) 
	  .to([".ampersand-redact-cover", ".sneaky__dot-bg"], { scaleX: 0, transformOrigin: "100% 0%", duration: 0.45, ease: "linear"}, "+=0.01")
	  .add(gsap.delayedCall(0.3, function() { employeeScrub.play(); }))	  
	  .to(".sneaky__dot-bg", { display: "none", duration: 0.1 }) 
	  .to('.cookie__wrap', { delay: 0.5, xPercent: 0, duration: 1.6, ease: "expo.easeOut" })
      .to('.cookie__container', { xPercent: 0, duration: 1.6, ease: "expo.easeOut" }, "<")
	  .to(".cookie-txt__reveal", { x: 0, opacity: 1, duration: 0.3, ease: "power1.out" }, "-=0.2")
	  .to('.cookie__notice', { overflow: "visible", duration: 0.001 });
	  

	  ScrollTrigger.create({
		trigger: ".hero__container",
		start: "top 110%",
		onLeave: () => roundsAnim.pause(),
		onEnterBack: () => roundsAnim.play(),
		onLeaveBack: () => roundsAnim.pause()
	  });
        
    }
