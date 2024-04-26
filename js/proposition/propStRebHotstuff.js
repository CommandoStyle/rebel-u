export const propStRebHotstuff = () => {

  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray('.is--hot-stuff').forEach(function(elem) {

    gsap.set('.is--hot-stuff', {x: -30, opacity: 0});
    //gsap.set(".reb-m__hot-stuff-contain", {yPercent: 105});
    
    const hotTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: elem,
          start: "top 50%",
          end: "bottom 0%",
          toggleActions:"play none none reverse" } 
      });
  
    hotTimeline.to(elem, {
      duration: 0.6,
      x: 0,
      ease: "power1.out"
    })
    .to(elem, {
      duration: 0.6,
      opacity: 1,
      ease: "linear"
     }, "<")
  });
}



  
