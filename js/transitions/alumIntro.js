import gsap from 'gsap';

// Alum deets intro reveal

const alumIntro = (container) => {

gsap.set('.revert-arrow__track', { x: 100, opacity: 1, overwrite: "auto" });
gsap.set(".alum-reveal", { x: -30, opacity: 0 });
gsap.set(".alum-img__inner", { autoAlpha: 0 });
gsap.set('.alum-img__bg', { scaleX: 0 });
gsap.set(".hero-scroll", { display: "none" });

var alumIntro = gsap.timeline();

alumIntro
.set('.revert-back__btn', { display: "flex" })
.set(['.home-logo', ".menu-txt", '.beta__txt', ".sml__square", '.hero-info__marquee-wrap', '.alumni-name__inner', '.alum-top-deets__inner'], { autoAlpha: 1, yPercent: 0})
.set([".redact-cover-logo", ".redact-cover-beta", ".redact-cover-info", ".redact-cover-nav", ".redact-cover-year", ".redact-cover-alum"], {scaleX: 0 })
.to(".alum-img__bg", { delay: 1.1, scaleX: 1, transformOrigin: "0% 100%", duration: 0.4, ease: "linear"})
.to(".alum-img__inner", { autoAlpha: 1, duration: 0.001})
.to(".alum-img__bg", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.4, ease: "linear"}, "-=0.01")
.to(".alum-reveal", { duration: 1.2, x: 0, stagger: 0.03, ease: "expo.out" }, "-=1.041")
.to(".alum-reveal", { duration: 0.4, opacity: 1, stagger: 0.03, ease: "linear" }, "<")
.to(".revert-arrow__track", { x: 0, ease: "power3.easeOut", duration: 0.75 }, "+=0.25")
.set(".hero-scroll", { display: "block" }, "<");

}

export default alumIntro;