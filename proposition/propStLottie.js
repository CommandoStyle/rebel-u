import gsap from 'gsap';

// Proposition lotties

const propStLottie = () => {

  gsap.registerPlugin(ScrollTrigger);

  const underlineLG = document.getElementById("reb-escape__underline");
  const underlineLGdata = underlineLG.getAttribute("lottie-data");
  underlineLG.load(underlineLGdata);
  
  ScrollTrigger.create({
      trigger: ".escape-underline__wrap",
      start: "top 80%",
      onEnter: () => underlineLG.play(),
      //onLeave: () => underlineLG.seek('0%'),
      onEnterBack: () => underlineLG.play(),
      onLeaveBack: () => underlineLG.seek('0%')
  });

}

export default propStLottie;