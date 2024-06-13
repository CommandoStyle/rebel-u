export function propCurrencyMenu() {

 // Currency menu vars

var currRev = gsap.utils.toArray(".currency-dropdown__wrap");
var navBotRev = gsap.utils.toArray(".nav-bot-rev");
var currBg = gsap.utils.toArray('.currency__backdrop');
var currWrap = gsap.utils.toArray('.currency__items-container');
var currencyOpen = gsap.utils.toArray('.currency__btn');
var currencyExit = gsap.utils.toArray('.currency-exit__btn');

let mm = gsap.matchMedia();

gsap.set(currRev, { x: -30, opacity: 0 });
gsap.set(currWrap, {display: 'none'});
gsap.set(currBg, {autoAlpha: 0});
gsap.set(currencyExit, {display: 'none'});
gsap.set(navBotRev, { x: -30, opacity: 0 });
gsap.set(".nav-bot-rev-vert", { y: 15, opacity: 0 });
gsap.set([".home-nav__btn", ".currency-active__btn"], {autoAlpha: 0});
gsap.set([".nav__logo-btn", ".currency__btn"], {autoAlpha: 1});
gsap.set(".currency-exit-txt", {autoAlpha: 0});
gsap.set(".current-arrow-right__track", { xPercent: 105 });
gsap.set(".current-arrow-left__track", { xPercent: -105 });

//Desktop
mm.add("(min-width: 990px)", () => {
 
currencyOpen.forEach(currOpen => {
      
var currencyIn = new gsap.timeline({ paused: true });

currencyIn.set(currRev, { x: -30, opacity: 0 })
          .set(navBotRev, { x: -30, opacity: 0 })
          .set(".nav-bot-rev-vert", { y: 15, opacity: 0 })
          .set(currBg, {scale: 1, display: "block" })
          .set(".redact-cover-nav", { scaleX: 0, backgroundColor: '#ffffff'}) 
          .set(".redact-cover-currency-lg", { scaleX: 0, backgroundColor: '#ffffff'})
          .set(".current-arrow__contain", { yPercent: 0 })
          .set(".current-arrow-right__track", { yPercent: 0, xPercent: 105 })
          .set(".current-arrow-left__track", { yPercent: 0, xPercent: -105 })
          .set(currBg, { autoAlpha: 1 })
          .set(".cursor-dot", {display: "none"}, "<")
          .set(currencyOpen, {display: "none"}, "<")
          .set(currencyExit, {display: "flex"}, "<")
          .set(".currencies-list__contain", { filter: 'invert(100%)'}, "<")
          .set([".menu__btn", ".menu-close__btn"], { pointerEvents: "none" }, "<")
          .fromTo(currBg, { scale: 1 }, { scale: 40, transformOrigin: "50% 50%", ease: Expo.easeInOut, duration: 1.2})
          .set(".menu-txt", { filter: 'invert(100%)' }, "-=0.8")
          .to(".beta__contain", {display: "none", duration: 0.01}, "-=0.68")
          .to(".nav__logo-btn", { autoAlpha: 0, duration: 0.01 }, "-=0.56")
          .to(".home-nav__btn", { autoAlpha: 1, duration: 0.01 }, "<") 
          .to(currWrap, { display: 'flex', duration: 0.001 },"<")
          .set('.hole.is--currency', {display: "block"}, "<")
          .to(currRev, { duration: 1.6, x: 0, stagger: 0.06, ease: "expo.out" }, "-=0.4")
          .to(currRev, { duration: 0.4, opacity: 1, stagger: 0.06, ease: "linear" }, "<")
          .to(navBotRev, { x: 0, opacity: 1, ease: "power1.out", duration: 0.4 }, "-=1.2" )
          .to(".nav-bot-rev-vert", { y: 0, opacity: 1, ease: "power1.out", duration: 0.4 }, "<")
          .to([".current-arrow-right__track", ".current-arrow-left__track"], { xPercent: 0, ease: "power3.easeOut", duration: 0.55 }, "-=0.15")
          .to(".redact-cover-currency-lg", { scaleX: 1, transformOrigin: "0% 100%", duration: 0.129, ease: "linear"}, ">")
          .to(".currency-exit-txt", { autoAlpha: 1, duration: 0.001 })
          .to(".currencies-list__contain", { autoAlpha: 0, duration: 0.001 }, "<")
          .to(".redact-cover-currency-lg", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.129, ease: "linear"})
          .to(".redact-cover-nav", { scaleX: 1, transformOrigin: "0% 100%", duration: 0.15, ease: "linear"});
          
          currOpen.addEventListener('click', () => {
            currencyIn.play(0);
            });
           })   

          
currencyExit.forEach(currExit => {

      var currencyOut = new gsap.timeline({paused: true});

      currencyOut
           .set(currencyExit, {display: "none"})
           .set(currencyOpen, {display: "flex"}, "<")
           .set('.hole.is--currency', { display: "none" },"<")
           .set([".menu__btn", ".menu-close__btn"], { pointerEvents: "auto" }, "<")
           .to(".redact-cover-nav", {scaleX: 0, transformOrigin: "100% 0%", duration: 0.15, ease: "linear"})
           .to([currRev, ".current-arrow-right__track", ".current-arrow-left__track"], { duration: 0.7, x: 30, stagger: 0, ease: "expo.out" }, "<")
           .to([currRev, ".current-arrow-right__track", ".current-arrow-left__track"], { duration: 0.5, opacity: 0, stagger: 0, ease: "linear" }, "<")
           .to(navBotRev, { x: 30, opacity: 0, ease: "expo.out", duration: 0.3 },"-=0.65")
           .to(".nav-bot-rev-vert", { y: -15, opacity: 0, ease: "expo.out", duration: 0.3 },"<")
           .fromTo(currBg, { scale:40 }, {scale: 0.6, ease: Expo.easeOut, duration: 1.1 })
           .to(".home-nav__btn", { autoAlpha: 0, duration: 0.01 }, "-=1.04")
           .to(".nav__logo-btn", { autoAlpha: 1, duration: 0.01 }, "<")
           .to(".beta__contain", {display: "flex", duration: 0.01}, "-=0.94")
           .to(currWrap, { display: 'none', duration: 0.01 },"<") 
           .to(".cursor-dot", { display: "flex", duration: 0.001 }, "-=0.27")
           .to(currBg, { autoAlpha: 0, duration: 0.001 },"<")
           .to(".currency-exit-txt", { color: '#000000', duration: 0.001}, "<")
           .to(".currencies-list__contain", { filter: 'invert(0%)', duration: 0.001}, "<")
           .set(".menu-txt", { filter: 'invert(0%)' }, "-=0.65")
           .to(".redact-cover-currency-lg", { scaleX: 0, backgroundColor: '#000000'}, "<") 
           .to(".redact-cover-currency-lg", { scaleX: 1, transformOrigin: "0% 100%", duration: 0.129, ease: "linear"})
           .to(".currency-exit-txt", { autoAlpha: 0, duration: 0.001 })
           .to(".currencies-list__contain", { autoAlpha: 1, duration: 0.001 }, "<")
           .to(".redact-cover-currency-lg", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.129, ease: "linear"})
           .set(currRev, { x: -20, opacity: 0 })
           .set(navBotRev, { x: -10, opacity: 0 })
           .set(".nav-bot-rev-vert", { y: 5, opacity: 0 })
           .set(".currency-exit-txt", { color: '#ffffff'})
           .set(".current-arrow-right__track", { xPercent: 105, x: 0, opacity: 1 })
           .set(".current-arrow-left__track", { xPercent: -105, x: 0, opacity: 1 }); 
           
           currExit.addEventListener('click', () => {
            currencyOut.play(0);
            });
          })
});

//iPAD and MOBILE
mm.add("(max-width: 991px)", () => {
 
currencyOpen.forEach(currOpen => {
      
var currencyIn = new gsap.timeline({ paused: true });

currencyIn.set(currRev, { x: -30, opacity: 0 })
          .set(navBotRev, { x: -30, opacity: 0 })
          .set(".nav-bot-rev-vert", { y: 15, opacity: 0 })
          .set(currBg, {scale: 1, display: "block" })
          .set(".redact-cover-nav", { scaleX: 0, backgroundColor: '#ffffff'}) 
          .set(".redact-cover-currency-lg", { scaleX: 0, backgroundColor: '#ffffff'})
          .set(".current-arrow__contain", { yPercent: 0 })
          .set(".current-arrow-right__track", { yPercent: 0, xPercent: 105 })
          .set(".current-arrow-left__track", { yPercent: 0, xPercent: -105 })
          .set(currBg, { autoAlpha: 1 })
          .set(".cursor-dot", {display: "none"}, "<")
          .set(currencyOpen, {display: "none"}, "<")
          .set(currencyExit, {display: "flex"}, "<")
          .set(".currencies-list__contain", { filter: 'invert(100%)'}, "<")
          .set([".menu__btn", ".menu-close__btn"], { pointerEvents: "none" }, "<")
          .fromTo(currBg, { scale: 1 }, { scale: 40, transformOrigin: "50% 50%", ease: Expo.easeInOut, duration: 1.2})
          .set(".touch-print-open__wrap", {autoAlpha: 0}, "-=0.75")
          .set(".touch-print-close__wrap", {filter: "invert(1)", autoAlpha: 1}, "<")
          .to(".nav__logo-btn", { autoAlpha: 0, duration: 0.01 }, "-=0.7")
          .to(".beta__contain", {display: "none", duration: 0.01}, "<")
          .to(".home-nav__btn", { autoAlpha: 1, duration: 0.01 }, "<")
          .to(currWrap, { display: 'flex', duration: 0.001 },"<")
          .set('.hole.is--currency', {display: "block"}, "<")
          .to(currRev, { duration: 1.6, x: 0, stagger: 0.06, ease: "expo.out" }, "-=0.4")
          .to(currRev, { duration: 0.4, opacity: 1, stagger: 0.06, ease: "linear" }, "<")
          .to(navBotRev, { x: 0, opacity: 1, ease: "power1.out", duration: 0.4 }, "-=1.2" )
          .to(".nav-bot-rev-vert", { y: 0, opacity: 1, ease: "power1.out", duration: 0.4 }, "<")
          .to([".current-arrow-right__track", ".current-arrow-left__track"], { xPercent: 0, ease: "power3.easeOut", duration: 0.55 }, "-=0.15")
          .to(".redact-cover-currency-lg", { scaleX: 1, transformOrigin: "0% 100%", duration: 0.129, ease: "linear"}, ">")
          .to(".currency-exit-txt", { autoAlpha: 1, duration: 0.001 })
          .to(".currencies-list__contain", { autoAlpha: 0, duration: 0.001 }, "<")
          .to(".redact-cover-currency-lg", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.129, ease: "linear"})
          .to(".redact-cover-nav", { scaleX: 1, transformOrigin: "0% 100%", duration: 0.15, ease: "linear"});
          
          currOpen.addEventListener('click', () => {
            currencyIn.play(0);
            });
           })   

          
currencyExit.forEach(currExit => {

      var currencyOut = new gsap.timeline({paused: true});

      currencyOut
           .set(currencyExit, {display: "none"})
           .set(currencyOpen, {display: "flex"}, "<")
           .set('.hole.is--currency', { display: "none" },"<")
           .set([".menu__btn", ".menu-close__btn"], { pointerEvents: "auto" }, "<")
           .to(".redact-cover-nav", {scaleX: 0, transformOrigin: "100% 0%", duration: 0.15, ease: "linear"})
           .to([currRev, ".current-arrow-right__track", ".current-arrow-left__track"], { duration: 0.7, x: 30, stagger: 0, ease: "expo.out" }, "<")
           .to([currRev, ".current-arrow-right__track", ".current-arrow-left__track"], { duration: 0.5, opacity: 0, stagger: 0, ease: "linear" }, "<")
           .to(navBotRev, { x: 30, opacity: 0, ease: "expo.out", duration: 0.3 },"-=0.65")
           .to(".nav-bot-rev-vert", { y: -15, opacity: 0, ease: "expo.out", duration: 0.3 },"<")
           .fromTo(currBg, { scale:40 }, {scale: 0.6, ease: Expo.easeOut, duration: 1.1 })
           .to(".home-nav__btn", { autoAlpha: 0, duration: 0.01 }, "-=0.9")
           .to(".nav__logo-btn", { autoAlpha: 1, duration: 0.01 }, "<")
           .to(".beta__contain", {display: "flex", duration: 0.01}, "<")
           .to(currWrap, { display: 'none', duration: 0.01 },"<") 
           .to(".cursor-dot", { display: "flex", duration: 0.001 }, "-=0.27")
           .to(currBg, { autoAlpha: 0, duration: 0.001 },"<")
           .to(".currency-exit-txt", { color: '#000000', duration: 0.001}, "<")
           .to(".currencies-list__contain", { filter: 'invert(0%)', duration: 0.001}, "<")
           .set(".touch-print-open__wrap", {autoAlpha: 1}, "-=0.6")
           .set(".touch-print-close__wrap", {filter: "invert(0)", autoAlpha: 0}, "<")
           .to(".redact-cover-currency-lg", { scaleX: 0, backgroundColor: '#000000'}, "<") 
           .to(".redact-cover-currency-lg", { scaleX: 1, transformOrigin: "0% 100%", duration: 0.129, ease: "linear"})
           .to(".currency-exit-txt", { autoAlpha: 0, duration: 0.001 })
           .to(".currencies-list__contain", { autoAlpha: 1, duration: 0.001 }, "<")
           .to(".redact-cover-currency-lg", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.129, ease: "linear"})
           .set(currRev, { x: -20, opacity: 0 })
           .set(navBotRev, { x: -10, opacity: 0 })
           .set(".nav-bot-rev-vert", { y: 5, opacity: 0 })
           .set(".currency-exit-txt", { color: '#ffffff'})
           .set(".current-arrow-right__track", { xPercent: 105, x: 0, opacity: 1 })
           .set(".current-arrow-left__track", { xPercent: -105, x: 0, opacity: 1 }); 
           
           currExit.addEventListener('click', () => {
            currencyOut.play(0);
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
    //if (!e) e = window.event;
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

class currMenu {

  constructor(el) {

    this.DOM = {el: el};

    this.DOM.currMenuItems = this.DOM.el.querySelectorAll('.currency-dropdown__select');
    
    this.animatableProperties = {
        // translationX
        tx: {previous: 0, current: 0, amt: 0.12},
        // translationY
        ty: {previous: 0, current: 0, amt: 0.12},
        // Rotation angle
        rotation: {previous: 0, current: 0, amt: 0.12}
    };

    this.currMenuItems = [];

    [...this.DOM.currMenuItems].forEach((item, pos) => {
      this.currMenuItems.push(new currMenuItem(item, pos, this.animatableProperties));
    });

  }

}

class currMenuItem {

  constructor(el, inCurrMenuPosition, animatableProperties) {

    this.DOM = {el: el};
    this.inCurrMenuPosition = inCurrMenuPosition;
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
          this.DOM.revealImage.style.backgroundImage = `url(${Images[this.inCurrMenuPosition][1]})`;
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
        gsap.set(this.DOM.el, {zIndex: Images.length});
        gsap.set(this.DOM.revealInner, {scale: 0.8});
      }
    })
                          
        // animate the image wrap
        .to(this.DOM.revealInner, {
          duration: 0.55,
          opacity: 1, 
          scale: 1,
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

const currMenuEl = document.querySelector('.currency__menu');

const ImagesEl = document.querySelectorAll('.currency-dropdown__select');
let ImagesArr = [];
ImagesEl.forEach(Image => {
  ImagesArr.push(Image.dataset.img);
});
const Images = Object.entries(ImagesArr);
let mousepos = {x: 0, y: 0};
let mousePosCache = mousepos;
let direction = {x: mousePosCache.x-mousepos.x, y: mousePosCache.y-mousepos.y};

window.addEventListener('mousemove', ev => mousepos = getMousePos(ev));

new currMenu(currMenuEl);

//Select currency and close menu
 
gsap.registerPlugin(ExpoScaleEase);

 //iPAD and MOBILE
mm.add("(min-width: 991px)", () => {

const currencySelect = document.querySelectorAll('.currency-dropdown__select')

currencySelect.forEach((currencySelect) => {
    if (!currencySelect) return
    const currencyHole = document.querySelector('.currency-hole')
    if (!currencyHole) return
    const currencyContain = document.querySelector('.currency__items-container')
    if (!currencyContain) return

    gsap.set(currencyHole, { scale: 1, display: "none" })

    currencySelect.addEventListener("click", (e) => {
        // Calculate distance between user click and top left corner of button
        let xDist = e.clientX - currencyContain.getBoundingClientRect().x + 4
        let yDist = e.clientY - currencyContain.getBoundingClientRect().y
        let currSelectOut = gsap.timeline();

        // Immediately set left and top properties to position the circle element where user clicks
        gsap.set(currencyHole, { left: xDist, top: yDist })
      
 currSelectOut
        .set(currencyExit, {delay: 0.3, display: "none"})
        .set(currencyOpen, {display: "flex"}, "<")
        .set(currencyHole, {display: "block"}, "<")
        .set(".cursor-dot", { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
        .set(currBg, {display: "none", scale: 1}, "<")
        .set([".menu__btn", ".menu-close__btn"], { pointerEvents: "auto" }, "<")
        .to(".redact-cover-nav", {scaleX: 0, transformOrigin: "100% 0%", duration: 0.15, ease: "linear"})
        .to([currRev, ".current-arrow-right__track", ".current-arrow-left__track"], { duration: 0.7, x: 30, stagger: 0, ease: "expo.out" }, "<")
        .to([currRev, ".current-arrow-right__track", ".current-arrow-left__track"], { duration: 0.5, opacity: 0, stagger: 0, ease: "linear" }, "<")
        .to(navBotRev, { x: 30, opacity: 0, ease: "expo.out", duration: 0.3 },"-=0.65")
        .to(".nav-bot-rev-vert", { y: -15, opacity: 0, ease: "expo.out", duration: 0.3 },"<") 
        .fromTo(currencyHole, { scale: 1 }, { duration: 1.2, scale: 2000, ease: "expoScale(1, 2000, power1.easeOut)" }, "-=0.3")  
        .to('[data-img]', { autoAlpha: 0, duration: 0.3, ease: "sine.inOut" },"-=1.5")
        .to(".home-nav__btn", { autoAlpha: 0, duration: 0.001 }, "-=0.4")
        .to(".nav__logo-btn", { autoAlpha: 1, duration: 0.001 }, "<")
        .to(".beta__contain", {display: "flex", duration: 0.001}, "<")
        .to(".currency-exit-txt", { color: '#000000', duration: 0.001}, "<")
        .to(".currencies-list__contain", { filter: 'invert(0%)', duration: 0.001}, "<")
        .to(".currency-exit-txt", { autoAlpha: 0, duration: 0.001 }, "<")
        .to(".currencies-list__contain", { autoAlpha: 1, duration: 0.001 }, "<")
        .set(".menu-txt", { filter: 'invert(0%)' }, "-=0.25")
        .set(".touch-print-open__wrap", {autoAlpha: 1}, "<")
        .set(".touch-print-close__wrap", {filter: "invert(0)", autoAlpha: 0}, "<")
        .to(".cursor-dot", { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
        .set(currWrap, {display: 'none'})
        .set(currencyHole, {display: "none", clearProps: "all"})
        .set(currRev, { x: -20, opacity: 0 })
        .set(navBotRev, { x: -10, opacity: 0 })
        .set(".nav-bot-rev-vert", { y: 5, opacity: 0 })
        .set(".currency-exit-txt", { color: '#ffffff'})
        .set(".current-arrow-right__track", { xPercent: 105, x: 0, opacity: 1 })
        .set(".current-arrow-left__track", { xPercent: -105, x: 0, opacity: 1 })
        .set(".redact-cover-currency-lg", { scaleX: 0 })
        .set('[data-img]', { autoAlpha: 1 });
                
    })
  }); 
 });

 //iPAD and MOBILE
mm.add("(max-width: 991px)", () => {

 const currencySelect = document.querySelectorAll('.currency-dropdown__select')

currencySelect.forEach((currencySelect) => {
    if (!currencySelect) return
    const currencyHoleMob = document.querySelector('.currency-hole-mobile')
    if (!currencyHoleMob) return
    const currencyContain = document.querySelector('.currency__items-container')
    if (!currencyContain) return

    gsap.set(currencyHoleMob, { scale: 1, display: "none" })


  currencySelect.addEventListener("touchstart", (e) => {

   let touch = e.targetTouches[0]; 
   let xDist = touch.clientX - currencyContain.getBoundingClientRect().x
   let yDist = touch.clientY - currencyContain.getBoundingClientRect().y
   let currSelectOutMob = gsap.timeline();

   gsap.set(currencyHoleMob, { display: "flex", left: xDist, top: yDist, xPercent: -50, yPercent: -50 });
       
 currSelectOutMob
        .set(currencyExit, {delay: 0.3, display: "none"})
        .set(currencyOpen, {display: "flex"}, "<")
        //.set(currencyHoleMob, { display: "flex" }, "<")
        .set(currBg, {display: "none", scale: 1}, "<")
        .set([".menu__btn", ".menu-close__btn"], { pointerEvents: "auto" }, "<")
        .to(".redact-cover-nav", {scaleX: 0, transformOrigin: "100% 0%", duration: 0.15, ease: "linear"})
        .to([currRev, ".current-arrow-right__track", ".current-arrow-left__track"], { duration: 0.7, x: 30, stagger: 0, ease: "expo.out" }, "<")
        .to([currRev, ".current-arrow-right__track", ".current-arrow-left__track"], { duration: 0.5, opacity: 0, stagger: 0, ease: "linear" }, "<")
        .to(navBotRev, { x: 30, opacity: 0, ease: "expo.out", duration: 0.3 },"-=0.65")
        .to(".nav-bot-rev-vert", { y: -15, opacity: 0, ease: "expo.out", duration: 0.3 },"<") 
        .fromTo(currencyHoleMob, { scale: 1 }, { duration: 1.2, scale: 280, ease: "expoScale(1, 280, power1.easeOut)" }, "-=0.15")  
        .to('[data-img]', { autoAlpha: 0, duration: 0.3, ease: "sine.inOut" },"-=1.5")
        .to(".home-nav__btn", { autoAlpha: 0, duration: 0.001 }, "-=0.65")
        .to(".nav__logo-btn", { autoAlpha: 1, duration: 0.001 }, "<")
        .to(".beta__contain", {display: "flex", duration: 0.001}, "<")
        .to(".currency-exit-txt", { color: '#000000', duration: 0.001}, "<")
        .to(".currencies-list__contain", { filter: 'invert(0%)', duration: 0.001}, "<")
        .to(".currency-exit-txt", { autoAlpha: 0, duration: 0.001 }, "<")
        .to(".currencies-list__contain", { autoAlpha: 1, duration: 0.001 }, "<")
        .set(".menu-txt", { filter: 'invert(0%)' }, "-=0.6")
        .set(".touch-print-open__wrap", {autoAlpha: 1}, "<")
        .set(".touch-print-close__wrap", {filter: "invert(0)", autoAlpha: 0}, "<")
        .set(currWrap, {display: 'none'})
        .set(currencyHoleMob, {display: "none", clearProps: "all"})
        .set(currRev, { x: -20, opacity: 0 })
        .set(navBotRev, { x: -10, opacity: 0 })
        .set(".nav-bot-rev-vert", { y: 5, opacity: 0 })
        .set(".currency-exit-txt", { color: '#ffffff'})
        .set(".current-arrow-right__track", { xPercent: 105, x: 0, opacity: 1 })
        .set(".current-arrow-left__track", { xPercent: -105, x: 0, opacity: 1 })
        .set(".redact-cover-currency-lg", { scaleX: 0 })
        .set('[data-img]', { autoAlpha: 1 });
                
    })
  }); 
});
  
}
