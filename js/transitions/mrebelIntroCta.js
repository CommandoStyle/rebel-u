export const mrebelIntroCta = (container) => {
 
gsap.set(".mrebel-reveal", { x: -30, opacity: 0 });
gsap.set(['.home-logo', ".menu-txt", '.beta__txt', ".query-txt", ".query-away__track"], {autoAlpha: 1});
gsap.set([".redact-cover-logo", ".redact-cover-beta", ".redact-cover-query", ".redact-cover-nav", ".redact-cover-qa"], {scaleX: 0 });
gsap.set('.ebel-42__wrap', { autoAlpha: 0 });
gsap.set('.indie-advisory__img', { autoAlpha: 1 });
gsap.set(['.redact-cover-advisory', '.redact-cover-42', ".rblu-exit__cover"], { scaleX: 0 });
gsap.set(".hero-scroll", { display: "none" });

const circleXL = document.getElementById("hero__lottie-answer");
const circleXLdata = circleXL.getAttribute("lottie-data");
circleXL.load(circleXLdata);

const fortyTwo = document.getElementById("ebel-42__circled");
const fortyTwodata = fortyTwo.getAttribute("lottie-data");
fortyTwo.load(fortyTwodata);
  
  var ebelIntroCta = gsap.timeline();
  
    ebelIntroCta
      
      .to(".mrebel-reveal", { delay: 1.1, duration: 1, x: 0, stagger: 0.03, ease: "expo.out" })
      .to(".mrebel-reveal", { duration: 0.4, opacity: 1, stagger: 0.03, ease: "linear" }, "<")
      .set(".menu-txt", { color: '#000000'}, "-=0.85")
      .to(".rblu-exit__cover", { scaleX: 1, transformOrigin: "0% 100%", duration: 0.35, ease: "linear"}, "+=0.15")
      .from(".rblu-exit__img", { autoAlpha: 0, duration: 0.001})
      .to(".rblu-exit__cover", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.35, ease: "linear"}, "+=0.01")
      .to(".redact-cover-42", { scaleX: 1, transformOrigin: "0% 100%", duration: 0.125, ease: "linear"}, "+=0.1")
      .to('.ebel-42__wrap', { autoAlpha: 1, duration: 0.001, onComplete: () => { circleXL.play(); }})
      .to(".redact-cover-42", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.125, ease: "linear"})
      .add(gsap.delayedCall(0.8, function() { fortyTwo.play(); }))
      .set(".hero-scroll", { delay: 1, display: "block" });

}
