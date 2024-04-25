export const legalFooterLeave = (container) => {

    gsap.registerPlugin(ExpoScaleEase);

    var legalBtn = gsap.utils.toArray(".footer__cta-legal");
    var legalBg = gsap.utils.toArray(".legal__backdrop");
    let cursor = gsap.utils.toArray(".cursor-dot");
    
    gsap.set(legalBg, {autoAlpha: 0, scale: 1});
    
    legalBtn.forEach(legBtn => {
    
        var legal__leave = gsap.timeline({ paused: true });

        legal__leave
            .to(legalBg, { autoAlpha: 1, duration: 0.001 })
            .to(cursor, { autoAlpha: 0, duration: 0.001 }, "<")
            .to(".has--overflow-hidden", {filter:"invert(100%)", duration: 0.001}, "<")
            .to(legalBg, { scale: 44, transformOrigin: "50% 50%", ease: "expoScale(1, 44)", duration: 1.1 })
            .to(".has--overflow-hidden", {delay: 0.95, x: 15, opacity: 0, ease: "expo.out", duration: 0.77}, "<")
            .set(".transition-cover", { display: 'block' }, 1)
            .set(".has--overflow-hidden", {filter:"invert(0%)"});

                   
        legBtn.addEventListener('click', () => {
          legal__leave.play(0);
      });
    })

}
