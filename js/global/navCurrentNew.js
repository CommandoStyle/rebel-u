import gsap from 'gsap';

// Close nav on current click

const navCurrentNew = () => {

$('.menu-item__current').click(function() { $('.nav__main-menu-button').click();
 });  
 
var currToggle = gsap.utils.toArray(".menu-item__current");
var currBg = gsap.utils.toArray(".svg-cursor__wrapper");

currToggle.forEach(currTog => {

var tlcurr = gsap.timeline({ paused: true });
     
 tlcurr.set(currBg, { scale: 317, transformOrigin: "50% 50%", duration: 0.001 })
     .to(navBg, {autoAlpha: 0, duration: 0.001, overwrite: 'auto'}, "<")
     .to(".menu__item-text", {opacity: 1, duration: 0.001, overwrite: 'auto' },"<")
     .to(currBg, { delay: 0.5, scale: 1, transformOrigin: "50% 50%", ease: Expo.easeOut, duration: 1.1, overwrite:'auto'})
     .to('.menu-item__current', {autoAlpha: 0, duration: 0.55, overwrite: 'auto' },"<")
     .to(navX, { autoAlpha: 0, duration: 0.01, overwrite: 'auto' },"<")
     .to(navLines, { autoAlpha: 1, duration: 0.01, overwrite: 'auto' },"<")
     .set('.menu-item__current', { autoAlpha: 1 },"<");
               
  currTog.addEventListener('click', () => {
    tlcurr.play(0);
  });
 })
} 

export default navCurrentNew;