export function shareFallbackMenu() {

 // Share menu vars

var shareRev = gsap.utils.toArray(".share-dropdown__wrap");
//var navBotRev = gsap.utils.toArray(".nav-bot-rev");
var shareBg = gsap.utils.toArray('.share__backdrop');
var shareWrap = gsap.utils.toArray('.share__items-container');
var shareOpen = gsap.utils.toArray('.footer__cta-share-fallback');
var shareExit = gsap.utils.toArray('.share-exit__btn');

let mm = gsap.matchMedia();

gsap.set(shareRev, { x: -30, opacity: 0 });
gsap.set(shareWrap, {display: 'none'});
gsap.set(shareBg, {autoAlpha: 0});
gsap.set(shareExit, {display: 'none'});
//gsap.set(navBotRev, { x: -30, opacity: 0 });
//gsap.set(".nav-bot-rev-vert", { y: 15, opacity: 0 });
gsap.set(".home-nav__btn", {autoAlpha: 0});
gsap.set(".nav__logo-btn", {autoAlpha: 1});
gsap.set(".share-exit-txt", {autoAlpha: 0});
gsap.set([".redact-cover-share", ".redact-cover-contact", ".redact-cover-legal", ".redact-cover-top-left"], {scaleX: 0});
 
shareOpen.forEach(shareOpen => {
      
var shareIn = new gsap.timeline({ paused: true });

shareIn.set(shareRev, { x: -30, opacity: 0 })
          //.set(navBotRev, { x: -30, opacity: 0 })
          //.set(".nav-bot-rev-vert", { y: 15, opacity: 0 })
          .set(shareBg, {scale: 1, display: "block" })
          .set([".redact-cover-share", ".redact-cover-contact", ".redact-cover-legal"], { scaleX: 0, backgroundColor: '#ffffff'})       
          .set(shareBg, { autoAlpha: 1 })
          .set(".cursor-dot", {display: "none"}, "<")
          .set(shareOpen, {display: "none"}, "<")
          .set(shareExit, {display: "flex"}, "<")
          .set(".share-open-txt", { filter: 'invert(100%)'}, "<")
          .fromTo(shareBg, { scale: 1 }, { scale: 40, transformOrigin: "50% 50%", ease: Expo.easeInOut, duration: 1.2})
          .set([".contact-txt", ".legal-txt"], { filter: 'invert(100%)'}, "-=1.05")
          .set(".footer-reb-time__contain", { filter: 'invert(100%)' }, "-=0.72")
          .to(".nav__logo-btn", { autoAlpha: 0, duration: 0.01 }, "-=0.6")
          .to(".home-nav__btn", { autoAlpha: 1, duration: 0.01 }, "<")
          .set(".footer__copyright-wrap", { filter: 'invert(100%)' }, "<")
          .set(".redact-cover-top-left", {display: "block", scaleX: 0}, "<")  
          .to(shareWrap, { display: 'flex', duration: 0.001 }, "<")
          .set('.share-hole', {display: "block"}, "<")
          .to(shareRev, { duration: 1.6, x: 0, stagger: 0.06, ease: "expo.out" }, "-=0.4")
          .to(shareRev, { duration: 0.4, opacity: 1, stagger: 0.06, ease: "linear" }, "<")
          //.to(navBotRev, { x: 0, opacity: 1, ease: "power1.out", duration: 0.4 }, "-=1.2" )
          //.to(".nav-bot-rev-vert", { y: 0, opacity: 1, ease: "power1.out", duration: 0.4 }, "<")
          .to([".redact-cover-contact", ".redact-cover-top-left"], { scaleX: 1, transformOrigin: "0% 100%", duration: 0.15, ease: "linear"})
          .to(".redact-cover-share", { scaleX: 1, transformOrigin: "0% 100%", duration: 0.129, ease: "linear"})
          .to(".share-exit-txt", { autoAlpha: 1, duration: 0.001 })
          .to(".share-open-txt", { autoAlpha: 0, duration: 0.001 }, "<")
          .to(".redact-cover-share", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.129, ease: "linear"})
          .to(".redact-cover-legal", { scaleX: 1, transformOrigin: "0% 100%", duration: 0.129, ease: "linear"});
          
          shareOpen.addEventListener('click', () => {
            shareIn.play(0);
            });
           })   

          
shareExit.forEach(shareExit => {

      var shareOut = new gsap.timeline({paused: true});

      shareOut
           .set(shareExit, {display: "none"})
           .set(shareOpen, {display: "flex"}, "<")
           .set('.share-hole', { display: "none" },"<")
           .to(".redact-cover-top-left", {scaleX: 0, transformOrigin: "100% 0%", duration: 0.15, ease: "linear"})
           .to(shareRev, { duration: 0.7, x: 30, stagger: 0, ease: "expo.out" }, "<")
           .to(shareRev, { duration: 0.5, opacity: 0, stagger: 0, ease: "linear" }, "<")
           //.to(navBotRev, { x: 30, opacity: 0, ease: "expo.out", duration: 0.3 },"-=0.65")
           //.to(".nav-bot-rev-vert", { y: -15, opacity: 0, ease: "expo.out", duration: 0.3 },"<")
           .fromTo(shareBg, { scale:40 }, {scale: 0.6, ease: Expo.easeOut, duration: 1.1 })
           .set(".footer__copyright-wrap", { filter: 'invert(0%)' }, "-=1")
           .to(".home-nav__btn", { autoAlpha: 0, duration: 0.01 }, "-=0.9")
           .to(".nav__logo-btn", { autoAlpha: 1, duration: 0.01 }, "<")
           .to([shareWrap, ".redact-cover-top-left"], { display: 'none', duration: 0.01 },"<")
           .set(".footer-reb-time__contain", { filter: 'invert(0%)' }, "-=0.67")
           .set([".redact-cover-contact", ".redact-cover-legal"], { backgroundColor: '#000000'}, "-=0.47") 
           .to(".cursor-dot", { display: "flex", duration: 0.001 }, "-=0.27")
           .to(shareBg, { autoAlpha: 0, duration: 0.001 },"<")
           .to(".share-exit-txt", { color: '#000000', duration: 0.001}, "<")
           .to([".share-open-txt", ".contact-txt", ".legal-txt"], { filter: 'invert(0%)', duration: 0.001}, "<")
           .set(".redact-cover-share", { scaleX: 0, backgroundColor: '#000000'}, "<")
           .to(".redact-cover-contact", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.15, ease: "linear"})
           .to(".redact-cover-share", { scaleX: 1, transformOrigin: "0% 100%", duration: 0.129, ease: "linear"})
           .to(".share-exit-txt", { autoAlpha: 0, duration: 0.001 })
           .to(".share-open-txt", { autoAlpha: 1, duration: 0.001 }, "<")
           .to(".redact-cover-share", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.129, ease: "linear"})
           .to(".redact-cover-legal", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.129, ease: "linear"})
           .set(shareRev, { x: -20, opacity: 0 })
           //.set(navBotRev, { x: -10, opacity: 0 })
           //.set(".nav-bot-rev-vert", { y: 5, opacity: 0 })
           .set(".share-exit-txt", { color: '#ffffff'}); 
           
           shareExit.addEventListener('click', () => {
            shareOut.play(0);
            });
          })   

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

class shareMenu {

  constructor(el) {

    this.DOM = {el: el};

    this.DOM.shareMenuItems = this.DOM.el.querySelectorAll('.share-dropdown__select');
    
    this.animatableProperties = {
        // translationX
        tx: {previous: 0, current: 0, amt: 0.12},
        // translationY
        ty: {previous: 0, current: 0, amt: 0.12},
        // Rotation angle
        rotation: {previous: 0, current: 0, amt: 0.12}
    };

    this.shareMenuItems = [];

    [...this.DOM.shareMenuItems].forEach((item, pos) => {
      this.shareMenuItems.push(new shareMenuItem(item, pos, this.animatableProperties));
    });

  }

}

class shareMenuItem {

  constructor(el, inshareMenuPosition, animatableProperties) {

    this.DOM = {el: el};
    this.inshareMenuPosition = inshareMenuPosition;
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
          this.DOM.revealImage.style.backgroundImage = `url(${Images[this.inshareMenuPosition][1]})`;
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

const shareMenuEl = document.querySelector('.share__menu');

const ImagesEl = document.querySelectorAll('.share-dropdown__select');
let ImagesArr = [];
ImagesEl.forEach(Image => {
  ImagesArr.push(Image.dataset.img);
});
const Images = Object.entries(ImagesArr);
let mousepos = {x: 0, y: 0};
let mousePosCache = mousepos;
let direction = {x: mousePosCache.x-mousepos.x, y: mousePosCache.y-mousepos.y};

window.addEventListener('mousemove', ev => mousepos = getMousePos(ev));

new shareMenu(shareMenuEl);

//Select currency and close menu
 
gsap.registerPlugin(ExpoScaleEase);

const shareSelect = document.querySelectorAll('.share-dropdown__select')

shareSelect.forEach((shareSelect) => {
    if (!shareSelect) return
    const shareHole = document.querySelector('.share-hole')
    if (!shareHole) return
    const shareContain = document.querySelector('.share__items-container')
    if (!shareContain) return

    gsap.set(shareHole, { scale: 1, display: "none" })

    shareSelect.addEventListener("click", (e) => {
        // Calculate distance between user click and top left corner of button
        let xDist = e.clientX - shareContain.getBoundingClientRect().x + 4
        let yDist = e.clientY - shareContain.getBoundingClientRect().y
        let shareSelectOut = gsap.timeline();

        // Immediately set left and top properties to position the circle element where user clicks
        gsap.set(shareHole, { left: xDist, top: yDist })
      
 shareSelectOut
        .set(shareExit, {delay: 0.3, display: "none"})
        .set(shareOpen, {display: "flex"}, "<")
        .set(shareHole, {display: "block"}, "<")
        .set(".cursor-dot", { display: "flex", scale: 0, autoAlpha: 0, xPercent: -38, yPercent: -60}, "<")
        .set(shareBg, {display: "none", scale: 1}, "<")
        .to(shareRev, { duration: 0.7, x: 30, stagger: 0, ease: "expo.out" }, "<")
        .to(shareRev, { duration: 0.5, opacity: 0, stagger: 0, ease: "linear" }, "<")
        .to(navBotRev, { x: 30, opacity: 0, ease: "expo.out", duration: 0.3 },"-=0.65")
        .to(".nav-bot-rev-vert", { y: -15, opacity: 0, ease: "expo.out", duration: 0.3 },"<") 
        .fromTo(shareHole, { scale: 1 }, { duration: 1.2, scale: 2000, ease: "expoScale(1, 2000, power1.easeOut)" }, "-=0.3")  
        .to('[data-img]', { autoAlpha: 0, duration: 0.3, ease: "sine.inOut" },"-=1.5")
        .to(".home-nav__btn", { autoAlpha: 0, duration: 0.001 }, "<")
        .to(".nav__logo-btn", { autoAlpha: 1, duration: 0.001 }, "<")
        .to(".share-exit-txt", { color: '#000000', duration: 0.001}, "<")
        .to(".share-open-txt", { filter: 'invert(0%)', duration: 0.001}, "<")
        .to(".share-exit-txt", { autoAlpha: 0, duration: 0.001 }, "<")
        .to(".share-open-txt", { autoAlpha: 1, duration: 0.001 }, "<")
        .to(".cursor-dot", { delay: 0.55, scale: 1, autoAlpha: 1, xPercent: -38, yPercent: -60, duration: 0.45 })
        .set(shareWrap, {display: 'none'})
        .set(shareHole, {display: "none", clearProps: "all"})
        .set(shareRev, { x: -20, opacity: 0 })
        .set(navBotRev, { x: -10, opacity: 0 })
        .set(".nav-bot-rev-vert", { y: 5, opacity: 0 })
        .set(".share-exit-txt", { color: '#ffffff'})
        .set(".redact-cover-share", { scaleX: 0 })
        .set('[data-img]', { autoAlpha: 1 });
                
    })
  }); 
  
}
