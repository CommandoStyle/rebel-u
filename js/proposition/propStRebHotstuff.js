export const propStRebHotstuff = () => {

  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray('.is--hot-stuff').forEach(function(elem) {

    gsap.set('.is--hot-stuff', {yPercent: -105});
    gsap.set(".reb-m__hot-stuff-contain", {yPercent: 105});
    
    const hotTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: elem,
          start: "top 50%",
          end: "bottom 0%",
          toggleActions:"play none none reverse" } 
      });
  
    hotTimeline.to(elem, {
      duration: 1,
      yPercent: 0,
      ease: "expo"
    })
    .to(".reb-m__hot-stuff-contain", {
      duration: 1,
      yPercent: 0,
      ease: "expo"
     }, "<")
  });
}



  
