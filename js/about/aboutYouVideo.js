
export const aboutYouVideo = () => {
 
// Video opt-in

//const vidBtn = document.querySelector(".vid-start__btn");

var vidBtn = gsap.utils.toArray(".vid-start__btn");
var vidCover = gsap.utils.toArray(".vid-start__backdrop");
let cursor = gsap.utils.toArray(".cursor-dot");

gsap.set(vidCover, {autoAlpha: 0, scale: 1});

 let numberOfVideos = 1; 
 let screen = document.getElementById("vid-container");
 
 for (let i = 0; i < numberOfVideos; i++){
   screen.innerHTML += "<video autoplay></video>";
 }

 let numberOfRows = Math.ceil(Math.sqrt(numberOfVideos));
 
 let gridTemplateColumnsValue = "";
 for (let row = 0; row < numberOfRows; row++){
   gridTemplateColumnsValue += "1fr ";
 }
 
 screen.style.gridTemplateColumns = gridTemplateColumnsValue;

 let videoElements = document.getElementsByTagName("video");
 
 vidBtn.forEach(vidBtn => {

 let showVid = gsap.timeline({ paused: true });

 showVid
        .to(vidCover, { autoAlpha: 1, duration: 0.001 })
        .to(cursor, { autoAlpha: 0, duration: 0.001 }, "<")
        .to(".cta-inner__wrap", {filter:"invert(100%)", duration: 0.001}, "<")
        .to(vidCover, { scale: 4, transformOrigin: "50% 50%", ease: "power2.inOut", duration: 0.7 })
        //.to(".cta-inner__wrap", {yPercent: -101, ease: "power2.easeOut", duration: 0.7 }, "<")
        .to(".cta-inner__contain", {delay: 0.45, x: 15, opacity: 0, ease: "expo.out", duration: 0.77}, "<")
        .fromTo(".vid-container", { clipPath: "circle(0% at center)" },
          { clipPath: "circle(140.9% at center)", delay: 0.65, duration: 1.9, ease: "power2.inOut", clearProps: "clipPath"})
        .to('.script-xl', { autoAlpha: 0, duration: 0.01 }, "<")
        .set(vidCover, { display: "none" })
        .set(".cta-inner__wrap", {filter:"invert(0%)"}) 
        .set(vidBtn, {display: "none"})
        .set([".cta-inner__wrap", ".cta-inner__contain"], { yPercent: 0 })
        .set(cursor, {delay: 1, autoAlpha: 1 });
 
vidBtn.addEventListener("click", () => {
    toggleCam();
    showVid.play(0); 
   })
 });

const toggleCam = () => {
     if (navigator.mediaDevices.getUserMedia) {
   navigator.mediaDevices.getUserMedia({ video: true })
     .then(function (stream) {
       for (let i = 0; i < videoElements.length; i++){
         videoElements[i].srcObject = stream;
           screen.play();             
        }
     })
   };
};

     // Hide cursor on Vid btn
    
     $( '.blk-cursor__buffer' ).mouseenter(function() {
      $('.cursor-dot').addClass('hide');
    });
    
      $( '.blk-cursor__buffer' ).mouseleave(function() {
      $('.cursor-dot').removeClass('hide');
    });

}
