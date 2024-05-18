export const quizGlobal = () => {

// SET QUIZ COVER OTHER PAGES IF ALREADY COMPLETED
if (sessionStorage.getItem("quizSuccessPlayed", true)) {

  gsap.set(".quiz-done__cover", { display: "block" });
  
} 

gsap.registerPlugin(ExpoScaleEase);

let mm = gsap.matchMedia();

// GLOBAL QUIZ VARS
var quizCancelinner = gsap.utils.toArray('.quiz-cancel__track');
var QuizContain = gsap.utils.toArray('.quiz-items__container');
var CategoryQuiz = gsap.utils.toArray('.category-quiz__track');
var QuizWrap = gsap.utils.toArray('.quiz__booking-wrap');
var quizBg = gsap.utils.toArray('.quiz__backdrop');
let cursor = gsap.utils.toArray(".cursor-dot");
var quizOpen = gsap.utils.toArray('.quiz-cta__btn');
var quizInnerWrap = gsap.utils.toArray('.quiz-inner__booking-wrap');
const quizCancel = document.querySelectorAll(".quiz-cancel");
const quizCancelSuccess = document.querySelectorAll(".quiz-cancel__success");
const quizHole = document.querySelectorAll(".quiz-hole");
const quizHoleMobile = document.querySelectorAll(".quiz-hole-mobile");

gsap.registerPlugin(ExpoScaleEase);

// GSAP SET QUIZ
gsap.set(quizCancelinner, { x: -30, opacity: 0 });
gsap.set(CategoryQuiz, { display: "none", x: -30, opacity: 0 });
gsap.set([QuizWrap, QuizContain, quizCancel, quizCancelSuccess], { display: "none" });
gsap.set(quizBg, { autoAlpha: 0 });
gsap.set(quizInnerWrap, { opacity: 0, display: "none" });
gsap.set(".arrow-redact-cover", { scaleX: 0 });

//QUIZ FINI MARQUEE
function horizontalLoop(items, config) {
	items = gsap.utils.toArray(items);
	config = config || {};
	let tl = gsap.timeline({repeat: config.repeat, paused: config.paused, defaults: {ease: "none"}, onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100)}),
		length = items.length,
		startX = items[0].offsetLeft,
		times = [],
		widths = [],
		xPercents = [],
		curIndex = 0,
		pixelsPerSecond = (config.speed || 1) * 100,
		snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
		totalWidth, curX, distanceToStart, distanceToLoop, item, i;
	gsap.set(items, { // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
		xPercent: (i, el) => {
			let w = widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
			xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / w * 100 + gsap.getProperty(el, "xPercent"));
			return xPercents[i];
		}
	});
	gsap.set(items, {x: 0});
	totalWidth = items[length-1].offsetLeft + xPercents[length-1] / 100 * widths[length-1] - startX + items[length-1].offsetWidth * gsap.getProperty(items[length-1], "scaleX") + (parseFloat(config.paddingRight) || 0);
	for (i = 0; i < length; i++) {
		item = items[i];
		curX = xPercents[i] / 100 * widths[i];
		distanceToStart = item.offsetLeft + curX - startX;
		distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
		tl.to(item, {xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond}, 0)
		  .fromTo(item, {xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100)}, {xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false}, distanceToLoop / pixelsPerSecond)
		  .add("label" + i, distanceToStart / pixelsPerSecond);
		times[i] = distanceToStart / pixelsPerSecond;
	}
	function toIndex(index, vars) {
		vars = vars || {};
		(Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length); // always go in the shortest direction
		let newIndex = gsap.utils.wrap(0, length, index),
			time = times[newIndex];
		if (time > tl.time() !== index > curIndex) { // if we're wrapping the timeline's playhead, make the proper adjustments
			vars.modifiers = {time: gsap.utils.wrap(0, tl.duration())};
			time += tl.duration() * (index > curIndex ? 1 : -1);
		}
		curIndex = newIndex;
		vars.overwrite = true;
		return tl.tweenTo(time, vars);
	}
	tl.next = vars => toIndex(curIndex+1, vars);
	tl.previous = vars => toIndex(curIndex-1, vars);
	tl.current = () => curIndex;
	tl.toIndex = (index, vars) => toIndex(index, vars);
	tl.times = times;
	tl.progress(1, true).progress(0, true); // pre-render for performance
	if (config.reversed) {
	  tl.vars.onReverseComplete();
	  tl.reverse();
	}
	return tl;
} 

const finiMarquee = gsap.utils.toArray(".marquee__items.is--ready-fini");

const loopFini = horizontalLoop(finiMarquee, {repeat: -1, speed: 0.4, reversed: true, paused: true});
	
// OPEN QUIZ
// DESKTOP
mm.add("(min-width: 992px)", () => {
	
quizOpen.forEach(quizOpen => {

  let arrowMask = quizOpen.querySelector(".is--arrow-inner"),
      arrowTrack = quizOpen.querySelector(".lg-arrow__track"),
      
quiz_open = gsap.timeline({ paused: true });

    quiz_open.set(quizBg, { scale: 1, autoAlpha: 1 })
              .set(cursor, { scale: 0, autoAlpha: 0 }, "<")
              .set(QuizContain, { display: "flex" }, "<")
              .set(QuizWrap, { display: "flex"}, "<")
              .set(quizCancel, { display: "flex" }, "<")
              .set(quizCancelSuccess, { display: "none" }, "<")
              .set(quizInnerWrap, { display: "flex" }, "<")
              .set(CategoryQuiz, { display: "block" }, "<")
              .to(arrowMask, {filter:"invert(100%)", duration: 0.001}, "<")
              .to(quizBg, { scale: 12, transformOrigin: "50% 50%", ease: "power2.inOut", duration: 1.2 })
	      .set(".touch-print-open__wrap", { autoAlpha: 0 }, "-=0.6")
              .to(".arrow-redact-cover", { delay: 0.2, scaleX: 1, transformOrigin: "0% 100%", duration: 4.3, ease: "power0.easeOut" })
              .to(arrowTrack, { autoAlpha: 0, duration: 0.001})
              .to(".arrow-redact-cover", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.3, ease: "linear" })
              .to([quizCancelinner, CategoryQuiz], { delay: 0.2, x: 0, opacity: 1, ease: "expo.out", duration: 1.2 })
              .fromTo(quizInnerWrap, { x: -30, opacity: 0 }, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
              .set(quizHole, {display: "block"}, "<")
              .set(arrowMask, { filter:"invert(0%)" })
              .set(arrowTrack, { autoAlpha: 1 })
	      .set(".touch-print-open__wrap", { autoAlpha: 1 });
       
 quizOpen.addEventListener('click', () => {   
    quiz_open.play(0);
  });
})

// CLOSE QUIZ

//All devices: close quiz
quizCancel.forEach((quizCancel) => {
    if (!quizCancel) return
    const quizHole = document.querySelector('.quiz-hole')
    if (!quizHole) return
    const quizContain = document.querySelector('.quiz-items__container')
    if (!quizContain) return

    gsap.set(quizHole, { scale: 1 })

    quizCancel.addEventListener("click", (e) => {
        // Calculate distance between user click and top left corner of button
        let xDist = e.clientX - quizContain.getBoundingClientRect().x + 4
        let yDist = e.clientY - quizContain.getBoundingClientRect().y
        let quiz_cancel = gsap.timeline();

        // Immediately set left and top properties to position the circle element where user clicks
        gsap.set(quizHole, { left: xDist, top: yDist })
       
  quiz_cancel
         .set(".menu__btn", { display: "none", opacity: 0 })
         .set(cursor, { scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
         .set(quizBg, {autoAlpha: 0, scale: 1}, "<")
         .to([CategoryQuiz, quizCancelinner, quizInnerWrap], { x: 30, ease: "expo.out", opacity: 0, duration: 0.6 }, "<")
         .fromTo(quizHole, { scale: 1 }, { duration: 1.2, scale: 2800, ease: "expoScale(1, 2800, power1.easeOut)" }, "-=0.2")
         .to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
         .set(CategoryQuiz, { x: -30, opacity: 0, display: "none" })
         .set(quizCancelinner, { x: -30, opacity: 0 })
         .set(quizCancel, { display: "none" })
         .set(quizInnerWrap, { opacity: 0, display: "none", x: -20 })
         .set(QuizContain, { display: "none" })
         .set(quizHole, {display: "none", clearProps: "all"})
         .to(".menu__btn", { delay: 2, display: "flex", opacity: 1, duration: 0.45 });

        })
      });
    });

// MOBILE
mm.add("(max-width: 428px)", () => {
	
quizOpen.forEach(quizOpen => {

  let arrowMask = quizOpen.querySelector(".is--arrow-inner"),
      arrowTrack = quizOpen.querySelector(".lg-arrow__track"),
      
quiz_open = gsap.timeline({ paused: true });

    quiz_open.set(quizBg, { scale: 1, autoAlpha: 1 })
              .set(cursor, { scale: 0, autoAlpha: 0 }, "<")
              .set(QuizContain, { display: "flex" }, "<")
              .set(QuizWrap, { display: "flex"}, "<")
              .set(quizCancel, { display: "flex" }, "<")
              .set(quizCancelSuccess, { display: "none" }, "<")
              .set(quizInnerWrap, { display: "flex" }, "<")
              .set(CategoryQuiz, { display: "block" }, "<")
              .to(arrowMask, {filter:"invert(100%)", duration: 0.001}, "<")
              .to(quizBg, { scale: 12, transformOrigin: "50% 50%", ease: "power2.inOut", duration: 1.2 })
	      .set(".touch-print-open__wrap", { autoAlpha: 0 }, "-=0.6")
              .to(".arrow-redact-cover", { delay: 0.2, scaleX: 1, transformOrigin: "0% 100%", duration: 4.3, ease: "power0.easeOut" })
              .to(arrowTrack, { autoAlpha: 0, duration: 0.001})
              .to(".arrow-redact-cover", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.3, ease: "linear" })
              .to([quizCancelinner, CategoryQuiz], { delay: 0.2, x: 0, opacity: 1, ease: "expo.out", duration: 1.2 })
              .fromTo(quizInnerWrap, { x: -30, opacity: 0 }, { x: 0, opacity: 1, ease: "expo.out", duration: 1.2 }, "<")
              .set('.quiz-hole-mobile', { scale: 1, display: "flex" }, "<")
              .set(arrowMask, { filter:"invert(0%)" })
              .set(arrowTrack, { autoAlpha: 1 });
	      
 quizOpen.addEventListener('click', () => {   
    quiz_open.play(0);
  });
})

// CLOSE QUIZ

//All devices: close quiz
quizCancel.forEach((quizCancel) => {
    //if (!quizCancel) return
    //const quizHoleMobile = document.querySelector('.quiz-hole-mobile')
    //if (!quizHoleMobile) return
   // const quizContain = document.querySelector('.quiz-items__container')
    //if (!quizContain) return

    //gsap.set('.quiz-hole-mobile', { scale: 1, display: "flex" });

    quizCancel.addEventListener("click", (e) => {
        // Calculate distance between user click and top left corner of button
        //let xDist = e.clientX - quizContain.getBoundingClientRect().x + 4
        //let yDist = e.clientY - quizContain.getBoundingClientRect().y
        let quiz_cancel = gsap.timeline();

        // Immediately set left and top properties to position the circle element where user clicks
        //gsap.set(quizHoleMobile, { left: xDist, top: yDist })
       
  quiz_cancel
         .set(".menu__btn", { display: "none", opacity: 0 })
         .set(cursor, { scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
         .set(quizBg, {autoAlpha: 0, scale: 1}, "<")
	 .set(".touch-print-open__wrap", { autoAlpha: 1 })
         .to([CategoryQuiz, quizCancelinner, quizInnerWrap], { x: 30, ease: "expo.out", opacity: 0, duration: 0.6 }, "<")
         .fromTo('.quiz-hole-mobile', { scale: 1 }, { duration: 1.2, scale: 280, ease: "expoScale(1, 280, power1.easeOut)" }, "-=0.4")
         .to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
         .set(CategoryQuiz, { x: -30, opacity: 0, display: "none" })
         .set(quizCancelinner, { x: -30, opacity: 0 })
         .set(quizCancel, { display: "none" })
         .set(quizInnerWrap, { opacity: 0, display: "none", x: -20 })
         .set(QuizContain, { display: "none" })
         .set('.quiz-hole-mobile', {display: "none", clearProps: "all", onComplete:  () => { ScrollTrigger.refresh(); } })
         .to(".menu__btn", { delay: 2, display: "flex", opacity: 1, duration: 0.45 });

        })
      });
    });

  // QUIZ SUCCESS

  gsap.set([".quiz-drop__contain", ".quiz-cancel__success"], { display: "none" });
  gsap.set("img", { xPercent: "-50%", yPercent: "-50%" });
  gsap.set(".ready-fini__mask", { x: -30, opacity: 0, display: "none" });
    
  var total = 22;
  var warp = document.getElementById("quiz-drop__contain"),  w = window.innerWidth , h = window.innerHeight;

   for (var i=0; i<total; i++){ 
     var Div = document.createElement('div');
     gsap.set(Div,{attr:{class:'reb-drop'}, x:R(0,w), y:R(-200  -150), z:R(-200, 200)});
     warp.appendChild(Div);
     quizanim(Div);
   }
  
   function quizanim(elem) { 
 
 // quiz logo drop
  var quizDrop = gsap.timeline ({ paused: true, repeat: 0 });
      
  quizDrop.from(elem, {delay: () => gsap.utils.random(0, 3.5), autoAlpha: 0, duration: 0.01})
  .to(".quiz-drop__contain", {zIndex: 120, duration: 0.01}, "<")
  .to(elem, {x:'+=100', duration: () => gsap.utils.random(1.5, 3.5), rotationZ: () => gsap.utils.random(0, 180), repeat:-1, yoyo:true, ease:Sine.easeInOut})
  .to(elem, {duration: () => gsap.utils.random(1.5, 3.5), rotationX: () => gsap.utils.random(0, 18),rotationY: () => gsap.utils.random(0, 36), repeat:-1, yoyo:true, ease:Sine.easeInOut}, "<")
  .to(elem, {duration: () => gsap.utils.random(1.5, 3.5), y:h+280, ease: Linear.easeNone}, "<")
  .to(elem, {autoAlpha: 0})
  .to(".quiz-drop__contain", {delay: 6, zIndex: 'auto'});
 
 // Reveal FINI marquee
  var quizSubmit = gsap.timeline({ paused: true });

  quizSubmit.set(".ready-fini__mask", { delay: 0.3, display: "block" })
            .set(".quiz-drop__contain", { display: "block" }, "<")
            .to(".ready-fini__mask", { duration: 0.7, x: 0, opacity: 1, ease: "expo.out" })
            .to(".quiz-cancel", {display: "none", duration: 0.001 })
            .to(".quiz-cancel__success", {display: "flex", duration: 0.001}, "<");
  
 // Paperform trigger
  window.addEventListener('PaperformSubmission', quizSuccess);
  
  function quizSuccess() {
    quizDrop.restart(1); 
    quizSubmit.play(0); 
    loopFini.play();
      }
   }
  
  function R(min,max) {return min+Math.random()*(max-min)};

//All devices: close quiz - SUCCESS
quizCancelSuccess.forEach((quizCancelSuccess) => {
  if (!quizCancelSuccess) return
  const quizHole = document.querySelector('.quiz-hole')
  if (!quizHole) return
  const quizContain = document.querySelector('.quiz-items__container')
  if (!quizContain) return

  gsap.set(quizHole, { scale: 1 })

quizCancelSuccess.addEventListener("click", (e) => {

      let xDist = e.clientX - quizContain.getBoundingClientRect().x + 4
      let yDist = e.clientY - quizContain.getBoundingClientRect().y
      let quiz_cancel_success = gsap.timeline();

      gsap.set(quizHole, { left: xDist, top: yDist })
              
    quiz_cancel_success
           .set(".menu__btn", { display: "none", opacity: 0 })
           .set(cursor, { scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
           .set(quizBg, {autoAlpha: 0, scale: 1}, "<")
           .set(".quiz-done__cover", { display: "block" }, "<")
           .to(".ready-fini__mask", { x: 30, opacity: 0, ease: "expo.out", duration: 0.6 }, "<")
           .to([CategoryQuiz, quizCancelinner, quizInnerWrap],{ x: 30, ease: "expo.out", opacity: 0, duration: 0.6 }, "<")
           .fromTo(quizHole, { scale: 1 }, { duration: 1.2, scale: 2800, ease: "expoScale(1, 2800, power1.easeOut)" }, "-=0.2")
           .to(cursor, { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
           .set(CategoryQuiz, { x: -30, yPercent: 0, display: "none" })
           .set(quizCancelinner, { x: -30, yPercent: 0 })
           .set([QuizContain, quizCancel, quizCancelSuccess, QuizWrap], { display: "none" })
           .set(quizInnerWrap, { opacity: 0, display: "none", x: -30 })
           .set(quizHole, {display: "none", clearProps: "all"})
           .to(".menu__btn", { delay: 2, display: "flex", opacity: 1, duration: 0.45, onComplete() { sessionStorage.setItem("quizSuccessPlayed", true) } })
           .set([".ready-fini__mask", ".reb-success-marquee__wrap", ".reb-success-img__wrap", ".cb-success-marquee__wrap", ".cb-success-img__wrap", ".q-a-pong__mask"], { x: -30, opacity: 0 })
           //.set([".ready-fini__mask", ".reb-success-marquee__mask", ".reb-success-img__mask", ".cb-success-marquee__mask", ".cb-success-img__mask", ".q-a-pong__mask"], { yPercent: 101 })
           .set([".reb-success-items__contain", ".cb-success-items__contain", ".q-a-pong__mask", ".ready-fini__mask"], { display: "none" });
  
           loopFini.pause();

      })
   });
}
