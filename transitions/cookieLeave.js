import gsap from 'gsap';

// cookie policy leave cover

const cookieLeave = (container) => {

    gsap.registerPlugin(ExpoScaleEase);

    var cookiePolBtn = gsap.utils.toArray(".cookie-policy__btn");
    var cookieBg = gsap.utils.toArray(".cookie__bg");
    let cursor = gsap.utils.toArray(".cursor-dot");
    
    gsap.set(cookieBg, {autoAlpha: 0, scale: 1});
    
    cookiePolBtn.forEach(cookiePol => {
    
        var cookie__leave = gsap.timeline({ paused: true });

        cookie__leave
            .to(cookieBg, { delay: 0.2, autoAlpha: 1, duration: 0.001 })
            .to(cursor, { autoAlpha: 0, duration: 0.001 }, "<")
            //.to(".cookie-btn__inner", {filter:"invert(100%)", duration: 0.001}, "<")
            .to(cookieBg, { scale: 35, transformOrigin: "bottom", ease: "expoScale(1, 35)", duration: 1.1 })
            //.to(".cookie-txt__reveal", {delay: 0.95, x: 15, opacity: 0, duration: 0.3, ease: "power1.out" }, "<")
            //.to(".cookie-btn__inner", {delay: 0.95, x: 15, opacity: 0, ease: "expo.out", duration: 0.77}, "<")
            .set(".transition-cover", { display: 'block' }, 1);
            //.set(".cookie-btn__inner", {filter:"invert(0%)"});

                   
        cookiePol.addEventListener('click', () => {
            cookie__leave.play(0);
      });
    })

}

export default cookieLeave;