export const smlArrowCta = () => {
  
gsap.set(".topic-nav__track-right", { xPercent: 0 });
gsap.set(".topic-nav__track-left", { xPercent: 0 });
gsap.set(".skip-btn-arrow__wrap", { yPercent: 0 });
gsap.set(".skip-btn-arrow-up__wrap", { yPercent: 0 });
  
let rArrows = gsap.utils.toArray('.topic-nav__next'); 
let lArrows = gsap.utils.toArray('.topic-nav__prev'); 
let dArrows = gsap.utils.toArray('.reb__skip-btn'); 
let uArrows = gsap.utils.toArray('.reb__skip-up-btn'); 
  
rArrows.forEach(function(el) { 
    
    let aTrackRight = el.querySelector(".topic-nav__track-right"); 
    let aAnimationRight = null;
    let isAhoveringRight = false;
    
    el.addEventListener("mouseenter", ArrowOnEnterR);  
    el.addEventListener("mouseleave", ArrowOnLeaveR);
    
    function ArrowOnEnterR() {

      let smlArrowR = gsap.timeline();
      
      isAhoveringRight = true;
      
      if (!aAnimationRight) {      
        smlArrowR.fromTo(aTrackRight, { xPercent: 0}, { xPercent: 0, duration: 0.2})
        .fromTo(aTrackRight, { xPercent: -100 }, {
        xPercent: 0,
        ease: "power1.easeOut",
        duration: 0.4,
          onComplete: () => {
            aAnimationRight = null;
            if (!isAhoveringRight) {            
              ArrowOnLeaveR();
            }
          }
        });
      }    
    }
    
    function ArrowOnLeaveR() {
      
      isAhoveringRight = false;
      
      if (!aAnimationRight) {            
        aAnimationRight = gsap.to(aTrackRight, {
          xPercent: 0,
          duration: 0.01,
           onComplete: () => {
             aAnimationRight = null;
             if (isAhoveringRight) {
               ArrowOnEnterR();
             }
           }
        });
      }    
    }  
  });

  lArrows.forEach(function(el) { 
    
    let aTrackLeft = el.querySelector(".topic-nav__track-left"); 
    let aAnimationLeft = null;
    let isAhoveringLeft = false;
    
    el.addEventListener("mouseenter", ArrowOnEnterL);  
    el.addEventListener("mouseleave", ArrowOnLeaveL);
    
    function ArrowOnEnterL() {

      let smlArrowL = gsap.timeline();
      
      isAhoveringLeft = true;
      
      if (!aAnimationLeft) {      
        smlArrowL.fromTo(aTrackLeft, { xPercent: 0}, { xPercent: 0, duration: 0.2})
        .fromTo(aTrackLeft, { xPercent: 100 }, {
        xPercent: 0,
        ease: "power1.easeOut",
        duration: 0.4,
          onComplete: () => {
            aAnimationLeft = null;
            if (!isAhoveringLeft) {            
              ArrowOnLeaveL();
            }
          }
        });
      }    
    }
    
    function ArrowOnLeaveL() {
      
      isAhoveringLeft = false;
      
      if (!aAnimationLeft) {            
        aAnimationLeft = gsap.to(aTrackLeft, {
          xPercent: 0,
          duration: 0.01,
           onComplete: () => {
             aAnimationLeft = null;
             if (isAhoveringLeft) {
               ArrowOnEnterL();
             }
           }
        });
      }    
    }  
  });

  dArrows.forEach(function(el) { 
    
    let aTrackDown = el.querySelector(".skip-btn-arrow__wrap"); 
    let aAnimationDown = null;
    let isAhoveringDown = false;
    
    el.addEventListener("mouseenter", ArrowOnEnterD);  
    el.addEventListener("mouseleave", ArrowOnLeaveD);
    
    function ArrowOnEnterD() {

      let smlArrowD = gsap.timeline();
      
      isAhoveringDown = true;
      
      if (!aAnimationDown) {      
        smlArrowD.fromTo(aTrackDown, { yPercent: 0}, { yPercent: 0, duration: 0.2})
        .fromTo(aTrackDown, { yPercent: 100 }, {
        yPercent: 0,
        ease: "power1.easeOut",
        duration: 0.4,
          onComplete: () => {
            aAnimationDown = null;
            if (!isAhoveringDown) {            
              ArrowOnLeaveD();
            }
          }
        });
      }    
    }
    
    function ArrowOnLeaveD() {
      
      isAhoveringDown = false;
      
      if (!aAnimationDown) {            
        aAnimationDown = gsap.to(aTrackDown, {
          yPercent: 0,
          duration: 0.01,
           onComplete: () => {
             aAnimationDown = null;
             if (isAhoveringDown) {
               ArrowOnEnterD();
             }
           }
        });
      }    
    }  
  });

    uArrows.forEach(function(el) { 
    
    let aTrackUp = el.querySelector(".skip-btn-arrow-up__wrap"); 
    let aAnimationUp = null;
    let isAhoveringUp = false;
    
    el.addEventListener("mouseenter", ArrowOnEnterU);  
    el.addEventListener("mouseleave", ArrowOnLeaveU);
    
    function ArrowOnEnterU() {

      let smlArrowU = gsap.timeline();
      
      isAhoveringUp = true;
      
      if (!aAnimationUp) {      
        smlArrowU.fromTo(aTrackUp, { yPercent: 0}, { yPercent: 0, duration: 0.2})
        .fromTo(aTrackUp, { yPercent: 100 }, {
        yPercent: 0,
        ease: "power1.easeOut",
        duration: 0.4,
          onComplete: () => {
            aAnimationUp = null;
            if (!isAhoveringUp) {            
              ArrowOnLeaveU();
            }
          }
        });
      }    
    }
    
    function ArrowOnLeaveU() {
      
      isAhoveringUp = false;
      
      if (!aAnimationUp) {            
        aAnimationUp = gsap.to(aTrackUp, {
          yPercent: 0,
          duration: 0.01,
           onComplete: () => {
             aAnimationUp = null;
             if (isAhoveringUp) {
               ArrowOnEnterU();
             }
           }
        });
      }    
    }  
  });




}
