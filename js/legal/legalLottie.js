
const legalLottie = () => {

    gsap.registerPlugin(ScrollTrigger);

var elem = document.getElementById('legal-lottie');
 
LegalScrollTrigger({
  target: "#legal-lottie",
  path: "https://uploads-ssl.webflow.com/64217a46f171f9b7cb4bcfcf/65d73eb3c538bf84743a6e15_legal.json",
  speed: "medium",
  scrub: 1
});

function LegalScrollTrigger(vars) {
  let playhead = {frame: 0},
    target = gsap.utils.toArray(vars.target)[0],
    speeds = {slow: "+=2000", medium: "+=1000", fast: "+=500"},
    st = {trigger: ".legal-lottie__track", start: "top top", end: "bottom 0%", scrub: 1},
    animation = lottie.loadAnimation({
      container: target,
      renderer: vars.renderer || "svg",
      loop: true,
      autoplay: false,
      path: vars.path
    });
  for (let p in vars) { 
    st[p] = vars[p];
  }
  animation.addEventListener("DOMLoaded", function() {
    let wrap = gsap.utils.wrap(0, animation.totalFrames - 1)
    gsap.to(playhead, {
      frame: (animation.totalFrames - 1) * 12,
      ease: "none",
      onUpdate: () => animation.goToAndStop(wrap(playhead.frame), true),
      scrollTrigger: st
    });
  });
 }

 gsap.to('.legal-lottie__contain', {
     scrollTrigger: {
       trigger: ".legal-lottie__track",
       start: "top top",
       end: "bottom 0%",
       pin: ".legal-lottie__track",
       scrub: 1
     }
   });
   

}

export default legalLottie;