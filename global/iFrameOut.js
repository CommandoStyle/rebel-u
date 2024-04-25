import gsap from 'gsap';

const iframeOut = () => {

window.onmessage = function (event) {
    if (event.data === "link-out") {
    
      closeIFrame();

    }
  };

// CLOSE QUIZ

function closeIFrame() {

var quizCancelinner = gsap.utils.toArray('.quiz-cancel__track');
var CategoryQuiz = gsap.utils.toArray('.category-quiz__track');
var audioWrap = gsap.utils.toArray(['.audio-graphic__wrap', '.quiz-audio-graphic__wrap']);
var muzakTrack = gsap.utils.toArray('.muzak-marquee__track'); 
var quizInnerWrap = gsap.utils.toArray('.quiz-inner__booking-wrap');
const quizHole = document.querySelectorAll(".quiz-hole");
var quizBg = gsap.utils.toArray('.quiz__backdrop');
var queryBg = gsap.utils.toArray('.query__backdrop');
var queryHole = gsap.utils.toArray(".query-hole");
var queryCancelinner = gsap.utils.toArray('.query-cancel__track');
var queryInnerWrap = gsap.utils.toArray('.query-inner__wrap');
var CategoryQ = gsap.utils.toArray('.category-query__track');


let iframe_cancel = gsap.timeline();
       
 iframe_cancel

         .to([CategoryQuiz, audioWrap, muzakTrack, quizCancelinner, quizInnerWrap, queryCancelinner, queryInnerWrap, CategoryQ],{ delay: 0.2, x: 30, ease: "expo.out", opacity: 0, duration: 0.6 })
         .set(".transition-cover", { display: 'block' })
         .set([quizBg, queryBg], {autoAlpha: 0, scale: 1}, "<")
         .set([quizHole, queryHole], {display: "none", clearProps: "all"}, "<");

         document.getElementById("iFrameOut").click();

    }
}

export default iframeOut; 