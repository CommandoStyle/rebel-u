export const alumniLeave = () => {

    gsap.registerPlugin(ExpoScaleEase);

    let cursorSbg = gsap.utils.toArray(".cursor-s__bg");
    var alumBtn = gsap.utils.toArray(".is--alumni-hover");

alumBtn.forEach(alumBtn => {
    
    var alum__go = gsap.timeline({ paused: true });
        
    alum__go

    .set(cursorSbg, {display: "block", height: "4.5em", width: "4.5em", yPercent: 39, xPercent: 39 })
    .to(cursorSbg, {scale: 44, transformOrigin: "50% 50%", duration: 1.1, ease: "expoScale(1, 44)"})
    .set(".transition-cover", { display: 'block' }, 1);
                           
    alumBtn.addEventListener('click', () => {
        alum__go.play(0);
            });
        })

// ALUM ON TOUCH

let mm = gsap.matchMedia();

mm.add("(max-width: 991px)", () => {

alumBtn.forEach((alumBtn) => {
    if (!alumBtn) return
    let touchBg = alumBtn.querySelector(".touch__bg");
    //let touchBg = gsap.utils.toArray(".touch__bg")
    if (!touchBg) return
    //const currencyContain = document.querySelector('.currency__items-container')
    //if (!currencyContain) return

    gsap.set(touchBg, { scale: 1, display: "none" })

    alumBtn.addEventListener("click", (e) => {
        // Calculate distance between user click and top left corner of button
        let xDist = e.clientX - alumBtn.getBoundingClientRect().x - 32
        let yDist = e.clientY - alumBtn.getBoundingClientRect().y - 32
        let touchAlum__go = gsap.timeline();
        
        // Immediately set left and top properties to position the circle element where user clicks
        gsap.set(touchBg, { left: xDist, top: yDist })

        touchAlum__go
        .set(touchBg, {display: "block"})
        .fromTo(touchBg, { scale: 1 }, { duration: 1.2, scale: 33, ease: "expoScale(1, 33)" })
        .set(".transition-cover", { display: 'block' }, 1);

    })
   })
  })

}
