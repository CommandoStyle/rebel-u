export const quizStLottie = () => {

gsap.registerPlugin(ScrollTrigger);

const circleLG = document.getElementById("reb-ready__circled");
const circleLGdata = circleLG.getAttribute("lottie-data");
circleLG.load(circleLGdata);

ScrollTrigger.create({
  trigger: ".reb-ready-circle__wrap",
  start: "top 92%",
  onEnter: () => circleLG.play(),
  //onLeave: () => circleLG.seek('0%'),
  onEnterBack: () => circleLG.play(),
  onLeaveBack: () => circleLG.seek('0%'),
});

gsap.utils.toArray(".lg-arrow__track").forEach(function(elem) {

  const arrowInTimeline = gsap.timeline(
        {
          scrollTrigger: {
            trigger: elem,
            start: "top 76%",
            end: "bottom 0%",
            toggleActions:"play none none reverse",
          } 
        });
    
 arrowInTimeline.from(elem, {
      duration: 1,
      xPercent: -101,
      ease: "power4"
    })
  });

}
