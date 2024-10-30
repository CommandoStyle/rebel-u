export const propFaqAccordion = () => {

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, MorphSVGPlugin);

// ball to faq arrow 

MorphSVGPlugin.convertToPath("#circle", "#arrow");

var cursor = gsap.utils.toArray(".cursor-dot");
var morphFaq = gsap.utils.toArray(".what-the-faq__items-contain");
    
morphFaq.forEach((morfaq) => {
      
  morfaq.addEventListener("mouseenter", morphin);
  morfaq.addEventListener("mouseleave", morphout);
  
  function morphin(){
        gsap.to("#circle", {
        morphSVG:{ shape: '#arrow', shapeIndex:"polygon"},
        transformOrigin: "50% 50%", duration: 0.3,
        ease: Power2.Out});
        gsap.to(cursor, {xPercent: -38, yPercent: -52, scale: 0.16,
        transformOrigin: "50% 50%", duration: 0.3, 
        ease: Power1.Out}); 
  }
  function morphout(){
        gsap.to(cursor, {xPercent: -38, yPercent: -52, scale: 0.07,
        transformOrigin: "50% 50%", duration: 0.15, 
        ease: Power1.In });
        gsap.to("#circle", {
        morphSVG:{ shape: '#circle', shapeIndex:"circle"},
        transformOrigin: "50% 50%", duration: 0.3,
        ease: Power2.Out, onComplete:  () => { ScrollTrigger.refresh(); } });   
 }

 morfaq.addEventListener("pointerdown", () => {
  gsap.to(cursor, {
    scale: 0.192,
    duration: 0.33
  });
});

morfaq.addEventListener("pointerup", () => {
  gsap.to(cursor, {
    scale: 0.16,
    duration: 0.33
  });
 });

}); 

let groups = gsap.utils.toArray(".what-the-faq__group");
let menus = gsap.utils.toArray(".what-the-faq__btn");
let menuToggles = groups.map(createAnimation);

menus.forEach(menu => {
  menu.addEventListener("click", () => toggleMenu(menu));
});

function toggleMenu(clickedMenu) {    
  menuToggles.forEach(toggleFn => toggleFn(clickedMenu))
}

function createAnimation(element) {
    
  let menu = element.querySelector(".what-the-faq__btn");
  let box  = element.querySelector(".what-the-faq__a-wrap");
  let actif = element.querySelector(".what-the-faq__actif");
  let chevron = element.querySelector(".faq-chevron__wrap");
  
  gsap.set(actif, { transformOrigin: "50% 50%", height: "100%" });
  gsap.set(box, { transformOrigin: "50% 50%", height: "auto", autoAlpha: 1, marginBottom: '2.2em', marginTop: '5.12em' });

 let accordion = gsap.timeline({ reversed: true });

 accordion.from(box, { transformOrigin: "50% 50%", height: 0, autoAlpha: 0, marginBottom: 0, marginTop: 0, duration: 0.6, ease: Power1.easeInOut })
          .to(chevron, { rotateX: 180, duration: 0.6, ease: Power1.easeInOut }, "<")
          .from(actif, { transformOrigin: "50% 50%", height: 0, duration: 0.0001 }, "-=0.6");
          
  return function(clickedMenu) {
    
    if (clickedMenu === menu) {
      accordion.reversed( !accordion.reversed() );
    } else {
      accordion.reverse();
    } 
  }
}

// Flip cursor arrow
 
var arrowFlip = gsap.utils.toArray( ".what-the-faq__actif" );

arrowFlip.forEach((arrowFlip) => {
      
  arrowFlip.addEventListener("mouseenter", flipin);
  arrowFlip.addEventListener("mouseleave", flipout);
      
      function flipin(){
            gsap.to(cursor, {rotateX: 180, yPercent: -62,
            transformOrigin: "50% 50%", duration: 0.33, 
            ease: Power2.Out}); 
      }
      function flipout(){
            gsap.to(cursor, {rotateX: 0, yPercent: -52,
            transformOrigin: "50% 50%", duration: 0.33, 
            ease: Power2.In});
            
     } 
    }); 

}
