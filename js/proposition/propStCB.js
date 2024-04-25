export const propStCB = () => {

gsap.registerPlugin(ScrollTrigger);

gsap.set(".carte__wrap", {xPercent: 35.5});
gsap.set(".blanche__wrap", {xPercent: -47.7});
        
    var CBblocks = gsap.timeline(
      {
        scrollTrigger: {
          trigger: ".cb-headline__contain",
          start: "top 78%",
          end: "top 29%",
          toggleActions:"play none none reverse",
          scrub: 3
        } 
      });

CBblocks.to(".carte__wrap", {
     // duration: 1.6,
      xPercent: 0,
      ease: "power1.inOut"
    })
        .to(".blanche__wrap", {
        //duration: 1.6,
        xPercent: 0,
        ease: "power1.inOut"
      }, "<");

}
