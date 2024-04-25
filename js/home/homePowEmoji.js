export const homePowEmoji = () => {

  gsap.registerPlugin(ScrollTrigger);

    gsap.set("petal_contain",{ perspective: 600 })
    gsap.set("img",{ xPercent:"-50%",yPercent:"-50%" })
    
    var total = 14;
    var warp = document.getElementById("petal_contain"),  w = window.innerWidth , h = window.innerHeight;
     
     for (i=0; i<total; i++) { 
       var Div = document.createElement('div');
       gsap.set(Div, {attr:{class:'petal'}, x:R(0,w),y:R(-200,-150),z:R(-200,200)});
       warp.appendChild(Div);
       animm(Div);
     }
     
    gsap.from("#petal_contain", {y: -1000, duration: 6, ease: Power2.easeOut, delay: 1});
     
    function animm(elm){   
    
    var POWpetals = gsap.timeline({ paused: true });
    
    POWpetals.to(elm, {y:h+50, duration: () => gsap.utils.random(8, 18), ease:Linear.easeNone, repeat:-1, delay:-15})
             .to(elm, {x:'-=100', duration: () => gsap.utils.random(5, 9), rotationZ: () => gsap.utils.random(0, 180), repeat:-1, yoyo:true, ease:Sine.easeInOut})
             .to(elm, {rotationX: () => gsap.utils.random(0, 360), duration: () => gsap.utils.random(3, 9), rotationY: () => gsap.utils.random(0, 360), repeat:-1, yoyo:true, ease:Sine.easeInOut, delay:-5});

             ScrollTrigger.create({
              trigger: ".home-problem__section",
              onEnter: () => POWpetals.play(),
              onLeave: () => POWpetals.pause(),
              onEnterBack: () => POWpetals.play(),
              onLeaveBack: () => POWpetals.pause()
            });

     };
    
    function R(min,max) {return min+Math.random()*(max-min)}; 
      
    }

    
   
    
   

    
   
  
    

    

    
