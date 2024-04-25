export const cookieSelect = () => {

    var cookieSelectBtn = gsap.utils.toArray(".cookie-cta__btn");

    cookieSelectBtn.forEach(cookieSelect => {
    
    var cookie__close = gsap.timeline({ paused: true });

    cookie__close
    .set('.cookie__notice', { overflow: "hidden" })
    .to(".cookie-txt__reveal", { delay: 0.2, x: 30, opacity: 0, ease: "expo.out", duration: 0.3 })
    .to('.cookie__wrap', { delay: 0.2, xPercent: 105, duration: 0.8, ease: "expo.easeOut" })
    .to('.cookie__container', { xPercent: -105, duration: 0.8, ease: "expo.easeOut" }, "<")
    .to('.cookie__notice', { display: "none" }, ">");
                   
        cookieSelect.addEventListener('click', () => {
            cookie__close.play(0);
            });
        })

    }
