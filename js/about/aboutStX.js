import gsap from 'gsap';

const aboutStX = () => {

gsap.registerPlugin(ScrollTrigger);

var rotate = gsap.timeline({
    scrollTrigger:{
      trigger: ".about-x__track",
      pin: true,
      scrub: true,
      start: 'top top',
      end:'bottom bottom',
    }
  })
  rotate.to('.about-x__wrap', {
    rotation:360*2,
    ease:'none',
  });

  // REVEAL CTA BTN
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
  
}

export default aboutStX;