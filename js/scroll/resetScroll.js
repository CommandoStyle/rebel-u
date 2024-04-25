export const resetScroll = () => {
  
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  
// Remove all GSAP Scroll triggers or we get 'em duplicated
let triggers = ScrollTrigger.getAll();
triggers.forEach( trigger => {
trigger.kill();
});

// Get the current ScrollSmoother instance and 'reset' it
var smoother = ScrollSmoother.get();
smoother.scrollTo(0);
smoother.kill();

}

