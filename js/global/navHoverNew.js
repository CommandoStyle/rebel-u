export const navHoverNew = () => {

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
