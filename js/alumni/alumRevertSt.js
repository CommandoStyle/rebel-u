export const alumRevertSt = () => {

    gsap.registerPlugin(ScrollTrigger);

    let mm = gsap.matchMedia();

    //Desktop
    mm.add("(min-width: 990px)", () => {

    gsap.to('.alum-revert__sticky', {
        scrollTrigger: {
          trigger: ".alum-revert__track",
          start: "top top",
          end: "bottom 34.2%",
          pin: ".alum-revert__track",
          scrub: 2
        }
      });
    });

    //iPad
    mm.add("(max-width: 991px)", () => {

      gsap.to('.alum-revert__sticky', {
          scrollTrigger: {
            trigger: ".alum-revert__track",
            start: "top top",
            end: "bottom 25%",
            pin: ".alum-revert__track",
            scrub: 2
          }
        });
      });

  }
