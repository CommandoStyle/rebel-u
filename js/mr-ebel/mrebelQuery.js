export const mrebelQuery = () => {

gsap.registerPlugin(ExpoScaleEase);

let mm = gsap.matchMedia();

// PONG ANIM MINI
var QApongMini = gsap.timeline({ repeat: -1, paused: true });

QApongMini
      .to(".mini-a__wrap", {
          x: "0.5em",
          duration: 1.5,
          ease: Expo.easeOut })
      .to(".mini-and__wrap", {
          x: "-1.8em", 
          duration: 1.5,
          rotation: 0,
          ease: Power1.easeOut },"-=1.5")
      .to(".mini-q__wrap", {
          x: "0.5em",
          duration: 1.5,
          ease: Expo.easeIn },"-=1.5")
      .to(".mini-q__wrap", {
          x: "0em",
          duration: 1.5,
          ease: Expo.easeOut })
      .to(".mini-and__wrap", {
          x: "0em", 
          duration: 1.5,
          //rotation: 360,
          ease: Power1.easeOut },"-=1.5")
      .to(".mini-a__wrap", {
          x: "0em",
          duration: 1.5,
          ease: Expo.easeIn },"-=1.5");


// SET QUERY COVER IF ALREADY COMPLETED
if (sessionStorage.getItem("querySuccessPlayed", true)) {

  gsap.set(".query-away__cover", { autoAlpha: 1, display: "flex" });
  gsap.set(".oval-cta__btn", { autoAlpha: 0, display: "none" });
  QApongMini.play();
  
} 

// GLOBAL QUERY VARS
var queryCancelinner = gsap.utils.toArray('.query-cancel__track');
var QueryContain = gsap.utils.toArray('.query-items__container');
var CategoryQ = gsap.utils.toArray('.category-query__track');
var queryBg = gsap.utils.toArray('.query__backdrop');
//var QueryTopMask = gsap.utils.toArray(['.query-top-bar__mask', '.query-cancel__mask']);
let cursor = gsap.utils.toArray(".cursor-dot");
var queryOpen = gsap.utils.toArray('.mrebel__submit-query');
var queryInnerWrap = gsap.utils.toArray('.query-inner__wrap');
var queryCancel = gsap.utils.toArray(".query-cancel");
var queryCancelSuccess = gsap.utils.toArray(".query-cancel__success");
//var queryHole = gsap.utils.toArray(".query-hole");
var navBg = gsap.utils.toArray('.nav__backdrop');

// GSAP SET QUERY
gsap.set(queryCancelinner, { x: -30, opacity: 0 });
gsap.set(CategoryQ, { display: "none", x: -30, opacity: 0 });
gsap.set(QueryContain, { display: "none" });
gsap.set(queryBg, { autoAlpha: 0 });
//gsap.set(QueryTopMask, { yPercent: 101 });
gsap.set(queryInnerWrap, { opacity: 0, x: -30, display: "none" });
gsap.set(queryCancel, { display: "none" });
//gsap.set(".query-q__wrap", { xPercent: -60 });
gsap.set(navBg, {autoAlpha: 0});

// OPEN QUERY
// DESKTOP
mm.add("(min-width: 991px)", () => {
      
queryOpen.forEach(queryOpen => {

  let ctaMask = queryOpen.querySelector(".book-cta__mask"),
      
query_open = gsap.timeline({ paused: true });

    query_open.set(queryBg, { scale: 1, autoAlpha: 1 })
              .set(cursor, { scale: 0, autoAlpha: 0 }, "<")
              .set([QueryContain, queryCancel], { display: "flex" }, "<")
              .set(queryInnerWrap, { display: "flex" }, "<")
              .set(CategoryQ, { display: "block" }, "<")
              .set(".redact-cover-query", { scaleX: 0 }, "<")
              .set([".redact-cover-query-exit", ".redact-cover-nav"], { scaleX: 0 }, "<") 
	      .set(".query-exit-txt", { autoAlpha: 1 }, "<")
	      .set(".query-menu-txt", {autoAlpha: 0}, "<")
              .set(".nav__items-container", {display: "none" }, "<")
              .to(ctaMask, {filter:"invert(100%)", duration: 0.001}, "<")
              .to(queryBg, { scale: 24, transformOrigin: "50% 50%", ease: "expoScale(1, 24, power2.inOut)", duration: 1 })
              .set(".touch-print-open__wrap", { autoAlpha: 0 }, "-=0.75")
              .to(".redact-cover-query", { delay: 0.2, scaleX: 1, transformOrigin: "0% 100%", duration: 4, ease: "power0.easeOut" })
              .to(".query-txt", { autoAlpha: 0, duration: 0.001})
              .to(".redact-cover-query", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.3, ease: "linear" })
              .to(CategoryQ, { delay: 0.2, x: 0, opacity: 1, ease: "expo.out", duration: 1.2 })
              .to(queryCancelinner, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
              .fromTo(queryInnerWrap, { x: -30, opacity: 0 }, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
              .set(navBg, {scale: 40, autoAlpha: 1, display: "block"})
	      .set(".beta__contain", {display: "none"})
              .set(ctaMask, {filter:"invert(0%)" })
              .set(".touch-print-open__wrap", { autoAlpha: 1 })
	      .set([".menu__btn", ".currency__btn", ".home-nav__btn", ".nav__logo-btn"], { display: "flex", overwrite: 'auto' })
              .set([".home-logo", ".beta__txt", ".menu-txt", ".touch-print-open__wrap", ".query-txt", ".currencies-list__contain", ".query-away__track", ".mrebel-says__category-contain"], { opacity: 1, overwrite: 'auto' });
       
    queryOpen.addEventListener('click', () => {   
      query_open.play(0);
  });
})

// CLOSE QUERY

//All devices: close query
queryCancel.forEach((queryCancel) => {
  if (!queryCancel) return
  //const queryHole = document.querySelector('.query-hole')
  //if (!queryHole) return
  const queryContain = document.querySelector('.query-items__container')
  if (!queryContain) return

  //gsap.set(queryHole, { scale: 1 })

  queryCancel.addEventListener("click", (e) => {
      //let xDist = e.clientX - queryContain.getBoundingClientRect().x + 4
      //let yDist = e.clientY - queryContain.getBoundingClientRect().y
      let query_cancel = gsap.timeline();

      //gsap.set(queryHole, { left: xDist, top: yDist })
       
query_cancel
         .set(queryBg, {autoAlpha: 0, scale: 1})
	 .set(cursor, { scale: 0.5, autoAlpha: 1, left: "-1.65em", top: "1.7em", overwrite: 'auto' })
         .set(".query-txt", { autoAlpha: 1 })
	 .set(".beta__contain", {display: "flex"})
         .to(queryInnerWrap, { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 }, "<")
         .to(CategoryQ, { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 }, "<")
         .fromTo(navBg, { scale:40 }, {scale: 0, ease: Expo.easeOut, duration: 1.2 }, "-=0.2")
	 .to([".redact-cover-query-exit", ".redact-cover-nav"], { delay: 0.2, scaleX: 1, transformOrigin: "0% 100%", duration: 0.169, ease: "linear"}) 
	 .to(".query-menu-txt", { autoAlpha: 1, duration: 0.001 })
	 .to(".query-exit-txt", { autoAlpha: 0, duration: 0.001 }, "<")
	 .set([queryCancel, QueryContain], { display: "none" })
	 .to([".redact-cover-query-exit", ".redact-cover-nav"], { scaleX: 0, transformOrigin: "100% 0%", duration: 0.169, ease: "linear"})	 
	 .set(navBg, { autoAlpha: 0 })
	 .set(CategoryQ, { x: -30, opacity: 0, display: "none" }) 
         .set(queryInnerWrap, { opacity: 0, display: "none", x: -30 })
	 .set(queryCancelinner, { x: -30, opacity: 0 });

    })
  });
});

// MOBILE
mm.add("(max-width: 990px)", () => {
      
queryOpen.forEach(queryOpen => {

  let ctaMask = queryOpen.querySelector(".book-cta__mask"),
      
query_open = gsap.timeline({ paused: true });

    query_open.set(queryBg, { scale: 1, autoAlpha: 1 })
              .set(cursor, { scale: 0, autoAlpha: 0 }, "<")
              .set(QueryContain, { display: "flex" }, "<")
              .set(queryCancel, { display: "flex" }, "<")
              .set(queryInnerWrap, { display: "flex" }, "<")
              .set(CategoryQ, { display: "block" }, "<")
              .set(".redact-cover-query", { scaleX: 0 }, "<")
              .set(".nav__items-container", {display: "none" }, "<")
              .to(ctaMask, {filter:"invert(100%)", duration: 0.001}, "<")
              .to(queryBg, { scale: 24, transformOrigin: "50% 50%", ease: "expoScale(1, 24, power2.inOut)", duration: 1 })
              .set(".touch-print-open__wrap", { autoAlpha: 0 }, "-=0.67")
              .to(".beta__contain", {display: "none", duration: 0.001}, "-=0.5")
              .to(".redact-cover-query", { delay: 0.2, scaleX: 1, transformOrigin: "0% 100%", duration: 4, ease: "power0.easeOut" })
              .to(".query-txt", { autoAlpha: 0, duration: 0.001})
              .to(".redact-cover-query", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.3, ease: "linear" })
              .to(CategoryQ, { delay: 0.2, x: 0, opacity: 1, ease: "expo.out", duration: 1.2 })
              .to(queryCancelinner, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
              .fromTo(queryInnerWrap, { x: -30, opacity: 0 }, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
              .set(".query-hole-mobile", {display: "flex"}, "<")
              .set(ctaMask, {filter:"invert(0%)" });
       
    queryOpen.addEventListener('click', () => {   
      query_open.play(0);
  });
})

// CLOSE QUERY

//All devices: close query
queryCancel.forEach((queryCancel) => {
  if (!queryCancel) return
  const queryHoleMobile = document.querySelector(".query-hole-mobile")
  if (!queryHoleMobile) return
  const queryContain = document.querySelector('.query-items__container')
  if (!queryContain) return

  gsap.set(queryHoleMobile, { scale: 1, display: "none" })

  queryCancel.addEventListener("touchstart", (e) => {

   let touch = e.targetTouches[0]; 
   let xDist = touch.clientX - queryContain.getBoundingClientRect().x
   let yDist = touch.clientY - queryContain.getBoundingClientRect().y
   let query_cancel = gsap.timeline();

   gsap.set(queryHoleMobile, { display: "flex", left: xDist, top: yDist, xPercent: -50, yPercent: -50 });
       
query_cancel
         .set(".menu__btn", { display: "none", opacity: 0 })
         .set(".query-txt", { autoAlpha: 1 })
         .set(".touch-print-open__wrap", { autoAlpha: 1 })
         .set(cursor, { scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
         .set(queryBg, {autoAlpha: 0, scale: 1}, "<")
         .to(queryInnerWrap, { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 }, "<")
         .to(CategoryQ, { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 }, "<")
         .to(queryCancelinner, { x: 30, opacity: 0, ease: "expo.out", duration: 0.4 }, "<")
         .fromTo(queryHoleMobile, { force3D: false, scale: 1 }, { force3D: false, duration: 1.2, scale: 280, ease: "expoScale(1, 280, power1.easeOut)" }, "-=0.4")
         .to(".beta__contain", {display: "flex", duration: 0.001}, "-=0.6")
         .to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
         .set(CategoryQ, { x: -30, opacity: 0, display: "none" })
         .set(queryCancelinner, { x: -30, opacity: 0 })
         .set(queryCancel, { display: "none" })
         .set(queryInnerWrap, { opacity: 0, display: "none", x: -30 })
         .set(QueryContain, { display: "none" })
         .set(queryHoleMobile, {display: "none", clearProps: "all"})
         .to(".menu__btn", { delay: 2, display: "flex", opacity: 1, duration: 0.45 });

    })
  });
});

// PONG ANIM SUCCESS
gsap.set(".home-mrebel__qa-pong-wrap", { yPercent: 101, opacity: 0 });
gsap.set(".q-a-pong__mask", { display: "none" });

// DESKTOP
mm.add("(min-width: 992px)", () => {

  var QApongSuccess = gsap.timeline({ repeat: -1, paused: true });

  QApongSuccess
  .to(".a-contain", {
      x: "5.22em",
      duration: 2.2,
      ease: Expo.easeOut })
  .to(".ampersand-contain", {
      x: "-45.6em", 
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
      x: "0em", 
      duration: 2.2,
      rotation: 360,
      ease: Power1.easeOut },"-=2.2")
  .to(".a-contain", {
      x: "0em",
      duration: 2.2,
      ease: Expo.easeIn },"-=2.2");

      // QUERY SUBMISSION TRIGGER
var qsubmit = gsap.timeline({ paused: true });

qsubmit
        .set(".q-a-pong__mask", { delay: 0.3, display: "block" })
        .to(".home-mrebel__qa-pong-wrap", { duration: 0.66, yPercent: 0, opacity: 1, ease: "power4.easeOut" })
        .to(".query-cancel", {display: "none", duration: 0.001 })
        .to(".query-cancel__success", {display: "flex", duration: 0.001}, "<");
  
window.addEventListener('PaperformSubmission', querySuccess);

function querySuccess() {
  qsubmit.play();
  QApongSuccess.play(); 
  };  

  });

// iPAD
mm.add("(max-width: 991px) and (min-width: 429px)", () => {

  var QApongSuccess = gsap.timeline({ repeat: -1, paused: true });
 
  QApongSuccess.to(".a-contain", {
      x: "6.12em",
      duration: 1.8,
      ease: Expo.easeOut }, "<")
  .to(".ampersand-contain", {
      x: "-11.6em", 
      duration: 1.8,
      rotation: 0,
      ease: Power1.easeOut }, "<")
  .to(".q-contain", {
      x: "6.12em",
      duration: 1.8,
      ease: Expo.easeIn }, "<")
  .to(".q-contain", {
      x: "0em",
      duration: 1.8,
      ease: Expo.easeOut })
  .to(".ampersand-contain", {
      x: "0em", 
      duration: 1.8,
      rotation: 360,
      ease: Power1.easeOut }, 1.8)
  .to(".a-contain", {
      x: "0em",
      duration: 1.8,
      ease: Expo.easeIn }, "<");

      // QUERY SUBMISSION TRIGGER
var qsubmit = gsap.timeline({ paused: true });

qsubmit
        .set(".q-a-pong__mask", { delay: 0.3, display: "block" })
        .to(".home-mrebel__qa-pong-wrap", { duration: 0.66, yPercent: 0, opacity: 1, ease: "power4.easeOut" })
        .to(".query-cancel", {display: "none", duration: 0.001 })
        .to(".query-cancel__success", {display: "flex", duration: 0.001}, "<");
  
window.addEventListener('PaperformSubmission', querySuccess);

function querySuccess() {
  qsubmit.play();
  QApongSuccess.play(); 
  };  

});

// MOBILE
mm.add("(max-width: 428px)", () => {

  var QApongSuccess = gsap.timeline({ repeat: -1, paused: true });

QApongSuccess 
  .to(".a-contain", {
    x: "2.5em",
    duration: 1.2,
    ease: Expo.easeOut },"<")
.to(".ampersand-contain", {
    x: "-5.8em", 
    duration: 1.2,
    rotation: 0,
    ease: Power1.easeOut },"<")
.to(".q-contain", {
    x: "2.5em",
    duration: 1.2,
    ease: Expo.easeIn },"<")
.to(".q-contain", {
    x: "0em",
    duration: 1.2,
    ease: Expo.easeOut })
.to(".ampersand-contain", {
    x: "0.2em", 
    duration: 1.2,
    rotation: 360,
    ease: Power1.easeOut }, 1.2)
.to(".a-contain", {
    x: "0em",
    duration: 1.2,
    ease: Expo.easeIn },"<");

    // QUERY SUBMISSION TRIGGER
var qsubmit = gsap.timeline({ paused: true });

qsubmit
        .set(".q-a-pong__mask", { delay: 0.3, display: "block" })
        .to(".home-mrebel__qa-pong-wrap", { duration: 0.66, yPercent: 0, opacity: 1, ease: "power4.easeOut" })
        .to(".query-cancel", {display: "none", duration: 0.001 })
        .to(".query-cancel__success", {display: "flex", duration: 0.001}, "<");
  
window.addEventListener('PaperformSubmission', querySuccess);

function querySuccess() {
  qsubmit.play();
  QApongSuccess.play(); 
  };  

});



// CLOSE QUERY SUCCESS

//All devices: close query - success
queryCancelSuccess.forEach((queryCancelSuccess) => {
  if (!queryCancelSuccess) return
  const queryHole = document.querySelector('.query-hole')
  if (!queryHole) return
  const queryContain = document.querySelector('.query-items__container')
  if (!queryContain) return

  gsap.set(queryHole, { scale: 1 })

  queryCancelSuccess.addEventListener("click", (e) => {
      let xDist = e.clientX - queryContain.getBoundingClientRect().x + 4
      let yDist = e.clientY - queryContain.getBoundingClientRect().y
      let query_cancel_success = gsap.timeline();

      gsap.set(queryHole, { left: xDist, top: yDist })
              
query_cancel_success
         .set(".menu__btn", { display: "none", opacity: 0 })
         .set(".query-txt", { autoAlpha: 1 })
         .set(cursor, { scale: 0, autoAlpha: 0}, "<")
         .set(queryBg, {autoAlpha: 0, scale: 1}, "<")
         .set(".query-away__cover", { display: "flex" }, "<")
         .set(".oval-cta__btn", { display: "none" }, "<")
         .to(".home-mrebel__qa-pong-wrap", { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 }, "<")
         .to([CategoryQ, queryCancelinner, queryInnerWrap], { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 }, "<")
         .fromTo(queryHole, { scale: 1 }, { duration: 1.2, scale: 2800, ease: "expoScale(1, 2800, power1.easeOut)", onComplete() { sessionStorage.setItem("querySuccessPlayed", true) } }, "-=0.2")
         .to(".beta__contain", {display: "flex", duration: 0.001}, "-=0.6")
         .to(cursor, { delay: 0.55, scale: 0.07, autoAlpha: 1, duration: 0.45 })
         .set(CategoryQ, { x: -30, opacity: 0, display: "none" })
         .set(queryCancelinner, { x: -30, opacity: 0 })
         .set(queryCancel, { display: "none" })
         .set(queryInnerWrap, { opacity: 0, display: "none", x: -30 })
         .set(QueryContain, { display: "none" })
         .set(queryHole, {display: "none", clearProps: "all"})
         .set([".ready-fini__wrap", ".reb-success-marquee__wrap", ".reb-success-img__wrap", ".cb-success-marquee__wrap", ".cb-success-img__wrap", ".home-mrebel__qa-pong-wrap"], { yPercent: 101, opacity: 0 })
         //.set([".ready-fini__mask", ".reb-success-marquee__mask", ".reb-success-img__mask", ".cb-success-marquee__mask", ".cb-success-img__mask", ".q-a-pong__mask"], { yPercent: 101 })
         .set([".reb-success-items__contain", ".cb-success-items__contain", ".q-a-pong__mask", ".ready-fini__mask"], { display: "none" })
         .to(".menu__btn", { delay: 2, display: "flex", opacity: 1, duration: 0.45 });

      QApongMini.play();
      QApongSuccess.pause(); 

    })
});


}
