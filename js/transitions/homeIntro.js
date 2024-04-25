import gsap from 'gsap';

// Home hero intro after nav (remove blips)

const homeIntro = (container) => {

gsap.registerPlugin(ScrollTrigger);

gsap.set(".home-reveal", { "will-change": "transform, opacity", x: -30, opacity: 0 });
gsap.set(['.home-logo', ".menu-txt", '.beta__txt', '.hero-info__marquee-wrap', ".sml__square"], {autoAlpha: 1});
gsap.set([".redact-cover-logo", ".redact-cover-beta", ".redact-cover-info", ".redact-cover-nav", ".ampersand-redact-cover"], {scaleX: 0 });
gsap.set('.sneaky__dot-bg', { yPercent: 0, display: "none" });
gsap.set(".sneaky__dot-contain", {autoAlpha: 1});
gsap.set(".hero-scroll", { display: "none" });
 
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
                       
        var homeIntro = gsap.timeline();
  
        homeIntro
        .to(".sneaky__dot-contain", { delay: 0.55, autoAlpha: 1, duration: 0.001 })
        .to([".ampersand-redact-cover", ".sneaky__dot-bg"], { scaleX: 1, transformOrigin: "0% 100%", duration: 0.45, ease: "linear" }, "+=0.1")
        .from(".ampersand__img", { autoAlpha: 0, duration: 0.001 })
        .to(".sneaky__dot-round", { autoAlpha: 1, duration: 0.001 }, "<")
        .to(roundsHidden, {display: 'flex', duration: 0.001}, "<")
        .to(imgHidden, {autoAlpha: 1, duration: 0.001}, "<")
        .call(function() {roundsAnim.play()}) 
        .to([".ampersand-redact-cover", ".sneaky__dot-bg"], { scaleX: 0, transformOrigin: "100% 0%", duration: 0.45, ease: "linear"}, "+=0.01")
        .to(".home-reveal", { duration: 1.6, x: 0, stagger: 0.03, ease: "expo.out" }, "<")
        .to(".home-reveal", { duration: 0.4, opacity: 1, stagger: 0.03, ease: "linear" }, "<")
        .add(gsap.delayedCall(0.3, function() { employeeScrub.play(); }))	  
        .to(".sneaky__dot-bg", { display: "none", duration: 0.1 })
        .set(".hero-scroll", { display: "block" }, "<");

        ScrollTrigger.create({
            trigger: ".hero__container",
            onLeave: () => roundsAnim.pause(),
            onEnterBack: () => roundsAnim.play(),
            onLeaveBack: () => roundsAnim.pause()
          });
    
        }
    
        export default homeIntro;