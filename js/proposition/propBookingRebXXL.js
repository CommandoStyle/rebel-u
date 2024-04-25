import gsap from 'gsap';

const propBookingRebXXL = () => {

gsap.registerPlugin(ExpoScaleEase);

// SET REB XXL COVER IF ALREADY COMPLETED
if (sessionStorage.getItem("rebxxlSuccessPlayed", true)) {

  gsap.set(".rebxxl-booked__cover", { display: "block" });
  gsap.set([".cb-btn__covered", ".rebm-btn__covered", ".rebs-btn__covered"], { display: "flex" });
  gsap.set(".nav__currency-wrap", {display: "none"});
  
} 

// GLOBAL BOOKING VARS
var bookHole = gsap.utils.toArray('.book-hole');
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
var audioWrap = gsap.utils.toArray(['.audio-graphic__wrap', '.quiz-audio-graphic__wrap']);
var audioGraph = gsap.utils.toArray('.audio-on-off__graphic');
var muzakTrack = gsap.utils.toArray('.muzak-marquee__track'); 
let cursor = gsap.utils.toArray(".cursor-dot");
let bookSuccessBtn = gsap.utils.toArray([".cb-exit__success", ".rebs-exit__success", ".rebm-exit__success", ".rebxxl-exit__success"]);

// GSAP SET GLOBAL
gsap.set([audioWrap, bookCancelinner], { x: -30, opacity: 0 });
gsap.set([CategoryCb, CategoryReb], { display: "none", x: -30, opacity: 0 });
gsap.set([BookContain], { display: "none" });
gsap.set([cbWrap, rebsWrap, rebmWrap, rebxxlWrap], { display: "none" });
gsap.set([cbBg, rebsBg, rebmBg, rebxxlBg], { autoAlpha: 0 });
  
//----------------------- BOOK REB XXL - BEGIN -----------------------//

// REB XXL CLOSE VARS ALL CURRENCIES
var rebxxlBtnsWrap = gsap.utils.toArray(".rebxxl-btns__wrap");
var RebxxlEurCancel = gsap.utils.toArray(".rebxxl-eur-cancel");
var RebxxlUsdCancel = gsap.utils.toArray(".rebxxl-usd-cancel");
var RebxxlGbpCancel = gsap.utils.toArray(".rebxxl-gbp-cancel");
var RebxxlSekCancel = gsap.utils.toArray(".rebxxl-sek-cancel");
var RebxxlSgdCancel = gsap.utils.toArray(".rebxxl-sgd-cancel");
let rebXXLexitSuccess = gsap.utils.toArray(".rebxxl-exit__success");

// REB XXL OPEN VARS
var rebxxlUsdOpen = gsap.utils.toArray('.reb-xxl-usd__cta');
var rebxxlUsdWrap = gsap.utils.toArray('.reb-xxl-usd__booking-wrap');
var rebxxlEurOpen = gsap.utils.toArray('.reb-xxl-eur__cta');
var rebxxlEurWrap = gsap.utils.toArray('.reb-xxl-eur__booking-wrap');
var rebxxlGbpOpen = gsap.utils.toArray('.reb-xxl-gbp__cta');
var rebxxlGbpWrap = gsap.utils.toArray('.reb-xxl-gbp__booking-wrap');
var rebxxlSekOpen = gsap.utils.toArray('.reb-xxl-sek__cta');
var rebxxlSekWrap = gsap.utils.toArray('.reb-xxl-sek__booking-wrap');
var rebxxlSgdOpen = gsap.utils.toArray('.reb-xxl-sgd__cta');
var rebxxlSgdWrap = gsap.utils.toArray('.reb-xxl-sgd__booking-wrap');

// GSAP SET REB XXL ALL CURRENCIES
gsap.set([rebxxlEurWrap, rebxxlUsdWrap, rebxxlGbpWrap, rebxxlSekWrap, rebxxlSgdWrap], { x: -30, opacity: 0, display: "none"  });
gsap.set([RebxxlEurCancel, RebxxlUsdCancel, RebxxlGbpCancel, RebxxlSekCancel, RebxxlSgdCancel, rebxxlBtnsWrap], { display: "none" });

// OPEN REB XXL EUR
rebxxlEurOpen.forEach(rebxxlEurOp => {

    let ctaMask = rebxxlEurOp.querySelector(".book-cta__mask"),
        ctaTxt = rebxxlEurOp.querySelector(".cta-txt"),
        ctaCover = rebxxlEurOp.querySelector(".cta-redact-cover"),
    
 rebxxleur_open = gsap.timeline({ paused: true });

  rebxxleur_open
  .set(rebxxlBg, { scale: 1, autoAlpha: 1 })
  .set(cursor, { display: "none" }, "<")
  .set(bookSuccessBtn, { display: "none" }, "<")
  .set(BookContain, { display: "flex" }, "<")
  .set(rebxxlWrap, { display: "flex"}, "<")
  .set(rebxxlBtnsWrap, { display: "block" }, "<")
  .set(RebxxlEurCancel, { display: "flex" }, "<")
  .set(rebxxlEurWrap, { display: "block" }, "<")
  .set(CategoryReb, { display: "block" }, "<")
  .set(ctaCover, { scaleX: 0 }, "<")
  .to(ctaMask, {filter:"invert(100%)", duration: 0.001}, "<")
  .to(rebxxlBg, { scale: 12, transformOrigin: "50% 50%", ease: "power2.inOut", duration: 1.2 })
  .to(ctaCover, { delay: 0.2, scaleX: 1, transformOrigin: "0% 100%", duration: 6, ease: "power0.easeOut" })
  .to(ctaTxt, { autoAlpha: 0, duration: 0.001})
  .to(ctaCover, { scaleX: 0, transformOrigin: "100% 0%", duration: 0.3, ease: "linear" })
  .to(CategoryReb, { delay: 0.2, x: 0, opacity: 1, ease: "expo.out", duration: 1.2 })
  .to(bookCancelinner, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .fromTo(rebxxlEurWrap, { x: -30, opacity: 0 }, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .set(bookHole, {display: "block"}, "<")
  .to([audioWrap, muzakTrack], { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .to(audioGraph, {clearProps: 'x'})
  .set(audioGraph, {x: 20.8})
  .set(ctaMask, {filter:"invert(0%)" });
       
   rebxxlEurOp.addEventListener('click', () => {   
    rebxxleur_open.play(0);
  });
})

// CLOSE REB XXL EUR
RebxxlEurCancel.forEach((RebxxlEurCancel) => {
  if (!RebxxlEurCancel) return
  const bookHole = document.querySelector('.book-hole')
  if (!bookHole) return
  const bookingContain = document.querySelector('.booking-items__container')
  if (!bookingContain) return

  gsap.set(bookHole, { scale: 1 })

  RebxxlEurCancel.addEventListener("click", (e) => {
      let xDist = e.clientX - bookingContain.getBoundingClientRect().x + 4
      let yDist = e.clientY - bookingContain.getBoundingClientRect().y
      let rebxxleur_cancel = gsap.timeline();

      gsap.set(bookHole, { left: xDist, top: yDist })
       
rebxxleur_cancel
.set(".menu__btn", { display: "none", opacity: 0 })
.set(".cta-txt", { autoAlpha: 1}, "<")
.set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
.set(rebxxlBg, {autoAlpha: 0, scale: 1}, "<")
.to([audioWrap, muzakTrack, rebxxlEurWrap, CategoryReb, bookCancelinner], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
.fromTo(bookHole, { scale: 1 }, { duration: 1.2, scale: 2800, ease: "expoScale(1, 2800, power1.easeOut)" }, "-=0.2")
.to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
.set(CategoryReb, { x: -30, opacity: 0, display: "none" })
.set([bookCancelinner, audioWrap, muzakTrack], { x: -30, opacity: 0 })
.set(rebxxlWrap, { display: "none" })
.set(rebxxlBtnsWrap, { display: "none" })
.set(RebxxlEurCancel, { display: "none" })
.set(rebxxlEurWrap, { opacity: 0, display: "none", x: -30 })
.set(BookContain, { display: "none" })
.set(bookHole, {display: "none", clearProps: "all"})
.to(".menu__btn", { delay: 2, display: "flex", opacity: 1, duration: 0.45 });

    });
})

// OPEN REB XXL USD
rebxxlUsdOpen.forEach(rebxxlUsdOp => {

    let ctaMask = rebxxlUsdOp.querySelector(".book-cta__mask"),
        ctaTxt = rebxxlUsdOp.querySelector(".cta-txt"),
        ctaCover = rebxxlUsdOp.querySelector(".cta-redact-cover"),
    
 rebxxlusd_open = gsap.timeline({ paused: true });

  rebxxlusd_open
  .set(rebxxlBg, { scale: 1, autoAlpha: 1 })
  .set(cursor, { display: "none" }, "<")
  .set(bookSuccessBtn, { display: "none" }, "<")
  .set(BookContain, { display: "flex" }, "<")
  .set(rebxxlWrap, { display: "flex"}, "<")
  .set(rebxxlBtnsWrap, { display: "block" }, "<")
  .set(RebxxlUsdCancel, { display: "flex" }, "<")
  .set(rebxxlUsdWrap, { display: "block" }, "<")
  .set(CategoryReb, { display: "block" }, "<")
  .set(ctaCover, { scaleX: 0 }, "<")
  .to(ctaMask, {filter:"invert(100%)", duration: 0.001}, "<")
  .to(rebxxlBg, { scale: 12, transformOrigin: "50% 50%", ease: "power2.inOut", duration: 1.2 })
  .to(ctaCover, { delay: 0.2, scaleX: 1, transformOrigin: "0% 100%", duration: 6, ease: "power0.easeOut" })
  .to(ctaTxt, { autoAlpha: 0, duration: 0.001})
  .to(ctaCover, { scaleX: 0, transformOrigin: "100% 0%", duration: 0.3, ease: "linear" })
  .to(CategoryReb, { delay: 0.2, x: 0, opacity: 1, ease: "expo.out", duration: 1.2 })
  .to(bookCancelinner, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .fromTo(rebxxlUsdWrap, { x: -30, opacity: 0 }, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .set(bookHole, {display: "block"}, "<")
  .to([audioWrap, muzakTrack], { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .to(audioGraph, {clearProps: 'x'})
  .set(audioGraph, {x: 20.8})
  .set(ctaMask, {filter:"invert(0%)" });
       
   rebxxlUsdOp.addEventListener('click', () => {   
    rebxxlusd_open.play(0);
  });
})

// CLOSE REB XXL USD
RebxxlUsdCancel.forEach((RebxxlUsdCancel) => {
  if (!RebxxlUsdCancel) return
  const bookHole = document.querySelector('.book-hole')
  if (!bookHole) return
  const bookingContain = document.querySelector('.booking-items__container')
  if (!bookingContain) return

  gsap.set(bookHole, { scale: 1 })

  RebxxlUsdCancel.addEventListener("click", (e) => {
      let xDist = e.clientX - bookingContain.getBoundingClientRect().x + 4
      let yDist = e.clientY - bookingContain.getBoundingClientRect().y
      let rebxxlusd_cancel = gsap.timeline();

      gsap.set(bookHole, { left: xDist, top: yDist })
       
rebxxlusd_cancel
.set(".menu__btn", { display: "none", opacity: 0 })
.set(".cta-txt", { autoAlpha: 1}, "<")
.set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
.set(rebxxlBg, {autoAlpha: 0, scale: 1}, "<")
.to([audioWrap, muzakTrack, rebxxlUsdWrap, CategoryReb, bookCancelinner], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
.fromTo(bookHole, { scale: 1 }, { duration: 1.2, scale: 2800, ease: "expoScale(1, 2800, power1.easeOut)" }, "-=0.2")
.to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
.set(CategoryReb, { x: -30, opacity: 0, display: "none" })
.set([bookCancelinner, audioWrap, muzakTrack], { x: -30, opacity: 0 })
.set(rebxxlWrap, { display: "none" })
.set(rebxxlBtnsWrap, { display: "none" })
.set(RebxxlUsdCancel, { display: "none" })
.set(rebxxlUsdWrap, { opacity: 0, display: "none", x: -30 })
.set(BookContain, { display: "none" })
.set(bookHole, {display: "none", clearProps: "all"})
.to(".menu__btn", { delay: 2, display: "flex", opacity: 1, duration: 0.45 });

    });
})

// OPEN REB XXL GBP
rebxxlGbpOpen.forEach(rebxxlGbpOp => {

    let ctaMask = rebxxlGbpOp.querySelector(".book-cta__mask"),
        ctaTxt = rebxxlGbpOp.querySelector(".cta-txt"),
        ctaCover = rebxxlGbpOp.querySelector(".cta-redact-cover"),
    
 rebxxlgbp_open = gsap.timeline({ paused: true });

  rebxxlgbp_open
  .set(rebxxlBg, { scale: 1, autoAlpha: 1 })
  .set(cursor, { display: "none" }, "<")
  .set(bookSuccessBtn, { display: "none" }, "<")
  .set(BookContain, { display: "flex" }, "<")
  .set(rebxxlWrap, { display: "flex"}, "<")
  .set(rebxxlBtnsWrap, { display: "block" }, "<")
  .set(RebxxlGbpCancel, { display: "flex" }, "<")
  .set(rebxxlGbpWrap, { display: "block" }, "<")
  .set(CategoryReb, { display: "block" }, "<")
  .set(ctaCover, { scaleX: 0 }, "<")
  .to(ctaMask, {filter:"invert(100%)", duration: 0.001}, "<")
  .to(rebxxlBg, { scale: 12, transformOrigin: "50% 50%", ease: "power2.inOut", duration: 1.2 })
  .to(ctaCover, { delay: 0.2, scaleX: 1, transformOrigin: "0% 100%", duration: 6, ease: "power0.easeOut" })
  .to(ctaTxt, { autoAlpha: 0, duration: 0.001})
  .to(ctaCover, { scaleX: 0, transformOrigin: "100% 0%", duration: 0.3, ease: "linear" })
  .to(CategoryReb, { delay: 0.2, x: 0, opacity: 1, ease: "expo.out", duration: 1.2 })
  .to(bookCancelinner, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .fromTo(rebxxlGbpWrap, { x: -30, opacity: 0 }, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .set(bookHole, {display: "block"}, "<")
  .to([audioWrap, muzakTrack], { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .to(audioGraph, {clearProps: 'x'})
  .set(audioGraph, {x: 20.8})
  .set(ctaMask, {filter:"invert(0%)" });
       
   rebxxlGbpOp.addEventListener('click', () => {   
    rebxxlgbp_open.play(0);
  });
})

// CLOSE REB XXL GBP
RebxxlGbpCancel.forEach((RebxxlGbpCancel) => {
  if (!RebxxlGbpCancel) return
  const bookHole = document.querySelector('.book-hole')
  if (!bookHole) return
  const bookingContain = document.querySelector('.booking-items__container')
  if (!bookingContain) return

  gsap.set(bookHole, { scale: 1 })

  RebxxlGbpCancel.addEventListener("click", (e) => {
      let xDist = e.clientX - bookingContain.getBoundingClientRect().x + 4
      let yDist = e.clientY - bookingContain.getBoundingClientRect().y
      let rebxxlgbp_cancel = gsap.timeline();

      gsap.set(bookHole, { left: xDist, top: yDist })
       
rebxxlgbp_cancel
.set(".menu__btn", { display: "none", opacity: 0 })
.set(".cta-txt", { autoAlpha: 1}, "<")
.set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
.set(rebxxlBg, {autoAlpha: 0, scale: 1}, "<")
.to([audioWrap, muzakTrack, rebxxlGbpWrap, CategoryReb, bookCancelinner], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
.fromTo(bookHole, { scale: 1 }, { duration: 1.2, scale: 2800, ease: "expoScale(1, 2800, power1.easeOut)" }, "-=0.2")
.to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
.set(CategoryReb, { x: -30, opacity: 0, display: "none" })
.set([bookCancelinner, audioWrap, muzakTrack], { x: -30, opacity: 0 })
.set(rebxxlWrap, { display: "none" })
.set(rebxxlBtnsWrap, { display: "none" })
.set(RebxxlGbpCancel, { display: "none" })
.set(rebxxlGbpWrap, { opacity: 0, display: "none", x: -30 })
.set(BookContain, { display: "none" })
.set(bookHole, {display: "none", clearProps: "all"})
.to(".menu__btn", { delay: 2, display: "flex", opacity: 1, duration: 0.45 });

    });
})

// OPEN REB XXL SEK
rebxxlSekOpen.forEach(rebxxlSekOp => {

    let ctaMask = rebxxlSekOp.querySelector(".book-cta__mask"),
        ctaTxt = rebxxlSekOp.querySelector(".cta-txt"),
        ctaCover = rebxxlSekOp.querySelector(".cta-redact-cover"),
    
 rebxxlsek_open = gsap.timeline({ paused: true });

  rebxxlsek_open
  .set(rebxxlBg, { scale: 1, autoAlpha: 1 })
  .set(cursor, { display: "none" }, "<")
  .set(bookSuccessBtn, { display: "none" }, "<")
  .set(BookContain, { display: "flex" }, "<")
  .set(rebxxlWrap, { display: "flex"}, "<")
  .set(rebxxlBtnsWrap, { display: "block" }, "<")
  .set(RebxxlSekCancel, { display: "flex" }, "<")
  .set(rebxxlSekWrap, { display: "block" }, "<")
  .set(CategoryReb, { display: "block" }, "<")
  .set(ctaCover, { scaleX: 0 }, "<")
  .to(ctaMask, {filter:"invert(100%)", duration: 0.001}, "<")
  .to(rebxxlBg, { scale: 12, transformOrigin: "50% 50%", ease: "power2.inOut", duration: 1.2 })
  .to(ctaCover, { delay: 0.2, scaleX: 1, transformOrigin: "0% 100%", duration: 6, ease: "power0.easeOut" })
  .to(ctaTxt, { autoAlpha: 0, duration: 0.001})
  .to(ctaCover, { scaleX: 0, transformOrigin: "100% 0%", duration: 0.3, ease: "linear" })
  .to(CategoryReb, { delay: 0.2, x: 0, opacity: 1, ease: "expo.out", duration: 1.2 })
  .to(bookCancelinner, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .fromTo(rebxxlSekWrap, { x: -30, opacity: 0 }, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .set(bookHole, {display: "block"}, "<")
  .to([audioWrap, muzakTrack], { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .to(audioGraph, {clearProps: 'x'})
  .set(audioGraph, {x: 20.8})
  .set(ctaMask, {filter:"invert(0%)" });
       
   rebxxlSekOp.addEventListener('click', () => {   
    rebxxlsek_open.play(0);
  });
})

// CLOSE REB XXL SEK
RebxxlSekCancel.forEach((RebxxlSekCancel) => {
  if (!RebxxlSekCancel) return
  const bookHole = document.querySelector('.book-hole')
  if (!bookHole) return
  const bookingContain = document.querySelector('.booking-items__container')
  if (!bookingContain) return

  gsap.set(bookHole, { scale: 1 })

  RebxxlSekCancel.addEventListener("click", (e) => {
      let xDist = e.clientX - bookingContain.getBoundingClientRect().x + 4
      let yDist = e.clientY - bookingContain.getBoundingClientRect().y
      let rebxxlsek_cancel = gsap.timeline();

      gsap.set(bookHole, { left: xDist, top: yDist })
       
rebxxlsek_cancel
.set(".menu__btn", { display: "none", opacity: 0 })
.set(".cta-txt", { autoAlpha: 1}, "<")
.set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
.set(rebxxlBg, {autoAlpha: 0, scale: 1}, "<")
.to([audioWrap, muzakTrack, rebxxlSekWrap, CategoryReb, bookCancelinner], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
.fromTo(bookHole, { scale: 1 }, { duration: 1.2, scale: 2800, ease: "expoScale(1, 2800, power1.easeOut)" }, "-=0.2")
.to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
.set(CategoryReb, { x: -30, opacity: 0, display: "none" })
.set([bookCancelinner, audioWrap, muzakTrack], { x: -30, opacity: 0 })
.set(rebxxlWrap, { display: "none" })
.set(rebxxlBtnsWrap, { display: "none" })
.set(RebxxlSekCancel, { display: "none" })
.set(rebxxlSekWrap, { opacity: 0, display: "none", x: -30 })
.set(BookContain, { display: "none" })
.set(bookHole, {display: "none", clearProps: "all"})
.to(".menu__btn", { delay: 2, display: "flex", opacity: 1, duration: 0.45 });

    });
})

// OPEN REB XXL SGD
rebxxlSgdOpen.forEach(rebxxlSgdOp => {

    let ctaMask = rebxxlSgdOp.querySelector(".book-cta__mask"),
        ctaTxt = rebxxlSgdOp.querySelector(".cta-txt"),
        ctaCover = rebxxlSgdOp.querySelector(".cta-redact-cover"),
    
 rebxxlsgd_open = gsap.timeline({ paused: true });

  rebxxlsgd_open
  .set(rebxxlBg, { scale: 1, autoAlpha: 1 })
  .set(cursor, { display: "none" }, "<")
  .set(bookSuccessBtn, { display: "none" }, "<")
  .set(BookContain, { display: "flex" }, "<")
  .set(rebxxlWrap, { display: "flex"}, "<")
  .set(rebxxlBtnsWrap, { display: "block" }, "<")
  .set(RebxxlSgdCancel, { display: "flex" }, "<")
  .set(rebxxlSgdWrap, { display: "block" }, "<")
  .set(CategoryReb, { display: "block" }, "<")
  .set(ctaCover, { scaleX: 0 }, "<")
  .to(ctaMask, {filter:"invert(100%)", duration: 0.001}, "<")
  .to(rebxxlBg, { scale: 12, transformOrigin: "50% 50%", ease: "power2.inOut", duration: 1.2 })
  .to(ctaCover, { delay: 0.2, scaleX: 1, transformOrigin: "0% 100%", duration: 6, ease: "power0.easeOut" })
  .to(ctaTxt, { autoAlpha: 0, duration: 0.001})
  .to(ctaCover, { scaleX: 0, transformOrigin: "100% 0%", duration: 0.3, ease: "linear" })
  .to(CategoryReb, { delay: 0.2, x: 0, opacity: 1, ease: "expo.out", duration: 1.2 })
  .to(bookCancelinner, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .fromTo(rebxxlSgdWrap, { x: -30, opacity: 0 }, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .set(bookHole, {display: "block"}, "<")
  .to([audioWrap, muzakTrack], { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .to(audioGraph, {clearProps: 'x'})
  .set(audioGraph, {x: 20.8})
  .set(ctaMask, {filter:"invert(0%)" });
       
   rebxxlSgdOp.addEventListener('click', () => {   
    rebxxlsgd_open.play(0);
  });
})

// CLOSE REB XXL SGD
RebxxlSgdCancel.forEach((RebxxlSgdCancel) => {
  if (!RebxxlSgdCancel) return
  const bookHole = document.querySelector('.book-hole')
  if (!bookHole) return
  const bookingContain = document.querySelector('.booking-items__container')
  if (!bookingContain) return

  gsap.set(bookHole, { scale: 1 })

  RebxxlSgdCancel.addEventListener("click", (e) => {
      let xDist = e.clientX - bookingContain.getBoundingClientRect().x + 4
      let yDist = e.clientY - bookingContain.getBoundingClientRect().y
      let rebxxlsgd_cancel = gsap.timeline();

      gsap.set(bookHole, { left: xDist, top: yDist })
       
rebxxlsgd_cancel
.set(".menu__btn", { display: "none", opacity: 0 })
.set(".cta-txt", { autoAlpha: 1}, "<")
.set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
.set(rebxxlBg, {autoAlpha: 0, scale: 1}, "<")
.to([audioWrap, muzakTrack, rebxxlSgdWrap, CategoryReb, bookCancelinner], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
.fromTo(bookHole, { scale: 1 }, { duration: 1.2, scale: 2800, ease: "expoScale(1, 2800, power1.easeOut)" }, "-=0.2")
.to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
.set(CategoryReb, { x: -30, opacity: 0, display: "none" })
.set([bookCancelinner, audioWrap, muzakTrack], { x: -30, opacity: 0 })
.set(rebxxlWrap, { display: "none" })
.set(rebxxlBtnsWrap, { display: "none" })
.set(RebxxlSgdCancel, { display: "none" })
.set(rebxxlSgdWrap, { opacity: 0, display: "none", x: -30 })
.set(BookContain, { display: "none" })
.set(bookHole, {display: "none", clearProps: "all"})
.to(".menu__btn", { delay: 2, display: "flex", opacity: 1, duration: 0.45 });

    });
})

// CLOSE REB XXL SUCCESS - ALL CURRENCIES

rebXXLexitSuccess.forEach((rebXXLexitSuccess) => {
  if (!rebXXLexitSuccess) return
  const bookHole = document.querySelector('.book-hole')
  if (!bookHole) return
  const bookingContain = document.querySelector('.booking-items__container')
  if (!bookingContain) return

  gsap.set(bookHole, { scale: 1 })

  rebXXLexitSuccess.addEventListener("click", (e) => {
      let xDist = e.clientX - bookingContain.getBoundingClientRect().x + 4
      let yDist = e.clientY - bookingContain.getBoundingClientRect().y
      let rebxxl_cancel_success = gsap.timeline();

      gsap.set(bookHole, { left: xDist, top: yDist })
           
    rebxxl_cancel_success
             .set(".menu__btn", { display: "none", opacity: 0 })
             .set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
             .set(rebxxlBg, {autoAlpha: 0, scale: 1}, "<")
             .set(".rebxxl-booked__cover", { display: "block" }, "<")
             .set([".cb-btn__covered", ".rebs-btn__covered", ".rebm-btn__covered", ".spa-btn__covered"], { display: "flex" }, "<")
             .to([".reb-success-marquee__wrap", ".reb-success-img__wrap"], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
             .to([CategoryReb, bookCancelinner, audioWrap, muzakTrack], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 }, "<")
             .to([rebxxlEurWrap, rebxxlUsdWrap, rebxxlGbpWrap, rebxxlSgdWrap, rebxxlSekWrap], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 }, "<")
             .fromTo(bookHole, { scale: 1 }, { duration: 1.2, scale: 2800, ease: "expoScale(1, 2800, power1.easeOut)", onComplete() { sessionStorage.setItem("rebxxlSuccessPlayed", true) } }, "-=0.2")
             .to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
             .set(CategoryReb, { x: -30, opacity: 0, display: "none" })
             .set([audioWrap, muzakTrack, bookCancelinner], { x: -30, opacity: 0 })
             .set(rebxxlWrap, { display: "none" })
             .set(rebxxlBtnsWrap, { display: "none" })
             .set([RebxxlEurCancel, RebxxlUsdCancel, RebxxlGbpCancel, RebxxlSgdCancel, RebxxlSekCancel], { display: "none" })
             .set([rebxxlEurWrap, rebxxlUsdWrap, rebxxlGbpWrap, rebxxlSgdWrap, rebxxlSekWrap], { opacity: 0, display: "none", x: -30 })
             .set(BookContain, { display: "none" })
             .set(bookHole, {display: "none", clearProps: "all"})
             .set([".ready-fini__wrap", ".reb-success-marquee__wrap", ".reb-success-img__wrap", ".cb-success-marquee__wrap", ".cb-success-img__wrap", ".home-mrebel__qa-pong-wrap"], { yPercent: 101, opacity: 0 })
             .set([".reb-success-items__contain", ".cb-success-items__contain", ".q-a-pong__mask", ".ready-fini__mask"], { display: "none" })
             .to(".menu__btn", { delay: 2, display: "flex", opacity: 1, duration: 0.45 });

        });
    })

}

export default propBookingRebXXL;
