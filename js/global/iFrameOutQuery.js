export const iframeOutQuery = () => {

window.onmessage = function (event) {
    if (event.data === "link-out-query") {
    
      closeIFrameQ();

    }
  };

// CLOSE QUIZ

function closeIFrameQ() {

var queryBg = gsap.utils.toArray('.query__backdrop');
var queryHole = gsap.utils.toArray(".query-hole");
var queryCancelinner = gsap.utils.toArray('.query-cancel__track');
var queryInnerWrap = gsap.utils.toArray('.query-inner__wrap');
var CategoryQ = gsap.utils.toArray('.category-query__track');
var QueryContain = gsap.utils.toArray('.query-items__container');


let iframeQ_cancel = gsap.timeline();
       
 iframeQ_cancel

         .to([queryCancelinner, queryInnerWrap, CategoryQ],{ delay: 0.2, x: 30, ease: "expo.out", opacity: 0, duration: 0.6 })
         .set(".transition-cover", { display: 'block' })
         .set(queryBg, {autoAlpha: 0, scale: 1}, "<")
         .set(queryHole, {display: "none", clearProps: "all"}, "<")
         .set(QueryContain, {display: "none", clearProps: "all"}, "<");

         document.getElementById("iFrameOutQuery").click();

    }
}
