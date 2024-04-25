import gsap from 'gsap';

// Home all leave

const homeLeave = (container) => {

    gsap.registerPlugin(ExpoScaleEase);

    let cursor = gsap.utils.toArray(".cursor-dot");

    // Home sub CTA

    var subBtn = gsap.utils.toArray(".cta__home-sub");
    var subCover = gsap.utils.toArray(".home-sub__backdrop");

    gsap.set(subCover, {autoAlpha: 0, scale: 1});
    
    subBtn.forEach(subBtn => {
    
        var homesub__leave = gsap.timeline({ paused: true });

        homesub__leave
            .to(subCover, { autoAlpha: 1, duration: 0.001 })
            .to(cursor, { autoAlpha: 0, duration: 0.001 }, "<")
            .to(".cta-inner__wrap", {filter:"invert(100%)", duration: 0.001}, "<")
            .to(subCover, { scale: 22, transformOrigin: "50% 50%", ease: "expoScale(1, 22)", duration: 1.1 })
            .to(".cta-inner__wrap", {delay: 0.95, x: 15, opacity: 0, ease: "expo.out", duration: 0.77}, "<")
            .set(".transition-cover", { display: 'block' }, 1.1)
            .set(".cta-inner__wrap", {filter:"invert(0%)"});
                   
            subBtn.addEventListener('click', () => {
                homesub__leave.play(0);
              });
            })

    // Home escape CTA

    var escapeBtn = gsap.utils.toArray(".cta__home-escape");
    var escapeCover = gsap.utils.toArray(".home-escape__backdrop");

    gsap.set(escapeCover, {autoAlpha: 0, scale: 1});

    escapeBtn.forEach(escapeBtn => {
    
    var escape__leave = gsap.timeline({ paused: true });

    escape__leave
        .to(escapeCover, { autoAlpha: 1, duration: 0.001 })
        .to(cursor, { autoAlpha: 0, duration: 0.001 }, "<")
        .to(".cta-inner__wrap", {filter:"invert(100%)", duration: 0.001}, "<")
        .to(escapeCover, { scale: 22, transformOrigin: "50% 50%", ease: "expoScale(1, 22)", duration: 1.1 })
        .to(".cta-inner__wrap", {delay: 0.95, x: 15, opacity: 0, ease: "expo.out", duration: 0.77}, "<")
        .set(".transition-cover", { display: 'block' }, 1.1)
        .set(".cta-inner__wrap", {filter:"invert(0%)"});
                   
        escapeBtn.addEventListener('click', () => {
            escape__leave.play(0);
            });
        })

    // Home alumni CTA

    var alumniBtn = gsap.utils.toArray(".cta__home-alumni");
    var alumniCover = gsap.utils.toArray(".home-alumni__backdrop");

    gsap.set(alumniCover, {autoAlpha: 0, scale: 1});

    alumniBtn.forEach(alumniBtn => {
    
    var homealumni__leave = gsap.timeline({ paused: true });

    homealumni__leave
        .to(alumniCover, { autoAlpha: 1, duration: 0.001 })
        .to(cursor, { autoAlpha: 0, duration: 0.001 }, "<")
        .to(".cta-inner__wrap", {filter:"invert(100%)", duration: 0.001}, "<")
        .to(alumniCover, { scale: 22, transformOrigin: "50% 50%", ease: "expoScale(1, 22)", duration: 1.1 })
        .to(".cta-inner__wrap", {delay: 0.95, x: 15, opacity: 0, ease: "expo.out", duration: 0.77}, "<")
        .set(".transition-cover", { display: 'block' }, 1)
        .set(".cta-inner__wrap", {filter:"invert(0%)"});
                   
        alumniBtn.addEventListener('click', () => {
            homealumni__leave.play(0);
            });
        })

    // Home about CTA

    var aboutBtn = gsap.utils.toArray(".cta__home-who");
    var aboutCover = gsap.utils.toArray(".home-who__backdrop");

    gsap.set(aboutCover, {autoAlpha: 0, scale: 1});

    aboutBtn.forEach(aboutBtn => {
    
    var homeabout__leave = gsap.timeline({ paused: true });

    homeabout__leave
        .to(aboutCover, { autoAlpha: 1, duration: 0.001 })
        .to(cursor, { autoAlpha: 0, duration: 0.001 }, "<")
        .to(".cta-inner__wrap", {filter:"invert(100%)", duration: 0.001}, "<")
        .to(aboutCover, { scale: 22, transformOrigin: "50% 50%", ease: "expoScale(1, 22)", duration: 1.1 })
        .to(".cta-inner__wrap", {delay: 0.95, x: 15, opacity: 0, ease: "expo.out", duration: 0.77}, "<")
        .set(".transition-cover", { display: 'block' }, 1)
        .set(".cta-inner__wrap", {filter:"invert(0%)"});
                   
        aboutBtn.addEventListener('click', () => {
            homeabout__leave.play(0);
            });
        })

    // Home Mr Ebel CTA

    var ebelBtn = gsap.utils.toArray(".cta__home-mr");
    var ebelCover = gsap.utils.toArray(".home-ebel__backdrop");

    gsap.set(ebelCover, {autoAlpha: 0, scale: 1});

    ebelBtn.forEach(ebelBtn => {
    
    var homeebel__leave = gsap.timeline({ paused: true });

    homeebel__leave
        .to(ebelCover, { autoAlpha: 1, duration: 0.001 })
        .to(cursor, { autoAlpha: 0, duration: 0.001 }, "<")
        .to(".cta-inner__wrap", {filter:"invert(100%)", duration: 0.001}, "<")
        .to(ebelCover, { scale: 22, transformOrigin: "50% 50%", ease: "expoScale(1, 22)", duration: 1.1 })
        .to(".cta-inner__wrap", {delay: 0.95, x: 15, opacity: 0, ease: "expo.out", duration: 0.77 }, "<")
        .set(".transition-cover", { display: 'block' }, 1)
        .set(".cta-inner__wrap", {filter:"invert(0%)"});
                   
        ebelBtn.addEventListener('click', () => {
            homeebel__leave.play(0);
            });
        })


}

export default homeLeave;