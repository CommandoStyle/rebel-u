export function navMenuNew() {

gsap.registerPlugin(ExpoScaleEase);

var navWrap = gsap.utils.toArray('.nav__items-container');
var navBg = gsap.utils.toArray('.nav__backdrop');
var navRevIn = gsap.utils.toArray(".menu__txt-inner");
var navOpen = gsap.utils.toArray('.menu__btn');
var navClose = gsap.utils.toArray('.menu-close__btn');
var navBotRev = gsap.utils.toArray(".nav-bot-rev");
var navHole = gsap.utils.toArray(".nav-hole");

let mm = gsap.matchMedia();

gsap.set(navRevIn, { x: -30, opacity: 0 });
gsap.set(navBotRev, { x: -30, opacity: 0 });
gsap.set(".nav-bot-rev-vert", { y: 15, opacity: 0 });
gsap.set(navWrap, {display: 'none'});
//gsap.set(navBg, {autoAlpha: 0, scale: 0.025});
gsap.set(".home-nav__btn", {autoAlpha: 0});
gsap.set(".nav__logo-btn", {autoAlpha: 1});
gsap.set(".exit-txt", {autoAlpha: 0});
gsap.set(".current-arrow-right__track", { xPercent: 105 });
gsap.set(".current-arrow-left__track", { xPercent: -105 });
gsap.set(".redact-cover-top-left", {scaleX: 0});

//Desktop
mm.add("(min-width: 990px)", () => {

navOpen.forEach(navOpen => {
            
var navIn = new gsap.timeline({ paused: true });

     navIn
          .set(navHole, {display: "none"})
          .set(navRevIn, { x: -30, opacity: 0 }, "<")
          .set(navBotRev, { x: -30, opacity: 0 })
          .set(".nav-bot-rev-vert", { y: 15, opacity: 0 })
          .set(navBg, {scale: 1, autoAlpha: 1, display: "block"})
          .set(".current-arrow-right__track", { xPercent: 105, x: 0, opacity: 1 })
          .set(".current-arrow-left__track", { xPercent: -105, x: 0, opacity: 1 })
          .set(".redact-cover-nav", { scaleX: 0, backgroundColor: '#ffffff'})
          .set(".cursor-dot", { autoAlpha: 0 }, "<")
          .set(navOpen, {display: "none"}, "<")
          .set(navClose, {display: "flex"}, "<")
          .to(".menu-txt", { color: '#ffffff', duration: 0.001}, "<")
          //.to(".touch-print-open__wrap", {autoAlpha: 0, duration: 0.001}, "<")
          //.to(".touch-print-close__wrap", {filter: "invert(1)", autoAlpha: 1, duration: 0.001}, "<")
          .fromTo(navBg, { scale: 1 }, { scale: 40, transformOrigin: "50% 50%", ease: "expoScale(1, 40)", duration: 1 })
          .to(".nav__logo-btn", { autoAlpha: 0, duration: 0.01 }, "-=0.22")
          .to(".home-nav__btn", { autoAlpha: 1, duration: 0.01 }, "<")
          //.to(".beta__contain", {display: "none", duration: 0.01}, "<")
          .to(navWrap, { display: 'flex', backgroundColor: '#000000', duration: 0.001 },"<")
          .to(navRevIn, { duration: 1.6, x: 0, stagger: 0.03, ease: "expo.out" }, "<")
          .to(navRevIn, { duration: 0.8, opacity: 1, stagger: 0.03, ease: "linear" }, "<")
          .to(navBotRev, { x: 0, opacity: 1, ease: "power1.out", duration: 0.4 }, "-=1.4")
          .to(".nav-bot-rev-vert", { y: 0, opacity: 1, ease: "power1.out", duration: 0.4 }, "<")
          .to(".redact-cover-nav", { scaleX: 1, transformOrigin: "0% 100%", duration: 0.129, ease: "linear"}, "-=0.271")
          .set(navHole, {display: "block"}, "<")
          .to(".exit-txt", { autoAlpha: 1, duration: 0.001 })
          .to(".menu-txt", { autoAlpha: 0, duration: 0.001 }, "<")
          .to(".redact-cover-nav", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.129, ease: "linear"})
          .to([".current-arrow-right__track", ".current-arrow-left__track"], { xPercent: 0, ease: "power3.easeOut", duration: 0.55 });
             
          navOpen.addEventListener('click', () => {
            navIn.play(0);
            });
           })  

    navClose.forEach(navClose => {
           
      var navOut = new gsap.timeline({ paused: true });

     navOut.set(navClose, {display: "none"})
           .set(navOpen, {display: "flex"}, "<")
           .set(navHole, {display: "none"}, "<")
           .to([navRevIn, ".current-arrow-right__track", ".current-arrow-left__track"], { duration: 0.7, x: 30, stagger: 0, ease: "expo.out" }, "<")
           .to([navRevIn, ".current-arrow-right__track", ".current-arrow-left__track"], { duration: 0.5, opacity: 0, stagger: 0, ease: "linear" }, "<")
           .to(navBotRev, { x: 30, opacity: 0, ease: "expo.out", duration: 0.3 },"-=0.65")
           .to(".nav-bot-rev-vert", { y: -15, opacity: 0, ease: "expo.out", duration: 0.3 },"<")
           .fromTo(navBg, { scale: 40 }, {scale: 0.6, ease: Expo.easeOut, duration: 1.1 })
           .to(".home-nav__btn", { autoAlpha: 0, duration: 0.01 }, "-=1")
           .to(".nav__logo-btn", { autoAlpha: 1, duration: 0.01 }, "<")
           //.to(".beta__contain", {display: "flex", duration: 0.01 }, "<")
           .to(navWrap, { display: 'none', duration: 0.01 },"<") 
           .to(".cursor-dot", { autoAlpha: 1, duration: 0.001}, "-=0.27")
           .to(navBg, { autoAlpha: 0, duration: 0.001 },"<")
           .to([".menu-txt", ".exit-txt"], { color: '#000000', duration: 0.001}, "<")
           //.to(".touch-print-open__wrap", {autoAlpha: 1, duration: 0.001}, "<")
           //.to(".touch-print-close__wrap", {filter: "invert(0)", autoAlpha: 0, duration: 0.001}, "<")
           .to(".redact-cover-nav", { scaleX: 0, backgroundColor: '#000000'}, "<") 
           .to(".redact-cover-nav", { scaleX: 1, transformOrigin: "0% 100%", duration: 0.129, ease: "linear"})
           .to(".exit-txt", { autoAlpha: 0, duration: 0.001 })
           .to(".menu-txt", { autoAlpha: 1, duration: 0.001 }, "<")   
           .to(".redact-cover-nav", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.129, ease: "linear"})
           .set(".redact-cover-nav", { scaleX: 0 })
           .set(navRevIn, { x: -30, opacity: 0 })
           .set(navBotRev, { x: -30, opacity: 0 })
           .set(".nav-bot-rev-vert", { y: 155, opacity: 0 })
           .set(".exit-txt", { color: '#ffffff'})
           .set(".current-arrow-right__track", { xPercent: 105, x: 0, opacity: 1 })
           .set(".current-arrow-left__track", { xPercent: -105, x: 0, opacity: 1 });                       

           navClose.addEventListener('click', () => {
            navOut.play(0);
            });
          })
});

//iPAD and MOBILE
mm.add("(max-width: 991px)", () => {

  navOpen.forEach(navOpen => {
            
    var navIn = new gsap.timeline({ paused: true });
    
         navIn
              .set('.nav-hole-mobile', {display: "none"})
              .set(navRevIn, { x: -30, opacity: 0 }, "<")
              .set(navBotRev, { x: -30, opacity: 0 })
              .set(".nav-bot-rev-vert", { y: 15, opacity: 0 })
              .set(navBg, {scale: 1, autoAlpha: 1, display: "block"})
              .set(".current-arrow-right__track", { xPercent: 105, x: 0, opacity: 1 })
              .set(".current-arrow-left__track", { xPercent: -105, x: 0, opacity: 1 })
              //.set(".redact-cover-nav", { scaleX: 0, backgroundColor: '#ffffff'})
              .set(".cursor-dot", { autoAlpha: 0 }, "<")
              .set(navOpen, {display: "none"}, "<")
              .set(navClose, {display: "flex"}, "<")
              //.to(".menu-txt", { color: '#ffffff', duration: 0.001}, "<")
              .to(".touch-print-open__wrap", {autoAlpha: 0, duration: 0.001}, "<")
              .to(".touch-print-close__wrap", {filter: "invert(1)", autoAlpha: 1, duration: 0.001}, "<")
              .fromTo(navBg, { scale: 1 }, { scale: 40, transformOrigin: "50% 50%", ease: "expoScale(1, 40)", duration: 1 })
              .to(".nav__logo-btn", { autoAlpha: 0, duration: 0.01 }, "-=0.45")
              .to(".home-nav__btn", { autoAlpha: 1, duration: 0.01 }, "<")
              .to(".beta__contain", {display: "none", duration: 0.01}, "<")
              .to(navWrap, { display: 'flex', backgroundColor: '#000000', duration: 0.001 },"<")
              .to(navRevIn, { duration: 1.6, x: 0, stagger: 0.03, ease: "expo.out" }, "<")
              .to(navRevIn, { duration: 0.8, opacity: 1, stagger: 0.03, ease: "linear" }, "<")
              .to(navBotRev, { x: 0, opacity: 1, ease: "power1.out", duration: 0.4 }, "-=1.4")
              .to(".nav-bot-rev-vert", { y: 0, opacity: 1, ease: "power1.out", duration: 0.4 }, "<")
              //.to(".redact-cover-nav", { scaleX: 1, transformOrigin: "0% 100%", duration: 0.129, ease: "linear"}, "-=0.271")
              .set('.nav-hole-mobile', {display: "block"}, "<")
              //.to(".exit-txt", { autoAlpha: 1, duration: 0.001 })
              //.to(".menu-txt", { autoAlpha: 0, duration: 0.001 }, "<")
              //.to(".redact-cover-nav", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.129, ease: "linear"})
              .to([".current-arrow-right__track", ".current-arrow-left__track"], { xPercent: 0, ease: "power3.easeOut", duration: 0.55 });
                 
              navOpen.addEventListener('click', () => {
                navIn.play(0);
                });
               })  
    
        navClose.forEach(navClose => {
               
          var navOut = new gsap.timeline({ paused: true });
    
         navOut.set(navClose, {display: "none"})
               .set(navOpen, {display: "flex"}, "<")
               .set('.nav-hole-mobile', {display: "none"}, "<")
               .to([navRevIn, ".current-arrow-right__track", ".current-arrow-left__track"], { duration: 0.7, x: 30, stagger: 0, ease: "expo.out" }, "<")
               .to([navRevIn, ".current-arrow-right__track", ".current-arrow-left__track"], { duration: 0.5, opacity: 0, stagger: 0, ease: "linear" }, "<")
               .to(navBotRev, { x: 30, opacity: 0, ease: "expo.out", duration: 0.3 },"-=0.65")
               .to(".nav-bot-rev-vert", { y: -15, opacity: 0, ease: "expo.out", duration: 0.3 },"<")
               .fromTo(navBg, { scale:40 }, {scale: 0.6, ease: Expo.easeOut, duration: 1.1 })
               .to(".home-nav__btn", { autoAlpha: 0, duration: 0.01 }, "-=0.9")
               .to(".nav__logo-btn", { autoAlpha: 1, duration: 0.01 }, "<")
               .to(".beta__contain", {display: "flex", duration: 0.01}, "<")
               .to(navWrap, { display: 'none', duration: 0.01 },"<") 
               .to(".cursor-dot", { autoAlpha: 1, duration: 0.001}, "-=0.27")
               .to(navBg, { autoAlpha: 0, duration: 0.001 },"<")
               //.to([".menu-txt", ".exit-txt"], { color: '#000000', duration: 0.001}, "<")
               .to(".touch-print-open__wrap", {autoAlpha: 1, duration: 0.001}, "<")
               .to(".touch-print-close__wrap", {filter: "invert(0)", autoAlpha: 0, duration: 0.001}, "<")
               //.to(".redact-cover-nav", { scaleX: 0, backgroundColor: '#000000'}, "<") 
               //.to(".redact-cover-nav", { scaleX: 1, transformOrigin: "0% 100%", duration: 0.129, ease: "linear"})
               //.to(".exit-txt", { autoAlpha: 0, duration: 0.001 })
               //.to(".menu-txt", { autoAlpha: 1, duration: 0.001 }, "<")   
               //.to(".redact-cover-nav", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.129, ease: "linear"})
               //.set(".redact-cover-nav", { scaleX: 0 })
               .set(navRevIn, { x: -30, opacity: 0 })
               .set(navBotRev, { x: -30, opacity: 0 })
               .set(".nav-bot-rev-vert", { y: 155, opacity: 0 })
               //.set(".exit-txt", { color: '#ffffff'})
               .set(".current-arrow-right__track", { xPercent: 105, x: 0, opacity: 1 })
               .set(".current-arrow-left__track", { xPercent: -105, x: 0, opacity: 1 });                       
    
               navClose.addEventListener('click', () => {
                navOut.play(0);
                });
              })

});

// Menu items image reveal hover

const map = (x, a, b, c, d) => (x - a) * (d - c) / (b - a) + c;

const lerp = (a, b, n) => (1 - n) * a + n * b;

const clamp = (num, min, max) => num <= min ? min : num >= max ? max : num;

const getMousePos = (e) => {
    let posx = 0;
    let posy = 0;
    if (!e) e = window.event;
    if (e.clientX || e.clientY) {
        posx = e.clientX;
        posy = e.clientY;
    } 
    else if (e.clientX || e.clientY)    {
        posx = e.clientX + body.scrollLeft + document.documentElement.scrollLeft;
        posy = e.clientY + body.scrollTop + document.documentElement.scrollTop;
    }

    return { x : posx, y : posy };
};

class Menu {

  constructor(el) {

    this.DOM = {el: el};

    this.DOM.menuItems = this.DOM.el.querySelectorAll('.menu__item');
    
    this.animatableProperties = {
        // translationX
        tx: {previous: 0, current: 0, amt: 0.12},
        // translationY
        ty: {previous: 0, current: 0, amt: 0.12},
        // Rotation angle
        rotation: {previous: 0, current: 0, amt: 0.12}
    };

    this.menuItems = [];

    [...this.DOM.menuItems].forEach((item, pos) => {
      this.menuItems.push(new MenuItem(item, pos, this.animatableProperties));
    });

  }

}

class MenuItem {

  constructor(el, inMenuPosition, animatableProperties) {

    this.DOM = {el: el};
    this.inMenuPosition = inMenuPosition;
    this.animatableProperties = animatableProperties;
    this.layout();
    this.initEvents();
  }

  layout() {
          this.DOM.reveal = document.createElement('div');
          this.DOM.reveal.className = 'hover-reveal';
          this.DOM.reveal.style.transformOrigin = "0% 0%";
          this.DOM.revealInner = document.createElement('div');
          this.DOM.revealInner.className = 'hover-reveal__inner';
          this.DOM.revealImage = document.createElement('div');
          this.DOM.revealImage.className = 'hover-reveal__img';
          this.DOM.revealImage.style.backgroundImage = `url(${images[this.inMenuPosition][1]})`;
          this.DOM.revealInner.appendChild(this.DOM.revealImage);
          this.DOM.reveal.appendChild(this.DOM.revealInner);
          this.DOM.el.appendChild(this.DOM.reveal);
  }

  calcBounds() {
    this.bounds = {
      el: this.DOM.el.getBoundingClientRect(),
      reveal: this.DOM.reveal.getBoundingClientRect()
    };
  }

  initEvents() {
    this.mouseenterFn = (ev) => {
      this.showImage();
      this.firstRAFCycle = true;
      this.loopRender();
    };

    this.mouseleaveFn = () => {
      this.stopRendering();
      this.hideImage();
    };

    this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
    this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
  }

  showImage() {
    gsap.killTweensOf(this.DOM.revealInner);
    gsap.killTweensOf(this.DOM.revealImage);     
   
    this.tl = gsap.timeline({
      onStart: () => {
        // show both image and its parent element
        this.DOM.reveal.style.opacity =
          this.DOM.revealInner.style.opacity = 1;
        gsap.set(this.DOM.el, {zIndex: images.length});
        gsap.set(this.DOM.revealInner, {scale: 0.8, xPercent: 2.5, yPercent: 2.5});
      }
    })
                          
        // animate the image wrap
        .to(this.DOM.revealInner, {
          duration: 0.55,
          opacity: 1, 
          scale: 1,
          xPercent: 2.5,
          yPercent: 2.5,  
          ease: "sine.easeOut",
          overwrite: "auto"
      });
                   
  }

  hideImage() {
    gsap.killTweensOf(this.DOM.revealInner);
    gsap.killTweensOf(this.DOM.revealImage);
               
    this.tl = gsap.timeline({
      onStart: () => {
        gsap.set(this.DOM.el, {zIndex: 1});
      },
      onComplete: () => {
        gsap.set(this.DOM.reveal, {opacity: 0});
      }
    })

    .to(this.DOM.revealInner, {
      duration: 0.77,
      opacity: 0, 
      scale: .8, 
      xPercent: 2.5,
      yPercent: 2.5, 
      ease: "sine.easeIn",
      overwrite: "auto"
  });           
  
  }

  loopRender() {
    if ( !this.requestId ) {
      this.requestId = requestAnimationFrame(() => this.render());
    }
  }

  stopRendering() {
    if ( this.requestId ) {
      window.cancelAnimationFrame(this.requestId);
      this.requestId = undefined;
    }
  }

  render() {
    this.requestId = undefined;

    if ( this.firstRAFCycle ) {
      this.calcBounds();
    }

    const mouseDistanceX = clamp(Math.abs(mousePosCache.x - mousepos.x), 0, 80);
    direction = {x: mousePosCache.x-mousepos.x, y: mousePosCache.y-mousepos.y};
    mousePosCache = {x: mousepos.x, y: mousepos.y};

    this.animatableProperties.tx.current = Math.abs(mousepos.x - this.bounds.el.left) - this.bounds.reveal.width/2;
    this.animatableProperties.ty.current = Math.abs(mousepos.y - this.bounds.el.top) - this.bounds.reveal.height/2;
    this.animatableProperties.rotation.current = this.firstRAFCycle ? 0 : map(mouseDistanceX,0,80,0,direction.x < 0 ? 60 : -60);
    this.animatableProperties.tx.previous = this.firstRAFCycle ? this.animatableProperties.tx.current : lerp(this.animatableProperties.tx.previous, this.animatableProperties.tx.current, this.animatableProperties.tx.amt);
    this.animatableProperties.ty.previous = this.firstRAFCycle ? this.animatableProperties.ty.current : lerp(this.animatableProperties.ty.previous, this.animatableProperties.ty.current, this.animatableProperties.ty.amt);
    this.animatableProperties.rotation.previous = this.firstRAFCycle ? this.animatableProperties.rotation.current : lerp(this.animatableProperties.rotation.previous, this.animatableProperties.rotation.current, this.animatableProperties.rotation.amt);
   
    gsap.set(this.DOM.reveal, {
      x: this.animatableProperties.tx.previous,
      y: this.animatableProperties.ty.previous,
      rotation: this.animatableProperties.rotation.previous,
    });

    this.firstRAFCycle = false;
    this.loopRender();
  }

}

const menuEl = document.querySelector('.menu');

const imagesEl = document.querySelectorAll('.menu__item');
let imagesArr = [];
imagesEl.forEach(image => {
  imagesArr.push(image.dataset.img);
});
const images = Object.entries(imagesArr);
let mousepos = {x: 0, y: 0};
let mousePosCache = mousepos;
let direction = {x: mousePosCache.x-mousepos.x, y: mousePosCache.y-mousepos.y};

window.addEventListener('mousemove', ev => mousepos = getMousePos(ev));

new Menu(menuEl);
            
}
