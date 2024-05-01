export const propStSpaDeets = () => {

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
  
var spaPoints = gsap.utils.toArray('.spa-items__point');

var height = 100 * spaPoints.length;

var spaTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".spa-items__wrap",
    start: "top bottom",
    end: "+="+height+"%",
    scrub: 2,
    toggleActions: "play none none reverse",
    id: "spaPoints",
    pin: "overflow",
    snap: 
    {snapTo: "labelsDirectional",
    duration: {min: 0.2, max: 0.4},
    delay: 0.1,
    ease: "power1.easeOut" }
  }
})

ScrollTrigger.create({
  trigger: ".spa-items__contain",
  start: "top top",
  end: "+="+height+"%",
  scrub: 2,
  toggleActions: "play none none reverse",
  pin: ".spa-items__wrap", // 750vh in loco
  pinSpacing: false,
  id: "pinning"
})

spaPoints.forEach(function(elem, i) {
  
gsap.set(elem, { position: "absolute", top: 0 });
gsap.set('#spa-item__img-1', { clipPath: "inset(0% 0% 0% 0%)" }); //"circle(110% at center)"

if (i == 0) {

  spaTl.to(elem.querySelector('#spa-item__img'), { clipPath: "inset(0% 0% 0% 0%)", ease: Power1.easeInOut, duration: 1 }, i) //"circle(110% at center)" 
  spaTl.set(elem.querySelectorAll('.spa-items__txt'), { autoAlpha:1 }, i)

} else {

  spaTl
  .fromTo(elem.querySelector('#spa-item__img'), { clipPath: "inset(100% 0% 0% 0%)" //"circle(0% at center)"
}, { clipPath: "inset(0% 0% 0% 0%)", ease: Power1.easeInOut, delay: 0.3, duration: 0.7 }, i) //"circle(110% at center)"
  .from(elem.querySelectorAll('.spa-items__txt'), { autoAlpha: 0, delay: 0.99, duration: 0.01, ease: "linear"}, i)
  .add("label" + i)
}
  
 if (i !=spaPoints.length-1) {

    spaTl.to(elem.querySelectorAll('.spa-items__txt'), { autoAlpha: 0, delay: 0.99, duration: 0.01, ease: "linear" }, i + 1)
         .to(elem.querySelector('#spa-item__img'), { clipPath: "inset(100% 0% 0% 0%)" //"circle(0% at center)"
        }, { clipPath: "inset(0% 0% 0% 0%)", ease: Power1.easeInOut, delay: 0.3, duration: 0.7 }, i + 1)
   
      }

 });

  // SPA scroll indication circle
  const penSpaIndicator = lottie.loadAnimation({
    container: document.querySelector("#spa-scroll-ind"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "https://uploads-ssl.webflow.com/64217a46f171f9b7cb4bcfcf/65abdc952194abdf889c56a8_circle2.json"
  });
  
  const lottiePlayheadSpa = { frame: 0 };
  penSpaIndicator.addEventListener("data_ready", () => {
    gsap.to(lottiePlayheadSpa, {
      frame: penSpaIndicator.totalFrames - 1,
      ease: "none",
      onUpdate: () => penSpaIndicator.goToAndStop(lottiePlayheadSpa.frame, true),
      scrollTrigger: {
        trigger: ".spa-items__wrap",
        start: "top top",
        end: "bottom 85%",
        scrub: 2
      }
    });
  });

    // SPA scroll indication circle 2
    const penSpaIndicator2 = lottie.loadAnimation({
      container: document.querySelector("#spa-scroll-ind-2"),
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: "https://uploads-ssl.webflow.com/64217a46f171f9b7cb4bcfcf/65abdc952194abdf889c56a8_circle2.json"
    });
    
    const lottiePlayheadSpa2 = { frame: 0 };
    penSpaIndicator2.addEventListener("data_ready", () => {
      gsap.to(lottiePlayheadSpa2, {
        frame: penSpaIndicator2.totalFrames - 1,
        ease: "none",
        onUpdate: () => penSpaIndicator2.goToAndStop(lottiePlayheadSpa2.frame, true),
        scrollTrigger: {
          trigger: ".spa-items__wrap",
          start: "top top",
          end: "bottom 85%",
          scrub: 2
        }
      });
    });

}
