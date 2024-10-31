export const morphCursor = () => {

gsap.registerPlugin( MorphSVGPlugin );

    // morph cursor core
    
    MorphSVGPlugin.convertToPath("#circle", "#arrow", "#oval");

    var cursor = gsap.utils.toArray(".cursor-dot");
    var morphLeft = gsap.utils.toArray( ".swiper-button-prev" );
    var morphRight = gsap.utils.toArray( ".swiper-button-next" );
    var morphTop = gsap.utils.toArray( ".hero-scroll" );
    var ebelRead = gsap.utils.toArray(".mrebel-post__link");
    var ebelLatest = gsap.utils.toArray(".mrebel-latest__link");
    var alumView = gsap.utils.toArray(".is--alumni-hover");
    var shrinkCursor = gsap.utils.toArray([".email-form", ".prop-sub__link", ".inline-link_long", ".a-answer__container a"]);
    //var ebelQuery = gsap.utils.toArray(".mrebel__submit-query");
    var ease = 'none';
    
    gsap.set(".ebel-read__contain", {display: 'none', x: -7, autoAlpha: 0});
    
    // ball to hero down
    
    morphTop.forEach((mortop) => {
      
      mortop.addEventListener("mouseenter", morphin);
      mortop.addEventListener("mouseleave", morphout);
      
      function morphin(){
            gsap.to("#circle", {
            morphSVG:{ shape: '#arrow', shapeIndex:"polygon"},
            transformOrigin: "50% 50%", duration: 0.3,
            ease: Power2.Out});
            gsap.to(cursor, {left: "-1.45em", top: "2.5em", scale: 0.32,
            transformOrigin: "50% 50%", duration: 0.4,
            ease: Power1.Out}); 
      }
      function morphout(){
            gsap.to("#circle", {
            morphSVG:{ shape: '#circle', shapeIndex:"circle"},
            transformOrigin: "50% 50%", duration: 0.3,
            ease: Power2.Out});
            gsap.to(cursor, {left: "-1.6em", top: "1.52em", scale: 0.07,
            transformOrigin: "50% 50%", duration: 0.4,
            ease: Power1.In});
     } 

     mortop.addEventListener("pointerdown", () => {
      gsap.to(cursor, {
        scale: 0.384,
        duration: 0.33
      });
    });
    
    mortop.addEventListener("pointerup", () => {
      gsap.to(cursor, {
        scale: 0.32,
        duration: 0.33
      });
     });

    }); 

    // ball to testimonal arrow left
    
    morphLeft.forEach((morlef) => {
      
      morlef.addEventListener("mouseenter", morphin);
      morlef.addEventListener("mouseleave", morphout);
      
      function morphin(){
            gsap.to("#circle", {
            morphSVG:{ shape: '#arrow', shapeIndex:"polygon"},
            transformOrigin: "50% 50%", duration: 0.3, 
            ease: Power2.Out});
            gsap.to(cursor, {left: "-1.6em", top: "1.52em", scale: 0.32, rotation: 90, 
            transformOrigin: "50% 50%", duration: 0.3, ease: Power1.Out}); 
      }
      function morphout(){
            gsap.to("#circle", {
            morphSVG:{ shape: '#circle', shapeIndex:"circle"},
            transformOrigin: "50% 50%", duration: 0.3,
            ease: Power2.Out});
            gsap.to(cursor, {left: "-1.6em", top: "1.52em", scale: 0.07, rotation: 0,
            transformOrigin: "50% 50%", duration: 0.3, ease: Power1.In});
     } 

     morlef.addEventListener("pointerdown", () => {
      gsap.to(cursor, {
        scale: 0.384,
        duration: 0.33
      });
    });
    
    morlef.addEventListener("pointerup", () => {
      gsap.to(cursor, {
        scale: 0.32,
        duration: 0.33
      });
     });

    }); 
    
    // ball to testimonal arrow right
    
    morphRight.forEach((morrig) => {
      
      morrig.addEventListener("mouseenter", morphin);
      morrig.addEventListener("mouseleave", morphout);
      
      function morphin(){
            gsap.to("#circle", {
            morphSVG:{ shape: '#arrow', shapeIndex:"polygon"},
            transformOrigin: "50% 50%", duration: 0.3, 
            ease: Power2.Out});
            gsap.to(cursor, {left: "-1.6em", top: "1.52em", scale: 0.32, rotation: -90, 
            transformOrigin: "50% 50%", duration: 0.3, 
            ease: Power1.Out}); 
      }
      function morphout(){
            gsap.to("#circle", {
            morphSVG:{ shape: '#circle', shapeIndex:"circle"},
            transformOrigin: "50% 50%", duration: 0.3, 
            ease: Power2.Out});
            gsap.to(cursor, {left: "-1.6em", top: "1.52em", scale: 0.07, rotation: 0, 
            transformOrigin: "50% 50%", duration: 0.3, 
            ease: Power1.In});
     }

     morrig.addEventListener("pointerdown", () => {
      gsap.to(cursor, {
        scale: 0.384,
        duration: 0.33
      });
    });
    
    morrig.addEventListener("pointerup", () => {
      gsap.to(cursor, {
        scale: 0.32,
        duration: 0.33
      });
     });

    }); 
    
// ball to read mr ebel

ebelRead.forEach(function(el) { 

  const read_in  = new gsap.timeline({paused: true});
  const read_out = new gsap.timeline({paused: true});
  
  read_in
 .to(".cursor-dot", {scale: 0.25, transformOrigin: "50% 50%", left: "-1.45em", top: "1.52em", duration: 0.33, ease: Power1.out});
  
 read_out
 .to(".cursor-dot", {scale: 0.07, transformOrigin: "50% 50%", left: "-1.6em", top: "1.52em", duration: 0.33, ease: Power1.In});

  el.addEventListener('mouseenter', function() {
    read_in.restart(); 
    });
  
  el.addEventListener('mouseleave', function() {
    read_out.restart(); 
    });

    el.addEventListener("pointerdown", () => {
      gsap.to(cursor, {
        scale: 0.3, 
        duration: 0.33
      });
    });
    
}); 

// ball to read mr ebel LATEST

ebelLatest.forEach(function(el) { 

  const latest_in  = new gsap.timeline({paused: true});
  const latest_out = new gsap.timeline({paused: true});
  
  latest_in
  .set(".ebel-read__contain", {x: -7, display: "none", autoAlpha: 0})
  .to(cursor, {scale: 0.5, transformOrigin: "center", left: "-1.45em", top: "1.52em", duration: 0.44, ease: Power1.Out, overwrite: "auto"})
  .set(".ebel-read__contain", {display: 'flex'}, "<")
  .to(".ebel-read__contain", {x: 0, autoAlpha: 1, duration: 0.33, ease: "expo.out"});
  
 latest_out
 .to(".ebel-read__contain", {autoAlpha: 0, x: 7, duration: 0.11, ease: "expo.out"})
 .set(".ebel-read__contain", {x: 7, autoAlpha: 0, display: 'none'})
 .to(cursor, {scale: 0.07, transformOrigin: "center", left: "-1.6em", top: "1.52em", duration: 0.44, ease: Power1.In});

  el.addEventListener('mouseenter', function() {
    latest_in.restart(); 
    });
  
  el.addEventListener('mouseleave', function() {
    latest_out.restart(); 
    });

    el.addEventListener("pointerdown", () => {
      gsap.to(cursor, {
        scale: 0.6,  
        duration: 0.33});
      gsap.to(".ebel-read__contain", {
        scale: 0.8, transformOrigin: "0% 0%", duration: 0.33 }, "<");
    });
    

}); 

// ball to DROP IN alumni

alumView.forEach(function(el) { 

const view_in  = new gsap.timeline({paused: true});
const view_out = new gsap.timeline({paused: true});

view_in
.to(".cursor-dot", {height: "3.75em", width: "3.75em", transformOrigin: "50% 50%", left: "-1.45em", top: "1.52em", duration: 0.33, ease: Power1.out});

view_out
.to(".cursor-dot", {height: "1.04em", width: "1.04em", transformOrigin: "50% 50%", left: "-1.6em", top: "1.52em", duration: 0.33, ease: Power1.In});

el.addEventListener('mouseenter', function() {
view_in.restart(); 
});

el.addEventListener('mouseleave', function() {
view_out.restart(); 
});

el.addEventListener("pointerdown", () => {
      gsap.to(cursor, {
        height: "4.5em", 
        width: "4.5em", 
        duration: 0.33
      });
    });
    
}); 

  // Shrink cursor
    
  shrinkCursor.forEach((shrink) => {
      
    shrink.addEventListener("mouseenter", shrinkIn);
    shrink.addEventListener("mouseleave", shrinkOut);
    
    function shrinkIn(){
          gsap.to(cursor, {scale: 0, transformOrigin: "50% 50%", duration: 0.33, ease: Power1.Out, overwrite: 'auto'}); 
    }
    function shrinkOut(){
          gsap.to(cursor, {scale: 0.07, transformOrigin: "50% 50%", duration: 0.33, ease: Power1.In, overwrite: 'auto'});
   } 

  }); 
    
}
