export const propBookingCb = () => {

gsap.registerPlugin(ExpoScaleEase);

// SET CB COVER IF ALREADY COMPLETED
if (sessionStorage.getItem("cbSuccessPlayed", true)) {

  gsap.set(".cb-booked__cover", { display: "block" });
  gsap.set([".cb-eur__cta", ".cb-usd__cta", ".cb-gbp__cta", ".cb-sek__cta", ".cb-sgd__cta", ".nav__currency-wrap"], { display: "none" })
  gsap.set([".rebs-btn__covered", ".rebm-btn__covered", ".rebxxl-btn__covered", ".spa-btn__covered"], { display: "flex" });
  
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
gsap.set(BookContain, { display: "none" });
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

// DESKTOP
mm.add("(min-width: 991px)", () => {  
  
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
                .set(bookHole, {display: "block"}, "<")
                .set(ctaMask, {filter:"invert(0%)"});
         
    cbEurOp.addEventListener('click', () => {   
      cbeur_open.play(0);
    });
  })

// CLOSE CB EUR
CbEurCancel.forEach((CbEurCancel) => {
  if (!CbEurCancel) return
  const bookHole = document.querySelector('.book-hole')
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
             .set(".menu__btn", { display: "none", opacity: 0 })
             .set(".cta-txt", { autoAlpha: 1}, "<")
             .set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
             .set(cbBg, {autoAlpha: 0, scale: 1}, "<")
             .to([cbEurWrap, CategoryCb, bookCancelinner], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
             .fromTo(bookHole, { scale: 1 }, { duration: 1.2, scale: 2800, ease: "expoScale(1, 2800, power1.easeOut)" }, "-=0.2")
             .to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
             .set(CategoryCb, { x: -30, opacity: 0, display: "none" })
             .set(bookCancelinner, { x: -30, opacity: 0 })
             .set(cbWrap, { display: "none" })
             .set(cbBtnsWrap, { display: "none" })
             .set(CbEurCancel, { display: "none" })
             .set(cbEurWrap, { opacity: 0, display: "none", x: -30 })
             .set(BookContain, { display: "none" })
             .set(bookHole, {display: "none", clearProps: "all"})
             .to(".menu__btn", { delay: 2, display: "flex", opacity: 1, duration: 0.45 });
    
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
                .set(bookHole, {display: "block"}, "<")
                .set(ctaMask, {filter:"invert(0%)"});
       
  cbUsdOp.addEventListener('click', () => {   
    cbusd_open.play(0);
  });
})

// CLOSE CB USD
CbUsdCancel.forEach((CbUsdCancel) => {
  if (!CbUsdCancel) return
  const bookHole = document.querySelector('.book-hole')
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
             .set(".menu__btn", { display: "none", opacity: 0 })
             .set(".cta-txt", { autoAlpha: 1}, "<")
             .set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
             .set(cbBg, {autoAlpha: 0, scale: 1}, "<")
             .to([cbUsdWrap, CategoryCb, bookCancelinner], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
             .fromTo(bookHole, { scale: 1 }, { duration: 1.2, scale: 2800, ease: "expoScale(1, 2800, power1.easeOut)" }, "-=0.2")
             .to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
             .set(CategoryCb, { x: -30, opacity: 0, display: "none" })
             .set(bookCancelinner, { x: -30, opacity: 0 })
             .set(cbWrap, { display: "none" })
             .set(cbBtnsWrap, { display: "none" })
             .set(CbUsdCancel, { display: "none" })
             .set(cbUsdWrap, { opacity: 0, display: "none", x: -30 })
             .set(BookContain, { display: "none" })
             .set(bookHole, {display: "none", clearProps: "all"})
             .to(".menu__btn", { delay: 2, display: "flex", opacity: 1, duration: 0.45 });

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
                .set(bookHole, {display: "block"}, "<")
                .set(ctaMask, {filter:"invert(0%)"});
       
  cbGbpOp.addEventListener('click', () => {   
    cbgbp_open.play(0);
  });
})

// CLOSE CB GBP
CbGbpCancel.forEach((CbGbpCancel) => {
  if (!CbGbpCancel) return
  const bookHole = document.querySelector('.book-hole')
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
             .set(".menu__btn", { display: "none", opacity: 0 })
             .set(".cta-txt", { autoAlpha: 1}, "<")
             .set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
             .set(cbBg, {autoAlpha: 0, scale: 1}, "<")
             .to([cbGbpWrap, CategoryCb, bookCancelinner], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
             .fromTo(bookHole, { scale: 1 }, { duration: 1.2, scale: 2800, ease: "expoScale(1, 2800, power1.easeOut)" }, "-=0.2")
             .to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
             .set(CategoryCb, { x: -30, opacity: 0, display: "none" })
             .set(bookCancelinner, { x: -30, opacity: 0 })
             .set(cbWrap, { display: "none" })
             .set(cbBtnsWrap, { display: "none" })
             .set(CbGbpCancel, { display: "none" })
             .set(cbGbpWrap, { opacity: 0, display: "none", x: -30 })
             .set(BookContain, { display: "none" })
             .set(bookHole, {display: "none", clearProps: "all"})
             .to(".menu__btn", { delay: 2, display: "flex", opacity: 1, duration: 0.45 });

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
                .set(bookHole, {display: "block"}, "<")
                .set(ctaMask, {filter:"invert(0%)"});
       
  cbSekOp.addEventListener('click', () => {   
    cbsek_open.play(0);
  });
})

// CLOSE CB SEK
CbSekCancel.forEach((CbSekCancel) => {
  if (!CbSekCancel) return
  const bookHole = document.querySelector('.book-hole')
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
             .set(".menu__btn", { display: "none", opacity: 0 })
             .set(".cta-txt", { autoAlpha: 1}, "<")
             .set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
             .set(cbBg, {autoAlpha: 0, scale: 1}, "<")
             .to([cbEurWrap, CategoryCb, bookCancelinner], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
             .fromTo(bookHole, { scale: 1 }, { duration: 1.2, scale: 2800, ease: "expoScale(1, 2800, power1.easeOut)" }, "-=0.2")
             .to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
             .set(CategoryCb, { x: -30, opacity: 0, display: "none" })
             .set(bookCancelinner, { x: -30, opacity: 0 })
             .set(cbWrap, { display: "none" })
             .set(cbBtnsWrap, { display: "none" })
             .set(CbSekCancel, { display: "none" })
             .set(cbSekWrap, { opacity: 0, display: "none", x: -30 })
             .set(BookContain, { display: "none" })
             .set(bookHole, {display: "none", clearProps: "all"})
             .to(".menu__btn", { delay: 2, display: "flex", opacity: 1, duration: 0.45 });

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
                .set(bookHole, {display: "block"}, "<")
                .set(ctaMask, {filter:"invert(0%)"});
       
  cbSgdOp.addEventListener('click', () => {   
    cbsgd_open.play(0);
  });
})

// CLOSE CB SGD
CbSgdCancel.forEach((CbSgdCancel) => {
  if (!CbSgdCancel) return
  const bookHole = document.querySelector('.book-hole')
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
             .set(".menu__btn", { display: "none", opacity: 0 })
             .set(".cta-txt", { autoAlpha: 1}, "<")
             .set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
             .set(cbBg, {autoAlpha: 0, scale: 1}, "<")
             .to([cbSgdWrap, CategoryCb, bookCancelinner], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
             .fromTo(bookHole, { scale: 1 }, { duration: 1.2, scale: 2800, ease: "expoScale(1, 2800, power1.easeOut)" }, "-=0.2")
             .to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
             .set(CategoryCb, { x: -30, opacity: 0, display: "none" })
             .set(bookCancelinner, { x: -30, opacity: 0 })
             .set(cbWrap, { display: "none" })
             .set(cbBtnsWrap, { display: "none" })
             .set(CbSgdCancel, { display: "none" })
             .set(cbSgdWrap, { opacity: 0, display: "none", x: -30 })
             .set(BookContain, { display: "none" })
             .set(bookHole, {display: "none", clearProps: "all"})
             .to(".menu__btn", { delay: 2, display: "flex", opacity: 1, duration: 0.45 });
    });
})

// CLOSE CB SUCCESS - ALL CURRENCIES
cbExitSuccess.forEach((cbExitSuccess) => {
  if (!cbExitSuccess) return
  const bookHole = document.querySelector('.book-hole')
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
           .set(".menu__btn", { display: "none", opacity: 0 })
           .set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
           .set(cbBg, {autoAlpha: 0, scale: 1}, "<")
           .set(".cb-booked__cover", { display: "block" }, "<")
           .set([".rebs-btn__covered", ".rebm-btn__covered", ".rebxxl-btn__covered", ".spa-btn__covered"], { display: "flex" }, "<")
           .to([".cb-success-marquee__wrap", ".cb-success-img__wrap"], { delay: 0.6, x: 30, opacity: 0, ease: "expo.out", duration: 0.6})
           .to([CategoryCb, bookCancelinner], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 }, "<")
           .to([cbEurWrap, cbUsdWrap, cbGbpWrap, cbSgdWrap, cbSekWrap], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 }, "<")
           .fromTo(bookHole, { scale: 1 }, { duration: 1.2, scale: 2800, ease: "expoScale(1, 2800, power1.easeOut)", onComplete() { sessionStorage.setItem("cbSuccessPlayed", true) } }, "-=0.2")
           .to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
           .set(CategoryCb, { x: -30, opacity: 0, display: "none" })
           .set(bookCancelinner, { x: -30, opacity: 0 })
           .set(cbWrap, { display: "none" })
           .set(cbBtnsWrap, { display: "none" })
           .set([CbEurCancel, CbUsdCancel, CbGbpCancel, CbSgdCancel, CbSekCancel, ".cb-eur__cta", ".cb-usd__cta", ".cb-gbp__cta", ".cb-sek__cta", ".cb-sgd__cta"], { display: "none" })
           .set([cbEurWrap, cbUsdWrap, cbGbpWrap, cbSgdWrap, cbSekWrap], { opacity: 0, display: "none", x: -30 })
           .set(BookContain, { display: "none" })
           .set(bookHole, {display: "none", clearProps: "all"})
           .set([".ready-fini__wrap", ".reb-success-marquee__wrap", ".reb-success-img__wrap", ".cb-success-marquee__wrap", ".cb-success-img__wrap", ".home-mrebel__qa-pong-wrap"], { yPercent: 101, opacity: 0 })
           .set([".reb-success-items__contain", ".cb-success-items__contain", ".q-a-pong__mask", ".ready-fini__mask"], { display: "none" })
           .to(".menu__btn", { delay: 2, display: "flex", opacity: 1, duration: 0.45 });

      });
     })
  });

// iPad and Mobile
mm.add("(max-width: 990px)", () => {  
  
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
                .set(bookHoleMob, {display: "flex"}, "<")
                .set(ctaMask, {filter:"invert(0%)"});
         
    cbEurOp.addEventListener('click', () => {   
      cbeur_open.play(0);
    });
  })

// CLOSE CB EUR
CbEurCancel.forEach((CbEurCancel) => {
  if (!CbEurCancel) return
  const bookHoleMob = document.querySelector('.book-hole-mobile')
  if (!bookHoleMob) return
  const bookingContain = document.querySelector('.booking-items__container')
  if (!bookingContain) return

  gsap.set(bookHoleMob, { scale: 1 })

  CbEurCancel.addEventListener("click", (e) => {
      //let xDist = e.clientX - bookingContain.getBoundingClientRect().x + 4
      //let yDist = e.clientY - bookingContain.getBoundingClientRect().y
      let cbeur_cancel = gsap.timeline();

      //gsap.set(bookHoleMob, { left: xDist, top: yDist })
           
      cbeur_cancel
             .set(".menu__btn", { display: "none", opacity: 0 })
             .set(".cta-txt", { autoAlpha: 1}, "<")
             .set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
             .set(cbBg, {autoAlpha: 0, scale: 1}, "<")
             .to([cbEurWrap, CategoryCb, bookCancelinner], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
             .fromTo(bookHoleMob, { scale: 1 }, { duration: 1.2, scale: 280, ease: "expoScale(1, 280, power1.easeOut)" }, "-=0.2")
             .to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
             .set(CategoryCb, { x: -30, opacity: 0, display: "none" })
             .set(bookCancelinner, { x: -30, opacity: 0 })
             .set(cbWrap, { display: "none" })
             .set(cbBtnsWrap, { display: "none" })
             .set(CbEurCancel, { display: "none" })
             .set(cbEurWrap, { opacity: 0, display: "none", x: -30 })
             .set(BookContain, { display: "none" })
             .set(bookHoleMob, {display: "none", clearProps: "all"})
             .to(".menu__btn", { delay: 2, display: "flex", opacity: 1, duration: 0.45 });
    
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
                .set(bookHoleMob, {display: "flex"}, "<")
                .set(ctaMask, {filter:"invert(0%)"});
       
  cbUsdOp.addEventListener('click', () => {   
    cbusd_open.play(0);
  });
})

// CLOSE CB USD
CbUsdCancel.forEach((CbUsdCancel) => {
  if (!CbUsdCancel) return
  const bookHoleMob = document.querySelector('.book-hole-mobile')
  if (!bookHoleMob) return
  const bookingContain = document.querySelector('.booking-items__container')
  if (!bookingContain) return

  gsap.set(bookHoleMob, { scale: 1 })

  CbUsdCancel.addEventListener("click", (e) => {
      //let xDist = e.clientX - bookingContain.getBoundingClientRect().x + 4
      //let yDist = e.clientY - bookingContain.getBoundingClientRect().y
      let cbusd_cancel = gsap.timeline();

      //gsap.set(bookHoleMob, { left: xDist, top: yDist })
       
  cbusd_cancel
             .set(".menu__btn", { display: "none", opacity: 0 })
             .set(".cta-txt", { autoAlpha: 1}, "<")
             .set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
             .set(cbBg, {autoAlpha: 0, scale: 1}, "<")
             .to([cbUsdWrap, CategoryCb, bookCancelinner], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
             .fromTo(bookHoleMob, { scale: 1 }, { duration: 1.2, scale: 280, ease: "expoScale(1, 280, power1.easeOut)" }, "-=0.2")
             .to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
             .set(CategoryCb, { x: -30, opacity: 0, display: "none" })
             .set(bookCancelinner, { x: -30, opacity: 0 })
             .set(cbWrap, { display: "none" })
             .set(cbBtnsWrap, { display: "none" })
             .set(CbUsdCancel, { display: "none" })
             .set(cbUsdWrap, { opacity: 0, display: "none", x: -30 })
             .set(BookContain, { display: "none" })
             .set(bookHoleMob, {display: "none", clearProps: "all"})
             .to(".menu__btn", { delay: 2, display: "flex", opacity: 1, duration: 0.45 });

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
                .set(bookHoleMob, {display: "flex"}, "<")
                .set(ctaMask, {filter:"invert(0%)"});
       
  cbGbpOp.addEventListener('click', () => {   
    cbgbp_open.play(0);
  });
})

// CLOSE CB GBP
CbGbpCancel.forEach((CbGbpCancel) => {
  if (!CbGbpCancel) return
  const bookHoleMob = document.querySelector('.book-hole-mobile')
  if (!bookHoleMob) return
  const bookingContain = document.querySelector('.booking-items__container')
  if (!bookingContain) return

  gsap.set(bookHoleMob, { scale: 1 })

  CbGbpCancel.addEventListener("click", (e) => {
      //let xDist = e.clientX - bookingContain.getBoundingClientRect().x + 4
      //let yDist = e.clientY - bookingContain.getBoundingClientRect().y
      let cbgbp_cancel = gsap.timeline();

      //gsap.set(bookHoleMob, { left: xDist, top: yDist })
       
  cbgbp_cancel
             .set(".menu__btn", { display: "none", opacity: 0 })
             .set(".cta-txt", { autoAlpha: 1}, "<")
             .set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
             .set(cbBg, {autoAlpha: 0, scale: 1}, "<")
             .to([cbGbpWrap, CategoryCb, bookCancelinner], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
             .fromTo(bookHoleMob, { scale: 1 }, { duration: 1.2, scale: 280, ease: "expoScale(1, 280, power1.easeOut)" }, "-=0.2")
             .to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
             .set(CategoryCb, { x: -30, opacity: 0, display: "none" })
             .set(bookCancelinner, { x: -30, opacity: 0 })
             .set(cbWrap, { display: "none" })
             .set(cbBtnsWrap, { display: "none" })
             .set(CbGbpCancel, { display: "none" })
             .set(cbGbpWrap, { opacity: 0, display: "none", x: -30 })
             .set(BookContain, { display: "none" })
             .set(bookHoleMob, {display: "none", clearProps: "all"})
             .to(".menu__btn", { delay: 2, display: "flex", opacity: 1, duration: 0.45 });

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
                .set(bookHoleMob, {display: "flex"}, "<")
                .set(ctaMask, {filter:"invert(0%)"});
       
  cbSekOp.addEventListener('click', () => {   
    cbsek_open.play(0);
  });
})

// CLOSE CB SEK
CbSekCancel.forEach((CbSekCancel) => {
  if (!CbSekCancel) return
  const bookHoleMob = document.querySelector('.book-hole-mobile')
  if (!bookHoleMob) return
  const bookingContain = document.querySelector('.booking-items__container')
  if (!bookingContain) return

  gsap.set(bookHoleMob, { scale: 1 })

  CbSekCancel.addEventListener("click", (e) => {
      //let xDist = e.clientX - bookingContain.getBoundingClientRect().x + 4
      //let yDist = e.clientY - bookingContain.getBoundingClientRect().y
      let cbsek_cancel = gsap.timeline();

      //gsap.set(bookHoleMob, { left: xDist, top: yDist })
       
  cbsek_cancel
             .set(".menu__btn", { display: "none", opacity: 0 })
             .set(".cta-txt", { autoAlpha: 1}, "<")
             .set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
             .set(cbBg, {autoAlpha: 0, scale: 1}, "<")
             .to([cbEurWrap, CategoryCb, bookCancelinner], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
             .fromTo(bookHoleMob, { scale: 1 }, { duration: 1.2, scale: 280, ease: "expoScale(1, 280, power1.easeOut)" }, "-=0.2")
             .to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
             .set(CategoryCb, { x: -30, opacity: 0, display: "none" })
             .set(bookCancelinner, { x: -30, opacity: 0 })
             .set(cbWrap, { display: "none" })
             .set(cbBtnsWrap, { display: "none" })
             .set(CbSekCancel, { display: "none" })
             .set(cbSekWrap, { opacity: 0, display: "none", x: -30 })
             .set(BookContain, { display: "none" })
             .set(bookHoleMob, {display: "none", clearProps: "all"})
             .to(".menu__btn", { delay: 2, display: "flex", opacity: 1, duration: 0.45 });

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
                .set(bookHoleMob, {display: "flex"}, "<")
                .set(ctaMask, {filter:"invert(0%)"});
       
  cbSgdOp.addEventListener('click', () => {   
    cbsgd_open.play(0);
  });
})

// CLOSE CB SGD
CbSgdCancel.forEach((CbSgdCancel) => {
  if (!CbSgdCancel) return
  const bookHoleMob = document.querySelector('.book-hole-mobile')
  if (!bookHoleMob) return
  const bookingContain = document.querySelector('.booking-items__container')
  if (!bookingContain) return

  gsap.set(bookHoleMob, { scale: 1 })

  CbSgdCancel.addEventListener("click", (e) => {
      //let xDist = e.clientX - bookingContain.getBoundingClientRect().x + 4
      //let yDist = e.clientY - bookingContain.getBoundingClientRect().y
      let cbsgd_cancel = gsap.timeline();

      //gsap.set(bookHoleMob, { left: xDist, top: yDist })
       
  cbsgd_cancel
             .set(".menu__btn", { display: "none", opacity: 0 })
             .set(".cta-txt", { autoAlpha: 1}, "<")
             .set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
             .set(cbBg, {autoAlpha: 0, scale: 1}, "<")
             .to([cbSgdWrap, CategoryCb, bookCancelinner], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
             .fromTo(bookHoleMob, { scale: 1 }, { duration: 1.2, scale: 280, ease: "expoScale(1, 280, power1.easeOut)" }, "-=0.2")
             .to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
             .set(CategoryCb, { x: -30, opacity: 0, display: "none" })
             .set(bookCancelinner, { x: -30, opacity: 0 })
             .set(cbWrap, { display: "none" })
             .set(cbBtnsWrap, { display: "none" })
             .set(CbSgdCancel, { display: "none" })
             .set(cbSgdWrap, { opacity: 0, display: "none", x: -30 })
             .set(BookContain, { display: "none" })
             .set(bookHoleMob, {display: "none", clearProps: "all"})
             .to(".menu__btn", { delay: 2, display: "flex", opacity: 1, duration: 0.45 });
    });
})

// CLOSE CB SUCCESS - ALL CURRENCIES
cbExitSuccess.forEach((cbExitSuccess) => {
  if (!cbExitSuccess) return
  const bookHoleMob = document.querySelector('.book-hole-mobile')
  if (!bookHoleMob) return
  const bookingContain = document.querySelector('.booking-items__container')
  if (!bookingContain) return

  gsap.set(bookHoleMob, { scale: 1 })

  cbExitSuccess.addEventListener("click", (e) => {
      //let xDist = e.clientX - bookingContain.getBoundingClientRect().x + 4
      //let yDist = e.clientY - bookingContain.getBoundingClientRect().y
      let cb_cancel_success = gsap.timeline();

      //gsap.set(bookHoleMob, { left: xDist, top: yDist })
         
  cb_cancel_success
           .set(".menu__btn", { display: "none", opacity: 0 })
           .set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
           .set(cbBg, {autoAlpha: 0, scale: 1}, "<")
           .set(".cb-booked__cover", { display: "block" }, "<")
           .set([".rebs-btn__covered", ".rebm-btn__covered", ".rebxxl-btn__covered", ".spa-btn__covered"], { display: "flex" }, "<")
           .to([".cb-success-marquee__wrap", ".cb-success-img__wrap"], { delay: 0.6, x: 30, opacity: 0, ease: "expo.out", duration: 0.6})
           .to([CategoryCb, bookCancelinner], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 }, "<")
           .to([cbEurWrap, cbUsdWrap, cbGbpWrap, cbSgdWrap, cbSekWrap], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 }, "<")
           .fromTo(bookHoleMob, { scale: 1 }, { duration: 1.2, scale: 280, ease: "expoScale(1, 280, power1.easeOut)", onComplete() { sessionStorage.setItem("cbSuccessPlayed", true) } }, "-=0.2")
           .to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
           .set(CategoryCb, { x: -30, opacity: 0, display: "none" })
           .set(bookCancelinner, { x: -30, opacity: 0 })
           .set(cbWrap, { display: "none" })
           .set(cbBtnsWrap, { display: "none" })
           .set([CbEurCancel, CbUsdCancel, CbGbpCancel, CbSgdCancel, CbSekCancel, ".cb-eur__cta", ".cb-usd__cta", ".cb-gbp__cta", ".cb-sek__cta", ".cb-sgd__cta"], { display: "none" })
           .set([cbEurWrap, cbUsdWrap, cbGbpWrap, cbSgdWrap, cbSekWrap], { opacity: 0, display: "none", x: -30 })
           .set(BookContain, { display: "none" })
           .set(bookHoleMob, {display: "none", clearProps: "all"})
           .set([".ready-fini__wrap", ".reb-success-marquee__wrap", ".reb-success-img__wrap", ".cb-success-marquee__wrap", ".cb-success-img__wrap", ".home-mrebel__qa-pong-wrap"], { yPercent: 101, opacity: 0 })
           .set([".reb-success-items__contain", ".cb-success-items__contain", ".q-a-pong__mask", ".ready-fini__mask"], { display: "none" })
           .to(".menu__btn", { delay: 2, display: "flex", opacity: 1, duration: 0.45 });

      });
     })
  });
  
}
