import gsap from 'gsap';
 
 // Testimonials Swiper slider
      
const homeTestiSwiper = () => {

gsap.registerPlugin(ScrollTrigger);

//const interleaveOffset = 2;
 
 const TestiSwiper = new Swiper(".swiper.text", {
   direction: "horizontal",
   loop: true,
   autoplay: false,
   followFinger: false,
   effect: "slide",
   speed: 1600,
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 });

$('.cta__home-alumni').on('mouseover', function() {
  TestiSwiper.autoplay.stop();
});

$('.cta__home-alumni').on('mouseout', function() {
  TestiSwiper.autoplay.start();
});
  
 function setText() {
   $('.quote-name').css('transform', 'translateX(120%)', 'opacity(0)');
 }
 
 // When scrolling down
 TestiSwiper.on("slideNextTransitionStart", function (e) {

   setText();
   let outgoingText = $(".quote-sign__item").eq(e.previousIndex - 1);
   let outgoingImg = $(".testimonial__slider-img");
   let incomingText = $(".quote-sign__item").eq(e.realIndex);
   let incomingImg = $(".testimonial__slider-img").eq(e.realIndex);

   let testiTlFwd = gsap.timeline();

   testiTlFwd
         .fromTo( outgoingText.find(".quote-name"), { x: "0", opacity: 1 }, { x: "-120%", opacity: 0, duration: 0.8, delay: 0 }) 
         .to( outgoingImg, { zIndex: 0, duration: 1.6 }, 0)
         .fromTo( incomingImg, { zIndex: 5, clipPath: "circle(0% at center)" }, { zIndex: 5, clipPath: "circle(110% at center)", duration: 1.6, ease: "expo.easeInOut" }, 0)
         .fromTo( incomingText.find(".quote-name"), { x: "120%", opacity: 0 }, { x: "0%", opacity: 1, duration: 0.8, delay: 0.8 }, 0);
         
 });
 
 // When scrolling up
 TestiSwiper.on("slidePrevTransitionStart", function (e) {
  
   setText();
   let outgoingText = $(".quote-sign__item").eq(e.activeIndex);
   let outgoingImg = $(".testimonial__slider-img");
   let incomingText = $(".quote-sign__item").eq(e.realIndex);
   let incomingImg = $(".testimonial__slider-img").eq(e.realIndex);

   let testiTlBack = gsap.timeline();

   testiTlBack
    .fromTo(outgoingText.find(".quote-name"), { x: "0%", opacity: 1 }, { x: "120%", opacity: 0, duration: 0.8, delay: 0 })
    .to( outgoingImg, { zIndex: 0, duration: 1.6 }, 0)
    .fromTo( incomingImg, { zIndex: 5, clipPath: "circle(0% at center)" }, { zIndex: 5, clipPath: "circle(110% at center)", duration: 1.6, ease: "expo.easeInOut" }, 0)
    .fromTo(incomingText.find(".quote-name"), { x: "-120%", opacity: 0 }, { x: "0%", opacity: 1, duration: 0.8, delay: 0.8 }, 0);
  });

  ScrollTrigger.create({
    trigger: ".testimonials__trigger",
    onEnter: () => TestiSwiper.autoplay.start(),
    onLeave: () => TestiSwiper.autoplay.stop(),
    onEnterBack: () => TestiSwiper.autoplay.start(),
    onLeaveBack: () => TestiSwiper.autoplay.stop()
  });

 }

 export default homeTestiSwiper;