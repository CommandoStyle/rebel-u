export const mrebelLeave = () => {

    gsap.registerPlugin(ExpoScaleEase);

    let cursorMbg = gsap.utils.toArray(".cursor-m__bg");
    let cursorSbg = gsap.utils.toArray(".cursor-s__bg");
    var ebelBtn = gsap.utils.toArray(".mrebel-post__link");
    var latestBtn = gsap.utils.toArray(".mrebel-latest__link");
    var touchBtn = gsap.utils.toArray([".mrebel-latest__link", ".mrebel-post__link"]);
    let cursor = gsap.utils.toArray(".cursor-dot");
    
// EBEL POST GO
ebelBtn.forEach(ebelBtn => {
    
    var post__go = gsap.timeline({ paused: true });
        
    post__go
    .set(cursorSbg, {display: "block"})
    .to(cursorSbg, {scale: 44, transformOrigin: "50% 50%", duration: 1.1, ease: "expoScale(1, 44)"})
    .set(".transition-cover", { display: 'block' }, 1);
                        
    ebelBtn.addEventListener('click', () => {
        post__go.play(0);
            });

       })

// EBEL LATEST GO
latestBtn.forEach(latestBtn => {
    
        var latest__go = gsap.timeline({ paused: true });
            
        latest__go
        .set(cursorMbg, {display: "block"})
        .to(".ebel-read__contain", {x: -7, duration: 0.22, autoAlpha: 0, ease: "expo.out"})
        .to(cursorMbg, {scale: 22, transformOrigin: "50% 50%", duration: 1.1, ease: "expoScale(1, 22)"}, "<")
        .set(".transition-cover", { display: 'block' }, 1)
        .set(".ebel-read__contain", {display: 'none'});
                            
        latestBtn.addEventListener('click', () => {
            latest__go.play(0);
                });
    
           })

// Subscription Privacy CTA

var privacyBtn = gsap.utils.toArray(".subs-privacy__btn");
var privacyCover = gsap.utils.toArray(".subs-privacy__bg");

gsap.set(privacyCover, {autoAlpha: 0, scale: 1});

privacyBtn.forEach(privacyBtn => {

    var privacy__leave = gsap.timeline({ paused: true });

    privacy__leave
        .to(privacyCover, { autoAlpha: 1, duration: 0.001 })
        .to(cursor, { autoAlpha: 0, duration: 0.001 }, "<")
        .to(".subs-privacy-txt__contain", {filter:"invert(100%)", duration: 0.001}, "<")
        .to(privacyCover, { scale: 22, transformOrigin: "50% 50%", ease: "expoScale(1, 22)", duration: 1.1 })
        .to(".subs-privacy-txt__contain", {delay: 0.95, x: 15, opacity: 0, ease: "expo.out", duration: 0.77}, "<")
        .set(".transition-cover", { display: 'block' }, 1.1)
        .set(".subs-privacy-txt__contain", {filter:"invert(0%)"});
               
        privacyBtn.addEventListener('click', () => {
            privacy__leave.play(0);
          });
        })

// EBEL ON TOUCH

let mm = gsap.matchMedia();

mm.add("(max-width: 991px)", () => {

touchBtn.forEach((touchBtn) => {
    if (!touchBtn) return
    let touchBg = touchBtn.querySelector(".touch__bg");
    //let touchBg = gsap.utils.toArray(".touch__bg")
    if (!touchBg) return
    //const currencyContain = document.querySelector('.currency__items-container')
    //if (!currencyContain) return

    gsap.set(touchBg, { scale: 1, display: "none" })

    touchBtn.addEventListener("click", (e) => {
        // Calculate distance between user click and top left corner of button
        let xDist = e.clientX - touchBtn.getBoundingClientRect().x - 32
        let yDist = e.clientY - touchBtn.getBoundingClientRect().y - 32
        let touchPost__go = gsap.timeline();
        
        // Immediately set left and top properties to position the circle element where user clicks
        gsap.set(touchBg, { left: xDist, top: yDist })

        touchPost__go
        .set(touchBg, {display: "block"})
        .fromTo(touchBg, { scale: 1 }, { duration: 1.2, scale: 33, ease: "expoScale(1, 33)" })
        .set(".transition-cover", { display: 'block' }, 1);

    })
   })
  })

}
