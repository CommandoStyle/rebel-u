import gsap from 'gsap';

// Arrow side-side CTA button

const arrowCtaBtn = (ArrowOnEnter, ArrowOnLeave) => {
  
  let arrows = gsap.utils.toArray('.arrow__btn'); 
  let revertBack = gsap.utils.toArray('.revert-back__btn'); 
  
  arrows.forEach(function(el) { 
    
    let aTrack = el.querySelectorAll(".loading-arrow-1"); 
    let aAnimation = null;
    let isAhovering = false;
    
    el.addEventListener("mouseenter", ArrowOnEnter);  
    el.addEventListener("mouseleave", ArrowOnLeave);
    
    function ArrowOnEnter() {

    let lgArrowIn = gsap.timeline();
      
      isAhovering = true;
      
      if (!aAnimation) {      
        aAnimation = 
 lgArrowIn.fromTo(aTrack, { xPercent: 0}, { xPercent: 0, duration: 0.2})
          .fromTo(aTrack, { xPercent: -100 }, {
          xPercent: 0,
          ease: "power1.easeOut",
          duration: 0.55,
          overwrite: "auto",
          onComplete: () => {
            aAnimation = null;
            if (!isAhovering) {            
              ArrowOnLeave();
            }
          }
        });
      }    
    }
    
    function ArrowOnLeave() {
      
      isAhovering = false;
      
      if (!aAnimation) {            
        aAnimation = gsap.to(aTrack, {
          xPercent: 0,
          duration: 0.001,
           onComplete: () => {
             aAnimation = null;
             if (isAhovering) {
               ArrowOnEnter();
             }
           }
        });
      }    
    }  
  });

  revertBack.forEach(function(el) { 
    
    let revTrack = el.querySelectorAll(".revert-arrow__track"); 
    let revAnimation = null;
    let isRevHovering = false;
    
    el.addEventListener("mouseenter", ArrowOnEnter);  
    el.addEventListener("mouseleave", ArrowOnLeave);
    
    function ArrowOnEnter() {

    let backArrowIn = gsap.timeline();
      
    isRevHovering = true;
      
      if (!revAnimation) {      
        revAnimation = 
 backArrowIn.fromTo(revTrack, { xPercent: 0}, { xPercent: 0, duration: 0.2})
          .fromTo(revTrack, { xPercent: 100 }, {
          xPercent: 0,
          ease: "power1.easeOut",
          duration: 0.55,
          overwrite: "auto",
          onComplete: () => {
            revAnimation = null;
            if (!isRevHovering) {            
              ArrowOnLeave();
            }
          }
        });
      }    
    }
    
    function ArrowOnLeave() {
      
      isRevHovering = false;
      
      if (!revAnimation) {            
        revAnimation = gsap.to(revTrack, {
          xPercent: 0,
          duration: 0.001,
           onComplete: () => {
             revAnimation = null;
             if (isRevHovering) {
               ArrowOnEnter();
             }
           }
        });
      }    
    }  
  });
}

export default arrowCtaBtn;