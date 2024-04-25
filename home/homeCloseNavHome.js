import gsap from 'gsap';

// Close nav on Home click
    
const homeCloseNavHome = () => {

    $(".home-nav__btn").click(function() {
      $('.menu-close__btn').click(); 
     });  
     
var homeToggle = gsap.utils.toArray(".home-nav__btn");
var homeBg = gsap.utils.toArray(".revert-home__backdrop");
var navWrap = gsap.utils.toArray('.nav__items-container');
var navBg = gsap.utils.toArray('.nav__backdrop');
var navRevIn = gsap.utils.toArray(".menu__txt-inner");
var navOpen = gsap.utils.toArray('.menu__btn');
var navClose = gsap.utils.toArray('.menu-close__btn');
var navBotRev = gsap.utils.toArray(".nav-bot-rev");
    
    gsap.set(homeBg, { autoAlpha: 0 });
    
    homeToggle.forEach(homeTog => {
    
    var tlhm = gsap.timeline({ paused: true });
         
       tlhm
       .set(".redact-cover-nav", { backgroundColor: '#ffffff'}) 
       .set(".menu-txt", { color: '#ffffff', autoAlpha: 0}) 
       .set(".beta__contain", {display: "none", duration: 0.001})
       .to(".redact-cover-nav", { delay: 0.2, scaleX: 1, transformOrigin: "0% 100%", duration: 0.129, ease: "linear"})
       .to(".exit-txt", { autoAlpha: 0, duration: 0.001 })
       .to(".menu-txt", { autoAlpha: 1, duration: 0.001 }, "<")
       .to(".redact-cover-nav", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.129, ease: "linear"})    
       .to(".nav__logo-btn", { autoAlpha: 1, duration: 0.001 }, "<")
       .to([navRevIn, ".current-arrow-right__track", ".current-arrow-left__track"], { duration: 0.7, x: 30, stagger: 0, ease: "expo.out" }, "<")
       .to([navRevIn, ".current-arrow-right__track", ".current-arrow-left__track"], { duration: 0.5, opacity: 0, stagger: 0, ease: "linear" }, "<")
       .to(navBotRev, { x: 30, opacity: 0, ease: "expo.out", duration: 0.3 },"-=0.65")
       .to(".nav-bot-rev-vert", { y: -15, opacity: 0, ease: "expo.out", duration: 0.3 },"<")
       .set(homeBg, { scale: 40, autoAlpha: 1 })
       .set(navClose, {display: "none"})
       .set(navOpen, {display: "flex"}, "<") 
       .to([".menu-txt", ".exit-txt"], { color: '#000000', duration: 0.001}, "<")
       .to(navBg, {autoAlpha: 0, duration: 0.001, overwrite: 'auto'}, "<") 
       .to(homeBg, { scale: 0.8, transformOrigin: "50% 50%", ease: Expo.easeOut, duration: 1.1 })
       .to(homeBg, { autoAlpha: 0, duration: 0.001, overwrite: 'auto' })   
       .to(".beta__contain", {display: "flex", duration: 0.001}, "-=0.8")
       .to(".home-nav__btn", { autoAlpha: 0, duration: 0.001 }, "<") 
       .to(".cursor-dot", { autoAlpha: 1, duration: 0.001},  "<")
       .to(navWrap, { display: 'none', duration: 0.001 },"<") 
       .set(".redact-cover-nav", { scaleX: 0, backgroundColor: '#000000' })
       .set(navRevIn, { x: -30, opacity: 0 })
       .set(navBotRev, { x: -30, opacity: 0 })
       .set(".nav-bot-rev-vert", { y: 155, opacity: 0 })
       .set(".exit-txt", { color: '#ffffff'})
       .set(".current-arrow-right__track", { xPercent: 105, x: 0, opacity: 1 })
       .set(".current-arrow-left__track", { xPercent: -105, x: 0, opacity: 1 });
                   
      homeTog.addEventListener('click', () => {
        tlhm.play(0);
   
      });
   })
}

export default homeCloseNavHome;