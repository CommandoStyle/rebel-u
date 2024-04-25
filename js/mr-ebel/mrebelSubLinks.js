export const mrebelSubLinks = () => {
      
  // Mr ebel sub links

var ebelSubBtn = gsap.utils.toArray( ".mrebel-sub__link" );

ebelSubBtn.forEach(function(el) {

let ebelSubTxtMask = el.querySelector(".txt-sub__mask"); 
let ebelSubTxtInner = el.querySelector(".txt-sub__inner"); 
let ebelSubScriptMask = el.querySelector(".script-sub__mask"); 
let ebelSubScriptInner = el.querySelector(".script-sub__inner"); 

gsap.set(ebelSubScriptMask, {yPercent: -100});
gsap.set(ebelSubScriptInner, {yPercent: 100});

const ebelSub_in  = gsap.timeline({paused: true});
const ebelSub_out = gsap.timeline({paused: true});

ebelSub_in
.to(ebelSubTxtMask, {yPercent: 100, duration: 0.5, ease: Power2.Out})
.to(ebelSubTxtInner, {yPercent: -100, duration: 0.5, ease: Power2.Out}, "<")
.to(ebelSubScriptMask, {yPercent: 0, duration: 0.5, ease: Power2.Out},  0)
.to(ebelSubScriptInner, {yPercent: 0, duration: 0.5, ease: Power2.Out}, "<");

ebelSub_out
.set(ebelSubTxtMask, {yPercent: -100})
.set(ebelSubTxtInner, {yPercent: 100})
.to(ebelSubTxtMask, {yPercent: 0, duration: 0.5, ease: Power2.Out})
.to(ebelSubTxtInner, {yPercent: 0, duration: 0.5, ease: Power2.Out}, "<")
.to(ebelSubScriptMask, {yPercent: 100, duration: 0.5, ease: Power2.Out},  0)
.to(ebelSubScriptInner, {yPercent: -100, duration: 0.5, ease: Power2.Out}, "<");

el.addEventListener('mouseenter', function() {
  ebelSub_in.restart(); 
  });

el.addEventListener('mouseleave', function() {
  ebelSub_out.restart(); 
  });
})

}
