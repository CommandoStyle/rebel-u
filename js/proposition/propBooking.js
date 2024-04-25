export const propBooking = () => {

gsap.registerPlugin(ExpoScaleEase);

// SET CB COVER IF ALREADY COMPLETED
if (sessionStorage.getItem("cbSuccessPlayed", true)) {

  gsap.set(".cb-booked__cover", { display: "block" });
  gsap.set([".cb-eur__cta", ".cb-usd__cta", ".cb-gbp__cta", ".cb-sek__cta", ".cb-sgd__cta"], { display: "none" })
  gsap.set([".rebs-btn__covered", ".rebm-btn__covered", ".rebxxl-btn__covered"], { display: "flex" });
  
} 

// SET REB S COVER IF ALREADY COMPLETED
if (sessionStorage.getItem("rebsSuccessPlayed", true)) {

  gsap.set(".rebs-booked__cover", { display: "block" });
  gsap.set([".cb-btn__covered", ".rebm-btn__covered", ".rebxxl-btn__covered"], { display: "flex" });
  
} 

// SET REB M COVER IF ALREADY COMPLETED
if (sessionStorage.getItem("rebmSuccessPlayed", true)) {

  gsap.set(".rebm-booked__cover", { display: "block" });
  gsap.set([".cb-btn__covered", ".rebs-btn__covered", ".rebxxl-btn__covered"], { display: "flex" });
  
} 

// SET REB XXL COVER IF ALREADY COMPLETED
if (sessionStorage.getItem("rebxxlSuccessPlayed", true)) {

  gsap.set(".rebxxl-booked__cover", { display: "block" });
  gsap.set([".cb-btn__covered", ".rebm-btn__covered", ".rebs-btn__covered"], { display: "flex" });
  
} 

// GLOBAL BOOKING VARS
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

//----------------------- BOOK CB - BEGIN -----------------------//

// CB CLOSE VARS ALL CURRENCIES
var cbBtnsWrap = gsap.utils.toArray(".cb-btns__wrap");
var CbEurCancel = gsap.utils.toArray(".cb-eur-cancel");
var CbUsdCancel = gsap.utils.toArray(".cb-usd-cancel");
var CbGbpCancel = gsap.utils.toArray(".cb-gbp-cancel");
var CbSekCancel = gsap.utils.toArray(".cb-sek-cancel");
var CbSgdCancel = gsap.utils.toArray(".cb-sgd-cancel");
var cbExitSuccess = gsap.utils.toArray(".cb-exit__success");

// CB OPEN VARS ALL CURRENCIES
var cbEurOpen = gsap.utils.toArray('.cb-eur__cta');
var cbEurWrap = gsap.utils.toArray('.cb-eur__booking-wrap');
var cbUsdOpen = gsap.utils.toArray('.cb-usd__cta');
var cbUsdWrap = gsap.utils.toArray('.cb-usd__booking-wrap');
var cbGbpOpen = gsap.utils.toArray('.cb-gbp__cta');
var cbGbpWrap = gsap.utils.toArray('.cb-gbp__booking-wrap');
var cbSekOpen = gsap.utils.toArray('.cb-sek__cta');
var cbSekWrap = gsap.utils.toArray('.cb-sek__booking-wrap');
var cbSgdOpen = gsap.utils.toArray('.cb-sgd__cta');
var cbSgdWrap = gsap.utils.toArray('.cb-sgd__booking-wrap');

// GSAP SET CB ALL CURRENCIES
gsap.set([cbEurWrap, cbUsdWrap, cbGbpWrap, cbSekWrap, cbSgdWrap], { x: -30, opacity: 0, display: "none" });
gsap.set([CbEurCancel, CbUsdCancel, CbGbpCancel, CbSekCancel, CbSgdCancel, cbBtnsWrap], { display: "none" });

// OPEN CB EUR
cbEurOpen.forEach(cbEurOp => {

    let ctaMask = cbEurOp.querySelector(".book-cta__mask"),
        ctaTxt = cbEurOp.querySelector(".cta-txt"),
        ctaCover = cbEurOp.querySelector(".cta-redact-cover"),
        
  cbeur_open = gsap.timeline({ paused: true });
  
      cbeur_open.set(cbBg, { scale: 1, autoAlpha: 1 })
                .set(cursor, { display: "none" }, "<")
                .set(bookSuccessBtn, { display: "none" }, "<")
                .set(BookContain, { display: "flex" }, "<")
                .set(cbWrap, { display: "flex"}, "<")
                .set(cbBtnsWrap, { display: "block" }, "<")
                .set(CbEurCancel, { display: "flex" }, "<")
                .set(cbEurWrap, { display: "block" }, "<")
                .set(CategoryCb, { display: "block" }, "<")
                .set(ctaCover, { scaleX: 0 }, "<")
                .to(ctaMask, {filter:"invert(100%)", duration: 0.001}, "<")
                .to(cbBg, { scale: 12, transformOrigin: "50% 50%", ease: "power2.inOut", duration: 1.2 })
                .to(ctaCover, { delay: 0.2, scaleX: 1, transformOrigin: "0% 100%", duration: 6, ease: "power0.easeOut" })
                .to(ctaTxt, { autoAlpha: 0, duration: 0.001})
                .to(ctaCover, { scaleX: 0, transformOrigin: "100% 0%", duration: 0.3, ease: "linear" })
                .to(CategoryCb, { delay: 0.2, x: 0, opacity: 1, ease: "expo.out", duration: 1.2 })
                .to(bookCancelinner, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
                .fromTo(cbEurWrap, { x: -30, opacity: 0 }, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
                .to([audioWrap, muzakTrack], { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
                .to(audioGraph, {clearProps: 'x'})
                .set(audioGraph, {x: 20.8})
                .set(ctaMask, {filter:"invert(0%)"});
         
    cbEurOp.addEventListener('click', () => {   
      cbeur_open.play(0);
    });
  })

// CLOSE CB EUR
CbEurCancel.forEach((CbEurCancel) => {
  if (!CbEurCancel) return
  const bookHole = document.querySelector('.hole.is--book-close')
  if (!bookHole) return
  const bookingContain = document.querySelector('.booking-items__container')
  if (!bookingContain) return

  gsap.set(bookHole, { scale: 1 })

  CbEurCancel.addEventListener("click", (e) => {
      let xDist = e.clientX - bookingContain.getBoundingClientRect().x + 4
      let yDist = e.clientY - bookingContain.getBoundingClientRect().y
      let cbeur_cancel = gsap.timeline();

      gsap.set(bookHole, { left: xDist, top: yDist })
           
      cbeur_cancel
             .set([".home-logo", ".menu-txt", ".beta__txt", ".currencies-list__contain", ".currencies-txt"], {opacity: 0, yPercent: 0 })
             .set([".home-inactive", ".beta-txt__contain", ".nav-btn__inner-wrap", ".currencies-list__mask"], { yPercent: 0 })
             .set(".nav__container", { display: "none" })
             .set(bookHole, {display: "block"})
             .set(".cta-txt", { autoAlpha: 1}, "<")
             .set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
             .set(cbBg, {autoAlpha: 0, scale: 1}, "<")
             .to([audioWrap, muzakTrack, cbEurWrap, CategoryCb, bookCancelinner], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
             .fromTo(bookHole, { scale: 1 }, { duration: 1.2, scale: 2700, ease: "expoScale(1, 2700, power1.easeOut)" }, "-=0.2")
             .to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
             .set(CategoryCb, { x: -30, opacity: 0, display: "none" })
             .set([bookCancelinner, audioWrap, muzakTrack], { x: -30, opacity: 0 })
             .set(cbWrap, { display: "none" })
             .set(cbBtnsWrap, { display: "none" })
             .set(CbEurCancel, { display: "none" })
             .set(cbEurWrap, { opacity: 0, display: "none", x: -30 })
             .set(BookContain, { display: "none" })
             .set(bookHole, {display: "none", clearProps: "all"})
             .to([".nav__menu-wrapper", ".nav__logo-wrapper"], { delay: 2, display: "flex", duration: 0.001 })
             .to([".home-logo", ".menu-txt", ".beta__txt", ".currencies-list__contain", ".currencies-txt"], { yPercent: 0, duration: 0.55, autoAlpha: 1, ease: Power1.easeInOut })
             .to([".in--nav__btn", ".home-inactive", ".beta-txt__contain", ".nav-btn__inner-wrap", ".currencies-list__mask"], { yPercent: 0, duration:0.55, ease: Power1.easeInOut }, "<");
    
        });
    })

// OPEN CB USD
cbUsdOpen.forEach(cbUsdOp => {

    let ctaMask = cbUsdOp.querySelector(".book-cta__mask"),
        ctaTxt = cbUsdOp.querySelector(".cta-txt"),
        ctaCover = cbUsdOp.querySelector(".cta-redact-cover"),
      
cbusd_open = gsap.timeline({ paused: true });

      cbusd_open.set(cbBg, { scale: 1, autoAlpha: 1 })
                .set(cursor, { display: "none" }, "<")
                .set(bookSuccessBtn, { display: "none" }, "<")
                .set(BookContain, { display: "flex" }, "<")
                .set(cbWrap, { display: "flex"}, "<")
                .set(cbBtnsWrap, { display: "block" }, "<")
                .set(CbUsdCancel, { display: "flex" }, "<")
                .set(cbUsdWrap, { display: "block" }, "<")
                .set(CategoryCb, { display: "block" }, "<")
                .set(ctaCover, { scaleX: 0 }, "<")
                .to(ctaMask, {filter:"invert(100%)", duration: 0.001}, "<")
                .to(cbBg, { scale: 12, transformOrigin: "50% 50%", ease: "power2.inOut", duration: 1.2 })
                .to(ctaCover, { delay: 0.2, scaleX: 1, transformOrigin: "0% 100%", duration: 6, ease: "power0.easeOut" })
                .to(ctaTxt, { autoAlpha: 0, duration: 0.001})
                .to(ctaCover, { scaleX: 0, transformOrigin: "100% 0%", duration: 0.3, ease: "linear" })
                .to(CategoryCb, { delay: 0.2, x: 0, opacity: 1, ease: "expo.out", duration: 1.2 })
                .to(bookCancelinner, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
                .fromTo(cbUsdWrap, { x: -30, opacity: 0 }, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
                .to([audioWrap, muzakTrack], { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
                .to(audioGraph, {clearProps: 'x'})
                .set(audioGraph, {x: 20.8})
                .set(ctaMask, {filter:"invert(0%)"});
       
  cbUsdOp.addEventListener('click', () => {   
    cbusd_open.play(0);
  });
})

// CLOSE CB USD
CbUsdCancel.forEach((CbUsdCancel) => {
  if (!CbUsdCancel) return
  const bookHole = document.querySelector('.hole.is--book-close')
  if (!bookHole) return
  const bookingContain = document.querySelector('.booking-items__container')
  if (!bookingContain) return

  gsap.set(bookHole, { scale: 1 })

  CbUsdCancel.addEventListener("click", (e) => {
      let xDist = e.clientX - bookingContain.getBoundingClientRect().x + 4
      let yDist = e.clientY - bookingContain.getBoundingClientRect().y
      let cbusd_cancel = gsap.timeline();

      gsap.set(bookHole, { left: xDist, top: yDist })
       
  cbusd_cancel
             .set([".home-logo", ".menu-txt", ".beta__txt", ".currencies-list__contain", ".currencies-txt"], {opacity: 0, yPercent: 0 })
             .set([".home-inactive", ".beta-txt__contain", ".nav-btn__inner-wrap", ".currencies-list__mask"], { yPercent: 0 })
             .set(".nav__container", { display: "none" })
             .set(bookHole, {display: "block"})
             .set(".cta-txt", { autoAlpha: 1}, "<")
             .set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
             .set(cbBg, {autoAlpha: 0, scale: 1}, "<")
             .to([audioWrap, muzakTrack, cbUsdWrap, CategoryCb, bookCancelinner], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
             .fromTo(bookHole, { scale: 1 }, { duration: 1.2, scale: 2700, ease: "expoScale(1, 2700, power1.easeOut)" }, "-=0.2")
             .to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
             .set(CategoryCb, { x: -30, opacity: 0, display: "none" })
             .set([bookCancelinner, audioWrap, muzakTrack], { x: -30, opacity: 0 })
             .set(cbWrap, { display: "none" })
             .set(cbBtnsWrap, { display: "none" })
             .set(CbUsdCancel, { display: "none" })
             .set(cbUsdWrap, { opacity: 0, display: "none", x: -30 })
             .set(BookContain, { display: "none" })
             .set(bookHole, {display: "none", clearProps: "all"})
             .to([".nav__menu-wrapper", ".nav__logo-wrapper"], { delay: 2, display: "flex", duration: 0.001 })
             .to([".home-logo", ".menu-txt", ".beta__txt", ".currencies-list__contain", ".currencies-txt"], { yPercent: 0, duration: 0.55, autoAlpha: 1, ease: Power1.easeInOut })
             .to([".in--nav__btn", ".home-inactive", ".beta-txt__contain", ".nav-btn__inner-wrap", ".currencies-list__mask"], { yPercent: 0, duration:0.55, ease: Power1.easeInOut }, "<");

    });
})

// OPEN CB GBP
cbGbpOpen.forEach(cbGbpOp => {

    let ctaMask = cbGbpOp.querySelector(".book-cta__mask"),
        ctaTxt = cbGbpOp.querySelector(".cta-txt"),
        ctaCover = cbGbpOp.querySelector(".cta-redact-cover"),
      
cbgbp_open = gsap.timeline({ paused: true });

      cbgbp_open.set(cbBg, { scale: 1, autoAlpha: 1 })
                .set(cursor, { display: "none" }, "<")
                .set(bookSuccessBtn, { display: "none" }, "<")
                .set(BookContain, { display: "flex" }, "<")
                .set(cbWrap, { display: "flex"}, "<")
                .set(cbBtnsWrap, { display: "block" }, "<")
                .set(CbGbpCancel, { display: "flex" }, "<")
                .set(cbGbpWrap, { display: "block" }, "<")
                .set(CategoryCb, { display: "block" }, "<")
                .set(ctaCover, { scaleX: 0 }, "<")
                .to(ctaMask, {filter:"invert(100%)", duration: 0.001}, "<")
                .to(cbBg, { scale: 12, transformOrigin: "50% 50%", ease: "power2.inOut", duration: 1.2 })
                .to(ctaCover, { delay: 0.2, scaleX: 1, transformOrigin: "0% 100%", duration: 6, ease: "power0.easeOut" })
                .to(ctaTxt, { autoAlpha: 0, duration: 0.001})
                .to(ctaCover, { scaleX: 0, transformOrigin: "100% 0%", duration: 0.3, ease: "linear" })
                .to(CategoryCb, { delay: 0.2, x: 0, opacity: 1, ease: "expo.out", duration: 1.2 })
                .to(bookCancelinner, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
                .fromTo(cbGbpWrap, { x: -30, opacity: 0 }, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
                .to([audioWrap, muzakTrack], { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
                .to(audioGraph, {clearProps: 'x'})
                .set(audioGraph, {x: 20.8})
                .set(ctaMask, {filter:"invert(0%)"});
       
  cbGbpOp.addEventListener('click', () => {   
    cbgbp_open.play(0);
  });
})

// CLOSE CB GBP
CbGbpCancel.forEach((CbGbpCancel) => {
  if (!CbGbpCancel) return
  const bookHole = document.querySelector('.hole.is--book-close')
  if (!bookHole) return
  const bookingContain = document.querySelector('.booking-items__container')
  if (!bookingContain) return

  gsap.set(bookHole, { scale: 1 })

  CbGbpCancel.addEventListener("click", (e) => {
      let xDist = e.clientX - bookingContain.getBoundingClientRect().x + 4
      let yDist = e.clientY - bookingContain.getBoundingClientRect().y
      let cbgbp_cancel = gsap.timeline();

      gsap.set(bookHole, { left: xDist, top: yDist })
       
  cbgbp_cancel
             .set([".home-logo", ".menu-txt", ".beta__txt", ".currencies-list__contain", ".currencies-txt"], {opacity: 0, yPercent: 0 })
             .set([".home-inactive", ".beta-txt__contain", ".nav-btn__inner-wrap", ".currencies-list__mask"], { yPercent: 0 })
             .set(".nav__container", { display: "none" })
             .set(bookHole, {display: "block"})
             .set(".cta-txt", { autoAlpha: 1}, "<")
             .set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
             .set(cbBg, {autoAlpha: 0, scale: 1}, "<")
             .to([audioWrap, muzakTrack, cbGbpWrap, CategoryCb, bookCancelinner], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
             .fromTo(bookHole, { scale: 1 }, { duration: 1.2, scale: 2700, ease: "expoScale(1, 2700, power1.easeOut)" }, "-=0.2")
             .to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
             .set(CategoryCb, { x: -30, opacity: 0, display: "none" })
             .set([bookCancelinner, audioWrap, muzakTrack], { x: -30, opacity: 0 })
             .set(cbWrap, { display: "none" })
             .set(cbBtnsWrap, { display: "none" })
             .set(CbGbpCancel, { display: "none" })
             .set(cbGbpWrap, { opacity: 0, display: "none", x: -30 })
             .set(BookContain, { display: "none" })
             .set(bookHole, {display: "none", clearProps: "all"})
             .to([".nav__menu-wrapper", ".nav__logo-wrapper"], { delay: 2, display: "flex", duration: 0.001 })
             .to([".home-logo", ".menu-txt", ".beta__txt", ".currencies-list__contain", ".currencies-txt"], { yPercent: 0, duration: 0.55, autoAlpha: 1, ease: Power1.easeInOut })
             .to([".in--nav__btn", ".home-inactive", ".beta-txt__contain", ".nav-btn__inner-wrap", ".currencies-list__mask"], { yPercent: 0, duration:0.55, ease: Power1.easeInOut }, "<");

    });
})

// OPEN CB SEK
cbSekOpen.forEach(cbSekOp => {

    let ctaMask = cbSekOp.querySelector(".book-cta__mask"),
        ctaTxt = cbSekOp.querySelector(".cta-txt"),
        ctaCover = cbSekOp.querySelector(".cta-redact-cover"),
      
cbsek_open = gsap.timeline({ paused: true });

      cbsek_open.set(cbBg, { scale: 1, autoAlpha: 1 })
                .set(cursor, { display: "none" }, "<")
                .set(bookSuccessBtn, { display: "none" }, "<")
                .set(BookContain, { display: "flex" }, "<")
                .set(cbWrap, { display: "flex"}, "<")
                .set(cbBtnsWrap, { display: "block" }, "<")
                .set(CbSekCancel, { display: "flex" }, "<")
                .set(cbSekWrap, { display: "block" }, "<")
                .set(CategoryCb, { display: "block" }, "<")
                .set(ctaCover, { scaleX: 0 }, "<")
                .to(ctaMask, {filter:"invert(100%)", duration: 0.001}, "<")
                .to(cbBg, { scale: 12, transformOrigin: "50% 50%", ease: "power2.inOut", duration: 1.2 })
                .to(ctaCover, { delay: 0.2, scaleX: 1, transformOrigin: "0% 100%", duration: 6, ease: "power0.easeOut" })
                .to(ctaTxt, { autoAlpha: 0, duration: 0.001})
                .to(ctaCover, { scaleX: 0, transformOrigin: "100% 0%", duration: 0.3, ease: "linear" })
                .to(CategoryCb, { delay: 0.2, x: 0, opacity: 1, ease: "expo.out", duration: 1.2 })
                .to(bookCancelinner, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
                .fromTo(cbSekWrap, { x: -30, opacity: 0 }, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
                .to([audioWrap, muzakTrack], { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
                .to(audioGraph, {clearProps: 'x'})
                .set(audioGraph, {x: 20.8})
                .set(ctaMask, {filter:"invert(0%)"});
       
  cbSekOp.addEventListener('click', () => {   
    cbsek_open.play(0);
  });
})

// CLOSE CB SEK
CbSekCancel.forEach((CbSekCancel) => {
  if (!CbSekCancel) return
  const bookHole = document.querySelector('.hole.is--book-close')
  if (!bookHole) return
  const bookingContain = document.querySelector('.booking-items__container')
  if (!bookingContain) return

  gsap.set(bookHole, { scale: 1 })

  CbSekCancel.addEventListener("click", (e) => {
      let xDist = e.clientX - bookingContain.getBoundingClientRect().x + 4
      let yDist = e.clientY - bookingContain.getBoundingClientRect().y
      let cbsek_cancel = gsap.timeline();

      gsap.set(bookHole, { left: xDist, top: yDist })
       
  cbsek_cancel
             .set([".home-logo", ".menu-txt", ".beta__txt", ".currencies-list__contain", ".currencies-txt"], {opacity: 0, yPercent: 0 })
             .set([".home-inactive", ".beta-txt__contain", ".nav-btn__inner-wrap", ".currencies-list__mask"], { yPercent: 0 })
             .set(".nav__container", { display: "none" })
             .set(bookHole, {display: "block"})
             .set(".cta-txt", { autoAlpha: 1}, "<")
             .set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
             .set(cbBg, {autoAlpha: 0, scale: 1}, "<")
             .to([audioWrap, muzakTrack, cbSekWrap, CategoryCb, bookCancelinner], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
             .fromTo(bookHole, { scale: 1 }, { duration: 1.2, scale: 2700, ease: "expoScale(1, 2700, power1.easeOut)" }, "-=0.2")
             .to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
             .set(CategoryCb, { x: -30, opacity: 0, display: "none" })
             .set([bookCancelinner, audioWrap, muzakTrack], { x: -30, opacity: 0 })
             .set(cbWrap, { display: "none" })
             .set(cbBtnsWrap, { display: "none" })
             .set(CbSekCancel, { display: "none" })
             .set(cbSekWrap, { opacity: 0, display: "none", x: -30 })
             .set(BookContain, { display: "none" })
             .set(bookHole, {display: "none", clearProps: "all"})
             .to([".nav__menu-wrapper", ".nav__logo-wrapper"], { delay: 2, display: "flex", duration: 0.001 })
             .to([".home-logo", ".menu-txt", ".beta__txt", ".currencies-list__contain", ".currencies-txt"], { yPercent: 0, duration: 0.55, autoAlpha: 1, ease: Power1.easeInOut })
             .to([".in--nav__btn", ".home-inactive", ".beta-txt__contain", ".nav-btn__inner-wrap", ".currencies-list__mask"], { yPercent: 0, duration:0.55, ease: Power1.easeInOut }, "<");

    });
})

// OPEN CB SGD
cbSgdOpen.forEach(cbSgdOp => {

    let ctaMask = cbSgdOp.querySelector(".book-cta__mask"),
        ctaTxt = cbSgdOp.querySelector(".cta-txt"),
        ctaCover = cbSgdOp.querySelector(".cta-redact-cover"),
      
cbsgd_open = gsap.timeline({ paused: true });

      cbsgd_open.set(cbBg, { scale: 1, autoAlpha: 1 })
                .set(cursor, { display: "none" }, "<")
                .set(bookSuccessBtn, { display: "none" }, "<")
                .set(BookContain, { display: "flex" }, "<")
                .set(cbWrap, { display: "flex"}, "<")
                .set(cbBtnsWrap, { display: "block" }, "<")
                .set(CbSgdCancel, { display: "flex" }, "<")
                .set(cbSgdWrap, { display: "block" }, "<")
                .set(CategoryCb, { display: "block" }, "<")
                .set(ctaCover, { scaleX: 0 }, "<")
                .to(ctaMask, {filter:"invert(100%)", duration: 0.001}, "<")
                .to(cbBg, { scale: 12, transformOrigin: "50% 50%", ease: "power2.inOut", duration: 1.2 })
                .to(ctaCover, { delay: 0.2, scaleX: 1, transformOrigin: "0% 100%", duration: 6, ease: "power0.easeOut" })
                .to(ctaTxt, { autoAlpha: 0, duration: 0.001})
                .to(ctaCover, { scaleX: 0, transformOrigin: "100% 0%", duration: 0.3, ease: "linear" })
                .to(CategoryCb, { delay: 0.2, x: 0, opacity: 1, ease: "expo.out", duration: 1.2 })
                .to(bookCancelinner, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
                .fromTo(cbSgdWrap, { x: -30, opacity: 0 }, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
                .to([audioWrap, muzakTrack], { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
                .to(audioGraph, {clearProps: 'x'})
                .set(audioGraph, {x: 20.8})
                .set(ctaMask, {filter:"invert(0%)"});
       
  cbSgdOp.addEventListener('click', () => {   
    cbsgd_open.play(0);
  });
})

// CLOSE CB SGD
CbSgdCancel.forEach((CbSgdCancel) => {
  if (!CbSgdCancel) return
  const bookHole = document.querySelector('.hole.is--book-close')
  if (!bookHole) return
  const bookingContain = document.querySelector('.booking-items__container')
  if (!bookingContain) return

  gsap.set(bookHole, { scale: 1 })

  CbSgdCancel.addEventListener("click", (e) => {
      let xDist = e.clientX - bookingContain.getBoundingClientRect().x + 4
      let yDist = e.clientY - bookingContain.getBoundingClientRect().y
      let cbsgd_cancel = gsap.timeline();

      gsap.set(bookHole, { left: xDist, top: yDist })
       
  cbsgd_cancel
             .set([".home-logo", ".menu-txt", ".beta__txt", ".currencies-list__contain", ".currencies-txt"], {opacity: 0, yPercent: 0 })
             .set([".home-inactive", ".beta-txt__contain", ".nav-btn__inner-wrap", ".currencies-list__mask"], { yPercent: 0 })
             .set(".nav__container", { display: "none" })
             .set(bookHole, {display: "block"})
             .set(".cta-txt", { autoAlpha: 1}, "<")
             .set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
             .set(cbBg, {autoAlpha: 0, scale: 1}, "<")
             .to([audioWrap, muzakTrack, cbSgdWrap, CategoryCb, bookCancelinner], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
             .fromTo(bookHole, { scale: 1 }, { duration: 1.2, scale: 2700, ease: "expoScale(1, 2700, power1.easeOut)" }, "-=0.2")
             .to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
             .set(CategoryCb, { x: -30, opacity: 0, display: "none" })
             .set([bookCancelinner, audioWrap, muzakTrack], { x: -30, opacity: 0 })
             .set(cbWrap, { display: "none" })
             .set(cbBtnsWrap, { display: "none" })
             .set(CbSgdCancel, { display: "none" })
             .set(cbSgdWrap, { opacity: 0, display: "none", x: -30 })
             .set(BookContain, { display: "none" })
             .set(bookHole, {display: "none", clearProps: "all"})
             .to([".nav__menu-wrapper", ".nav__logo-wrapper"], { delay: 2, display: "flex", duration: 0.001 })
             .to([".home-logo", ".menu-txt", ".beta__txt", ".currencies-list__contain", ".currencies-txt"], { yPercent: 0, duration: 0.55, autoAlpha: 1, ease: Power1.easeInOut })
             .to([".in--nav__btn", ".home-inactive", ".beta-txt__contain", ".nav-btn__inner-wrap", ".currencies-list__mask"], { yPercent: 0, duration:0.55, ease: Power1.easeInOut }, "<");
    });
})

// CLOSE CB SUCCESS - ALL CURRENCIES
cbExitSuccess.forEach((cbExitSuccess) => {
  if (!cbExitSuccess) return
  const bookHole = document.querySelector('.hole.is--book-close')
  if (!bookHole) return
  const bookingContain = document.querySelector('.booking-items__container')
  if (!bookingContain) return

  gsap.set(bookHole, { scale: 1 })

  cbExitSuccess.addEventListener("click", (e) => {
      let xDist = e.clientX - bookingContain.getBoundingClientRect().x + 4
      let yDist = e.clientY - bookingContain.getBoundingClientRect().y
      let cb_cancel_success = gsap.timeline();

      gsap.set(bookHole, { left: xDist, top: yDist })
         
  cb_cancel_success
           .set([".home-logo", ".menu-txt", ".beta__txt", ".currencies-list__contain", ".currencies-txt"], {opacity: 0, yPercent: 0 })
           .set([".home-inactive", ".beta-txt__contain", ".nav-btn__inner-wrap", ".currencies-list__mask"], { yPercent: 0 })
           .set([".nav__container", '.nav__currency-wrap'], { display: "none" })
           .set(bookHole, {display: "block"})
           .set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
           .set(cbBg, {autoAlpha: 0, scale: 1}, "<")
           .set(".cb-booked__cover", { display: "block" }, "<")
           .set([".rebs-btn__covered", ".rebm-btn__covered", ".rebxxl-btn__covered"], { display: "flex" }, "<")
           .to([".cb-success-marquee__wrap", ".cb-success-img__wrap"], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6})
           .to([CategoryCb, bookCancelinner, audioWrap, muzakTrack], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 }, "<")
           .to([cbEurWrap, cbUsdWrap, cbGbpWrap, cbSgdWrap, cbSekWrap], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 }, "<")
           .fromTo(bookHole, { scale: 1 }, { duration: 1.2, scale: 2700, ease: "expoScale(1, 2700, power1.easeOut)", onComplete() { sessionStorage.setItem("cbSuccessPlayed", true) } }, "-=0.2")
           .to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
           .to([".nav__menu-wrapper", ".nav__logo-wrapper"], { delay: 2, display: "flex", duration: 0.001 })
           .to([".home-logo", ".menu-txt", ".beta__txt", ".currencies-list__contain", ".currencies-txt"], { yPercent: 0, duration: 0.55, autoAlpha: 1, ease: Power1.easeInOut })
           .to([".in--nav__btn", ".home-inactive", ".beta-txt__contain", ".nav-btn__inner-wrap", ".currencies-list__mask"], { yPercent: 0, duration:0.55, ease: Power1.easeInOut }, "<")
           .set(CategoryCb, { x: -30, opacity: 0, display: "none" })
           .set([audioWrap, muzakTrack, bookCancelinner], { x: -30, opacity: 0 })
           .set(cbWrap, { display: "none" })
           .set(cbBtnsWrap, { display: "none" })
           .set([CbEurCancel, CbUsdCancel, CbGbpCancel, CbSgdCancel, CbSekCancel, ".cb-eur__cta", ".cb-usd__cta", ".cb-gbp__cta", ".cb-sek__cta", ".cb-sgd__cta"], { display: "none" })
           .set([cbEurWrap, cbUsdWrap, cbGbpWrap, cbSgdWrap, cbSekWrap], { opacity: 0, display: "none", x: -30 })
           .set(BookContain, { display: "none" })
           .set(bookHole, {display: "none", clearProps: "all"})
           .set([".ready-fini__wrap", ".reb-success-marquee__wrap", ".reb-success-img__wrap", ".cb-success-marquee__wrap", ".cb-success-img__wrap", ".home-mrebel__qa-pong-wrap"], { yPercent: 101, opacity: 0 })
           .set([".reb-success-items__contain", ".cb-success-items__contain", ".q-a-pong__mask", ".ready-fini__mask"], { display: "none" });

      });
  })

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
  .to([audioWrap, muzakTrack], { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .to(audioGraph, {clearProps: 'x'})
  .set(audioGraph, {x: 20.8})
  .set(ctaMask, {filter:"invert(0%)" });
       
   rebsEurOp.addEventListener('click', () => {   
    rebseur_open.play(0);
  });
})

// CLOSE REB S EUR
RebsEurCancel.forEach((RebsEurCancel) => {
  if (!RebsEurCancel) return
  const bookHole = document.querySelector('.hole.is--book-close')
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
.set([".home-logo", ".menu-txt", ".beta__txt", ".currencies-list__contain", ".currencies-txt"], {opacity: 0, yPercent: 0 })
.set([".home-inactive", ".beta-txt__contain", ".nav-btn__inner-wrap", ".currencies-list__mask"], { yPercent: 0 })
.set(".nav__container", { display: "none" })
.set(bookHole, {display: "block"})
.set(".cta-txt", { autoAlpha: 1}, "<")
.set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
.set(rebsBg, {autoAlpha: 0, scale: 1}, "<")
.to([audioWrap, muzakTrack, rebsEurWrap, CategoryReb, bookCancelinner], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
.fromTo(bookHole, { scale: 1 }, { duration: 1.2, scale: 2700, ease: "expoScale(1, 2700, power1.easeOut)" }, "-=0.2")
.to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
.set(CategoryReb, { x: -30, opacity: 0, display: "none" })
.set([bookCancelinner, audioWrap, muzakTrack], { x: -30, opacity: 0 })
.set(rebsWrap, { display: "none" })
.set(rebsBtnsWrap, { display: "none" })
.set(RebsEurCancel, { display: "none" })
.set(rebsEurWrap, { opacity: 0, display: "none", x: -30 })
.set(BookContain, { display: "none" })
.set(bookHole, {display: "none", clearProps: "all"})
.to([".nav__menu-wrapper", ".nav__logo-wrapper"], { delay: 2, display: "flex", duration: 0.001 })
.to([".home-logo", ".menu-txt", ".beta__txt", ".currencies-list__contain", ".currencies-txt"], { yPercent: 0, duration: 0.55, autoAlpha: 1, ease: Power1.easeInOut })
.to([".in--nav__btn", ".home-inactive", ".beta-txt__contain", ".nav-btn__inner-wrap", ".currencies-list__mask"], { yPercent: 0, duration:0.55, ease: Power1.easeInOut }, "<");

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
  .to([audioWrap, muzakTrack], { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .to(audioGraph, {clearProps: 'x'})
  .set(audioGraph, {x: 20.8})
  .set(ctaMask, {filter:"invert(0%)" });
       
   rebsUsdOp.addEventListener('click', () => {   
    rebsusd_open.play(0);
  });
})

// CLOSE REB S USD
RebsUsdCancel.forEach((RebsUsdCancel) => {
  if (!RebsUsdCancel) return
  const bookHole = document.querySelector('.hole.is--book-close')
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
.set([".home-logo", ".menu-txt", ".beta__txt", ".currencies-list__contain", ".currencies-txt"], {opacity: 0, yPercent: 0 })
.set([".home-inactive", ".beta-txt__contain", ".nav-btn__inner-wrap", ".currencies-list__mask"], { yPercent: 0 })
.set(".nav__container", { display: "none" })
.set(bookHole, {display: "block"})
.set(".cta-txt", { autoAlpha: 1}, "<")
.set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
.set(rebsBg, {autoAlpha: 0, scale: 1}, "<")
.to([audioWrap, muzakTrack, rebsUsdWrap, CategoryReb, bookCancelinner], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
.fromTo(bookHole, { scale: 1 }, { duration: 1.2, scale: 2700, ease: "expoScale(1, 2700, power1.easeOut)" }, "-=0.2")
.to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
.set(CategoryReb, { x: -30, opacity: 0, display: "none" })
.set([bookCancelinner, audioWrap, muzakTrack], { x: -30, opacity: 0 })
.set(rebsWrap, { display: "none" })
.set(rebsBtnsWrap, { display: "none" })
.set(RebsUsdCancel, { display: "none" })
.set(rebsUsdWrap, { opacity: 0, display: "none", x: -30 })
.set(BookContain, { display: "none" })
.set(bookHole, {display: "none", clearProps: "all"})
.to([".nav__menu-wrapper", ".nav__logo-wrapper"], { delay: 2, display: "flex", duration: 0.001 })
.to([".home-logo", ".menu-txt", ".beta__txt", ".currencies-list__contain", ".currencies-txt"], { yPercent: 0, duration: 0.55, autoAlpha: 1, ease: Power1.easeInOut })
.to([".in--nav__btn", ".home-inactive", ".beta-txt__contain", ".nav-btn__inner-wrap", ".currencies-list__mask"], { yPercent: 0, duration:0.55, ease: Power1.easeInOut }, "<");

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
  .to([audioWrap, muzakTrack], { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .to(audioGraph, {clearProps: 'x'})
  .set(audioGraph, {x: 20.8})
  .set(ctaMask, {filter:"invert(0%)" });
       
   rebsGbpOp.addEventListener('click', () => {   
    rebsgbp_open.play(0);
  });
})

// CLOSE REB S GBP
RebsGbpCancel.forEach((RebsGbpCancel) => {
  if (!RebsGbpCancel) return
  const bookHole = document.querySelector('.hole.is--book-close')
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
.set([".home-logo", ".menu-txt", ".beta__txt", ".currencies-list__contain", ".currencies-txt"], {opacity: 0, yPercent: 0 })
.set([".home-inactive", ".beta-txt__contain", ".nav-btn__inner-wrap", ".currencies-list__mask"], { yPercent: 0 })
.set(".nav__container", { display: "none" })
.set(bookHole, {display: "block"})
.set(".cta-txt", { autoAlpha: 1}, "<")
.set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
.set(rebsBg, {autoAlpha: 0, scale: 1}, "<")
.to([audioWrap, muzakTrack, rebsGbpWrap, CategoryReb, bookCancelinner], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
.fromTo(bookHole, { scale: 1 }, { duration: 1.2, scale: 2700, ease: "expoScale(1, 2700, power1.easeOut)" }, "-=0.2")
.to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
.set(CategoryReb, { x: -30, opacity: 0, display: "none" })
.set([bookCancelinner, audioWrap, muzakTrack], { x: -30, opacity: 0 })
.set(rebsWrap, { display: "none" })
.set(rebsBtnsWrap, { display: "none" })
.set(RebsGbpCancel, { display: "none" })
.set(rebsGbpWrap, { opacity: 0, display: "none", x: -30 })
.set(BookContain, { display: "none" })
.set(bookHole, {display: "none", clearProps: "all"})
.to([".nav__menu-wrapper", ".nav__logo-wrapper"], { delay: 2, display: "flex", duration: 0.001 })
.to([".home-logo", ".menu-txt", ".beta__txt", ".currencies-list__contain", ".currencies-txt"], { yPercent: 0, duration: 0.55, autoAlpha: 1, ease: Power1.easeInOut })
.to([".in--nav__btn", ".home-inactive", ".beta-txt__contain", ".nav-btn__inner-wrap", ".currencies-list__mask"], { yPercent: 0, duration:0.55, ease: Power1.easeInOut }, "<");

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
  .to([audioWrap, muzakTrack], { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .to(audioGraph, {clearProps: 'x'})
  .set(audioGraph, {x: 20.8})
  .set(ctaMask, {filter:"invert(0%)" });
       
   rebsSekOp.addEventListener('click', () => {   
    rebssek_open.play(0);
  });
})

// CLOSE REB S SEK
RebsSekCancel.forEach((RebsSekCancel) => {
  if (!RebsSekCancel) return
  const bookHole = document.querySelector('.hole.is--book-close')
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
.set([".home-logo", ".menu-txt", ".beta__txt", ".currencies-list__contain", ".currencies-txt"], {opacity: 0, yPercent: 0 })
.set([".home-inactive", ".beta-txt__contain", ".nav-btn__inner-wrap", ".currencies-list__mask"], { yPercent: 0 })
.set(".nav__container", { display: "none" })
.set(bookHole, {display: "block"})
.set(".cta-txt", { autoAlpha: 1}, "<")
.set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
.set(rebsBg, {autoAlpha: 0, scale: 1}, "<")
.to([audioWrap, muzakTrack, rebsSekWrap, CategoryReb, bookCancelinner], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
.fromTo(bookHole, { scale: 1 }, { duration: 1.2, scale: 2700, ease: "expoScale(1, 2700, power1.easeOut)" }, "-=0.2")
.to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
.set(CategoryReb, { x: -30, opacity: 0, display: "none" })
.set([bookCancelinner, audioWrap, muzakTrack], { x: -30, opacity: 0 })
.set(rebsWrap, { display: "none" })
.set(rebsBtnsWrap, { display: "none" })
.set(RebsSekCancel, { display: "none" })
.set(rebsSekWrap, { opacity: 0, display: "none", x: -30 })
.set(BookContain, { display: "none" })
.set(bookHole, {display: "none", clearProps: "all"})
.to([".nav__menu-wrapper", ".nav__logo-wrapper"], { delay: 2, display: "flex", duration: 0.001 })
.to([".home-logo", ".menu-txt", ".beta__txt", ".currencies-list__contain", ".currencies-txt"], { yPercent: 0, duration: 0.55, autoAlpha: 1, ease: Power1.easeInOut })
.to([".in--nav__btn", ".home-inactive", ".beta-txt__contain", ".nav-btn__inner-wrap", ".currencies-list__mask"], { yPercent: 0, duration:0.55, ease: Power1.easeInOut }, "<");

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
  .to([audioWrap, muzakTrack], { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .to(audioGraph, {clearProps: 'x'})
  .set(audioGraph, {x: 20.8})
  .set(ctaMask, {filter:"invert(0%)" });
       
   rebsSgdOp.addEventListener('click', () => {   
    rebssgd_open.play(0);
  });
})

// CLOSE REB S SGD
RebsSgdCancel.forEach((RebsSgdCancel) => {
  if (!RebsSgdCancel) return
  const bookHole = document.querySelector('.hole.is--book-close')
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
.set([".home-logo", ".menu-txt", ".beta__txt", ".currencies-list__contain", ".currencies-txt"], {opacity: 0, yPercent: 0 })
.set([".home-inactive", ".beta-txt__contain", ".nav-btn__inner-wrap", ".currencies-list__mask"], { yPercent: 0 })
.set(".nav__container", { display: "none" })
.set(bookHole, {display: "block"})
.set(".cta-txt", { autoAlpha: 1}, "<")
.set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
.set(rebsBg, {autoAlpha: 0, scale: 1}, "<")
.to([audioWrap, muzakTrack, rebsSgdWrap, CategoryReb, bookCancelinner], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
.fromTo(bookHole, { scale: 1 }, { duration: 1.2, scale: 2700, ease: "expoScale(1, 2700, power1.easeOut)" }, "-=0.2")
.to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
.set(CategoryReb, { x: -30, opacity: 0, display: "none" })
.set([bookCancelinner, audioWrap, muzakTrack], { x: -30, opacity: 0 })
.set(rebsWrap, { display: "none" })
.set(rebsBtnsWrap, { display: "none" })
.set(RebsSgdCancel, { display: "none" })
.set(rebsSgdWrap, { opacity: 0, display: "none", x: -30 })
.set(BookContain, { display: "none" })
.set(bookHole, {display: "none", clearProps: "all"})
.to([".nav__menu-wrapper", ".nav__logo-wrapper"], { delay: 2, display: "flex", duration: 0.001 })
.to([".home-logo", ".menu-txt", ".beta__txt", ".currencies-list__contain", ".currencies-txt"], { yPercent: 0, duration: 0.55, autoAlpha: 1, ease: Power1.easeInOut })
.to([".in--nav__btn", ".home-inactive", ".beta-txt__contain", ".nav-btn__inner-wrap", ".currencies-list__mask"], { yPercent: 0, duration:0.55, ease: Power1.easeInOut }, "<");

    });
})

// CLOSE REB S SUCCESS - ALL CURRENCIES

rebSexitSuccess.forEach((rebSexitSuccess) => {
  if (!rebSexitSuccess) return
  const bookHole = document.querySelector('.hole.is--book-close')
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
             .set([".home-logo", ".menu-txt", ".beta__txt", ".currencies-list__contain", ".currencies-txt"], {opacity: 0, yPercent: 0 })
             .set([".home-inactive", ".beta-txt__contain", ".nav-btn__inner-wrap", ".currencies-list__mask"], { yPercent: 0 })
             .set([".nav__container", '.nav__currency-wrap'], { display: "none" })
             .set(bookHole, {display: "block"})
             .set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
             .set(rebsBg, {autoAlpha: 0, scale: 1}, "<")
             .set(".rebs-booked__cover", { display: "block" }, "<")
             .set([".cb-btn__covered", ".rebm-btn__covered", ".rebxxl-btn__covered"], { display: "flex" }, "<")
             .to([".reb-success-marquee__wrap", ".reb-success-img__wrap"], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
             .to([CategoryReb, bookCancelinner, audioWrap, muzakTrack], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 }, "<")
             .to([rebsEurWrap, rebsUsdWrap, rebsGbpWrap, rebsSgdWrap, rebsSekWrap], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 }, "<")
             .fromTo(bookHole, { scale: 1 }, { duration: 1.2, scale: 2700, ease: "expoScale(1, 2700, power1.easeOut)", onComplete() { sessionStorage.setItem("rebsSuccessPlayed", true) } }, "-=0.2")
             .to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
             .to([".nav__menu-wrapper", ".nav__logo-wrapper"], { delay: 2, display: "flex", duration: 0.001 })
             .to([".home-logo", ".menu-txt", ".beta__txt", ".currencies-list__contain", ".currencies-txt"], { yPercent: 0, duration: 0.55, autoAlpha: 1, ease: Power1.easeInOut })
             .to([".in--nav__btn", ".home-inactive", ".beta-txt__contain", ".nav-btn__inner-wrap", ".currencies-list__mask"], { yPercent: 0, duration:0.55, ease: Power1.easeInOut }, "<")
             .set(CategoryReb, { x: -30, opacity: 0, display: "none" })
             .set([audioWrap, muzakTrack, bookCancelinner], { x: -30, opacity: 0 })
             .set(rebsWrap, { display: "none" })
             .set(rebsBtnsWrap, { display: "none" })
             .set([RebsEurCancel, RebsUsdCancel, RebsGbpCancel, RebsSgdCancel, RebsSekCancel], { display: "none" })
             .set([rebsEurWrap, rebsUsdWrap, rebsGbpWrap, rebsSgdWrap, rebsSekWrap], { opacity: 0, display: "none", x: -30 })
             .set(BookContain, { display: "none" })
             .set(bookHole, {display: "none", clearProps: "all"})
             .set([".ready-fini__wrap", ".reb-success-marquee__wrap", ".reb-success-img__wrap", ".cb-success-marquee__wrap", ".cb-success-img__wrap", ".home-mrebel__qa-pong-wrap"], { yPercent: 101, opacity: 0 })
             .set([".reb-success-items__contain", ".cb-success-items__contain", ".q-a-pong__mask", ".ready-fini__mask"], { display: "none" });
    
        });
    })
//----------------------- BOOK REB M - BEGIN -----------------------//

// REB M CLOSE VARS
var rebmBtnsWrap = gsap.utils.toArray(".rebm-btns__wrap");
var RebmEurCancel = gsap.utils.toArray(".rebm-eur-cancel");
var RebmUsdCancel = gsap.utils.toArray(".rebm-usd-cancel");
var RebmGbpCancel = gsap.utils.toArray(".rebm-gbp-cancel");
var RebmSekCancel = gsap.utils.toArray(".rebm-sek-cancel");
var RebmSgdCancel = gsap.utils.toArray(".rebm-sgd-cancel");
let rebMexitSuccess = gsap.utils.toArray(".rebm-exit__success");

// REB M OPEN VARS
var rebmEurOpen = gsap.utils.toArray('.reb-m-eur__cta');
var rebmEurWrap = gsap.utils.toArray('.reb-m-eur__booking-wrap');
var rebmUsdOpen = gsap.utils.toArray('.reb-m-usd__cta');
var rebmUsdWrap = gsap.utils.toArray('.reb-m-usd__booking-wrap');
var rebmGbpOpen = gsap.utils.toArray('.reb-m-gbp__cta');
var rebmGbpWrap = gsap.utils.toArray('.reb-m-gbp__booking-wrap');
var rebmSekOpen = gsap.utils.toArray('.reb-m-sek__cta');
var rebmSekWrap = gsap.utils.toArray('.reb-m-sek__booking-wrap');
var rebmSgdOpen = gsap.utils.toArray('.reb-m-sgd__cta');
var rebmSgdWrap = gsap.utils.toArray('.reb-m-sgd__booking-wrap');

// GSAP SET REB M ALL CURRENCIES
gsap.set([rebmEurWrap, rebmUsdWrap, rebmGbpWrap, rebmSekWrap, rebmSgdWrap], { x: -30, opacity: 0, display: "none"  });
gsap.set([RebmEurCancel, RebmUsdCancel, RebmGbpCancel, RebmSekCancel, RebmSgdCancel, rebmBtnsWrap], { display: "none" });

// OPEN REB M EUR
rebmEurOpen.forEach(rebmEurOp => {

    let ctaMask = rebmEurOp.querySelector(".book-cta__mask"),
        ctaTxt = rebmEurOp.querySelector(".cta-txt"),
        ctaCover = rebmEurOp.querySelector(".cta-redact-cover"),
    
 rebmeur_open = gsap.timeline({ paused: true });

  rebmeur_open
  .set(rebmBg, { scale: 1, autoAlpha: 1 })
  .set(cursor, { display: "none" }, "<")
  .set(bookSuccessBtn, { display: "none" }, "<")
  .set(BookContain, { display: "flex" }, "<")
  .set(rebmWrap, { display: "flex"}, "<")
  .set(rebmBtnsWrap, { display: "block" }, "<")
  .set(RebmEurCancel, { display: "flex" }, "<")
  .set(rebmEurWrap, { display: "block" }, "<")
  .set(CategoryReb, { display: "block" }, "<")
  .set(ctaCover, { scaleX: 0 }, "<")
  .to(ctaMask, {filter:"invert(100%)", duration: 0.001}, "<")
  .to(rebmBg, { scale: 12, transformOrigin: "50% 50%", ease: "power2.inOut", duration: 1.2 })
  .to(ctaCover, { delay: 0.2, scaleX: 1, transformOrigin: "0% 100%", duration: 6, ease: "power0.easeOut" })
  .to(ctaTxt, { autoAlpha: 0, duration: 0.001})
  .to(ctaCover, { scaleX: 0, transformOrigin: "100% 0%", duration: 0.3, ease: "linear" })
  .to(CategoryReb, { delay: 0.2, x: 0, opacity: 1, ease: "expo.out", duration: 1.2 })
  .to(bookCancelinner, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .fromTo(rebmEurWrap, { x: -30, opacity: 0 }, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .to([audioWrap, muzakTrack], { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .to(audioGraph, {clearProps: 'x'})
  .set(audioGraph, {x: 20.8})
  .set(ctaMask, {filter:"invert(0%)" });
       
   rebmEurOp.addEventListener('click', () => {   
    rebmeur_open.play(0);
  });
})

// CLOSE REB M EUR
RebmEurCancel.forEach((RebmEurCancel) => {
  if (!RebmEurCancel) return
  const bookHole = document.querySelector('.hole.is--book-close')
  if (!bookHole) return
  const bookingContain = document.querySelector('.booking-items__container')
  if (!bookingContain) return

  gsap.set(bookHole, { scale: 1 })

  RebmEurCancel.addEventListener("click", (e) => {
      let xDist = e.clientX - bookingContain.getBoundingClientRect().x + 4
      let yDist = e.clientY - bookingContain.getBoundingClientRect().y
      let rebmeur_cancel = gsap.timeline();

      gsap.set(bookHole, { left: xDist, top: yDist })
    
rebmeur_cancel
.set([".home-logo", ".menu-txt", ".beta__txt", ".currencies-list__contain", ".currencies-txt"], {opacity: 0, yPercent: 0 })
.set([".home-inactive", ".beta-txt__contain", ".nav-btn__inner-wrap", ".currencies-list__mask"], { yPercent: 0 })
.set(".nav__container", { display: "none" })
.set(bookHole, {display: "block"})
.set(".cta-txt", { autoAlpha: 1}, "<")
.set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
.set(rebmBg, {autoAlpha: 0, scale: 1}, "<")
.to([audioWrap, muzakTrack, rebmEurWrap, CategoryReb, bookCancelinner], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
.fromTo(bookHole, { scale: 1 }, { duration: 1.2, scale: 2700, ease: "expoScale(1, 2700, power1.easeOut)" }, "-=0.2")
.to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
.set(CategoryReb, { x: -30, opacity: 0, display: "none" })
.set([bookCancelinner, audioWrap, muzakTrack], { x: -30, opacity: 0 })
.set(rebmWrap, { display: "none" })
.set(rebmBtnsWrap, { display: "none" })
.set(RebmEurCancel, { display: "none" })
.set(rebmEurWrap, { opacity: 0, display: "none", x: -30 })
.set(BookContain, { display: "none" })
.set(bookHole, {display: "none", clearProps: "all"})
.to([".nav__menu-wrapper", ".nav__logo-wrapper"], { delay: 2, display: "flex", duration: 0.001 })
.to([".home-logo", ".menu-txt", ".beta__txt", ".currencies-list__contain", ".currencies-txt"], { yPercent: 0, duration: 0.55, autoAlpha: 1, ease: Power1.easeInOut })
.to([".in--nav__btn", ".home-inactive", ".beta-txt__contain", ".nav-btn__inner-wrap", ".currencies-list__mask"], { yPercent: 0, duration:0.55, ease: Power1.easeInOut }, "<");

    });
})

// OPEN REB M USD
rebmUsdOpen.forEach(rebmUsdOp => {

    let ctaMask = rebmUsdOp.querySelector(".book-cta__mask"),
        ctaTxt = rebmUsdOp.querySelector(".cta-txt"),
        ctaCover = rebmUsdOp.querySelector(".cta-redact-cover"),
    
 rebmusd_open = gsap.timeline({ paused: true });

  rebmusd_open
  .set(rebmBg, { scale: 1, autoAlpha: 1 })
  .set(cursor, { display: "none" }, "<")
  .set(bookSuccessBtn, { display: "none" }, "<")
  .set(BookContain, { display: "flex" }, "<")
  .set(rebmWrap, { display: "flex"}, "<")
  .set(rebmBtnsWrap, { display: "block" }, "<")
  .set(RebmUsdCancel, { display: "flex" }, "<")
  .set(rebmUsdWrap, { display: "block" }, "<")
  .set(CategoryReb, { display: "block" }, "<")
  .set(ctaCover, { scaleX: 0 }, "<")
  .to(ctaMask, {filter:"invert(100%)", duration: 0.001}, "<")
  .to(rebmBg, { scale: 12, transformOrigin: "50% 50%", ease: "power2.inOut", duration: 1.2 })
  .to(ctaCover, { delay: 0.2, scaleX: 1, transformOrigin: "0% 100%", duration: 6, ease: "power0.easeOut" })
  .to(ctaTxt, { autoAlpha: 0, duration: 0.001})
  .to(ctaCover, { scaleX: 0, transformOrigin: "100% 0%", duration: 0.3, ease: "linear" })
  .to(CategoryReb, { delay: 0.2, x: 0, opacity: 1, ease: "expo.out", duration: 1.2 })
  .to(bookCancelinner, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .fromTo(rebmUsdWrap, { x: -30, opacity: 0 }, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .to([audioWrap, muzakTrack], { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .to(audioGraph, {clearProps: 'x'})
  .set(audioGraph, {x: 20.8})
  .set(ctaMask, {filter:"invert(0%)" });
       
   rebmUsdOp.addEventListener('click', () => {   
    rebmusd_open.play(0);
  });
})

// CLOSE REB M USD
RebmUsdCancel.forEach((RebmUsdCancel) => {
  if (!RebmUsdCancel) return
  const bookHole = document.querySelector('.hole.is--book-close')
  if (!bookHole) return
  const bookingContain = document.querySelector('.booking-items__container')
  if (!bookingContain) return

  gsap.set(bookHole, { scale: 1 })

  RebmUsdCancel.addEventListener("click", (e) => {
      let xDist = e.clientX - bookingContain.getBoundingClientRect().x + 4
      let yDist = e.clientY - bookingContain.getBoundingClientRect().y
      let rebmusd_cancel = gsap.timeline();

      gsap.set(bookHole, { left: xDist, top: yDist })
       
rebmusd_cancel
.set([".home-logo", ".menu-txt", ".beta__txt", ".currencies-list__contain", ".currencies-txt"], {opacity: 0, yPercent: 0 })
.set([".home-inactive", ".beta-txt__contain", ".nav-btn__inner-wrap", ".currencies-list__mask"], { yPercent: 0 })
.set(".nav__container", { display: "none" })
.set(bookHole, {display: "block"})
.set(".cta-txt", { autoAlpha: 1}, "<")
.set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
.set(rebmBg, {autoAlpha: 0, scale: 1}, "<")
.to([audioWrap, muzakTrack, rebmUsdWrap, CategoryReb, bookCancelinner], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
.fromTo(bookHole, { scale: 1 }, { duration: 1.2, scale: 2700, ease: "expoScale(1, 2700, power1.easeOut)" }, "-=0.2")
.to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
.set(CategoryReb, { x: -30, opacity: 0, display: "none" })
.set([bookCancelinner, audioWrap, muzakTrack], { x: -30, opacity: 0 })
.set(rebmWrap, { display: "none" })
.set(rebmBtnsWrap, { display: "none" })
.set(RebmUsdCancel, { display: "none" })
.set(rebmUsdWrap, { opacity: 0, display: "none", x: -30 })
.set(BookContain, { display: "none" })
.set(bookHole, {display: "none", clearProps: "all"})
.to([".nav__menu-wrapper", ".nav__logo-wrapper"], { delay: 2, display: "flex", duration: 0.001 })
.to([".home-logo", ".menu-txt", ".beta__txt", ".currencies-list__contain", ".currencies-txt"], { yPercent: 0, duration: 0.55, autoAlpha: 1, ease: Power1.easeInOut })
.to([".in--nav__btn", ".home-inactive", ".beta-txt__contain", ".nav-btn__inner-wrap", ".currencies-list__mask"], { yPercent: 0, duration:0.55, ease: Power1.easeInOut }, "<");

    });
})

// OPEN REB M GBP
rebmGbpOpen.forEach(rebmGbpOp => {

    let ctaMask = rebmGbpOp.querySelector(".book-cta__mask"),
        ctaTxt = rebmGbpOp.querySelector(".cta-txt"),
        ctaCover = rebmGbpOp.querySelector(".cta-redact-cover"),
    
 rebmgbp_open = gsap.timeline({ paused: true });

  rebmgbp_open
  .set(rebmBg, { scale: 1, autoAlpha: 1 })
  .set(cursor, { display: "none" }, "<")
  .set(bookSuccessBtn, { display: "none" }, "<")
  .set(BookContain, { display: "flex" }, "<")
  .set(rebmWrap, { display: "flex"}, "<")
  .set(rebmBtnsWrap, { display: "block" }, "<")
  .set(RebmGbpCancel, { display: "flex" }, "<")
  .set(rebmGbpWrap, { display: "block" }, "<")
  .set(CategoryReb, { display: "block" }, "<")
  .set(ctaCover, { scaleX: 0 }, "<")
  .to(ctaMask, {filter:"invert(100%)", duration: 0.001}, "<")
  .to(rebmBg, { scale: 12, transformOrigin: "50% 50%", ease: "power2.inOut", duration: 1.2 })
  .to(ctaCover, { delay: 0.2, scaleX: 1, transformOrigin: "0% 100%", duration: 6, ease: "power0.easeOut" })
  .to(ctaTxt, { autoAlpha: 0, duration: 0.001})
  .to(ctaCover, { scaleX: 0, transformOrigin: "100% 0%", duration: 0.3, ease: "linear" })
  .to(CategoryReb, { delay: 0.2, x: 0, opacity: 1, ease: "expo.out", duration: 1.2 })
  .to(bookCancelinner, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .fromTo(rebmGbpWrap, { x: -30, opacity: 0 }, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .to([audioWrap, muzakTrack], { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .to(audioGraph, {clearProps: 'x'})
  .set(audioGraph, {x: 20.8})
  .set(ctaMask, {filter:"invert(0%)" });
       
   rebmGbpOp.addEventListener('click', () => {   
    rebmgbp_open.play(0);
  });
})

// CLOSE REB M GBP
RebmGbpCancel.forEach((RebmGbpCancel) => {
  if (!RebmGbpCancel) return
  const bookHole = document.querySelector('.hole.is--book-close')
  if (!bookHole) return
  const bookingContain = document.querySelector('.booking-items__container')
  if (!bookingContain) return

  gsap.set(bookHole, { scale: 1 })

  RebmGbpCancel.addEventListener("click", (e) => {
      let xDist = e.clientX - bookingContain.getBoundingClientRect().x + 4
      let yDist = e.clientY - bookingContain.getBoundingClientRect().y
      let rebmgbp_cancel = gsap.timeline();

      gsap.set(bookHole, { left: xDist, top: yDist })
       
rebmgbp_cancel
.set([".home-logo", ".menu-txt", ".beta__txt", ".currencies-list__contain", ".currencies-txt"], {opacity: 0, yPercent: 0 })
.set([".home-inactive", ".beta-txt__contain", ".nav-btn__inner-wrap", ".currencies-list__mask"], { yPercent: 0 })
.set(".nav__container", { display: "none" })
.set(bookHole, {display: "block"})
.set(".cta-txt", { autoAlpha: 1}, "<")
.set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
.set(rebmBg, {autoAlpha: 0, scale: 1}, "<")
.to([audioWrap, muzakTrack, rebmGbpWrap, CategoryReb, bookCancelinner], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
.fromTo(bookHole, { scale: 1 }, { duration: 1.2, scale: 2700, ease: "expoScale(1, 2700, power1.easeOut)" }, "-=0.2")
.to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
.set(CategoryReb, { x: -30, opacity: 0, display: "none" })
.set([bookCancelinner, audioWrap, muzakTrack], { x: -30, opacity: 0 })
.set(rebmWrap, { display: "none" })
.set(rebmBtnsWrap, { display: "none" })
.set(RebmGbpCancel, { display: "none" })
.set(rebmGbpWrap, { opacity: 0, display: "none", x: -30 })
.set(BookContain, { display: "none" })
.set(bookHole, {display: "none", clearProps: "all"})
.to([".nav__menu-wrapper", ".nav__logo-wrapper"], { delay: 2, display: "flex", duration: 0.001 })
.to([".home-logo", ".menu-txt", ".beta__txt", ".currencies-list__contain", ".currencies-txt"], { yPercent: 0, duration: 0.55, autoAlpha: 1, ease: Power1.easeInOut })
.to([".in--nav__btn", ".home-inactive", ".beta-txt__contain", ".nav-btn__inner-wrap", ".currencies-list__mask"], { yPercent: 0, duration:0.55, ease: Power1.easeInOut }, "<");

    });
})

// OPEN REB M SEK
rebmSekOpen.forEach(rebmSekOp => {

    let ctaMask = rebmSekOp.querySelector(".book-cta__mask"),
        ctaTxt = rebmSekOp.querySelector(".cta-txt"),
        ctaCover = rebmSekOp.querySelector(".cta-redact-cover"),
    
 rebmsek_open = gsap.timeline({ paused: true });

  rebmsek_open
  .set(rebmBg, { scale: 1, autoAlpha: 1 })
  .set(cursor, { display: "none" }, "<")
  .set(bookSuccessBtn, { display: "none" }, "<")
  .set(BookContain, { display: "flex" }, "<")
  .set(rebmWrap, { display: "flex"}, "<")
  .set(rebmBtnsWrap, { display: "block" }, "<")
  .set(RebmSekCancel, { display: "flex" }, "<")
  .set(rebmSekWrap, { display: "block" }, "<")
  .set(CategoryReb, { display: "block" }, "<")
  .set(ctaCover, { scaleX: 0 }, "<")
  .to(ctaMask, {filter:"invert(100%)", duration: 0.001}, "<")
  .to(rebmBg, { scale: 12, transformOrigin: "50% 50%", ease: "power2.inOut", duration: 1.2 })
  .to(ctaCover, { delay: 0.2, scaleX: 1, transformOrigin: "0% 100%", duration: 6, ease: "power0.easeOut" })
  .to(ctaTxt, { autoAlpha: 0, duration: 0.001})
  .to(ctaCover, { scaleX: 0, transformOrigin: "100% 0%", duration: 0.3, ease: "linear" })
  .to(CategoryReb, { delay: 0.2, x: 0, opacity: 1, ease: "expo.out", duration: 1.2 })
  .to(bookCancelinner, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .fromTo(rebmSekWrap, { x: -30, opacity: 0 }, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .to([audioWrap, muzakTrack], { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .to(audioGraph, {clearProps: 'x'})
  .set(audioGraph, {x: 20.8})
  .set(ctaMask, {filter:"invert(0%)" });
       
   rebmSekOp.addEventListener('click', () => {   
    rebmsek_open.play(0);
  });
})

// CLOSE REB M SEK
RebmSekCancel.forEach((RebmSekCancel) => {
  if (!RebmSekCancel) return
  const bookHole = document.querySelector('.hole.is--book-close')
  if (!bookHole) return
  const bookingContain = document.querySelector('.booking-items__container')
  if (!bookingContain) return

  gsap.set(bookHole, { scale: 1 })

  RebmSekCancel.addEventListener("click", (e) => {
      let xDist = e.clientX - bookingContain.getBoundingClientRect().x + 4
      let yDist = e.clientY - bookingContain.getBoundingClientRect().y
      let rebmsek_cancel = gsap.timeline();

      gsap.set(bookHole, { left: xDist, top: yDist })
       
rebmsek_cancel
.set([".home-logo", ".menu-txt", ".beta__txt", ".currencies-list__contain", ".currencies-txt"], {opacity: 0, yPercent: 0 })
.set([".home-inactive", ".beta-txt__contain", ".nav-btn__inner-wrap", ".currencies-list__mask"], { yPercent: 0 })
.set(".nav__container", { display: "none" })
.set(bookHole, {display: "block"})
.set(".cta-txt", { autoAlpha: 1}, "<")
.set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
.set(rebmBg, {autoAlpha: 0, scale: 1}, "<")
.to([audioWrap, muzakTrack, rebmSekWrap, CategoryReb, bookCancelinner], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
.fromTo(bookHole, { scale: 1 }, { duration: 1.2, scale: 2700, ease: "expoScale(1, 2700, power1.easeOut)" }, "-=0.2")
.to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
.set(CategoryReb, { x: -30, opacity: 0, display: "none" })
.set([bookCancelinner, audioWrap, muzakTrack], { x: -30, opacity: 0 })
.set(rebmWrap, { display: "none" })
.set(rebmBtnsWrap, { display: "none" })
.set(RebmSekCancel, { display: "none" })
.set(rebmSekWrap, { opacity: 0, display: "none", x: -30 })
.set(BookContain, { display: "none" })
.set(bookHole, {display: "none", clearProps: "all"})
.to([".nav__menu-wrapper", ".nav__logo-wrapper"], { delay: 2, display: "flex", duration: 0.001 })
.to([".home-logo", ".menu-txt", ".beta__txt", ".currencies-list__contain", ".currencies-txt"], { yPercent: 0, duration: 0.55, autoAlpha: 1, ease: Power1.easeInOut })
.to([".in--nav__btn", ".home-inactive", ".beta-txt__contain", ".nav-btn__inner-wrap", ".currencies-list__mask"], { yPercent: 0, duration:0.55, ease: Power1.easeInOut }, "<");

    });
})

// OPEN REB M SGD
rebmSgdOpen.forEach(rebmSgdOp => {

    let ctaMask = rebmSgdOp.querySelector(".book-cta__mask"),
        ctaTxt = rebmSgdOp.querySelector(".cta-txt"),
        ctaCover = rebmSgdOp.querySelector(".cta-redact-cover"),
    
 rebmsgd_open = gsap.timeline({ paused: true });

  rebmsgd_open
  .set(rebmBg, { scale: 1, autoAlpha: 1 })
  .set(cursor, { display: "none" }, "<")
  .set(bookSuccessBtn, { display: "none" }, "<")
  .set(BookContain, { display: "flex" }, "<")
  .set(rebmWrap, { display: "flex"}, "<")
  .set(rebmBtnsWrap, { display: "block" }, "<")
  .set(RebmSgdCancel, { display: "flex" }, "<")
  .set(rebmSgdWrap, { display: "block" }, "<")
  .set(CategoryReb, { display: "block" }, "<")
  .set(ctaCover, { scaleX: 0 }, "<")
  .to(ctaMask, {filter:"invert(100%)", duration: 0.001}, "<")
  .to(rebmBg, { scale: 12, transformOrigin: "50% 50%", ease: "power2.inOut", duration: 1.2 })
  .to(ctaCover, { delay: 0.2, scaleX: 1, transformOrigin: "0% 100%", duration: 6, ease: "power0.easeOut" })
  .to(ctaTxt, { autoAlpha: 0, duration: 0.001})
  .to(ctaCover, { scaleX: 0, transformOrigin: "100% 0%", duration: 0.3, ease: "linear" })
  .to(CategoryReb, { delay: 0.2, x: 0, opacity: 1, ease: "expo.out", duration: 1.2 })
  .to(bookCancelinner, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .fromTo(rebmSgdWrap, { x: -30, opacity: 0 }, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .to([audioWrap, muzakTrack], { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
  .to(audioGraph, {clearProps: 'x'})
  .set(audioGraph, {x: 20.8})
  .set(ctaMask, {filter:"invert(0%)" });
       
   rebmSgdOp.addEventListener('click', () => {   
    rebmsgd_open.play(0);
  });
})

// CLOSE REB M SGD
RebmSgdCancel.forEach((RebmSgdCancel) => {
  if (!RebmSgdCancel) return
  const bookHole = document.querySelector('.hole.is--book-close')
  if (!bookHole) return
  const bookingContain = document.querySelector('.booking-items__container')
  if (!bookingContain) return

  gsap.set(bookHole, { scale: 1 })

  RebmSgdCancel.addEventListener("click", (e) => {
      let xDist = e.clientX - bookingContain.getBoundingClientRect().x + 4
      let yDist = e.clientY - bookingContain.getBoundingClientRect().y
      let rebmsgd_cancel = gsap.timeline();

      gsap.set(bookHole, { left: xDist, top: yDist })
       
rebmsgd_cancel
.set([".home-logo", ".menu-txt", ".beta__txt", ".currencies-list__contain", ".currencies-txt"], {opacity: 0, yPercent: 0 })
.set([".home-inactive", ".beta-txt__contain", ".nav-btn__inner-wrap", ".currencies-list__mask"], { yPercent: 0 })
.set(".nav__container", { display: "none" })
.set(bookHole, {display: "block"})
.set(".cta-txt", { autoAlpha: 1}, "<")
.set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
.set(rebmBg, {autoAlpha: 0, scale: 1}, "<")
.to([audioWrap, muzakTrack, rebmSgdWrap, CategoryReb, bookCancelinner], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
.fromTo(bookHole, { scale: 1 }, { duration: 1.2, scale: 2700, ease: "expoScale(1, 2700, power1.easeOut)" }, "-=0.2")
.to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
.set(CategoryReb, { x: -30, opacity: 0, display: "none" })
.set([bookCancelinner, audioWrap, muzakTrack], { x: -30, opacity: 0 })
.set(rebmWrap, { display: "none" })
.set(rebmBtnsWrap, { display: "none" })
.set(RebmSgdCancel, { display: "none" })
.set(rebmSgdWrap, { opacity: 0, display: "none", x: -30 })
.set(BookContain, { display: "none" })
.set(bookHole, {display: "none", clearProps: "all"})
.to([".nav__menu-wrapper", ".nav__logo-wrapper"], { delay: 2, display: "flex", duration: 0.001 })
.to([".home-logo", ".menu-txt", ".beta__txt", ".currencies-list__contain", ".currencies-txt"], { yPercent: 0, duration: 0.55, autoAlpha: 1, ease: Power1.easeInOut })
.to([".in--nav__btn", ".home-inactive", ".beta-txt__contain", ".nav-btn__inner-wrap", ".currencies-list__mask"], { yPercent: 0, duration:0.55, ease: Power1.easeInOut }, "<");

    });
})

// CLOSE REB M SUCCESS - ALL CURRENCIES

rebMexitSuccess.forEach((rebMexitSuccess) => {
  if (!rebMexitSuccess) return
  const bookHole = document.querySelector('.hole.is--book-close')
  if (!bookHole) return
  const bookingContain = document.querySelector('.booking-items__container')
  if (!bookingContain) return

  gsap.set(bookHole, { scale: 1 })

  rebMexitSuccess.addEventListener("click", (e) => {
      let xDist = e.clientX - bookingContain.getBoundingClientRect().x + 4
      let yDist = e.clientY - bookingContain.getBoundingClientRect().y
      let rebm_cancel_success = gsap.timeline();

      gsap.set(bookHole, { left: xDist, top: yDist })
           
    rebm_cancel_success
             .set([".home-logo", ".menu-txt", ".beta__txt", ".currencies-list__contain", ".currencies-txt"], {opacity: 0, yPercent: 0 })
             .set([".home-inactive", ".beta-txt__contain", ".nav-btn__inner-wrap", ".currencies-list__mask"], { yPercent: 0 })
             .set([".nav__container", '.nav__currency-wrap'], { display: "none" })
             .set(bookHole, {display: "block"})
             .set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
             .set(rebmBg, {autoAlpha: 0, scale: 1}, "<")
             .set(".rebm-booked__cover", { display: "block" }, "<")
             .set([".cb-btn__covered", ".rebs-btn__covered", ".rebxxl-btn__covered"], { display: "flex" }, "<")
             .to([".reb-success-marquee__wrap", ".reb-success-img__wrap"], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
             .to([CategoryReb, bookCancelinner, audioWrap, muzakTrack], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 }, "<")
             .to([rebmEurWrap, rebmUsdWrap, rebmGbpWrap, rebmSgdWrap, rebmSekWrap], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 }, "<")
             .fromTo(bookHole, { scale: 1 }, { duration: 1.2, scale: 2700, ease: "expoScale(1, 2700, power1.easeOut)", onComplete() { sessionStorage.setItem("rebmSuccessPlayed", true) } }, "-=0.2")
             .to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
             .to([".nav__menu-wrapper", ".nav__logo-wrapper"], { delay: 2, display: "flex", duration: 0.001 })
             .to([".home-logo", ".menu-txt", ".beta__txt", ".currencies-list__contain", ".currencies-txt"], { yPercent: 0, duration: 0.55, autoAlpha: 1, ease: Power1.easeInOut })
             .to([".in--nav__btn", ".home-inactive", ".beta-txt__contain", ".nav-btn__inner-wrap", ".currencies-list__mask"], { yPercent: 0, duration:0.55, ease: Power1.easeInOut }, "<")
             .set(CategoryReb, { x: -30, opacity: 0, display: "none" })
             .set([audioWrap, muzakTrack, bookCancelinner], { x: -30, opacity: 0 })
             .set(rebmWrap, { display: "none" })
             .set(rebmBtnsWrap, { display: "none" })
             .set([RebmEurCancel, RebmUsdCancel, RebmGbpCancel, RebmSgdCancel, RebmSekCancel], { display: "none" })
             .set([rebmEurWrap, rebmUsdWrap, rebmGbpWrap, rebmSgdWrap, rebmSekWrap], { opacity: 0, display: "none", x: -30 })
             .set(BookContain, { display: "none" })
             .set(bookHole, {display: "none", clearProps: "all"})
             .set([".ready-fini__wrap", ".reb-success-marquee__wrap", ".reb-success-img__wrap", ".cb-success-marquee__wrap", ".cb-success-img__wrap", ".home-mrebel__qa-pong-wrap"], { yPercent: 101, opacity: 0 })
             .set([".reb-success-items__contain", ".cb-success-items__contain", ".q-a-pong__mask", ".ready-fini__mask"], { display: "none" });

        });
    })
  
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
  const bookHole = document.querySelector('.hole.is--book-close')
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
.set([".home-logo", ".menu-txt", ".beta__txt", ".currencies-list__contain", ".currencies-txt"], {opacity: 0, yPercent: 0 })
.set([".home-inactive", ".beta-txt__contain", ".nav-btn__inner-wrap", ".currencies-list__mask"], { yPercent: 0 })
.set(".nav__container", { display: "none" })
.set(bookHole, {display: "block"})
.set(".cta-txt", { autoAlpha: 1}, "<")
.set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
.set(rebxxlBg, {autoAlpha: 0, scale: 1}, "<")
.to([audioWrap, muzakTrack, rebxxlEurWrap, CategoryReb, bookCancelinner], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
.fromTo(bookHole, { scale: 1 }, { duration: 1.2, scale: 2700, ease: "expoScale(1, 2700, power1.easeOut)" }, "-=0.2")
.to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
.set(CategoryReb, { x: -30, opacity: 0, display: "none" })
.set([bookCancelinner, audioWrap, muzakTrack], { x: -30, opacity: 0 })
.set(rebxxlWrap, { display: "none" })
.set(rebxxlBtnsWrap, { display: "none" })
.set(RebxxlEurCancel, { display: "none" })
.set(rebxxlEurWrap, { opacity: 0, display: "none", x: -30 })
.set(BookContain, { display: "none" })
.set(bookHole, {display: "none", clearProps: "all"})
.to([".nav__menu-wrapper", ".nav__logo-wrapper"], { delay: 2, display: "flex", duration: 0.001 })
.to([".home-logo", ".menu-txt", ".beta__txt", ".currencies-list__contain", ".currencies-txt"], { yPercent: 0, duration: 0.55, autoAlpha: 1, ease: Power1.easeInOut })
.to([".in--nav__btn", ".home-inactive", ".beta-txt__contain", ".nav-btn__inner-wrap", ".currencies-list__mask"], { yPercent: 0, duration:0.55, ease: Power1.easeInOut }, "<");

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
  const bookHole = document.querySelector('.hole.is--book-close')
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
.set([".home-logo", ".menu-txt", ".beta__txt", ".currencies-list__contain", ".currencies-txt"], {opacity: 0, yPercent: 0 })
.set([".home-inactive", ".beta-txt__contain", ".nav-btn__inner-wrap", ".currencies-list__mask"], { yPercent: 0 })
.set(".nav__container", { display: "none" })
.set(bookHole, {display: "block"})
.set(".cta-txt", { autoAlpha: 1}, "<")
.set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
.set(rebxxlBg, {autoAlpha: 0, scale: 1}, "<")
.to([audioWrap, muzakTrack, rebxxlUsdWrap, CategoryReb, bookCancelinner], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
.fromTo(bookHole, { scale: 1 }, { duration: 1.2, scale: 2700, ease: "expoScale(1, 2700, power1.easeOut)" }, "-=0.2")
.to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
.set(CategoryReb, { x: -30, opacity: 0, display: "none" })
.set([bookCancelinner, audioWrap, muzakTrack], { x: -30, opacity: 0 })
.set(rebxxlWrap, { display: "none" })
.set(rebxxlBtnsWrap, { display: "none" })
.set(RebxxlUsdCancel, { display: "none" })
.set(rebxxlUsdWrap, { opacity: 0, display: "none", x: -30 })
.set(BookContain, { display: "none" })
.set(bookHole, {display: "none", clearProps: "all"})
.to([".nav__menu-wrapper", ".nav__logo-wrapper"], { delay: 2, display: "flex", duration: 0.001 })
.to([".home-logo", ".menu-txt", ".beta__txt", ".currencies-list__contain", ".currencies-txt"], { yPercent: 0, duration: 0.55, autoAlpha: 1, ease: Power1.easeInOut })
.to([".in--nav__btn", ".home-inactive", ".beta-txt__contain", ".nav-btn__inner-wrap", ".currencies-list__mask"], { yPercent: 0, duration:0.55, ease: Power1.easeInOut }, "<");

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
  const bookHole = document.querySelector('.hole.is--book-close')
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
.set([".home-logo", ".menu-txt", ".beta__txt", ".currencies-list__contain", ".currencies-txt"], {opacity: 0, yPercent: 0 })
.set([".home-inactive", ".beta-txt__contain", ".nav-btn__inner-wrap", ".currencies-list__mask"], { yPercent: 0 })
.set(".nav__container", { display: "none" })
.set(bookHole, {display: "block"})
.set(".cta-txt", { autoAlpha: 1}, "<")
.set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
.set(rebxxlBg, {autoAlpha: 0, scale: 1}, "<")
.to([audioWrap, muzakTrack, rebxxlGbpWrap, CategoryReb, bookCancelinner], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
.fromTo(bookHole, { scale: 1 }, { duration: 1.2, scale: 2700, ease: "expoScale(1, 2700, power1.easeOut)" }, "-=0.2")
.to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
.set(CategoryReb, { x: -30, opacity: 0, display: "none" })
.set([bookCancelinner, audioWrap, muzakTrack], { x: -30, opacity: 0 })
.set(rebxxlWrap, { display: "none" })
.set(rebxxlBtnsWrap, { display: "none" })
.set(RebxxlGbpCancel, { display: "none" })
.set(rebxxlGbpWrap, { opacity: 0, display: "none", x: -30 })
.set(BookContain, { display: "none" })
.set(bookHole, {display: "none", clearProps: "all"})
.to([".nav__menu-wrapper", ".nav__logo-wrapper"], { delay: 2, display: "flex", duration: 0.001 })
.to([".home-logo", ".menu-txt", ".beta__txt", ".currencies-list__contain", ".currencies-txt"], { yPercent: 0, duration: 0.55, autoAlpha: 1, ease: Power1.easeInOut })
.to([".in--nav__btn", ".home-inactive", ".beta-txt__contain", ".nav-btn__inner-wrap", ".currencies-list__mask"], { yPercent: 0, duration:0.55, ease: Power1.easeInOut }, "<");

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
  const bookHole = document.querySelector('.hole.is--book-close')
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
.set([".home-logo", ".menu-txt", ".beta__txt", ".currencies-list__contain", ".currencies-txt"], {opacity: 0, yPercent: 0 })
.set([".home-inactive", ".beta-txt__contain", ".nav-btn__inner-wrap", ".currencies-list__mask"], { yPercent: 0 })
.set(".nav__container", { display: "none" })
.set(bookHole, {display: "block"})
.set(".cta-txt", { autoAlpha: 1}, "<")
.set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
.set(rebxxlBg, {autoAlpha: 0, scale: 1}, "<")
.to([audioWrap, muzakTrack, rebxxlSekWrap, CategoryReb, bookCancelinner], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
.fromTo(bookHole, { scale: 1 }, { duration: 1.2, scale: 2700, ease: "expoScale(1, 2700, power1.easeOut)" }, "-=0.2")
.to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
.set(CategoryReb, { x: -30, opacity: 0, display: "none" })
.set([bookCancelinner, audioWrap, muzakTrack], { x: -30, opacity: 0 })
.set(rebxxlWrap, { display: "none" })
.set(rebxxlBtnsWrap, { display: "none" })
.set(RebxxlSekCancel, { display: "none" })
.set(rebxxlSekWrap, { opacity: 0, display: "none", x: -30 })
.set(BookContain, { display: "none" })
.set(bookHole, {display: "none", clearProps: "all"})
.to([".nav__menu-wrapper", ".nav__logo-wrapper"], { delay: 2, display: "flex", duration: 0.001 })
.to([".home-logo", ".menu-txt", ".beta__txt", ".currencies-list__contain", ".currencies-txt"], { yPercent: 0, duration: 0.55, autoAlpha: 1, ease: Power1.easeInOut })
.to([".in--nav__btn", ".home-inactive", ".beta-txt__contain", ".nav-btn__inner-wrap", ".currencies-list__mask"], { yPercent: 0, duration:0.55, ease: Power1.easeInOut }, "<");

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
  const bookHole = document.querySelector('.hole.is--book-close')
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
.set([".home-logo", ".menu-txt", ".beta__txt", ".currencies-list__contain", ".currencies-txt"], {opacity: 0, yPercent: 0 })
.set([".home-inactive", ".beta-txt__contain", ".nav-btn__inner-wrap", ".currencies-list__mask"], { yPercent: 0 })
.set(".nav__container", { display: "none" })
.set(bookHole, {display: "block"})
.set(".cta-txt", { autoAlpha: 1}, "<")
.set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
.set(rebxxlBg, {autoAlpha: 0, scale: 1}, "<")
.to([audioWrap, muzakTrack, rebxxlSgdWrap, CategoryReb, bookCancelinner], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
.fromTo(bookHole, { scale: 1 }, { duration: 1.2, scale: 2700, ease: "expoScale(1, 2700, power1.easeOut)" }, "-=0.2")
.to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
.set(CategoryReb, { x: -30, opacity: 0, display: "none" })
.set([bookCancelinner, audioWrap, muzakTrack], { x: -30, opacity: 0 })
.set(rebxxlWrap, { display: "none" })
.set(rebxxlBtnsWrap, { display: "none" })
.set(RebxxlSgdCancel, { display: "none" })
.set(rebxxlSgdWrap, { opacity: 0, display: "none", x: -30 })
.set(BookContain, { display: "none" })
.set(bookHole, {display: "none", clearProps: "all"})
.to([".nav__menu-wrapper", ".nav__logo-wrapper"], { delay: 2, display: "flex", duration: 0.001 })
.to([".home-logo", ".menu-txt", ".beta__txt", ".currencies-list__contain", ".currencies-txt"], { yPercent: 0, duration: 0.55, autoAlpha: 1, ease: Power1.easeInOut })
.to([".in--nav__btn", ".home-inactive", ".beta-txt__contain", ".nav-btn__inner-wrap", ".currencies-list__mask"], { yPercent: 0, duration:0.55, ease: Power1.easeInOut }, "<");

    });
})

// CLOSE REB XXL SUCCESS - ALL CURRENCIES

rebXXLexitSuccess.forEach((rebXXLexitSuccess) => {
  if (!rebXXLexitSuccess) return
  const bookHole = document.querySelector('.hole.is--book-close')
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
             .set([".home-logo", ".menu-txt", ".beta__txt", ".currencies-list__contain", ".currencies-txt"], {opacity: 0, yPercent: 0 })
             .set([".home-inactive", ".beta-txt__contain", ".nav-btn__inner-wrap", ".currencies-list__mask"], { yPercent: 0 })
             .set([".nav__container", '.nav__currency-wrap'], { display: "none" })
             .set(bookHole, {display: "block"})
             .set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
             .set(rebxxlBg, {autoAlpha: 0, scale: 1}, "<")
             .set(".rebxxl-booked__cover", { display: "block" }, "<")
             .set([".cb-btn__covered", ".rebs-btn__covered", ".rebm-btn__covered"], { display: "flex" }, "<")
             .to([".reb-success-marquee__wrap", ".reb-success-img__wrap"], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
             .to([CategoryReb, bookCancelinner, audioWrap, muzakTrack], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 }, "<")
             .to([rebxxlEurWrap, rebxxlUsdWrap, rebxxlGbpWrap, rebxxlSgdWrap, rebxxlSekWrap], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 }, "<")
             .fromTo(bookHole, { scale: 1 }, { duration: 1.2, scale: 2700, ease: "expoScale(1, 2700, power1.easeOut)", onComplete() { sessionStorage.setItem("rebxxlSuccessPlayed", true) } }, "-=0.2")
             .to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
             .to([".nav__menu-wrapper", ".nav__logo-wrapper"], { delay: 2, display: "flex", duration: 0.001 })
             .to([".home-logo", ".menu-txt", ".beta__txt", ".currencies-list__contain", ".currencies-txt"], { yPercent: 0, duration: 0.55, autoAlpha: 1, ease: Power1.easeInOut })
             .to([".in--nav__btn", ".home-inactive", ".beta-txt__contain", ".nav-btn__inner-wrap", ".currencies-list__mask"], { yPercent: 0, duration:0.55, ease: Power1.easeInOut }, "<")
             .set(CategoryReb, { x: -30, opacity: 0, display: "none" })
             .set([audioWrap, muzakTrack, bookCancelinner], { x: -30, opacity: 0 })
             .set(rebxxlWrap, { display: "none" })
             .set(rebxxlBtnsWrap, { display: "none" })
             .set([RebxxlEurCancel, RebxxlUsdCancel, RebxxlGbpCancel, RebxxlSgdCancel, RebxxlSekCancel], { display: "none" })
             .set([rebxxlEurWrap, rebxxlUsdWrap, rebxxlGbpWrap, rebxxlSgdWrap, rebxxlSekWrap], { opacity: 0, display: "none", x: -30 })
             .set(BookContain, { display: "none" })
             .set(bookHole, {display: "none", clearProps: "all"})
             .set([".ready-fini__wrap", ".reb-success-marquee__wrap", ".reb-success-img__wrap", ".cb-success-marquee__wrap", ".cb-success-img__wrap", ".home-mrebel__qa-pong-wrap"], { yPercent: 101, opacity: 0 })
             .set([".reb-success-items__contain", ".cb-success-items__contain", ".q-a-pong__mask", ".ready-fini__mask"], { display: "none" });

        });
    })

}
