export const revertSubPg = () => {

    gsap.registerPlugin(ExpoScaleEase);

    var revertBtn = gsap.utils.toArray(".revert-back__btn");
    var revertCover = gsap.utils.toArray(".revert__backdrop");

    gsap.set(revertCover, {autoAlpha: 0, scale: 1});

    revertBtn.forEach(revertBtn => {
    
    var sub__revert = gsap.timeline({ paused: true });

    sub__revert
        .set(".revert-arrow__mask", { filter: 'invert(100%)' })
        .set(revertCover, { autoAlpha: 1 }, "<")
        .set(".cursor-dot", { autoAlpha: 0 }, "<")
        .to(".revert-arrow__track", { x: -105, ease: "power2.inOut", opacity: 0, duration: 0.45}) 
        .to(revertCover, { scale: 18, transformOrigin: "50% 50%", ease: "expoScale(1, 18)", duration: 1.1 }, 0.1)
        .to(".beta__contain", {display: "none", duration: 0.001}, "-=0.75")
        .set(".in--nav__btn", { autoAlpha: 0 }, 0.68)   
        .set(".revert-arrow__mask", { filter: 'invert(0%)' })
        .set(".in--nav__btn", { delay: 0.2, autoAlpha: 1});

                   
        revertBtn.addEventListener('click', () => {
            sub__revert.play(0);
            });
        })

    }
