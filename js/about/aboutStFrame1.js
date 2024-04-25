export const aboutStFrame1 = () => {

gsap.set('.about-team__hello-wrap', {yPercent: 120});

  gsap.utils.toArray('.about-team__hello-wrap').forEach(function(elem) {
      
    const youTimeline = gsap.timeline(
      {
        scrollTrigger: {
          trigger: elem,
          start: "top 105%",
          end: "top 50%",
          scrub: 2,
          toggleActions:"play none none reverse",
        } 
      });
  
    youTimeline.to(elem, {
      duration: 2,
      yPercent: 0,
      ease: Power2.easeOut
    });
  });
}
