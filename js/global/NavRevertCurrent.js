//REEVERT CURRENT

export const NavRevertCurrent = () => {

gsap.registerPlugin(ExpoScaleEase);

var navWrap = gsap.utils.toArray('.nav__items-container');
var navBg = gsap.utils.toArray('.nav__backdrop');
var navRevIn = gsap.utils.toArray(".menu__txt-inner");
var navOpen = gsap.utils.toArray('.menu__btn');
var navClose = gsap.utils.toArray('.menu-close__btn');
var navBotRev = gsap.utils.toArray(".nav-bot-rev");

const currentRevert = document.querySelectorAll(".menu-item__current")

//Desktop
mm.add("(min-width: 990px)", () => {
    
currentRevert.forEach((currentRevert) => {
    if (!currentRevert) return
    const navHole = document.querySelector('.nav-hole')
    if (!navHole) return
    const navContain = document.querySelector('.nav__items-container')
    if (!navContain) return

    gsap.set(navHole, { scale: 1 })

    currentRevert.addEventListener("click", (e) => {
        // Calculate distance between user click and top left corner of button
        let xDist = e.clientX - navContain.getBoundingClientRect().x + 4
        let yDist = e.clientY - navContain.getBoundingClientRect().y
        let currentRevOut = gsap.timeline();

        // Immediately set left and top properties to position the circle element where user clicks
        gsap.set(navHole, { left: xDist, top: yDist })
       
 currentRevOut
        .set(navClose, {display: "none"})
        .set(navOpen, {display: "flex"}, "<")
        .set(navHole, {display: "block"}, "<")
        .set(".cursor-dot", { scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
        .set(navBg, {display: "none"}, "<")
        .to([navRevIn, ".current-arrow-right__track", ".current-arrow-left__track"], { duration: 0.7, x: 30, stagger: 0, ease: "expo.out" }, "<")
        .to([navRevIn, ".current-arrow-right__track", ".current-arrow-left__track"], { duration: 0.5, opacity: 0, stagger: 0, ease: "linear" }, "<")
        .to(navBotRev, { x: 30, ease: "expo.out", opacity: 0, duration: 0.3 },"-=0.65")
        .to(".nav-bot-rev-vert", { y: -15, opacity: 0, ease: "expo.out", duration: 0.3 },"<")  
        .fromTo(navHole, { scale: 1 }, { duration: 1.2, scale: 2000, ease: "expoScale(1, 2000, power1.easeOut)" }, "-=0.3")  
        .to('[data-img]', { autoAlpha: 0, duration: 0.3, ease: "sine.easeIn" },"-=1.3")
        .to(".beta__contain", {display: "flex", duration: 0.001}, "-=0.68")
        .to(".home-nav__btn", { autoAlpha: 0, duration: 0.001 }, "<")
        .to(".nav__logo-btn", { autoAlpha: 1, duration: 0.001 }, "<")
        .to([".menu-txt", ".exit-txt"], { color: '#000000', duration: 0.001}, "-=0.2")
        .to(".redact-cover-nav", { scaleX: 0, backgroundColor: '#000000'}, "<") 
        .to(".redact-cover-nav", { scaleX: 1, transformOrigin: "0% 100%", duration: 0.129, ease: "linear"})
        .to(".exit-txt", { autoAlpha: 0, duration: 0.001 })
        .to(".menu-txt", { autoAlpha: 1, duration: 0.001 }, "<")
        .to(".redact-cover-nav", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.129, ease: "linear"})
        .to(".cursor-dot", { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
        .set(navWrap, {display: 'none'})
        .set(navHole, {display: "none", clearProps: "all"})
        .set( ".redact-cover-nav", { scaleX: 0 })
        .set(navRevIn, { x: -30, opacity: 0 })
        .set(navBotRev, { x: -30, opacity: 0 })
        .set(".nav-bot-rev-vert", { y: 15, opacity: 0 })
        .set(".exit-txt", { color: '#ffffff'})
        .set(".current-arrow-right__track", { xPercent: 105, x: 0, opacity: 1 })
        .set(".current-arrow-left__track", { xPercent: -105, x: 0, opacity: 1 })
        .set('[data-img]', { autoAlpha: 1, scale: 1 });
                
      })
   });
});

//iPad and Mobile
mm.add("(max-width: 991px)", () => {
    
currentRevert.forEach((currentRevert) => {
    if (!currentRevert) return
    const navHoleMob = document.querySelector('.nav-hole-mobile')
    if (!navHoleMob) return
    const navContain = document.querySelector('.nav__items-container')
    if (!navContain) return

    gsap.set(navHoleMob, { scale: 1, display: "none" })

    currentRevert.addEventListener("touchstart", (e) => {

   let touch = e.targetTouches[0]; 
   let xDist = touch.clientX - navContain.getBoundingClientRect().x
   let yDist = touch.clientY - navContain.getBoundingClientRect().y
   let currentRevOutMob = gsap.timeline();

    gsap.set(navHoleMob, { display: "flex", left: xDist, top: yDist, xPercent: -50, yPercent: -50 });
       
 currentRevOutMob
        .set(navClose, {display: "none"})
        .set(navOpen, {display: "flex"}, "<")
        //.set(navHole, {display: "block"}, "<")
       //.set(".cursor-dot", { scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
        .set(navBg, {display: "none"}, "<")
        .to([navRevIn, ".current-arrow-right__track", ".current-arrow-left__track"], { duration: 0.7, x: 30, stagger: 0, ease: "expo.out" }, "<")
        .to([navRevIn, ".current-arrow-right__track", ".current-arrow-left__track"], { duration: 0.5, opacity: 0, stagger: 0, ease: "linear" }, "<")
        .to(navBotRev, { x: 30, ease: "expo.out", opacity: 0, duration: 0.3 },"-=0.65")
        .to(".nav-bot-rev-vert", { y: -15, opacity: 0, ease: "expo.out", duration: 0.3 },"<")  
        .fromTo(navHoleMob, { scale: 1 }, { duration: 1.2, scale: 280, ease: "expoScale(1, 280, power1.easeOut)" }, "-=0.15")  
        .to('[data-img]', { autoAlpha: 0, duration: 0.3, ease: "sine.easeIn" },"-=1.3")
        .to(".beta__contain", {display: "flex", duration: 0.001}, "-=0.68")
        .to(".home-nav__btn", { autoAlpha: 0, duration: 0.001 }, "<")
        .to(".nav__logo-btn", { autoAlpha: 1, duration: 0.001 }, "<")
        .to([".menu-txt", ".exit-txt"], { color: '#000000', duration: 0.001}, "-=0.2")
        .to(".redact-cover-nav", { scaleX: 0, backgroundColor: '#000000'}, "<") 
        .to(".redact-cover-nav", { scaleX: 1, transformOrigin: "0% 100%", duration: 0.129, ease: "linear"})
        .to(".exit-txt", { autoAlpha: 0, duration: 0.001 })
        .to(".menu-txt", { autoAlpha: 1, duration: 0.001 }, "<")
        .to(".touch-print-open__wrap", {autoAlpha: 1, duration: 0.001}, "<")
        .to(".touch-print-close__wrap", {filter: "invert(0)", autoAlpha: 0, duration: 0.001}, "<")
        .to(".redact-cover-nav", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.129, ease: "linear"})
        //.to(".cursor-dot", { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
        .set(navWrap, {display: 'none'})
        .set(navHoleMob, {display: "none", clearProps: "all"})
        .set( ".redact-cover-nav", { scaleX: 0 })
        .set(navRevIn, { x: -30, opacity: 0 })
        .set(navBotRev, { x: -30, opacity: 0 })
        .set(".nav-bot-rev-vert", { y: 15, opacity: 0 })
        .set(".exit-txt", { color: '#ffffff'})
        .set(".current-arrow-right__track", { xPercent: 105, x: 0, opacity: 1 })
        .set(".current-arrow-left__track", { xPercent: -105, x: 0, opacity: 1 })
        .set('[data-img]', { autoAlpha: 1, scale: 1 });
                
      })
   });
});
    
}
