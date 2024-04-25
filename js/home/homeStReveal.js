export const homeStReveal = () => {

gsap.registerPlugin(ScrollTrigger);

gsap.set(".cta-txt", { autoAlpha: 0 });

gsap.utils.toArray(".lg-cta__btn").forEach(ctaBtn => {

 const ctaTxt = ctaBtn.querySelectorAll(".cta-txt");
 const ctaCover = ctaBtn.querySelectorAll(".cta-redact-cover");

  const ctaReveal =  gsap.timeline({ paused:true })

  ctaReveal
  .from(ctaCover, { duration: 0.4, scaleX: 0, transformOrigin: "0% 100%", ease: "linear" }) 
  .to(ctaTxt, { autoAlpha: 1, duration: 0.001 })
  .to(ctaCover, { duration: 0.4, scaleX: 0, transformOrigin: "100% 0%", ease: "linear" });
  
  ScrollTrigger.create({
    trigger: ctaBtn,
    start: "top 82%",
    onEnter: () => ctaReveal.play(),
    onLeaveBack: () => ctaReveal.reverse(),
  })
})

// HOME WHO CENSUR
  gsap.utils.toArray('.home-who__censur').forEach(function(elem) {
        
    var censur__tl = gsap.timeline(
      {
        scrollTrigger: {
          trigger: elem,
          start: "top 90%",
          end: "bottom -30%",
          scrub: 3,
          toggleActions:"play none none reverse",
        } 
      });
  
      censur__tl.to(elem, {
      scaleX: 2,
      transformOrigin: "0% 100%", //change back after testimonials
      //ease: "power4"
    });
  });

}
