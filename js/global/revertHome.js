export const revertHome = () => {

    gsap.registerPlugin(ExpoScaleEase);

    var homeBtn = gsap.utils.toArray(".nav__logo-btn");
    var homeBtnNav = gsap.utils.toArray(".home-nav__btn");
    var homeCover = gsap.utils.toArray(".revert-home__backdrop");
    let cursor = gsap.utils.toArray(".cursor-dot");
    var navRevIn = gsap.utils.toArray(".menu__txt-inner");
    var navBotRev = gsap.utils.toArray(".nav-bot-rev");

    gsap.set(homeCover, {autoAlpha: 0, scale: 1});

    homeBtn.forEach(homeBtn => {
    
    var home__revert = gsap.timeline({ paused: true });

    home__revert
        .to(homeCover, { autoAlpha: 1, duration: 0.001 })
        .to(cursor, { autoAlpha: 0, duration: 0.001 }, "<")
        .to(".home-logo", {filter: "invert(100%)", duration: 0.001}, "<")
        .to(homeCover, { scale: 44, transformOrigin: "50% 50%", ease: "expoScale(1, 44)", duration: 1.1 })
        .to(".beta__contain", {display: "none", duration: 0.001}, "-=0.9")
        .set(".home-logo", {delay: 1.6, filter: "invert(0%)"});
                   
        homeBtn.addEventListener('click', () => {
            home__revert.play(0);
            });
        })

        // Home revert Nav

    homeBtnNav.forEach(homeBtnNav => {
    
    var homeNav__revert = gsap.timeline({ paused: true });
        
    homeNav__revert
    .set(".redact-cover-nav", { backgroundColor: '#ffffff'}) 
    .set(".menu-txt", { color: '#ffffff'}) 
    .to(".redact-cover-nav", { delay: 0.2, scaleX: 1, transformOrigin: "0% 100%", duration: 0.129, ease: "linear"})
    .to(".exit-txt", { autoAlpha: 0, duration: 0.001 })
    .to(".menu-txt", { autoAlpha: 1, duration: 0.001 }, "<")
    .to(".redact-cover-nav", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.129, ease: "linear"})
    .to([navRevIn, ".current-arrow-right__track", ".current-arrow-left__track"], { duration: 0.7, x: 30, stagger: 0, ease: "expo.out" }, "<")
    .to([navRevIn, ".current-arrow-right__track", ".current-arrow-left__track"], { duration: 0.5, opacity: 0, stagger: 0, ease: "linear" }, "<")
    .to(navBotRev, { x: 30, opacity: 0, ease: "expo.out", duration: 0.3 },"-=0.65")
    .to(".nav-bot-rev-vert", { y: -15, opacity: 0, ease: "expo.out", duration: 0.3 },"<")
    .set(".menu-txt", { color: '#000000'}, "-=0.4");

                           
        homeBtnNav.addEventListener('click', () => {
            homeNav__revert.play(0);
            });
        })

    }
