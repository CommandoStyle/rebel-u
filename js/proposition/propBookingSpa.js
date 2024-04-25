export const propBookingSpa = () => {

gsap.registerPlugin(ExpoScaleEase);

// SET SPA COVER IF ALREADY COMPLETED
if (sessionStorage.getItem("spaSuccessPlayed", true)) {

  gsap.set(".spa-booked__cover", { display: "block" });
  gsap.set([".spa-eur__cta", ".spa-usd__cta", ".spa-gbp__cta", ".spa-sek__cta", ".spa-sgd__cta", ".nav__currency-wrap"], { display: "none" })
  gsap.set([, ".cb-btn__covered", ".rebs-btn__covered", ".rebm-btn__covered", ".rebxxl-btn__covered"], { display: "flex" });
  
} 

// GLOBAL BOOKING VARS
var bookHole = gsap.utils.toArray('.book-hole');
var bookCancelinner = gsap.utils.toArray('.booking-cancel__track');
var BookContain = gsap.utils.toArray('.booking-items__container');
var CategoryCb = gsap.utils.toArray('.category-cb__track');
var CategoryReb = gsap.utils.toArray('.category-reb__track');
var CategorySpa = gsap.utils.toArray('.category-spa__track'); // New add!!!
var cbWrap = gsap.utils.toArray('.cb__booking-wrap');
var rebsWrap = gsap.utils.toArray('.rebs__booking-wrap');
var rebmWrap = gsap.utils.toArray('.rebm__booking-wrap');
var rebxxlWrap = gsap.utils.toArray('.rebxxl__booking-wrap');
var spaWrap = gsap.utils.toArray('.spa__booking-wrap'); // New add!!!
var cbBg = gsap.utils.toArray('.cb__backdrop');
var rebsBg = gsap.utils.toArray('.reb-s__backdrop');
var rebmBg = gsap.utils.toArray('.reb-m__backdrop');
var rebxxlBg = gsap.utils.toArray('.reb-xxl__backdrop');
var spaBg = gsap.utils.toArray('.spa__backdrop'); // New add!!!
var audioWrap = gsap.utils.toArray(['.audio-graphic__wrap', '.quiz-audio-graphic__wrap']);
var audioGraph = gsap.utils.toArray('.audio-on-off__graphic');
var muzakTrack = gsap.utils.toArray('.muzak-marquee__track'); 
let cursor = gsap.utils.toArray(".cursor-dot");
let bookSuccessBtn = gsap.utils.toArray([".cb-exit__success", ".rebs-exit__success", ".rebm-exit__success", ".rebxxl-exit__success", ".spa-exit__success"]); // New add last!!!

// GSAP SET GLOBAL
gsap.set([audioWrap, bookCancelinner], { x: -30, opacity: 0 });
gsap.set([CategoryCb, CategoryReb, CategorySpa], { display: "none", x: -30, opacity: 0 });
gsap.set([BookContain], { display: "none" });
gsap.set([cbWrap, rebsWrap, rebmWrap, rebxxlWrap, spaWrap], { display: "none" });
gsap.set([cbBg, rebsBg, rebmBg, rebxxlBg, spaBg], { autoAlpha: 0 });

//----------------------- BOOK SPA - BEGIN -----------------------//

// SPA CLOSE VARS ALL CURRENCIES
var spaBtnsWrap = gsap.utils.toArray(".spa-btns__wrap"); 
var SpaEurCancel = gsap.utils.toArray(".spa-eur-cancel"); 
var SpaUsdCancel = gsap.utils.toArray(".spa-usd-cancel"); 
var SpaGbpCancel = gsap.utils.toArray(".spa-gbp-cancel"); 
var SpaSekCancel = gsap.utils.toArray(".spa-sek-cancel"); 
var SpaSgdCancel = gsap.utils.toArray(".spa-sgd-cancel"); 
var spaExitSuccess = gsap.utils.toArray(".spa-exit__success");

// SPA OPEN VARS ALL CURRENCIES
var spaEurOpen = gsap.utils.toArray('.spa-eur__cta');
var spaEurWrap = gsap.utils.toArray('.spa-eur__booking-wrap');
var spaUsdOpen = gsap.utils.toArray('.spa-usd__cta');
var spaUsdWrap = gsap.utils.toArray('.spa-usd__booking-wrap');
var spaGbpOpen = gsap.utils.toArray('.spa-gbp__cta');
var spaGbpWrap = gsap.utils.toArray('.spa-gbp__booking-wrap');
var spaSekOpen = gsap.utils.toArray('.spa-sek__cta');
var spaSekWrap = gsap.utils.toArray('.spa-sek__booking-wrap');
var spaSgdOpen = gsap.utils.toArray('.spa-sgd__cta');
var spaSgdWrap = gsap.utils.toArray('.spa-sgd__booking-wrap');

// GSAP SET SPA ALL CURRENCIES
gsap.set([spaEurWrap, spaUsdWrap, spaGbpWrap, spaSekWrap, spaSgdWrap], { x: -30, opacity: 0, display: "none" });
gsap.set([SpaEurCancel, SpaUsdCancel, SpaGbpCancel, SpaSekCancel, SpaSgdCancel, spaBtnsWrap], { display: "none" });

// OPEN CB EUR
spaEurOpen.forEach(spaEurOp => {

    let ctaMask = spaEurOp.querySelector(".book-cta__mask"),
        ctaTxt = spaEurOp.querySelector(".cta-txt"),
        ctaCover = spaEurOp.querySelector(".cta-redact-cover"),
        
  spaeur_open = gsap.timeline({ paused: true });
  
      spaeur_open.set(spaBg, { scale: 1, autoAlpha: 1 })
                .set(cursor, { display: "none" }, "<")
                .set(bookSuccessBtn, { display: "none" }, "<")
                .set(BookContain, { display: "flex" }, "<")
                .set(spaWrap, { display: "flex"}, "<")
                .set(spaBtnsWrap, { display: "block" }, "<")
                .set(SpaEurCancel, { display: "flex" }, "<")
                .set(spaEurWrap, { display: "block" }, "<")
                .set(CategorySpa, { display: "block" }, "<")
                .set(ctaCover, { scaleX: 0 }, "<")
                .to(ctaMask, {filter:"invert(100%)", duration: 0.001}, "<")
                .to(spaBg, { scale: 13.5, transformOrigin: "50% 50%", ease: "power2.inOut", duration: 1.2 })
                .to(ctaCover, { delay: 0.2, scaleX: 1, transformOrigin: "0% 100%", duration: 6, ease: "power0.easeOut" })
                .to(ctaTxt, { autoAlpha: 0, duration: 0.001})
                .to(ctaCover, { scaleX: 0, transformOrigin: "100% 0%", duration: 0.3, ease: "linear" })
                .to(CategorySpa, { delay: 0.2, x: 0, opacity: 1, ease: "expo.out", duration: 1.2 })
                .to(bookCancelinner, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
                .fromTo(spaEurWrap, { x: -30, opacity: 0 }, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
                .set(bookHole, {display: "block"}, "<")
                .to([audioWrap, muzakTrack], { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
                .to(audioGraph, {clearProps: 'x'})
                .set(audioGraph, {x: 20.8})
                .set(ctaMask, {filter:"invert(0%)"});
         
    spaEurOp.addEventListener('click', () => {   
      spaeur_open.play(0);
    });
  })

// CLOSE CB EUR
SpaEurCancel.forEach((SpaEurCancel) => {
  if (!SpaEurCancel) return
  const bookHole = document.querySelector('.book-hole')
  if (!bookHole) return
  const bookingContain = document.querySelector('.booking-items__container')
  if (!bookingContain) return

  gsap.set(bookHole, { scale: 1 })

  SpaEurCancel.addEventListener("click", (e) => {
      let xDist = e.clientX - bookingContain.getBoundingClientRect().x + 4
      let yDist = e.clientY - bookingContain.getBoundingClientRect().y
      let spaeur_cancel = gsap.timeline();

      gsap.set(bookHole, { left: xDist, top: yDist })
           
      spaeur_cancel
             .set(".menu__btn", { display: "none", opacity: 0 })
             .set(".cta-txt", { autoAlpha: 1}, "<")
             .set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
             .set(spaBg, {autoAlpha: 0, scale: 1}, "<")
             .to([audioWrap, muzakTrack, spaEurWrap, CategorySpa, bookCancelinner], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
             .fromTo(bookHole, { scale: 1 }, { duration: 1.2, scale: 2800, ease: "expoScale(1, 2800, power1.easeOut)" }, "-=0.2")
             .to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
             .set(CategorySpa, { x: -30, opacity: 0, display: "none" })
             .set([bookCancelinner, audioWrap, muzakTrack], { x: -30, opacity: 0 })
             .set(spaWrap, { display: "none" })
             .set(spaBtnsWrap, { display: "none" })
             .set(SpaEurCancel, { display: "none" })
             .set(spaEurWrap, { opacity: 0, display: "none", x: -30 })
             .set(BookContain, { display: "none" })
             .set(bookHole, {display: "none", clearProps: "all"})
             .to(".menu__btn", { delay: 2, display: "flex", opacity: 1, duration: 0.45 });
    
        });
    })

// OPEN CB USD
spaUsdOpen.forEach(spaUsdOp => {

    let ctaMask = spaUsdOp.querySelector(".book-cta__mask"),
        ctaTxt = spaUsdOp.querySelector(".cta-txt"),
        ctaCover = spaUsdOp.querySelector(".cta-redact-cover"),
      
spausd_open = gsap.timeline({ paused: true });

      spausd_open.set(spaBg, { scale: 1, autoAlpha: 1 })
                .set(cursor, { display: "none" }, "<")
                .set(bookSuccessBtn, { display: "none" }, "<")
                .set(BookContain, { display: "flex" }, "<")
                .set(spaWrap, { display: "flex"}, "<")
                .set(spaBtnsWrap, { display: "block" }, "<")
                .set(SpaUsdCancel, { display: "flex" }, "<")
                .set(spaUsdWrap, { display: "block" }, "<")
                .set(CategorySpa, { display: "block" }, "<")
                .set(ctaCover, { scaleX: 0 }, "<")
                .to(ctaMask, {filter:"invert(100%)", duration: 0.001}, "<")
                .to(spaBg, { scale: 13.5, transformOrigin: "50% 50%", ease: "power2.inOut", duration: 1.2 })
                .to(ctaCover, { delay: 0.2, scaleX: 1, transformOrigin: "0% 100%", duration: 6, ease: "power0.easeOut" })
                .to(ctaTxt, { autoAlpha: 0, duration: 0.001})
                .to(ctaCover, { scaleX: 0, transformOrigin: "100% 0%", duration: 0.3, ease: "linear" })
                .to(CategorySpa, { delay: 0.2, x: 0, opacity: 1, ease: "expo.out", duration: 1.2 })
                .to(bookCancelinner, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
                .fromTo(spaUsdWrap, { x: -30, opacity: 0 }, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
                .set(bookHole, {display: "block"}, "<")
                .to([audioWrap, muzakTrack], { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
                .to(audioGraph, {clearProps: 'x'})
                .set(audioGraph, {x: 20.8})
                .set(ctaMask, {filter:"invert(0%)"});
       
  spaUsdOp.addEventListener('click', () => {   
    spausd_open.play(0);
  });
})

// CLOSE CB USD
SpaUsdCancel.forEach((SpaUsdCancel) => {
  if (!SpaUsdCancel) return
  const bookHole = document.querySelector('.book-hole')
  if (!bookHole) return
  const bookingContain = document.querySelector('.booking-items__container')
  if (!bookingContain) return

  gsap.set(bookHole, { scale: 1 })

  SpaUsdCancel.addEventListener("click", (e) => {
      let xDist = e.clientX - bookingContain.getBoundingClientRect().x + 4
      let yDist = e.clientY - bookingContain.getBoundingClientRect().y
      let spausd_cancel = gsap.timeline();

      gsap.set(bookHole, { left: xDist, top: yDist })
       
  spausd_cancel
             .set(".menu__btn", { display: "none", opacity: 0 })
             .set(".cta-txt", { autoAlpha: 1}, "<")
             .set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
             .set(spaBg, {autoAlpha: 0, scale: 1}, "<")
             .to([audioWrap, muzakTrack, spaUsdWrap, CategorySpa, bookCancelinner], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
             .fromTo(bookHole, { scale: 1 }, { duration: 1.2, scale: 2800, ease: "expoScale(1, 2800, power1.easeOut)" }, "-=0.2")
             .to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
             .set(CategorySpa, { x: -30, opacity: 0, display: "none" })
             .set([bookCancelinner, audioWrap, muzakTrack], { x: -30, opacity: 0 })
             .set(spaWrap, { display: "none" })
             .set(spaBtnsWrap, { display: "none" })
             .set(SpaUsdCancel, { display: "none" })
             .set(spaUsdWrap, { opacity: 0, display: "none", x: -30 })
             .set(BookContain, { display: "none" })
             .set(bookHole, {display: "none", clearProps: "all"})
             .to(".menu__btn", { delay: 2, display: "flex", opacity: 1, duration: 0.45 });

    });
})

// OPEN CB GBP
spaGbpOpen.forEach(spaGbpOp => {

    let ctaMask = spaGbpOp.querySelector(".book-cta__mask"),
        ctaTxt = spaGbpOp.querySelector(".cta-txt"),
        ctaCover = spaGbpOp.querySelector(".cta-redact-cover"),
      
spagbp_open = gsap.timeline({ paused: true });

      spagbp_open.set(spaBg, { scale: 1, autoAlpha: 1 })
                .set(cursor, { display: "none" }, "<")
                .set(bookSuccessBtn, { display: "none" }, "<")
                .set(BookContain, { display: "flex" }, "<")
                .set(spaWrap, { display: "flex"}, "<")
                .set(spaBtnsWrap, { display: "block" }, "<")
                .set(SpaGbpCancel, { display: "flex" }, "<")
                .set(spaGbpWrap, { display: "block" }, "<")
                .set(CategorySpa, { display: "block" }, "<")
                .set(ctaCover, { scaleX: 0 }, "<")
                .to(ctaMask, {filter:"invert(100%)", duration: 0.001}, "<")
                .to(spaBg, { scale: 13.5, transformOrigin: "50% 50%", ease: "power2.inOut", duration: 1.2 })
                .to(ctaCover, { delay: 0.2, scaleX: 1, transformOrigin: "0% 100%", duration: 6, ease: "power0.easeOut" })
                .to(ctaTxt, { autoAlpha: 0, duration: 0.001})
                .to(ctaCover, { scaleX: 0, transformOrigin: "100% 0%", duration: 0.3, ease: "linear" })
                .to(CategorySpa, { delay: 0.2, x: 0, opacity: 1, ease: "expo.out", duration: 1.2 })
                .to(bookCancelinner, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
                .fromTo(spaGbpWrap, { x: -30, opacity: 0 }, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
                .set(bookHole, {display: "block"}, "<")
                .to([audioWrap, muzakTrack], { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
                .to(audioGraph, {clearProps: 'x'})
                .set(audioGraph, {x: 20.8})
                .set(ctaMask, {filter:"invert(0%)"});
       
  spaGbpOp.addEventListener('click', () => {   
    spagbp_open.play(0);
  });
})

// CLOSE CB GBP
SpaGbpCancel.forEach((SpaGbpCancel) => {
  if (!SpaGbpCancel) return
  const bookHole = document.querySelector('.book-hole')
  if (!bookHole) return
  const bookingContain = document.querySelector('.booking-items__container')
  if (!bookingContain) return

  gsap.set(bookHole, { scale: 1 })

  SpaGbpCancel.addEventListener("click", (e) => {
      let xDist = e.clientX - bookingContain.getBoundingClientRect().x + 4
      let yDist = e.clientY - bookingContain.getBoundingClientRect().y
      let spagbp_cancel = gsap.timeline();

      gsap.set(bookHole, { left: xDist, top: yDist })
       
  spagbp_cancel
             .set(".menu__btn", { display: "none", opacity: 0 })
             .set(".cta-txt", { autoAlpha: 1}, "<")
             .set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
             .set(spaBg, {autoAlpha: 0, scale: 1}, "<")
             .to([audioWrap, muzakTrack, spaGbpWrap, CategorySpa, bookCancelinner], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
             .fromTo(bookHole, { scale: 1 }, { duration: 1.2, scale: 2800, ease: "expoScale(1, 2800, power1.easeOut)" }, "-=0.2")
             .to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
             .set(CategorySpa, { x: -30, opacity: 0, display: "none" })
             .set([bookCancelinner, audioWrap, muzakTrack], { x: -30, opacity: 0 })
             .set(spaWrap, { display: "none" })
             .set(spaBtnsWrap, { display: "none" })
             .set(SpaGbpCancel, { display: "none" })
             .set(spaGbpWrap, { opacity: 0, display: "none", x: -30 })
             .set(BookContain, { display: "none" })
             .set(bookHole, {display: "none", clearProps: "all"})
             .to(".menu__btn", { delay: 2, display: "flex", opacity: 1, duration: 0.45 });

    });
})

// OPEN CB SEK
spaSekOpen.forEach(spaSekOp => {

    let ctaMask = spaSekOp.querySelector(".book-cta__mask"),
        ctaTxt = spaSekOp.querySelector(".cta-txt"),
        ctaCover = spaSekOp.querySelector(".cta-redact-cover"),
      
spasek_open = gsap.timeline({ paused: true });

      spasek_open.set(spaBg, { scale: 1, autoAlpha: 1 })
                .set(cursor, { display: "none" }, "<")
                .set(bookSuccessBtn, { display: "none" }, "<")
                .set(BookContain, { display: "flex" }, "<")
                .set(spaWrap, { display: "flex"}, "<")
                .set(spaBtnsWrap, { display: "block" }, "<")
                .set(SpaSekCancel, { display: "flex" }, "<")
                .set(spaSekWrap, { display: "block" }, "<")
                .set(CategorySpa, { display: "block" }, "<")
                .set(ctaCover, { scaleX: 0 }, "<")
                .to(ctaMask, {filter:"invert(100%)", duration: 0.001}, "<")
                .to(spaBg, { scale: 13.5, transformOrigin: "50% 50%", ease: "power2.inOut", duration: 1.2 })
                .to(ctaCover, { delay: 0.2, scaleX: 1, transformOrigin: "0% 100%", duration: 6, ease: "power0.easeOut" })
                .to(ctaTxt, { autoAlpha: 0, duration: 0.001})
                .to(ctaCover, { scaleX: 0, transformOrigin: "100% 0%", duration: 0.3, ease: "linear" })
                .to(CategorySpa, { delay: 0.2, x: 0, opacity: 1, ease: "expo.out", duration: 1.2 })
                .to(bookCancelinner, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
                .fromTo(spaSekWrap, { x: -30, opacity: 0 }, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
                .set(bookHole, {display: "block"}, "<")
                .to([audioWrap, muzakTrack], { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
                .to(audioGraph, {clearProps: 'x'})
                .set(audioGraph, {x: 20.8})
                .set(ctaMask, {filter:"invert(0%)"});
       
  spaSekOp.addEventListener('click', () => {   
    spasek_open.play(0);
  });
})

// CLOSE CB SEK
SpaSekCancel.forEach((SpaSekCancel) => {
  if (!SpaSekCancel) return
  const bookHole = document.querySelector('.book-hole')
  if (!bookHole) return
  const bookingContain = document.querySelector('.booking-items__container')
  if (!bookingContain) return

  gsap.set(bookHole, { scale: 1 })

  SpaSekCancel.addEventListener("click", (e) => {
      let xDist = e.clientX - bookingContain.getBoundingClientRect().x + 4
      let yDist = e.clientY - bookingContain.getBoundingClientRect().y
      let spasek_cancel = gsap.timeline();

      gsap.set(bookHole, { left: xDist, top: yDist })
       
  spasek_cancel
             .set(".menu__btn", { display: "none", opacity: 0 })
             .set(".cta-txt", { autoAlpha: 1}, "<")
             .set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
             .set(spaBg, {autoAlpha: 0, scale: 1}, "<")
             .to([audioWrap, muzakTrack, spaSekWrap, CategorySpa, bookCancelinner], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
             .fromTo(bookHole, { scale: 1 }, { duration: 1.2, scale: 2800, ease: "expoScale(1, 2800, power1.easeOut)" }, "-=0.2")
             .to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
             .set(CategorySpa, { x: -30, opacity: 0, display: "none" })
             .set([bookCancelinner, audioWrap, muzakTrack], { x: -30, opacity: 0 })
             .set(spaWrap, { display: "none" })
             .set(spaBtnsWrap, { display: "none" })
             .set(SpaSekCancel, { display: "none" })
             .set(spaSekWrap, { opacity: 0, display: "none", x: -30 })
             .set(BookContain, { display: "none" })
             .set(bookHole, {display: "none", clearProps: "all"})
             .to(".menu__btn", { delay: 2, display: "flex", opacity: 1, duration: 0.45 });

    });
})

// OPEN CB SGD
spaSgdOpen.forEach(spaSgdOp => {

    let ctaMask = spaSgdOp.querySelector(".book-cta__mask"),
        ctaTxt = spaSgdOp.querySelector(".cta-txt"),
        ctaCover = spaSgdOp.querySelector(".cta-redact-cover"),
      
spasgd_open = gsap.timeline({ paused: true });

      spasgd_open.set(spaBg, { scale: 1, autoAlpha: 1 })
                .set(cursor, { display: "none" }, "<")
                .set(bookSuccessBtn, { display: "none" }, "<")
                .set(BookContain, { display: "flex" }, "<")
                .set(spaWrap, { display: "flex"}, "<")
                .set(spaBtnsWrap, { display: "block" }, "<")
                .set(SpaSgdCancel, { display: "flex" }, "<")
                .set(spaSgdWrap, { display: "block" }, "<")
                .set(CategorySpa, { display: "block" }, "<")
                .set(ctaCover, { scaleX: 0 }, "<")
                .to(ctaMask, {filter:"invert(100%)", duration: 0.001}, "<")
                .to(spaBg, { scale: 13.5, transformOrigin: "50% 50%", ease: "power2.inOut", duration: 1.2 })
                .to(ctaCover, { delay: 0.2, scaleX: 1, transformOrigin: "0% 100%", duration: 6, ease: "power0.easeOut" })
                .to(ctaTxt, { autoAlpha: 0, duration: 0.001})
                .to(ctaCover, { scaleX: 0, transformOrigin: "100% 0%", duration: 0.3, ease: "linear" })
                .to(CategorySpa, { delay: 0.2, x: 0, opacity: 1, ease: "expo.out", duration: 1.2 })
                .to(bookCancelinner, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
                .fromTo(spaSgdWrap, { x: -30, opacity: 0 }, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
                .set(bookHole, {display: "block"}, "<")
                .to([audioWrap, muzakTrack], { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
                .to(audioGraph, {clearProps: 'x'})
                .set(audioGraph, {x: 20.8})
                .set(ctaMask, {filter:"invert(0%)"});
       
  spaSgdOp.addEventListener('click', () => {   
    spasgd_open.play(0);
  });
})

// CLOSE CB SGD
SpaSgdCancel.forEach((SpaSgdCancel) => {
  if (!SpaSgdCancel) return
  const bookHole = document.querySelector('.book-hole')
  if (!bookHole) return
  const bookingContain = document.querySelector('.booking-items__container')
  if (!bookingContain) return

  gsap.set(bookHole, { scale: 1 })

  SpaSgdCancel.addEventListener("click", (e) => {
      let xDist = e.clientX - bookingContain.getBoundingClientRect().x + 4
      let yDist = e.clientY - bookingContain.getBoundingClientRect().y
      let spasgd_cancel = gsap.timeline();

      gsap.set(bookHole, { left: xDist, top: yDist })
       
  spasgd_cancel
             .set(".menu__btn", { display: "none", opacity: 0 })
             .set(".cta-txt", { autoAlpha: 1}, "<")
             .set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
             .set(spaBg, {autoAlpha: 0, scale: 1}, "<")
             .to([audioWrap, muzakTrack, spaSgdWrap, CategorySpa, bookCancelinner], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 })
             .fromTo(bookHole, { scale: 1 }, { duration: 1.2, scale: 2800, ease: "expoScale(1, 2800, power1.easeOut)" }, "-=0.2")
             .to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
             .set(CategorySpa, { x: -30, opacity: 0, display: "none" })
             .set([bookCancelinner, audioWrap, muzakTrack], { x: -30, opacity: 0 })
             .set(spaWrap, { display: "none" })
             .set(spaBtnsWrap, { display: "none" })
             .set(SpaSgdCancel, { display: "none" })
             .set(spaSgdWrap, { opacity: 0, display: "none", x: -30 })
             .set(BookContain, { display: "none" })
             .set(bookHole, {display: "none", clearProps: "all"})
             .to(".menu__btn", { delay: 2, display: "flex", opacity: 1, duration: 0.45 });
    });
})

// CLOSE CB SUCCESS - ALL CURRENCIES
spaExitSuccess.forEach((spaExitSuccess) => {
  if (!spaExitSuccess) return
  const bookHole = document.querySelector('.book-hole')
  if (!bookHole) return
  const bookingContain = document.querySelector('.booking-items__container')
  if (!bookingContain) return

  gsap.set(bookHole, { scale: 1 })

  spaExitSuccess.addEventListener("click", (e) => {
      let xDist = e.clientX - bookingContain.getBoundingClientRect().x + 4
      let yDist = e.clientY - bookingContain.getBoundingClientRect().y
      let spa_cancel_success = gsap.timeline();

      gsap.set(bookHole, { left: xDist, top: yDist })
         
  spa_cancel_success
           .set(".menu__btn", { display: "none", opacity: 0 })
           .set(cursor, { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
           .set(spaBg, {autoAlpha: 0, scale: 1}, "<")
           .set(".spa-booked__cover", { display: "block" }, "<")
           .set([".cb-btn__covered", ".rebs-btn__covered", ".rebm-btn__covered", ".rebxxl-btn__covered"], { display: "flex" }, "<")
           .to([".spa-success-marquee__wrap", ".spa-success-img__wrap"], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6})
           .to([CategorySpa, bookCancelinner, audioWrap, muzakTrack], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 }, "<")
           .to([spaEurWrap, spaUsdWrap, spaGbpWrap, spaSgdWrap, spaSekWrap], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 }, "<")
           .fromTo(bookHole, { scale: 1 }, { duration: 1.2, scale: 2800, ease: "expoScale(1, 2800, power1.easeOut)", onComplete() { sessionStorage.setItem("spaSuccessPlayed", true) } }, "-=0.2")
           .to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
           .set(CategorySpa, { x: -30, opacity: 0, display: "none" })
           .set([audioWrap, muzakTrack, bookCancelinner], { x: -30, opacity: 0 })
           .set(spaWrap, { display: "none" })
           .set(spaBtnsWrap, { display: "none" })
           .set([SpaEurCancel, SpaUsdCancel, SpaGbpCancel, SpaSgdCancel, SpaSekCancel, ".spa-eur__cta", ".spa-usd__cta", ".spa-gbp__cta", ".spa-sek__cta", ".spa-sgd__cta"], { display: "none" })
           .set([spaEurWrap, spaUsdWrap, spaGbpWrap, spaSgdWrap, spaSekWrap], { opacity: 0, display: "none", x: -30 })
           .set(BookContain, { display: "none" })
           .set(bookHole, {display: "none", clearProps: "all"})
           .set([".ready-fini__wrap", ".reb-success-marquee__wrap", ".reb-success-img__wrap", ".cb-success-marquee__wrap", ".cb-success-img__wrap", ".spa-success-marquee__wrap", ".spa-success-img__wrap", ".home-mrebel__qa-pong-wrap"], { yPercent: 101, opacity: 0 })
           .set([".reb-success-items__contain", ".cb-success-items__contain", ".spa-success-items__contain", ".q-a-pong__mask", ".ready-fini__mask"], { display: "none" })
           .to(".menu__btn", { delay: 2, display: "flex", opacity: 1, duration: 0.45 });

      });
  })
}
