export const homeEbelSwiper = () => {

gsap.registerPlugin(SplitText, ScrollTrigger);

let mm = gsap.matchMedia();

// DESKTOP
mm.add("(min-width: 992px)", () => {
     
 const ebelSwiper = new Swiper (".swiper.mrebel-text", {
     loop: true,
     speed: 1100,
     autoplay: false,
     on: {
       slideChangeTransitionStart: function () {
           // Slide captions
           var swiper = this;
    
$(swiper.slides[swiper.activeIndex]).attr("data-title");

 var QApong = gsap.timeline();

 QApong.to(".lineChild", { duration: 0.55, x: -10, opacity: 0, stagger: -0.05, ease: Power2.easeIn})
 
 .to(".a-contain", {
     x: "5.22em",
     duration: 2.2,
     ease: Expo.easeOut })
 .to(".ampersand-contain", {
     x: "-45.9em", 
     duration: 2.2,
     rotation: 0,
     ease: Power1.easeOut },"-=2.2")
 .to(".q-contain", {
     x: "5.22em",
     duration: 2.2,
     ease: Expo.easeIn },"-=2.2")
 .to(".q-contain", {
     x: "0em",
     duration: 2.2,
     ease: Expo.easeOut })
 .to(".ampersand-contain", {
     x: "4em", 
     duration: 2.2,
     rotation: 360,
     ease: Power1.easeOut },"-=2.2")
 .to(".a-contain", {
     x: "0em",
     duration: 2.2,
     ease: Expo.easeIn },"-=2.2");
     },

  slideChangeTransitionEnd: function () {
           // Slide captions
           var swiper = this;
           var currentTitle = $(swiper.slides[swiper.activeIndex]).attr("data-title");
           $(".slide-captions").html(function() {
             return "<data-title class='current-title'>" + currentTitle + "</data-title>";
           });

new SplitText("data-title", { type: "lines", linesClass: "lineChild" });
new SplitText("data-title", { type: "lines", linesClass: "lineParent" });

var slideswap = gsap.timeline();

slideswap.from(".lineChild", { duration: 0.55, x: 10, opacity: 0, stagger: 0.05, ease: Power2.easeOut});
      
        }
     }
  });

 // Slide captions
 var currentTitle = $(ebelSwiper.slides[ebelSwiper.activeIndex]).attr("data-title");
 $(".slide-captions").html(function() {
   return "<data-title class='current-title'>" + currentTitle + "</data-title>";
 });

 ScrollTrigger.create({
  trigger: ".ebel-swiper__trigger",
  onEnter: () => ebelSwiper.autoplay.start(),
  onLeave: () => ebelSwiper.autoplay.stop(),
  onEnterBack: () => ebelSwiper.autoplay.start(),
  onLeaveBack: () => ebelSwiper.autoplay.stop()
  });
});

// iPAD
mm.add("(max-width: 991px) and (min-width: 429px)", () => {
     
  const ebelSwiper = new Swiper ('.swiper.mrebel-text', {
      loop: true,
      speed: 900,
      autoplay: false,
      on: {
        slideChangeTransitionStart: function () {
            // Slide captions
            var swiper = this;
     
              $(swiper.slides[swiper.activeIndex]).attr("data-title");
 
  var QApongIpad = gsap.timeline();
 
  QApongIpad.to(".lineChild", { duration: 0.45, x: -10, opacity: 0, stagger: -0.045, ease: Power2.easeIn})
  
  .to(".a-contain", {
      x: "6.12em",
      duration: 1.8,
      ease: Expo.easeOut })
  .to(".ampersand-contain", {
      x: "-11.6em", 
      duration: 1.8,
      rotation: 0,
      ease: Power1.easeOut }, "-=1.8")
  .to(".q-contain", {
      x: "6.12em",
      duration: 1.8,
      ease: Expo.easeIn }, "-=1.8")
  .to(".q-contain", {
      x: "0em",
      duration: 1.8,
      ease: Expo.easeOut })
  .to(".ampersand-contain", {
      x: "0em", 
      duration: 1.8,
      rotation: 360,
      ease: Power1.easeOut }, "-=1.8")
  .to(".a-contain", {
      x: "0em",
      duration: 1.8,
      ease: Expo.easeIn }, "-=1.8");
      },
           
   slideChangeTransitionEnd: function () {
            // Slide captions
            var swiper = this;
            var currentTitle = $(swiper.slides[swiper.activeIndex]).attr("data-title");
            $(".slide-captions").html(function() {
              return "<data-title class='current-title'>" + currentTitle + "</data-title>";
            });
 
 new SplitText("data-title", { type: "lines", linesClass: "lineChild" });
 new SplitText("data-title", { type: "lines", linesClass: "lineParent" });
 
  gsap.from(".lineChild", { duration: 0.45, x: 10, opacity: 0, stagger: 0.045, ease: Power2.easeOut});
        
          }
       }
    });
 
  // Slide captions
  var currentTitle = $(ebelSwiper.slides[ebelSwiper.activeIndex]).attr("data-title");
  $(".slide-captions").html(function() {
    return "<data-title class='current-title'>" + currentTitle + "</data-title>";
  });
 
  ScrollTrigger.create({
   trigger: ".ebel-swiper__trigger",
   onEnter: () => ebelSwiper.autoplay.start(),
   onLeave: () => ebelSwiper.autoplay.stop(),
   onEnterBack: () => ebelSwiper.autoplay.start(),
   onLeaveBack: () => ebelSwiper.autoplay.stop()
   });
 });
 

// MOBILE
mm.add("(max-width: 428px)", () => {

  const ebelSwiper = new Swiper ('.swiper.mrebel-text', {
    loop: true,
    speed: 600,
    autoplay: false,
    cssMode: true,
    on: {
      slideChangeTransitionStart: function () {
          // Slide captions
          var swiper = this;
   
            $(swiper.slides[swiper.activeIndex]).attr("data-title");

var QApongMobile = gsap.timeline();

QApongMobile

.to(".lineChild", { duration: 0.3, x: -10, opacity: 0, stagger: -0.03, ease: Power2.easeIn})
.to(".a-contain", {
    x: "2.5em",
    duration: 1.2,
    ease: Expo.easeOut })
.to(".ampersand-contain", {
    x: "-5.8em", 
    duration: 1.2,
    rotation: 0,
    ease: Power1.easeOut }, "-=1.2")
.to(".q-contain", {
    x: "2.5em",
    duration: 1.2,
    ease: Expo.easeIn }, "-=1.2")
.to(".q-contain", {
    x: "0em",
    duration: 1.2,
    ease: Expo.easeOut })
.to(".ampersand-contain", {
    x: "0.2em", 
    duration: 1.2,
    rotation: 360,
    ease: Power1.easeOut }, "-=1.2")
.to(".a-contain", {
    x: "0em",
    duration: 1.2,
    ease: Expo.easeIn }, "-=1.2");
    },
         
 slideChangeTransitionEnd: function () {
          // Slide captions
          var swiper = this;
          var currentTitle = $(swiper.slides[swiper.activeIndex]).attr("data-title");
          $(".slide-captions").html(function() {
            return "<data-title class='current-title'>" + currentTitle + "</data-title>";
          });

new SplitText("data-title", { type: "lines", linesClass: "lineChild" });
new SplitText("data-title", { type: "lines", linesClass: "lineParent" });

var slideswap = gsap.timeline();

slideswap.from(".lineChild", { duration: 0.3, x: 10, opacity: 0, stagger: 0.03, ease: Power2.easeOut});
      
        }
     }
});

// Slide captions
//var currentTitle = $(ebelSwiper.slides[ebelSwiper.activeIndex]).attr("data-title");
//$(".slide-captions").html(function() {
  //return "<data-title class='current-title'>" + currentTitle + "</data-title>";
//});

ScrollTrigger.create({
 trigger: ".ebel-swiper__trigger",
 onEnter: () => ebelSwiper.autoplay.start(),
 onLeave: () => ebelSwiper.autoplay.stop(),
 onEnterBack: () => ebelSwiper.autoplay.start(),
 onLeaveBack: () => ebelSwiper.autoplay.stop()
  });
});


 }
