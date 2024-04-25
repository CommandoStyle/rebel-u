export const aboutStGlobe = () => {

    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.reb-globe__container', {
       // yPercent: 23,
        scrollTrigger: {
          trigger: ".reb-globe__track",
          start: "clamp(top top)",
          end: "bottom 0%",
          pin: ".reb-globe__track",
          scrub: 2
        }
      });

  }

