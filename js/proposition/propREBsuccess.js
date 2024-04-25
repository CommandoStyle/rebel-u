import gsap from 'gsap';

// Paperform REB booking success balloon drop

const propREBsuccess = () => {

gsap.set(".reb-drop__contain", {display: "none"})
gsap.set("img", {xPercent:"-50%", yPercent:"-50%"})
gsap.set([".reb-success-marquee__wrap", ".cb-success-marquee__wrap", ".spa-success-marquee__wrap", ".reb-success-img__mask", ".cb-success-img__mask", ".spa-success-img__mask"], { x: -30, opacity: 0 });
//gsap.set([".reb-success-img__mask", ".cb-success-img__mask", ".spa-success-img__mask"], { rotationZ: () => gsap.utils.random(0, 180), rotationX: () => gsap.utils.random(0, 18), yPercent: -440});
//gsap.set([".reb-success-marquee__mask", ".reb-success-img__mask", ".cb-success-marquee__mask", ".cb-success-img__mask"], { yPercent: 101 });
gsap.set([".reb-success-items__contain", ".cb-success-items__contain", ".spa-success-items__contain"], { display: "none" });
//gsap.set([".cb-booked__cover", ".rebs-booked__cover", ".rebm-booked__cover", ".rebxxl-booked__cover", ".cb-btn__covered",
 //".rebs-btn__covered", ".rebm-btn__covered", ".rebxxl-btn__covered"], { display: "none" });

var total = 22;
    var warp = document.getElementById("reb-drop__contain"),  w = window.innerWidth , h = window.innerHeight;
     
     for (i=0; i<total; i++){ 
       var DivReb = document.createElement('reb-div');
       gsap.set(DivReb, {attr:{class:'reb-drop'}, x:R(0,w), y:R(-200, -150), z:R(-200, 200)});
       warp.appendChild(DivReb);
       rebanim(DivReb);
     }
    
     function rebanim(elem) { 
   
   // quiz logo drop
    var rebDrop = gsap.timeline ({ paused: true, repeat: 0 });
        
rebDrop.from(elem, {delay: () => gsap.utils.random(0, 3.5), autoAlpha: 0, duration: 0.01})
      .to(".reb-drop__contain", {zIndex: 120, duration: 0.01}, "<")
      .to(elem, {x:'+=100', duration: () => gsap.utils.random(1.5, 3.5), rotationZ: () => gsap.utils.random(0, 180), repeat:-1, yoyo:true, ease:Sine.easeInOut})
      .to(elem, {duration: () => gsap.utils.random(1.5, 3.5), rotationX: () => gsap.utils.random(0, 18),rotationY: () => gsap.utils.random(0, 36), repeat:-1, yoyo:true, ease:Sine.easeInOut}, "<")
      .to(elem, {duration: () => gsap.utils.random(1.5, 3.5), y:h+320, ease:Linear.easeNone}, "<")
      .to(elem, {autoAlpha: 0})
      .to(".reb-drop__contain", {delay: 6, zIndex: 'auto'});
  
  // Reveal FINI marquee

  const cbSexit = gsap.utils.toArray([".cb-eur-cancel", ".cb-usd-cancel", ".cb-gbp-cancel", ".cb-sek-cancel", ".cb-sgd-cancel"]);
  const rebSexit = gsap.utils.toArray([".rebs-eur-cancel", ".rebs-usd-cancel", ".rebs-gbp-cancel", ".rebs-sek-cancel", ".rebs-sgd-cancel"]);
  const rebMexit = gsap.utils.toArray([".rebm-eur-cancel", ".rebm-usd-cancel", ".rebm-gbp-cancel", ".rebm-sek-cancel", ".rebm-sgd-cancel"]);
  const rebXXLexit = gsap.utils.toArray([".rebxxl-eur-cancel", ".rebxxl-usd-cancel", ".rebxxl-gbp-cancel", ".rebxxl-sek-cancel", ".rebxxl-sgd-cancel"]);
  const spaSexit = gsap.utils.toArray([".spa-eur-cancel", ".spa-usd-cancel", ".spa-gbp-cancel", ".spa-sek-cancel", ".spa-sgd-cancel"]);
  const bookSuccessBtn = gsap.utils.toArray([".cb-exit__success", ".rebs-exit__success", ".rebm-exit__success", ".rebxxl-exit__success", ".spa-exit__success"]);
  
  var rebSubmit = gsap.timeline({ paused: true });

   rebSubmit.set([".reb-success-items__contain", ".cb-success-items__contain", ".spa-success-items__contain"], { display: "flex" })
             .set(".reb-drop__contain", { display: "block" }, "<")
             //.to([".cb-success-img__mask", ".reb-success-img__mask", ".spa-success-img__mask"], { delay: 0.6, rotationZ: 0, rotationX: 0, yPercent: 0, duration: 2.2, ease: Sine.easeInOut })
             .to([".cb-success-marquee__wrap", ".reb-success-marquee__wrap", ".spa-success-marquee__wrap", ".cb-success-img__mask", ".reb-success-img__mask", ".spa-success-img__mask"], { delay: 0.6, duration: 0.7, x: 0, opacity: 1, ease: "expo.out" }, "<")
             .to([cbSexit, rebSexit, rebMexit, rebXXLexit, spaSexit, ".nav__currency-wrap"], {display: "none", duration: 0.001 })
             .to(bookSuccessBtn, {display: "flex", duration: 0.001}, "<");
             
  // Paperform trigger
   window.addEventListener('PaperformSubmission', rebSuccess);
   
   function rebSuccess() { 

     rebDrop.restart(1);   
     rebSubmit.play(0); 

       }
    }

    function R(min,max) {return min+Math.random()*(max-min)};



}

export default propREBsuccess;