export const homeStLottie = () => {

  gsap.registerPlugin(ScrollTrigger);

  const indieCircle = document.getElementById("independence-circled");
  const indieCircleData = indieCircle.getAttribute("lottie-data");
  indieCircle.load(indieCircleData);
  
  ScrollTrigger.create({
    trigger: ".sub-hero__inline-independence",
    start: "top 70%",
    onEnter: () => indieCircle.play(),
    //onLeave: () => indieCircle.seek('0%'),
    //onEnterBack: () => indieCircle.play(),
    //onLeaveBack: () => indieCircle.seek('0%')
  });

  const corpScrub = document.getElementById("corporate-scrub");
  const corpScrubData = corpScrub.getAttribute("lottie-data");
  corpScrub.load(corpScrubData);
  
  ScrollTrigger.create({
    trigger: ".sub-hero__inline-corporate",
    start: "top 75%",
    onEnter: () => corpScrub.play(),
    //onLeave: () => corpScrub.seek('0%'),
    //onEnterBack: () => corpScrub.play(),
    //onLeaveBack: () => corpScrub.seek('0%')
  });

  const rebBridge = document.getElementById("reb-bridge");
  const rebBridgeData = rebBridge.getAttribute("lottie-data");
  rebBridge.load(rebBridgeData);
  
  ScrollTrigger.create({
    trigger: ".reb-bridge__contain",
    start: "top 72%",
    onEnter: () => rebBridge.play(),
    //onLeave: () => rebBridge.seek('0%'),
    //onEnterBack: () => rebBridge.play(),
    //onLeaveBack: () => rebBridge.reverse()
  });
                
 var elem = document.getElementById('hap-sad');
 
 HappyScrollTrigger({
   target: "#hap-sad",
   path: "https://uploads-ssl.webflow.com/623c48203d10c80c144e7d4e/6252f419964a2b0d9f7c14e4_hap-sad.json",
   speed: "medium"
 });
 
 function HappyScrollTrigger(vars) {
   let playhead = {frame: 0},
     target = gsap.utils.toArray(vars.target)[0],
     speeds = {slow: "+=2000", medium: "+=1000", fast: "+=500"},
     st = {trigger: ".hap-sad__pin-track", start: "top top", end: "bottom 5%", scrub: 1},
     animation = lottie.loadAnimation({
       container: target,
       renderer: vars.renderer || "svg",
       loop: false,
       autoplay: false,
       path: vars.path
     });
   for (let p in vars) { 
     st[p] = vars[p];
   }
   animation.addEventListener("DOMLoaded", function() {
     gsap.to(playhead, {
       frame: animation.totalFrames - 1,
       ease: "none",
       onUpdate: () => animation.goToAndStop(playhead.frame, true),
       scrollTrigger: st
     });
   });
  }

  gsap.to('.hap-sad__pin-container', {
      scrollTrigger: {
        trigger: ".hap-sad__pin-track",
        start: "top top",
        end: "bottom 0%",
        pin: ".hap-sad__pin-track",
        scrub: true
      }
    });

}
