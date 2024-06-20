export const propBookingRebS = () => {

gsap.registerPlugin(ExpoScaleEase);

// SET REB S COVER IF ALREADY COMPLETED
if (sessionStorage.getItem("rebsSuccessPlayed", true)) {

  gsap.set(".rebs-booked__cover", { display: "block" });
  gsap.set([".cb-btn__covered", ".rebm-btn__covered", ".rebxxl-btn__covered"], { display: "flex" });
  gsap.set(".nav__currency-wrap", {display: "none"});
  
} 

// GLOBAL BOOKING VARS
var bookHole = gsap.utils.toArray('.book-hole');
var bookHoleMob = gsap.utils.toArray('.book-hole-mobile');
var bookCancelinner = gsap.utils.toArray('.booking-cancel__track');
var BookContain = gsap.utils.toArray('.booking-items__container');
var CategoryCb = gsap.utils.toArray('.category-cb__track');
var CategoryReb = gsap.utils.toArray('.category-reb__track');
var cbWrap = gsap.utils.toArray('.cb__booking-wrap');
var rebsWrap = gsap.utils.toArray('.rebs__booking-wrap');
var rebmWrap = gsap.utils.toArray('.rebm__booking-wrap');
var rebxxlWrap = gsap.utils.toArray('.rebxxl__booking-wrap'); // formerly eur, usd, gbp, etc
var cbBg = gsap.utils.toArray('.cb__backdrop');
var rebsBg = gsap.utils.toArray('.reb-s__backdrop');
var rebmBg = gsap.utils.toArray('.reb-m__backdrop');
var rebxxlBg = gsap.utils.toArray('.reb-xxl__backdrop');
let cursor = gsap.utils.toArray(".cursor-dot");
let bookSuccessBtn = gsap.utils.toArray([".cb-exit__success", ".rebs-exit__success", ".rebm-exit__success", ".rebxxl-exit__success"]);
let mm = gsap.matchMedia();
  
// GSAP SET GLOBAL
gsap.set(bookCancelinner, { x: -30, opacity: 0 });
gsap.set([CategoryCb, CategoryReb], { display: "none", x: -30, opacity: 0 });
gsap.set([BookContain], { display: "none" });
gsap.set([cbWrap, rebsWrap, rebmWrap, rebxxlWrap], { display: "none" });
gsap.set([cbBg, rebsBg, rebmBg, rebxxlBg], { autoAlpha: 0 });

//----------------------- BOOK REB S - BEGIN -----------------------//

// REB S CLOSE VARS
var rebsBtnsWrap = gsap.utils.toArray(".rebs-btns__wrap");
var RebsEurCancel = gsap.utils.toArray(".rebs-eur-cancel");
var RebsUsdCancel = gsap.utils.toArray(".rebs-usd-cancel");
var RebsGbpCancel = gsap.utils.toArray(".rebs-gbp-cancel");
var RebsSekCancel = gsap.utils.toArray(".rebs-sek-cancel");
var RebsSgdCancel = gsap.utils.toArray(".rebs-sgd-cancel");
let rebSexitSuccess = gsap.utils.toArray(".rebs-exit__success");

// REB S OPEN VARS
var rebsEurOpen = gsap.utils.toArray('.reb-s-eur__cta');
var rebsEurWrap = gsap.utils.toArray('.reb-s-eur__booking-wrap');
var rebsUsdOpen = gsap.utils.toArray('.reb-s-usd__cta');
var rebsUsdWrap = gsap.utils.toArray('.reb-s-usd__booking-wrap');
var rebsGbpOpen = gsap.utils.toArray('.reb-s-gbp__cta');
var rebsGbpWrap = gsap.utils.toArray('.reb-s-gbp__booking-wrap');
var rebsSekOpen = gsap.utils.toArray('.reb-s-sek__cta');
var rebsSekWrap = gsap.utils.toArray('.reb-s-sek__booking-wrap');
var rebsSgdOpen = gsap.utils.toArray('.reb-s-sgd__cta');
var rebsSgdWrap = gsap.utils.toArray('.reb-s-sgd__booking-wrap');

// GSAP SET REB S ALL CURRENCIES
gsap.set([rebsEurWrap, rebsUsdWrap, rebsGbpWrap, rebsSekWrap, rebsSgdWrap], { x: -30, opacity: 0, display: "none" });
gsap.set([RebsEurCancel, RebsUsdCancel, RebsGbpCancel, RebsSekCancel, RebsSgdCancel, rebsBtnsWrap], { display: "none" });

// DESKTOP
mm.add("(min-width: 991px)", () => {  
  
// OPEN REB S EUR
rebsEurOpen.forEach(rebsEurOp => {

    let ctaMask = rebsEurOp.querySelector(".book-cta__mask"),
        ctaTxt = rebsEurOp.querySelector(".cta-txt"),
        ctaCover = rebsEurOp.querySelector(".cta-redact-cover"),
    
 rebseur_open = gsap.timeline({ paused: true });

  rebseur_open
  .set(rebsBg, { scale: 1, autoAlpha: 1 })
  .set(cursor, { display: "none" }, "<")
  .set(bookSuccessBtn, { display: "none" }, "<")
  .set(BookContain, { display: "flex" }, "<")
  .set(rebsWrap, { display: "flex"}, "<")
  .set(rebsBtnsWrap, { display: "block" }, "<")
  .set(RebsEurCancel, { display: "flex" }, "<")
  .set(rebsEurWrap, { display: "block" }, "<")
  .set(CategoryReb, { display: "block" }, "<")
  .set(ctaCover, { scaleX: 0 }, "<")
  .to(ctaMask, {filter:"invert(100%)", duration: 0.001}, "<")
  .to(rebsBg, { scale: 12, transformOrigin: "50% 50%", ease: "power2.inOut", duration: 1.2 })
  .to(ctaCover, { delay: 0.2, scaleX: 1, transformOrigin: "0% 100%", duration: 6, ease: "power0.easeOut" })
  .to(ctaTxt, { autoAlpha: 0, duration: 0.001})
  .to(ctaCover, { scaleX: 0, transformOrigin: "100% 0%", duration: 0.3, ease: "linear" })
  .to(CategoryReb, { delay: 0.2, x: 0, opacity: 1, ease: "expo.out", duration: 1.2 })
  .to(bookCancelinner, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .fromTo(rebsEurWrap, { x: -30, opacity: 0 }, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .set(bookHole, {display: "block"}, "<")
  .set(ctaMask, {filter:"invert(0%)" });
       
   rebsEurOp.addEventListener('click', () => {   
    rebseur_open.play(0);
  });
})

// CLOSE REB S EUR
RebsEurCancel.forEach((RebsEurCancel) => {
  if (!RebsEurCancel) return
  const bookHole = document.querySelector('.book-hole')
  if (!bookHole) return
  const bookingContain = document.querySelector('.booking-items__container')
  if (!bookingContain) return

  gsap.set(bookHole, { scale: 1 })

  RebsEurCancel.addEventListener("click", (e) => {
      let xDist = e.clientX - bookingContain.getBoundingClientRect().x + 4
      let yDist = e.clientY - bookingContain.getBoundingClientRect().y
      let rebseur_cancel = gsap.timeline();

      gsap.set(bookHole, { left: xDist, top: yDist })
       
rebseur_cancel
.set(".menu__btn", { display: "none", opacity: 0 })
.set(".cta-txt", { autoAlpha: 1}, "<")
.set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
.set(rebsBg, {autoAlpha: 0, scale: 1}, "<")
.to([rebsEurWrap, CategoryReb, bookCancelinner], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
.fromTo(bookHole, { scale: 1 }, { duration: 1.2, scale: 2800, ease: "expoScale(1, 2800, power1.easeOut)" }, "-=0.2")
.to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
.set(CategoryReb, { x: -30, opacity: 0, display: "none" })
.set(bookCancelinner, { x: -30, opacity: 0 })
.set(rebsWrap, { display: "none" })
.set(rebsBtnsWrap, { display: "none" })
.set(RebsEurCancel, { display: "none" })
.set(rebsEurWrap, { opacity: 0, display: "none", x: -30 })
.set(BookContain, { display: "none" })
.set(bookHole, {display: "none", clearProps: "all"})
.to(".menu__btn", { delay: 2, display: "flex", opacity: 1, duration: 0.45 });

    });
})

// OPEN REB S USD
rebsUsdOpen.forEach(rebsUsdOp => {

    let ctaMask = rebsUsdOp.querySelector(".book-cta__mask"),
        ctaTxt = rebsUsdOp.querySelector(".cta-txt"),
        ctaCover = rebsUsdOp.querySelector(".cta-redact-cover"),
    
 rebsusd_open = gsap.timeline({ paused: true });

  rebsusd_open
  .set(rebsBg, { scale: 1, autoAlpha: 1 })
  .set(cursor, { display: "none" }, "<")
  .set(bookSuccessBtn, { display: "none" }, "<")
  .set(BookContain, { display: "flex" }, "<")
  .set(rebsWrap, { display: "flex"}, "<")
  .set(rebsBtnsWrap, { display: "block" }, "<")
  .set(RebsUsdCancel, { display: "flex" }, "<")
  .set(rebsUsdWrap, { display: "block" }, "<")
  .set(CategoryReb, { display: "block" }, "<")
  .set(ctaCover, { scaleX: 0 }, "<")
  .to(ctaMask, {filter:"invert(100%)", duration: 0.001}, "<")
  .to(rebsBg, { scale: 12, transformOrigin: "50% 50%", ease: "power2.inOut", duration: 1.2 })
  .to(ctaCover, { delay: 0.2, scaleX: 1, transformOrigin: "0% 100%", duration: 6, ease: "power0.easeOut" })
  .to(ctaTxt, { autoAlpha: 0, duration: 0.001})
  .to(ctaCover, { scaleX: 0, transformOrigin: "100% 0%", duration: 0.3, ease: "linear" })
  .to(CategoryReb, { delay: 0.2, x: 0, opacity: 1, ease: "expo.out", duration: 1.2 })
  .to(bookCancelinner, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .fromTo(rebsUsdWrap, { x: -30, opacity: 0 }, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .set(bookHole, {display: "block"}, "<")
  .set(ctaMask, {filter:"invert(0%)" });
       
   rebsUsdOp.addEventListener('click', () => {   
    rebsusd_open.play(0);
  });
})

// CLOSE REB S USD
RebsUsdCancel.forEach((RebsUsdCancel) => {
  if (!RebsUsdCancel) return
  const bookHole = document.querySelector('.book-hole')
  if (!bookHole) return
  const bookingContain = document.querySelector('.booking-items__container')
  if (!bookingContain) return

  gsap.set(bookHole, { scale: 1 })

  RebsUsdCancel.addEventListener("click", (e) => {
      let xDist = e.clientX - bookingContain.getBoundingClientRect().x + 4
      let yDist = e.clientY - bookingContain.getBoundingClientRect().y
      let rebsusd_cancel = gsap.timeline();

      gsap.set(bookHole, { left: xDist, top: yDist })
       
rebsusd_cancel
.set(".menu__btn", { display: "none", opacity: 0 })
.set(".cta-txt", { autoAlpha: 1}, "<")
.set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
.set(rebsBg, {autoAlpha: 0, scale: 1}, "<")
.to([rebsUsdWrap, CategoryReb, bookCancelinner], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
.fromTo(bookHole, { scale: 1 }, { duration: 1.2, scale: 2800, ease: "expoScale(1, 2800, power1.easeOut)" }, "-=0.2")
.to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
.set(CategoryReb, { x: -30, opacity: 0, display: "none" })
.set(bookCancelinner, { x: -30, opacity: 0 })
.set(rebsWrap, { display: "none" })
.set(rebsBtnsWrap, { display: "none" })
.set(RebsUsdCancel, { display: "none" })
.set(rebsUsdWrap, { opacity: 0, display: "none", x: -30 })
.set(BookContain, { display: "none" })
.set(bookHole, {display: "none", clearProps: "all"})
.to(".menu__btn", { delay: 2, display: "flex", opacity: 1, duration: 0.45 });

    });
})

// OPEN REB S GBP
rebsGbpOpen.forEach(rebsGbpOp => {

    let ctaMask = rebsGbpOp.querySelector(".book-cta__mask"),
        ctaTxt = rebsGbpOp.querySelector(".cta-txt"),
        ctaCover = rebsGbpOp.querySelector(".cta-redact-cover"),
    
 rebsgbp_open = gsap.timeline({ paused: true });

  rebsgbp_open
  .set(rebsBg, { scale: 1, autoAlpha: 1 })
  .set(cursor, { display: "none" }, "<")
  .set(bookSuccessBtn, { display: "none" }, "<")
  .set(BookContain, { display: "flex" }, "<")
  .set(rebsWrap, { display: "flex"}, "<")
  .set(rebsBtnsWrap, { display: "block" }, "<")
  .set(RebsGbpCancel, { display: "flex" }, "<")
  .set(rebsGbpWrap, { display: "block" }, "<")
  .set(CategoryReb, { display: "block" }, "<")
  .set(ctaCover, { scaleX: 0 }, "<")
  .to(ctaMask, {filter:"invert(100%)", duration: 0.001}, "<")
  .to(rebsBg, { scale: 12, transformOrigin: "50% 50%", ease: "power2.inOut", duration: 1.2 })
  .to(ctaCover, { delay: 0.2, scaleX: 1, transformOrigin: "0% 100%", duration: 6, ease: "power0.easeOut" })
  .to(ctaTxt, { autoAlpha: 0, duration: 0.001})
  .to(ctaCover, { scaleX: 0, transformOrigin: "100% 0%", duration: 0.3, ease: "linear" })
  .to(CategoryReb, { delay: 0.2, x: 0, opacity: 1, ease: "expo.out", duration: 1.2 })
  .to(bookCancelinner, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .fromTo(rebsGbpWrap, { x: -30, opacity: 0 }, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .set(bookHole, {display: "block"}, "<")
  .set(ctaMask, {filter:"invert(0%)" });
       
   rebsGbpOp.addEventListener('click', () => {   
    rebsgbp_open.play(0);
  });
})

// CLOSE REB S GBP
RebsGbpCancel.forEach((RebsGbpCancel) => {
  if (!RebsGbpCancel) return
  const bookHole = document.querySelector('.book-hole')
  if (!bookHole) return
  const bookingContain = document.querySelector('.booking-items__container')
  if (!bookingContain) return

  gsap.set(bookHole, { scale: 1 })

  RebsGbpCancel.addEventListener("click", (e) => {
      let xDist = e.clientX - bookingContain.getBoundingClientRect().x + 4
      let yDist = e.clientY - bookingContain.getBoundingClientRect().y
      let rebsgbp_cancel = gsap.timeline();

      gsap.set(bookHole, { left: xDist, top: yDist })
       
rebsgbp_cancel
.set(".menu__btn", { display: "none", opacity: 0 })
.set(".cta-txt", { autoAlpha: 1}, "<")
.set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
.set(rebsBg, {autoAlpha: 0, scale: 1}, "<")
.to([rebsGbpWrap, CategoryReb, bookCancelinner], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
.fromTo(bookHole, { scale: 1 }, { duration: 1.2, scale: 2800, ease: "expoScale(1, 2800, power1.easeOut)" }, "-=0.2")
.to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
.set(CategoryReb, { x: -30, opacity: 0, display: "none" })
.set(bookCancelinner, { x: -30, opacity: 0 })
.set(rebsWrap, { display: "none" })
.set(rebsBtnsWrap, { display: "none" })
.set(RebsGbpCancel, { display: "none" })
.set(rebsGbpWrap, { opacity: 0, display: "none", x: -30 })
.set(BookContain, { display: "none" })
.set(bookHole, {display: "none", clearProps: "all"})
.to(".menu__btn", { delay: 2, display: "flex", opacity: 1, duration: 0.45 });

    });
})

// OPEN REB S SEK
rebsSekOpen.forEach(rebsSekOp => {

    let ctaMask = rebsSekOp.querySelector(".book-cta__mask"),
        ctaTxt = rebsSekOp.querySelector(".cta-txt"),
        ctaCover = rebsSekOp.querySelector(".cta-redact-cover"),
    
 rebssek_open = gsap.timeline({ paused: true });

  rebssek_open
  .set(rebsBg, { scale: 1, autoAlpha: 1 })
  .set(cursor, { display: "none" }, "<")
  .set(bookSuccessBtn, { display: "none" }, "<")
  .set(BookContain, { display: "flex" }, "<")
  .set(rebsWrap, { display: "flex"}, "<")
  .set(rebsBtnsWrap, { display: "block" }, "<")
  .set(RebsSekCancel, { display: "flex" }, "<")
  .set(rebsSekWrap, { display: "block" }, "<")
  .set(CategoryReb, { display: "block" }, "<")
  .set(ctaCover, { scaleX: 0 }, "<")
  .to(ctaMask, {filter:"invert(100%)", duration: 0.001}, "<")
  .to(rebsBg, { scale: 12, transformOrigin: "50% 50%", ease: "power2.inOut", duration: 1.2 })
  .to(ctaCover, { delay: 0.2, scaleX: 1, transformOrigin: "0% 100%", duration: 6, ease: "power0.easeOut" })
  .to(ctaTxt, { autoAlpha: 0, duration: 0.001})
  .to(ctaCover, { scaleX: 0, transformOrigin: "100% 0%", duration: 0.3, ease: "linear" })
  .to(CategoryReb, { delay: 0.2, x: 0, opacity: 1, ease: "expo.out", duration: 1.2 })
  .to(bookCancelinner, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .fromTo(rebsSekWrap, { x: -30, opacity: 0 }, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .set(bookHole, {display: "block"}, "<")
  .set(ctaMask, {filter:"invert(0%)" });
       
   rebsSekOp.addEventListener('click', () => {   
    rebssek_open.play(0);
  });
})

// CLOSE REB S SEK
RebsSekCancel.forEach((RebsSekCancel) => {
  if (!RebsSekCancel) return
  const bookHole = document.querySelector('.book-hole')
  if (!bookHole) return
  const bookingContain = document.querySelector('.booking-items__container')
  if (!bookingContain) return

  gsap.set(bookHole, { scale: 1 })

  RebsSekCancel.addEventListener("click", (e) => {
      let xDist = e.clientX - bookingContain.getBoundingClientRect().x + 4
      let yDist = e.clientY - bookingContain.getBoundingClientRect().y
      let rebssek_cancel = gsap.timeline();

      gsap.set(bookHole, { left: xDist, top: yDist })
       
rebssek_cancel
.set(".menu__btn", { display: "none", opacity: 0 })
.set(".cta-txt", { autoAlpha: 1}, "<")
.set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
.set(rebsBg, {autoAlpha: 0, scale: 1}, "<")
.to([rebsSekWrap, CategoryReb, bookCancelinner], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
.fromTo(bookHole, { scale: 1 }, { duration: 1.2, scale: 2800, ease: "expoScale(1, 2800, power1.easeOut)" }, "-=0.2")
.to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
.set(CategoryReb, { x: -30, opacity: 0, display: "none" })
.set(bookCancelinner, { x: -30, opacity: 0 })
.set(rebsWrap, { display: "none" })
.set(rebsBtnsWrap, { display: "none" })
.set(RebsSekCancel, { display: "none" })
.set(rebsSekWrap, { opacity: 0, display: "none", x: -30 })
.set(BookContain, { display: "none" })
.set(bookHole, {display: "none", clearProps: "all"})
.to(".menu__btn", { delay: 2, display: "flex", opacity: 1, duration: 0.45 });

    });
})

// OPEN REB S SGD
rebsSgdOpen.forEach(rebsSgdOp => {

    let ctaMask = rebsSgdOp.querySelector(".book-cta__mask"),
        ctaTxt = rebsSgdOp.querySelector(".cta-txt"),
        ctaCover = rebsSgdOp.querySelector(".cta-redact-cover"),
    
 rebssgd_open = gsap.timeline({ paused: true });

  rebssgd_open
  .set(rebsBg, { scale: 1, autoAlpha: 1 })
  .set(cursor, { display: "none" }, "<")
  .set(bookSuccessBtn, { display: "none" }, "<")
  .set(BookContain, { display: "flex" }, "<")
  .set(rebsWrap, { display: "flex"}, "<")
  .set(rebsBtnsWrap, { display: "block" }, "<")
  .set(RebsSgdCancel, { display: "flex" }, "<")
  .set(rebsSgdWrap, { display: "block" }, "<")
  .set(CategoryReb, { display: "block" }, "<")
  .set(ctaCover, { scaleX: 0 }, "<")
  .to(ctaMask, {filter:"invert(100%)", duration: 0.001}, "<")
  .to(rebsBg, { scale: 12, transformOrigin: "50% 50%", ease: "power2.inOut", duration: 1.2 })
  .to(ctaCover, { delay: 0.2, scaleX: 1, transformOrigin: "0% 100%", duration: 6, ease: "power0.easeOut" })
  .to(ctaTxt, { autoAlpha: 0, duration: 0.001})
  .to(ctaCover, { scaleX: 0, transformOrigin: "100% 0%", duration: 0.3, ease: "linear" })
  .to(CategoryReb, { delay: 0.2, x: 0, opacity: 1, ease: "expo.out", duration: 1.2 })
  .to(bookCancelinner, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .fromTo(rebsSgdWrap, { x: -30, opacity: 0 }, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .set(bookHole, {display: "block"}, "<")
  .set(ctaMask, {filter:"invert(0%)" });
       
   rebsSgdOp.addEventListener('click', () => {   
    rebssgd_open.play(0);
  });
})

// CLOSE REB S SGD
RebsSgdCancel.forEach((RebsSgdCancel) => {
  if (!RebsSgdCancel) return
  const bookHole = document.querySelector('.book-hole')
  if (!bookHole) return
  const bookingContain = document.querySelector('.booking-items__container')
  if (!bookingContain) return

  gsap.set(bookHole, { scale: 1 })

  RebsSgdCancel.addEventListener("click", (e) => {
      let xDist = e.clientX - bookingContain.getBoundingClientRect().x + 4
      let yDist = e.clientY - bookingContain.getBoundingClientRect().y
      let rebssgd_cancel = gsap.timeline();

      gsap.set(bookHole, { left: xDist, top: yDist })
       
rebssgd_cancel
.set(".menu__btn", { display: "none", opacity: 0 })
.set(".cta-txt", { autoAlpha: 1}, "<")
.set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
.set(rebsBg, {autoAlpha: 0, scale: 1}, "<")
.to([rebsSgdWrap, CategoryReb, bookCancelinner], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
.fromTo(bookHole, { scale: 1 }, { duration: 1.2, scale: 2800, ease: "expoScale(1, 2800, power1.easeOut)" }, "-=0.2")
.to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
.set(CategoryReb, { x: -30, opacity: 0, display: "none" })
.set(bookCancelinner, { x: -30, opacity: 0 })
.set(rebsWrap, { display: "none" })
.set(rebsBtnsWrap, { display: "none" })
.set(RebsSgdCancel, { display: "none" })
.set(rebsSgdWrap, { opacity: 0, display: "none", x: -30 })
.set(BookContain, { display: "none" })
.set(bookHole, {display: "none", clearProps: "all"})
.to(".menu__btn", { delay: 2, display: "flex", opacity: 1, duration: 0.45 });

    });
})

// CLOSE REB S SUCCESS - ALL CURRENCIES

rebSexitSuccess.forEach((rebSexitSuccess) => {
  if (!rebSexitSuccess) return
  const bookHole = document.querySelector('.book-hole')
  if (!bookHole) return
  const bookingContain = document.querySelector('.booking-items__container')
  if (!bookingContain) return

  gsap.set(bookHole, { scale: 1 })

  rebSexitSuccess.addEventListener("click", (e) => {
      let xDist = e.clientX - bookingContain.getBoundingClientRect().x + 4
      let yDist = e.clientY - bookingContain.getBoundingClientRect().y
      let rebs_cancel_success = gsap.timeline();

      gsap.set(bookHole, { left: xDist, top: yDist })
           
    rebs_cancel_success
             .set(".menu__btn", { display: "none", opacity: 0 })
             .set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
             .set(rebsBg, {autoAlpha: 0, scale: 1}, "<")
             .set(".rebs-booked__cover", { display: "block" }, "<")
             .set([".cb-btn__covered", ".rebm-btn__covered", ".rebxxl-btn__covered", ".spa-btn__covered"], { display: "flex" }, "<")
             .to([".reb-success-marquee__wrap", ".reb-success-img__wrap"], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
             .to([CategoryReb, bookCancelinner], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 }, "<")
             .to([rebsEurWrap, rebsUsdWrap, rebsGbpWrap, rebsSgdWrap, rebsSekWrap], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 }, "<")
             .fromTo(bookHole, { scale: 1 }, { duration: 1.2, scale: 2800, ease: "expoScale(1, 2800, power1.easeOut)", onComplete() { sessionStorage.setItem("rebsSuccessPlayed", true) } }, "-=0.2")
             .to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
             .set(CategoryReb, { x: -30, opacity: 0, display: "none" })
             .set(bookCancelinner, { x: -30, opacity: 0 })
             .set(rebsWrap, { display: "none" })
             .set(rebsBtnsWrap, { display: "none" })
             .set([RebsEurCancel, RebsUsdCancel, RebsGbpCancel, RebsSgdCancel, RebsSekCancel], { display: "none" })
             .set([rebsEurWrap, rebsUsdWrap, rebsGbpWrap, rebsSgdWrap, rebsSekWrap], { opacity: 0, display: "none", x: -30 })
             .set(BookContain, { display: "none" })
             .set(bookHole, {display: "none", clearProps: "all"})
             .set([".ready-fini__wrap", ".reb-success-marquee__wrap", ".reb-success-img__wrap", ".cb-success-marquee__wrap", ".cb-success-img__wrap", ".home-mrebel__qa-pong-wrap"], { yPercent: 101, opacity: 0 })
             .set([".reb-success-items__contain", ".cb-success-items__contain", ".q-a-pong__mask", ".ready-fini__mask"], { display: "none" })
             .to(".menu__btn", { delay: 2, display: "flex", opacity: 1, duration: 0.45 });
    
        });
     })
  });

// Ipad and Mobile
mm.add("(max-width: 990px)", () => {  
  
// OPEN REB S EUR
rebsEurOpen.forEach(rebsEurOp => {

    let ctaMask = rebsEurOp.querySelector(".book-cta__mask"),
        ctaTxt = rebsEurOp.querySelector(".cta-txt"),
        ctaCover = rebsEurOp.querySelector(".cta-redact-cover"),
    
 rebseur_open = gsap.timeline({ paused: true });

  rebseur_open
  .set(rebsBg, { scale: 1, autoAlpha: 1 })
  .set(cursor, { display: "none" }, "<")
  .set(bookSuccessBtn, { display: "none" }, "<")
  .set(BookContain, { display: "flex" }, "<")
  .set(rebsWrap, { display: "flex"}, "<")
  .set(rebsBtnsWrap, { display: "block" }, "<")
  .set(RebsEurCancel, { display: "flex" }, "<")
  .set(rebsEurWrap, { display: "block" }, "<")
  .set(CategoryReb, { display: "block" }, "<")
  .set(ctaCover, { scaleX: 0 }, "<")
  .to(ctaMask, {filter:"invert(100%)", duration: 0.001}, "<")
  .to(rebsBg, { scale: 12, transformOrigin: "50% 50%", ease: "power2.inOut", duration: 1.2 })
  .set(".touch-print-open__wrap", { autoAlpha: 0 }, "-=0.4")
  .to(ctaCover, { delay: 0.2, scaleX: 1, transformOrigin: "0% 100%", duration: 6, ease: "power0.easeOut" })
  .to(ctaTxt, { autoAlpha: 0, duration: 0.001})
  .to(ctaCover, { scaleX: 0, transformOrigin: "100% 0%", duration: 0.3, ease: "linear" })
  .to(CategoryReb, { delay: 0.2, x: 0, opacity: 1, ease: "expo.out", duration: 1.2 })
  .to(bookCancelinner, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .fromTo(rebsEurWrap, { x: -30, opacity: 0 }, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .set(bookHoleMob, {display: "flex"}, "<")
  .set(ctaMask, {filter:"invert(0%)" });
       
   rebsEurOp.addEventListener('click', () => {   
    rebseur_open.play(0);
  });
})

// CLOSE REB S EUR
RebsEurCancel.forEach((RebsEurCancel) => {
  if (!RebsEurCancel) return
  const bookHoleMob = document.querySelector('.book-hole-mobile')
  if (!bookHoleMob) return
  const bookingContain = document.querySelector('.booking-items__container')
  if (!bookingContain) return

  gsap.set(bookHoleMob, { scale: 1 })

  RebsEurCancel.addEventListener("click", (e) => {
      //let xDist = e.clientX - bookingContain.getBoundingClientRect().x + 4
      //let yDist = e.clientY - bookingContain.getBoundingClientRect().y
      let rebseur_cancel = gsap.timeline();

      //gsap.set(bookHoleMob, { left: xDist, top: yDist })
       
rebseur_cancel
.set(".menu__btn", { display: "none", opacity: 0 })
.set(".touch-print-open__wrap", { autoAlpha: 1 })
.set(".cta-txt", { autoAlpha: 1}, "<")
.set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
.set(rebsBg, {autoAlpha: 0, scale: 1}, "<")
.to([rebsEurWrap, CategoryReb, bookCancelinner], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
.fromTo(bookHoleMob, { scale: 1 }, { duration: 1.2, scale: 280, ease: "expoScale(1, 280, power1.easeOut)" }, "-=0.2")
.to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
.set(CategoryReb, { x: -30, opacity: 0, display: "none" })
.set(bookCancelinner, { x: -30, opacity: 0 })
.set(rebsWrap, { display: "none" })
.set(rebsBtnsWrap, { display: "none" })
.set(RebsEurCancel, { display: "none" })
.set(rebsEurWrap, { opacity: 0, display: "none", x: -30 })
.set(BookContain, { display: "none" })
.set(bookHoleMob, {display: "none", clearProps: "all"})
.to(".menu__btn", { delay: 2, display: "flex", opacity: 1, duration: 0.45 });

    });
})

// OPEN REB S USD
rebsUsdOpen.forEach(rebsUsdOp => {

    let ctaMask = rebsUsdOp.querySelector(".book-cta__mask"),
        ctaTxt = rebsUsdOp.querySelector(".cta-txt"),
        ctaCover = rebsUsdOp.querySelector(".cta-redact-cover"),
    
 rebsusd_open = gsap.timeline({ paused: true });

  rebsusd_open
  .set(rebsBg, { scale: 1, autoAlpha: 1 })
  .set(cursor, { display: "none" }, "<")
  .set(bookSuccessBtn, { display: "none" }, "<")
  .set(BookContain, { display: "flex" }, "<")
  .set(rebsWrap, { display: "flex"}, "<")
  .set(rebsBtnsWrap, { display: "block" }, "<")
  .set(RebsUsdCancel, { display: "flex" }, "<")
  .set(rebsUsdWrap, { display: "block" }, "<")
  .set(CategoryReb, { display: "block" }, "<")
  .set(ctaCover, { scaleX: 0 }, "<")
  .to(ctaMask, {filter:"invert(100%)", duration: 0.001}, "<")
  .to(rebsBg, { scale: 12, transformOrigin: "50% 50%", ease: "power2.inOut", duration: 1.2 })
  .set(".touch-print-open__wrap", { autoAlpha: 0 }, "-=0.4")
  .to(ctaCover, { delay: 0.2, scaleX: 1, transformOrigin: "0% 100%", duration: 6, ease: "power0.easeOut" })
  .to(ctaTxt, { autoAlpha: 0, duration: 0.001})
  .to(ctaCover, { scaleX: 0, transformOrigin: "100% 0%", duration: 0.3, ease: "linear" })
  .to(CategoryReb, { delay: 0.2, x: 0, opacity: 1, ease: "expo.out", duration: 1.2 })
  .to(bookCancelinner, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .fromTo(rebsUsdWrap, { x: -30, opacity: 0 }, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .set(bookHoleMob, {display: "flex"}, "<")
  .set(ctaMask, {filter:"invert(0%)" });
       
   rebsUsdOp.addEventListener('click', () => {   
    rebsusd_open.play(0);
  });
})

// CLOSE REB S USD
RebsUsdCancel.forEach((RebsUsdCancel) => {
  if (!RebsUsdCancel) return
  const bookHoleMob = document.querySelector('.book-hole-mobile')
  if (!bookHoleMob) return
  const bookingContain = document.querySelector('.booking-items__container')
  if (!bookingContain) return

  gsap.set(bookHoleMob, { scale: 1 })

  RebsUsdCancel.addEventListener("click", (e) => {
      //let xDist = e.clientX - bookingContain.getBoundingClientRect().x + 4
      //let yDist = e.clientY - bookingContain.getBoundingClientRect().y
      let rebsusd_cancel = gsap.timeline();

      //gsap.set(bookHole, { left: xDist, top: yDist })
       
rebsusd_cancel
.set(".menu__btn", { display: "none", opacity: 0 })
.set(".touch-print-open__wrap", { autoAlpha: 1 })
.set(".cta-txt", { autoAlpha: 1}, "<")
.set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
.set(rebsBg, {autoAlpha: 0, scale: 1}, "<")
.to([rebsUsdWrap, CategoryReb, bookCancelinner], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
.fromTo(bookHoleMob, { scale: 1 }, { duration: 1.2, scale: 280, ease: "expoScale(1, 280, power1.easeOut)" }, "-=0.2")
.to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
.set(CategoryReb, { x: -30, opacity: 0, display: "none" })
.set(bookCancelinner, { x: -30, opacity: 0 })
.set(rebsWrap, { display: "none" })
.set(rebsBtnsWrap, { display: "none" })
.set(RebsUsdCancel, { display: "none" })
.set(rebsUsdWrap, { opacity: 0, display: "none", x: -30 })
.set(BookContain, { display: "none" })
.set(bookHoleMob, {display: "none", clearProps: "all"})
.to(".menu__btn", { delay: 2, display: "flex", opacity: 1, duration: 0.45 });

    });
})

// OPEN REB S GBP
rebsGbpOpen.forEach(rebsGbpOp => {

    let ctaMask = rebsGbpOp.querySelector(".book-cta__mask"),
        ctaTxt = rebsGbpOp.querySelector(".cta-txt"),
        ctaCover = rebsGbpOp.querySelector(".cta-redact-cover"),
    
 rebsgbp_open = gsap.timeline({ paused: true });

  rebsgbp_open
  .set(rebsBg, { scale: 1, autoAlpha: 1 })
  .set(cursor, { display: "none" }, "<")
  .set(bookSuccessBtn, { display: "none" }, "<")
  .set(BookContain, { display: "flex" }, "<")
  .set(rebsWrap, { display: "flex"}, "<")
  .set(rebsBtnsWrap, { display: "block" }, "<")
  .set(RebsGbpCancel, { display: "flex" }, "<")
  .set(rebsGbpWrap, { display: "block" }, "<")
  .set(CategoryReb, { display: "block" }, "<")
  .set(ctaCover, { scaleX: 0 }, "<")
  .to(ctaMask, {filter:"invert(100%)", duration: 0.001}, "<")
  .to(rebsBg, { scale: 12, transformOrigin: "50% 50%", ease: "power2.inOut", duration: 1.2 })
  .set(".touch-print-open__wrap", { autoAlpha: 0 }, "-=0.4")
  .to(ctaCover, { delay: 0.2, scaleX: 1, transformOrigin: "0% 100%", duration: 6, ease: "power0.easeOut" })
  .to(ctaTxt, { autoAlpha: 0, duration: 0.001})
  .to(ctaCover, { scaleX: 0, transformOrigin: "100% 0%", duration: 0.3, ease: "linear" })
  .to(CategoryReb, { delay: 0.2, x: 0, opacity: 1, ease: "expo.out", duration: 1.2 })
  .to(bookCancelinner, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .fromTo(rebsGbpWrap, { x: -30, opacity: 0 }, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .set(bookHoleMob, {display: "flex"}, "<")
  .set(ctaMask, {filter:"invert(0%)" });
       
   rebsGbpOp.addEventListener('click', () => {   
    rebsgbp_open.play(0);
  });
})

// CLOSE REB S GBP
RebsGbpCancel.forEach((RebsGbpCancel) => {
  if (!RebsGbpCancel) return
  const bookHoleMob = document.querySelector('.book-hole-mobile')
  if (!bookHoleMob) return
  const bookingContain = document.querySelector('.booking-items__container')
  if (!bookingContain) return

  gsap.set(bookHoleMob, { scale: 1 })

  RebsGbpCancel.addEventListener("click", (e) => {
      //let xDist = e.clientX - bookingContain.getBoundingClientRect().x + 4
      //let yDist = e.clientY - bookingContain.getBoundingClientRect().y
      let rebsgbp_cancel = gsap.timeline();

      //gsap.set(bookHoleMob, { left: xDist, top: yDist })
       
rebsgbp_cancel
.set(".menu__btn", { display: "none", opacity: 0 })
.set(".touch-print-open__wrap", { autoAlpha: 1 })
.set(".cta-txt", { autoAlpha: 1}, "<")
.set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
.set(rebsBg, {autoAlpha: 0, scale: 1}, "<")
.to([rebsGbpWrap, CategoryReb, bookCancelinner], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
.fromTo(bookHoleMob, { scale: 1 }, { duration: 1.2, scale: 280, ease: "expoScale(1, 280, power1.easeOut)" }, "-=0.2")
.to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
.set(CategoryReb, { x: -30, opacity: 0, display: "none" })
.set(bookCancelinner, { x: -30, opacity: 0 })
.set(rebsWrap, { display: "none" })
.set(rebsBtnsWrap, { display: "none" })
.set(RebsGbpCancel, { display: "none" })
.set(rebsGbpWrap, { opacity: 0, display: "none", x: -30 })
.set(BookContain, { display: "none" })
.set(bookHoleMob, {display: "none", clearProps: "all"})
.to(".menu__btn", { delay: 2, display: "flex", opacity: 1, duration: 0.45 });

    });
})

// OPEN REB S SEK
rebsSekOpen.forEach(rebsSekOp => {

    let ctaMask = rebsSekOp.querySelector(".book-cta__mask"),
        ctaTxt = rebsSekOp.querySelector(".cta-txt"),
        ctaCover = rebsSekOp.querySelector(".cta-redact-cover"),
    
 rebssek_open = gsap.timeline({ paused: true });

  rebssek_open
  .set(rebsBg, { scale: 1, autoAlpha: 1 })
  .set(cursor, { display: "none" }, "<")
  .set(bookSuccessBtn, { display: "none" }, "<")
  .set(BookContain, { display: "flex" }, "<")
  .set(rebsWrap, { display: "flex"}, "<")
  .set(rebsBtnsWrap, { display: "block" }, "<")
  .set(RebsSekCancel, { display: "flex" }, "<")
  .set(rebsSekWrap, { display: "block" }, "<")
  .set(CategoryReb, { display: "block" }, "<")
  .set(ctaCover, { scaleX: 0 }, "<")
  .to(ctaMask, {filter:"invert(100%)", duration: 0.001}, "<")
  .to(rebsBg, { scale: 12, transformOrigin: "50% 50%", ease: "power2.inOut", duration: 1.2 })
  .set(".touch-print-open__wrap", { autoAlpha: 0 }, "-=0.4")
  .to(ctaCover, { delay: 0.2, scaleX: 1, transformOrigin: "0% 100%", duration: 6, ease: "power0.easeOut" })
  .to(ctaTxt, { autoAlpha: 0, duration: 0.001})
  .to(ctaCover, { scaleX: 0, transformOrigin: "100% 0%", duration: 0.3, ease: "linear" })
  .to(CategoryReb, { delay: 0.2, x: 0, opacity: 1, ease: "expo.out", duration: 1.2 })
  .to(bookCancelinner, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .fromTo(rebsSekWrap, { x: -30, opacity: 0 }, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .set(bookHoleMob, {display: "flex"}, "<")
  .set(ctaMask, {filter:"invert(0%)" });
       
   rebsSekOp.addEventListener('click', () => {   
    rebssek_open.play(0);
  });
})

// CLOSE REB S SEK
RebsSekCancel.forEach((RebsSekCancel) => {
  if (!RebsSekCancel) return
  const bookHoleMob = document.querySelector('.book-hole-mobile')
  if (!bookHoleMob) return
  const bookingContain = document.querySelector('.booking-items__container')
  if (!bookingContain) return

  gsap.set(bookHoleMob, { scale: 1 })

  RebsSekCancel.addEventListener("click", (e) => {
      //let xDist = e.clientX - bookingContain.getBoundingClientRect().x + 4
      //let yDist = e.clientY - bookingContain.getBoundingClientRect().y
      let rebssek_cancel = gsap.timeline();

      //gsap.set(bookHoleMob, { left: xDist, top: yDist })
       
rebssek_cancel
.set(".menu__btn", { display: "none", opacity: 0 })
.set(".touch-print-open__wrap", { autoAlpha: 1 })
.set(".cta-txt", { autoAlpha: 1}, "<")
.set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
.set(rebsBg, {autoAlpha: 0, scale: 1}, "<")
.to([rebsSekWrap, CategoryReb, bookCancelinner], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
.fromTo(bookHoleMob, { scale: 1 }, { duration: 1.2, scale: 280, ease: "expoScale(1, 280, power1.easeOut)" }, "-=0.2")
.to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
.set(CategoryReb, { x: -30, opacity: 0, display: "none" })
.set(bookCancelinner, { x: -30, opacity: 0 })
.set(rebsWrap, { display: "none" })
.set(rebsBtnsWrap, { display: "none" })
.set(RebsSekCancel, { display: "none" })
.set(rebsSekWrap, { opacity: 0, display: "none", x: -30 })
.set(BookContain, { display: "none" })
.set(bookHoleMob, {display: "none", clearProps: "all"})
.to(".menu__btn", { delay: 2, display: "flex", opacity: 1, duration: 0.45 });

    });
})

// OPEN REB S SGD
rebsSgdOpen.forEach(rebsSgdOp => {

    let ctaMask = rebsSgdOp.querySelector(".book-cta__mask"),
        ctaTxt = rebsSgdOp.querySelector(".cta-txt"),
        ctaCover = rebsSgdOp.querySelector(".cta-redact-cover"),
    
 rebssgd_open = gsap.timeline({ paused: true });

  rebssgd_open
  .set(rebsBg, { scale: 1, autoAlpha: 1 })
  .set(cursor, { display: "none" }, "<")
  .set(bookSuccessBtn, { display: "none" }, "<")
  .set(BookContain, { display: "flex" }, "<")
  .set(rebsWrap, { display: "flex"}, "<")
  .set(rebsBtnsWrap, { display: "block" }, "<")
  .set(RebsSgdCancel, { display: "flex" }, "<")
  .set(rebsSgdWrap, { display: "block" }, "<")
  .set(CategoryReb, { display: "block" }, "<")
  .set(ctaCover, { scaleX: 0 }, "<")
  .to(ctaMask, {filter:"invert(100%)", duration: 0.001}, "<")
  .to(rebsBg, { scale: 12, transformOrigin: "50% 50%", ease: "power2.inOut", duration: 1.2 })
  .set(".touch-print-open__wrap", { autoAlpha: 0 }, "-=0.4")
  .to(ctaCover, { delay: 0.2, scaleX: 1, transformOrigin: "0% 100%", duration: 6, ease: "power0.easeOut" })
  .to(ctaTxt, { autoAlpha: 0, duration: 0.001})
  .to(ctaCover, { scaleX: 0, transformOrigin: "100% 0%", duration: 0.3, ease: "linear" })
  .to(CategoryReb, { delay: 0.2, x: 0, opacity: 1, ease: "expo.out", duration: 1.2 })
  .to(bookCancelinner, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .fromTo(rebsSgdWrap, { x: -30, opacity: 0 }, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .set(bookHoleMob, {display: "flex"}, "<")
  .set(ctaMask, {filter:"invert(0%)" });
       
   rebsSgdOp.addEventListener('click', () => {   
    rebssgd_open.play(0);
  });
})

// CLOSE REB S SGD
RebsSgdCancel.forEach((RebsSgdCancel) => {
  if (!RebsSgdCancel) return
  const bookHoleMob = document.querySelector('.book-hole-mobile')
  if (!bookHoleMob) return
  const bookingContain = document.querySelector('.booking-items__container')
  if (!bookingContain) return

  gsap.set(bookHoleMob, { scale: 1 })

  RebsSgdCancel.addEventListener("click", (e) => {
      //let xDist = e.clientX - bookingContain.getBoundingClientRect().x + 4
      //let yDist = e.clientY - bookingContain.getBoundingClientRect().y
      let rebssgd_cancel = gsap.timeline();

      //gsap.set(bookHoleMob, { left: xDist, top: yDist })
       
rebssgd_cancel
.set(".menu__btn", { display: "none", opacity: 0 })
.set(".touch-print-open__wrap", { autoAlpha: 1 })
.set(".cta-txt", { autoAlpha: 1}, "<")
.set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
.set(rebsBg, {autoAlpha: 0, scale: 1}, "<")
.to([rebsSgdWrap, CategoryReb, bookCancelinner], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
.fromTo(bookHoleMob, { scale: 1 }, { duration: 1.2, scale: 280, ease: "expoScale(1, 280, power1.easeOut)" }, "-=0.2")
.to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
.set(CategoryReb, { x: -30, opacity: 0, display: "none" })
.set(bookCancelinner, { x: -30, opacity: 0 })
.set(rebsWrap, { display: "none" })
.set(rebsBtnsWrap, { display: "none" })
.set(RebsSgdCancel, { display: "none" })
.set(rebsSgdWrap, { opacity: 0, display: "none", x: -30 })
.set(BookContain, { display: "none" })
.set(bookHoleMob, {display: "none", clearProps: "all"})
.to(".menu__btn", { delay: 2, display: "flex", opacity: 1, duration: 0.45 });

    });
})

// CLOSE REB S SUCCESS - ALL CURRENCIES

rebSexitSuccess.forEach((rebSexitSuccess) => {
  if (!rebSexitSuccess) return
  const bookHoleMob = document.querySelector('.book-hole-mobile')
  if (!bookHoleMob) return
  const bookingContain = document.querySelector('.booking-items__container')
  if (!bookingContain) return

  gsap.set(bookHoleMob, { scale: 1 })

  rebSexitSuccess.addEventListener("click", (e) => {
      //let xDist = e.clientX - bookingContain.getBoundingClientRect().x + 4
      //let yDist = e.clientY - bookingContain.getBoundingClientRect().y
      let rebs_cancel_success = gsap.timeline();

      //gsap.set(bookHoleMob, { left: xDist, top: yDist })
           
    rebs_cancel_success
             .set(".menu__btn", { display: "none", opacity: 0 })
             .set(".touch-print-open__wrap", { autoAlpha: 1 })
             .set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
             .set(rebsBg, {autoAlpha: 0, scale: 1}, "<")
             .set(".rebs-booked__cover", { display: "block" }, "<")
             .set([".cb-btn__covered", ".rebm-btn__covered", ".rebxxl-btn__covered", ".spa-btn__covered"], { display: "flex" }, "<")
             .to([".reb-success-marquee__wrap", ".reb-success-img__wrap"], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
             .to([CategoryReb, bookCancelinner], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 }, "<")
             .to([rebsEurWrap, rebsUsdWrap, rebsGbpWrap, rebsSgdWrap, rebsSekWrap], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 }, "<")
             .fromTo(bookHoleMob, { scale: 1 }, { duration: 1.2, scale: 280, ease: "expoScale(1, 280, power1.easeOut)", onComplete() { sessionStorage.setItem("rebsSuccessPlayed", true) } }, "-=0.2")
             .to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
             .set(CategoryReb, { x: -30, opacity: 0, display: "none" })
             .set(bookCancelinner, { x: -30, opacity: 0 })
             .set(rebsWrap, { display: "none" })
             .set(rebsBtnsWrap, { display: "none" })
             .set([RebsEurCancel, RebsUsdCancel, RebsGbpCancel, RebsSgdCancel, RebsSekCancel], { display: "none" })
             .set([rebsEurWrap, rebsUsdWrap, rebsGbpWrap, rebsSgdWrap, rebsSekWrap], { opacity: 0, display: "none", x: -30 })
             .set(BookContain, { display: "none" })
             .set(bookHoleMob, {display: "none", clearProps: "all"})
             .set([".ready-fini__wrap", ".reb-success-marquee__wrap", ".reb-success-img__wrap", ".cb-success-marquee__wrap", ".cb-success-img__wrap", ".home-mrebel__qa-pong-wrap"], { yPercent: 101, opacity: 0 })
             .set([".reb-success-items__contain", ".cb-success-items__contain", ".q-a-pong__mask", ".ready-fini__mask"], { display: "none" })
             .to(".menu__btn", { delay: 2, display: "flex", opacity: 1, duration: 0.45 });
    
        });
     })
  });
  
}
