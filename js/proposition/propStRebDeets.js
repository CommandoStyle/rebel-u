export const propStRebDeets = () => {

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, ScrollToPlugin);
  
var points = gsap.utils.toArray('.reb-items__point');

var height = 100 * points.length;

var rebTl = gsap.timeline({
 // defaults: { overwrite: "auto" },
  scrollTrigger: {
    trigger: ".reb-items__wrap",
    start: "top top",
    end: "+="+height+"%",
    scrub: 2,
    toggleActions: "play none none reverse",
    id: "points",
    pin: "overflow",
    snap: 
    {snapTo: "labelsDirectional",
    duration: {min: 0.2, max: 0.4},
    delay: 0.1,
    ease: "power1.easeOut" }
    //snap: 1 / (points.length - 1)
  }
})

ScrollTrigger.create({
  trigger: ".reb-items__contain",
  start: "top top",
  end: "+="+height+"%",
  scrub: true,
  toggleActions: "play none none reverse",
  pin: ".reb-items__wrap", // 750vh in loco
  pinSpacing: false,
  id: "pinning"
})

points.forEach(function(elem, i) {
  
gsap.set(elem, { position: "absolute", top: 0 });
//gsap.set('#reb-item__img-1', { autoAlpha: 1, clipPath: "inset(0% 0% 0% 0%)" });//"circle(110% at center)"
gsap.set('#reb-item__img-1', { clipPath: "inset(0% 0% 0% 0%)" });
gsap.set('#reb-item__img-5', { clipPath: "inset(0% 100% 0% 0%)", autoAlpha: 0 });
gsap.set('#reb-item__img-9', { clipPath: "inset(0% 100% 0% 0%)", autoAlpha: 0 }); //"circle(110% at center)"
gsap.set(['.is--s-scroll', '.is--m-scroll'], {scaleX: 0})

if (i == 0) {

  //rebTl.to(elem.querySelector('#reb-item__img'), { delay: 1, autoAlpha: 0, clipPath: "inset(0% 0% 0% 0%)", ease: Power1.easeInOut, duration: 1 }, i)//"circle(110% at center)"
  //rebTl.to(elem.querySelector('#reb-item__img'), { clipPath: "inset(0% 0% 0% 0%)", ease: Power1.easeInOut, duration: 1 }, i)//"circle(110% at center)"
  //rebTl.set(elem.querySelectorAll('.reb-items__txt'), { autoAlpha:1 }, i)
  
} else if (i == 5) {

  rebTl
  .set(elem.querySelector('#reb-item__img-5'), {autoAlpha: 1}, i)
  .fromTo(elem.querySelector('#reb-item__img-5'), { clipPath: "inset(0% 100% 0% 0%)" },
 { clipPath: "inset(0% 0% 0% 0%)", ease: "linear", delay: 0.3, duration: 0.7 }, i) //"circle(0% at center)" //"circle(110% at center)"
        .from(elem.querySelectorAll('.reb-items__txt'), { autoAlpha: 0, delay: 0.99, duration: 0.01, ease: "linear"}, i)
        .add("label" + i)
        .to('.is--s-scroll', {scaleX: 1, duration: 0.3, ease: "power1.easeOut", transformOrigin: "0% 100%"}, "-=0.3")

} else if (i == 9) {

        rebTl
        .set(elem.querySelector('#reb-item__img-9'), {autoAlpha: 1}, i)
        .fromTo(elem.querySelector('#reb-item__img-9'), { clipPath: "inset(0% 100% 0% 0%)" },
       { clipPath: "inset(0% 0% 0% 0%)", ease: "linear", delay: 0.3, duration: 0.7 }, i) //"circle(0% at center)" //"circle(110% at center)"
              .from(elem.querySelectorAll('.reb-items__txt'), { autoAlpha: 0, delay: 0.99, duration: 0.01, ease: "linear"}, i)
              .add("label" + i)
              .to('.is--m-scroll', {scaleX: 1, duration: 0.5, ease: "power1.easeOut", transformOrigin: "0% 100%"}, "-=0.5")

} else {

  rebTl
    //.set(elem.querySelector('#reb-item__img'), {autoAlpha: 1}, i)
.fromTo(elem.querySelector('#reb-item__img'), { clipPath: "inset(100% 0% 0% 0%)" //"circle(0% at center)"
}, { clipPath: "inset(0% 0% 0% 0%)", ease: "linear", delay: 0.3, duration: 0.7 }, i) //"circle(110% at center)"
  .from(elem.querySelectorAll('.reb-items__txt'), { autoAlpha: 0, delay: 0.99, duration: 0.01, ease: "linear"}, i)
  //.set(elem.querySelector('#reb-item__img'), {autoAlpha: 0}, i) //x: "100vw"
  .add("label" + i)
}
  
if (i !=points.length-1) {

  rebTl
      .to(elem.querySelectorAll('.reb-items__txt'), { autoAlpha: 0, delay: 0.99, duration: 0.01, ease: "linear" }, i + 1)//x: "-100vw", delay: 0.3, duration: 0.7, ease: Power1.easeInOut
      .to(elem.querySelector('#reb-item__img'), { clipPath: "inset(100% 0% 0% 0%)" }, 
        { clipPath: "inset(0% 0% 0% 0%)", ease: "linear", delay: 0.3, duration: 0.7, }, i + 1) //autoAlpha: 0 //autoAlpha: 0 , //"circle(0% at center)" 
 
    }

 });

 // REB scroll indication circle
       const penIndicator = lottie.loadAnimation({
        container: document.querySelector("#reb-scroll-ind"),
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: "https://uploads-ssl.webflow.com/64217a46f171f9b7cb4bcfcf/65abdc952194abdf889c56a8_circle2.json"
      });
      
      const lottiePlayhead = { frame: 0 };
      penIndicator.addEventListener("data_ready", () => {
        gsap.to(lottiePlayhead, {
          overwrite: "auto",
          frame: penIndicator.totalFrames - 1,
          ease: "none",
          onUpdate: () => penIndicator.goToAndStop(lottiePlayhead.frame, true),
          scrollTrigger: {
            trigger: ".reb-items__wrap",
            start: "top top",
            end: "+="+height+"%",
            scrub: true
          }
        });
      });

       // REB scroll indication circle 2
       const penIndicator2 = lottie.loadAnimation({
        container: document.querySelector("#reb-scroll-ind-2"),
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: "https://uploads-ssl.webflow.com/64217a46f171f9b7cb4bcfcf/65abdc952194abdf889c56a8_circle2.json"
      });
      
      const lottiePlayhead2 = { frame: 0 };
      penIndicator2.addEventListener("data_ready", () => {
        gsap.to(lottiePlayhead2, {
          overwrite: "auto",
          frame: penIndicator2.totalFrames - 1,
          ease: "none",
          onUpdate: () => penIndicator2.goToAndStop(lottiePlayhead2.frame, true),
          scrollTrigger: {
            trigger: ".reb-items__wrap",
            start: "top top",
            end: "+="+height+"%",
            scrub: true
          }
        });
      });

// REB animations 2.0 
  
// Preload images
const preloadImages = (selector = 'img') => {
    return new Promise((resolve) => {
        imagesLoaded(document.querySelectorAll(selector), {background: true}, resolve);
    });
};

/**
 * Class representing an image that has the repetitive hover effect 
 */
class ImageHover {
    // DOM elements
    DOM = {
        // main element (.image)
        el: null,
        // .image__element
        innerElems: null,
    }
    // Background image path
    bgImage;
    // Total inner image elments
    totalInnerElems;
    // Hover timeline
    hoverTimeline;

    /**
     * Constructor.
     * @param {Element} DOM_el - the .image element
     */
    constructor(DOM_el) {
        this.DOM = {el: DOM_el};
        
        // Get bg image url
        
        const style = window.getComputedStyle(this.DOM.el, false)  
				this.bgImage = style.backgroundImage.slice(4, -1).replace(/"/g, "");
        
        // Remove bg image
        gsap.set(this.DOM.el, {backgroundImage: 'none'});

        // Add the .image__element inner elements (data-repetition-elems times)
        // First inner element will have a wrapper with overflow hidden so it's image child can scale up or down
        this.totalInnerElems = +this.DOM.el.dataset.repetitionElems || 4;
        // Minimum of two inner elments
        this.totalInnerElems = this.totalInnerElems <= 1 ? 2 : this.totalInnerElems;
        
        let innerHTML = '';
        for (let i = 0, len = this.totalInnerElems || 1; i <= len - 1; ++i) {
            innerHTML += i === 0 ? 
                `<div class="image-element__wrap"><div class="image__element" style="background-image:url(${this.bgImage})"></div></div>` :
                `<div class="image__element" style="background-image:url(${this.bgImage})"></div>`    
        }

        // Append
        this.DOM.el.innerHTML = innerHTML;

        // Get inner .image__element
        this.DOM.innerElems = this.DOM.el.querySelectorAll('.image__element');

        // transform origin
        gsap.set([this.DOM.el, this.DOM.innerElems[0]], {transformOrigin: this.DOM.el.dataset.repetitionOrigin || '50% 50%'});
        
        // Hover timeline
        this.createHoverTimeline();

        //this.initEvents();
    }

    /**
     * Create the gsap timeline for the hover in/out animation
     */
    createHoverTimeline() {
        const property = this.DOM.el.dataset.repetitionAnimate || 'scale';
        let animationProperties = {
            duration: this.DOM.el.dataset.repetitionDuration || 0.8,
            ease: this.DOM.el.dataset.repetitionEase || 'power2.inOut',
            stagger: this.DOM.el.dataset.repetitionStagger || -0.1
        }, 
        firstInnerElementProperties = {};

        animationProperties[property] = i => +!i;
        // initial scale of first inner element
        firstInnerElementProperties[property] = this.DOM.el.dataset.repetitionInitialScale || 2;
        
        this.hoverTimeline = gsap.timeline({paused: false, repeat: -1})
        .set(this.DOM.innerElems[0], firstInnerElementProperties)
        .to([this.DOM.innerElems], animationProperties, 0)
    }

}

preloadImages('[data-repetition]').then(() => {
    // Initialize the hover effect on the images
    [...document.querySelectorAll('.repeat-image-wrapper')].forEach(el => new ImageHover(el));
});

		ScrollTrigger.create({
            trigger: ".anim-trigger-start",
            onEnter: () => this.hoverTimeline.play(),
            //onLeave: () => this.hoverTimeline.pause(),
            //onEnterBack: () => this.hoverTimeline.pause(),
            onLeaveBack: () => this.hoverTimeline.pause()
          });

          ScrollTrigger.create({
            trigger: ".container.is--wtfaq-reb",
            onEnter: () => this.hoverTimeline.pause(),
            onEnterBack: () => this.hoverTimeline.reverse(),
            onLeaveBack: () => this.hoverTimeline.play()
          });

// Skip direction arrow
let scrollDirArrow = gsap.timeline( { paused: true });
let direction = -1;

scrollDirArrow.fromTo([".skip-btn-arrow__wrap", ".skip-btn-arrow-up__wrap"], { rotateX: 0 }, { rotateX: 180, duration: 0.2, overwrite: 'auto', ease: "power1.easeOut" })
              .fromTo([".reb__skip-btn", ".spa__skip-btn"], { display: "flex" }, { display: "none", duration: 0, overwrite: 'auto' }, "<")
              .fromTo([".reb__skip-up-btn", ".spa__skip-up-btn"], { display: "none" }, { display: "flex", duration: 0, overwrite: 'auto' }, "<").progress(1);

ScrollTrigger.create({
  //invalidateOnRefresh: false,
  //scrub: 2, 
  onRefresh: () => scrollDirArrow.pause(),
  onUpdate: (self) => {
    if (self.direction !== direction) {
    self.direction === 1 ? scrollDirArrow.reverse(0) : scrollDirArrow.play(); 
    direction = self.direction;
      }
    },
  onLeave: () => scrollDirArrow.play()
})


}
