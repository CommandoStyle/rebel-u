import gsap from 'gsap';

const mrebelPostRevertSt = () => {

gsap.registerPlugin(ScrollTrigger);

let mm = gsap.matchMedia();

//Desktop
mm.add("(min-width: 990px)", () => {

  gsap.to('.mrebel-revert__sticky', {
          scrollTrigger: {
            trigger: ".mrebel-revert__track",
            start: "top top",
            end: "bottom 33.3%",
            pin: ".mrebel-revert__track",
            scrub: 2
          }
        });
      });

//iPAD
mm.add("(max-width: 991px) and (min-width: 429px)", () => {

gsap.to('.mrebel-revert__sticky', {
        scrollTrigger: {
          trigger: ".mrebel-revert__track",
          start: "top top",
          end: "bottom 25%",
          pin: ".mrebel-revert__track",
          scrub: 2
        }
      });
    });

//iPAD
mm.add("(max-width: 428px)", () => {

  gsap.to('.mrebel-revert__sticky', {
          scrollTrigger: {
            trigger: ".mrebel-revert__track",
            start: "top top",
            end: "bottom 4%",
            pin: ".mrebel-revert__track",
            scrub: 2
          }
        });
      });

  }
  
  export default mrebelPostRevertSt;