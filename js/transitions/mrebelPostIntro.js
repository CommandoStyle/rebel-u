export const ebelPostIntro = (container) => {

gsap.set('.mrebel-says__bg', { scaleX: 0});
gsap.set(".mrebel-says__img-inner", { autoAlpha: 0 });
gsap.set(".revert-arrow__track", { x: 100, opacity: 1, overwrite: "auto" });

gsap.utils.toArray(".split-lines").forEach(function(elem) {
  
    const innerSplit = new SplitText(elem, {
      type: "lines",
      linesClass: "lineChild"
    });
    //const outerSplit = new SplitText(elem, {
      //type: "lines",
      //linesClass: "lineParent"
    //});

    gsap.set(innerSplit.lines, { x: -30, opacity: 0 });
    //gsap.set(outerSplit.lines, { yPercent: 100 });

var ebelPostIntro = gsap.timeline();

ebelPostIntro
    .set('.revert-back__btn', { display: "flex" })
    .set(['.home-logo', ".menu-txt", '.beta__txt', '.mrebel-says__deets-txt', ".mrebel-says__date-txt", ".query-txt", ".query-away__track"], { autoAlpha: 1, yPercent: 0})
    .set([".redact-cover-logo", ".redact-cover-beta", ".redact-cover-category", ".redact-cover-query", ".redact-cover-nav", ".redact-cover-date", ".redact-cover-qa"], {scaleX: 0 })
    .to(".mrebel-says__bg", { delay: 1, scaleX: 1, transformOrigin: "0% 100%", duration: 0.45, ease: "linear"})
    .to(".mrebel-says__img-inner", { autoAlpha: 1, duration: 0.001})
    .to(".mrebel-says__bg", { scaleX: 0, transformOrigin: "100% 0%", duration: 0.55, ease: "linear"}, "+=0.05")
    .to(innerSplit.lines, { duration: 1.6, x: 0, stagger: 0.03, ease: "expo.out" }, "-=0.912")
    .to(innerSplit.lines, { duration: 0.4, opacity: 1, stagger: 0.03, ease: "linear" }, "<")
    .to(".revert-arrow__track", { x: 0, ease: "power3.easeOut", duration: 0.75 });

});

}
