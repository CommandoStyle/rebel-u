import gsap from 'gsap';

// Reveal spacer lines from left on scroll

const propStSpacers = () => {

gsap.registerPlugin(ScrollTrigger);

let mm = gsap.matchMedia();

gsap.utils.toArray(".lg-cta__btn, .reb__skip-btn, .reb__skip-up-btn, .spa__skip-btn, .spa__skip-up-btn").forEach(ctaBtn => {

  const ctaTxt = ctaBtn.querySelectorAll(".cta-txt");
 
   const ctaTxtHide =  gsap.timeline({ paused:true })
 
   ctaTxtHide
   .set(ctaTxt, { autoAlpha: 0 });
   
   ScrollTrigger.create({
     trigger: ctaBtn,
     start: "top 105%",
     onEnter: () => ctaTxtHide.play(),
     //onLeaveBack: () => ctaTxtHide.reverse(),
   })
 })
 

gsap.set(".cta-txt", { autoAlpha: 0 });

gsap.utils.toArray(".lg-cta__btn, .reb__skip-btn, .reb__skip-up-btn, .spa__skip-btn, .spa__skip-up-btn").forEach(ctaBtn => {

 const ctaTxt = ctaBtn.querySelectorAll([".cta-txt", ".skip-btn-arrow__wrap"]);
 const ctaCover = ctaBtn.querySelectorAll(".cta-redact-cover");

 gsap.set(ctaTxt, { autoAlpha: 0 });

  const ctaReveal =  gsap.timeline({ paused:true })

  ctaReveal
  .from(ctaCover, { duration: 0.4, scaleX: 0, transformOrigin: "0% 100%", ease: "linear" }) 
  .to(ctaTxt, { autoAlpha: 1, duration: 0.001 })
  .to(ctaCover, { duration: 0.4, scaleX: 0, transformOrigin: "100% 0%", ease: "linear" });
  
  ScrollTrigger.create({
    trigger: ctaBtn,
    start: "top 82%",
    onEnter: () => ctaReveal.play(),
    //onLeaveBack: () => ctaReveal.reverse(),
  })
})


//Desktop
mm.add("(min-width: 990px)", () => {

gsap.utils.toArray('.spacer-line__from-left').forEach(function(elem) {

const spacerTimelineL = gsap.timeline(
      {
        scrollTrigger: {
          trigger: elem,
          start: "top 92%",
          end: "bottom 0%",
          toggleActions:"play none none none",
        } 
      });
  
spacerTimelineL.from(elem, {
      duration: 1,
      scaleX: 0,
      transformOrigin: "0% 100%",
      ease: "power4"
    })
  });

gsap.utils.toArray(".what-the-faq__q-l-wrap").forEach(function(elem) {

const questionTimeline = gsap.timeline(
      {
        scrollTrigger: {
          trigger: elem,
          start: "top 92%",
          end: "bottom 0%",
          toggleActions:"play none none none",
        } 
      });
  
questionTimeline.from(elem, {
    duration: 1,
    x: -30,
    opacity: 0,
    ease: "power4"
  })
});

  gsap.utils.toArray(".what-the-faq__a-l-wrap").forEach(function(elem) {

    const questionTimeline = gsap.timeline(
          {
            scrollTrigger: {
              trigger: elem,
              start: "top 92%",
              end: "bottom 0%",
              toggleActions:"play none none none",
            } 
          });
      
    questionTimeline.from(elem, {
        duration: 1,
        x: -30,
        opacity: 0,
        ease: "power4"
      })
   });  
});

//iPAD
mm.add("(max-width: 991px) and (min-width: 429px)", () => {

  gsap.utils.toArray('.what-the-faq__group').forEach(function(elem) {

    const spacerTimelineL = gsap.timeline(
          {
            scrollTrigger: {
              trigger: elem,
              start: "top 92%",
              end: "bottom 0%",
              toggleActions:"play none none none",
            } 
          });
      
    spacerTimelineL.from(elem, {
          duration: 1,
          x: -30,
          opacity: 0,
          ease: "power4"
        })
    });
});

//Mobile
mm.add("(max-width: 428px)", () => {

  gsap.utils.toArray('.what-the-faq__group').forEach(function(elem) {

    const spacerTimelineL = gsap.timeline(
          {
            scrollTrigger: {
              trigger: elem,
              start: "top 92%",
              end: "bottom 0%",
              toggleActions:"play none none none",
            } 
          });
      
    spacerTimelineL.from(elem, {
          duration: 1,
          x: -20,
          opacity: 0,
          ease: "power4"
        })
    });
});



}

export default propStSpacers;