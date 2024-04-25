export const legalLinksSt = () => {    
    
    // REVEAL EMAIL INPUT

    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".lg-cta__btn").forEach(ctaBtn => {
    
     const ctaCover = ctaBtn.querySelectorAll(".cta-redact-cover");
    
      const ctaReveal =  gsap.timeline({ paused:true })
    
      ctaReveal
      .from(ctaCover, { duration: 0.4, scaleX: 0, transformOrigin: "0% 100%", ease: "linear" }) 
      .to(ctaCover, { duration: 0.4, scaleX: 0, transformOrigin: "100% 0%", ease: "linear" });
      
      ScrollTrigger.create({
        trigger: ctaBtn,
        start: "top 82%",
        onEnter: () => ctaReveal.play(),
        onLeaveBack: () => ctaReveal.reverse()
      })
    })

}
