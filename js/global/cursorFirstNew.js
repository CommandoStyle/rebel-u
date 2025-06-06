export const cursorFirstNew = () => {

  gsap.registerPlugin(ExpoScaleEase);

  var cursor = gsap.utils.toArray(".cursor-dot");
  var pos = { x: 0, y: 0 };
  var mouse = { x: 0, y: 0 };
  var firstMouseMove = true;
  let active = false;
  let mouseInTarget = false;
  
  let xTo = gsap.quickTo(cursor, "x", { duration: 0.33, ease: "power2" });
  let yTo = gsap.quickTo(cursor, "y", { duration: 0.33, ease: "power2" });
  
  $(window).on("mousemove", function (e) {
    if (firstMouseMove) {
      var setX = gsap.quickSetter(cursor, "x");
      var setY = gsap.quickSetter(cursor, "y");
      gsap.set(cursor, {
        scale: 0,
        autoAlpha: 0,
        left: "-1.6em", 
        top: "1.52em"
      });

  
      setX(e.clientX);
      setY(e.clientY);
      mouse.x = pos.x = e.clientX;
      mouse.y = pos.y = e.clientY;
      gsap.to(cursor, {
        scale: 0.07,
        autoAlpha: 1
      });
      firstMouseMove = false;
    } else {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }
  });
  
  window.addEventListener("mousemove", mouseMove);
  
  function mouseMove(e) {
    if (!active) {
      xTo(e.clientX);
      yTo(e.clientY);
      active = true;
    }
  
    const cursorPosition = {
      x: e.clientX,
      y: e.clientY
    };
  
    const targetElements = document.querySelectorAll([
      ".sml-cta__btn",
      ".lg-cta__btn",
      ".oval-cta__btn",
      ".reb__skip-btn",
      ".mini-cta__btn"
    ]);
  
    targetElements.forEach((targetEle) => {
      if (mouseInTarget) {
      }

      const rect = targetEle.getBoundingClientRect();
  
      const triggerDistance = rect.width;
  
      // Get position of target instance from its center point
      const targetPosition = {
        x: rect.x + rect.width / 2.1,
        y: rect.y + rect.height / 2.1
      };
  
      // Get distance between target instance and mouse (adj & opp)
      const distance = {
        adj: targetPosition.x - cursorPosition.x,
        opp: targetPosition.y - cursorPosition.y
      };
  
      const hypotenuse = Math.sqrt(
        distance.adj * distance.adj + distance.opp * distance.opp
      );
  
      // get angle from length of adj and opp
      const angle = Math.atan2(distance.adj, distance.opp);
  
      // Define the trigger area - inside
      if (hypotenuse * 2 < triggerDistance && mouseInTarget) {
        // tween custom cursor position
        xTo(targetPosition.x - (Math.sin(angle) * hypotenuse) / 4.2);
        yTo(targetPosition.y - (Math.cos(angle) * hypotenuse) / 4.2);
        mouseInTarget = true;

      }
    });
  
    if (!mouseInTarget) {
      // tween custom cursor position
      xTo(cursorPosition.x);
      yTo(cursorPosition.y);
    }
  }
  
  let targets = gsap.utils.toArray(".sml-cta__btn");
  
  targets.forEach((target) => {
    target.addEventListener("mouseenter", (e) => {
      mouseInTarget = true;
      gsap.to(cursor, {
        scale: 0.5,
        duration: 0.33,
        left: "-1.65em", 
        top: "1.7em",
        ease: "expoScale(0.07, 0.5, power1.out)",
        overwrite: 'auto'
      });
    });

    target.addEventListener("mouseleave", (e) => {
      mouseInTarget = false;
      gsap.to(cursor, {
        scale: 0.07,
        duration: 0.33,
        left: "-1.6em", 
        top: "1.52em",
        ease: "expoScale(0.5, 0.07, power1.in)",
        overwrite: 'auto'
      });
    });

 target.addEventListener("pointerdown", () => {
  gsap.to(cursor, {
    scale: 0.6,
    duration: 0.33
  });
});

target.addEventListener("pointerup", () => {
  gsap.to(cursor, {
    scale: 0.5,
    duration: 0.33
  });
 });
});
  
    let targetsXL = gsap.utils.toArray(".lg-cta__btn");
  
    targetsXL.forEach((targetXL) => {
      targetXL.addEventListener("mouseenter", (e) => {
        mouseInTarget = true;
        gsap.to(cursor, {
          scale: 1,
          duration: 0.66,
          left: "-1.45em", 
          top: "1.7em",
          ease: "expoScale(0.07, 1, power1.out)"
        });
      });

      targetXL.addEventListener("mouseleave", (e) => {
        mouseInTarget = false;
        gsap.to(cursor, {
          scale: 0.07,
          duration: 0.66,
          left: "-1.6em", 
          top: "1.52em",
          ease: "expoScale(1, 0.07, power1.in)"
        });
      });

      targetXL.addEventListener("pointerdown", () => {
        gsap.to(cursor, {
          scale: 1.2,
          duration: 0.33
        });
      });
      
      targetXL.addEventListener("pointerup", () => {
        gsap.to(cursor, {
          scale: 1,
          duration: 0.33
        });
       });
      });

  let targetsOval = gsap.utils.toArray(".oval-cta__btn");
  
  targetsOval.forEach((targetOval) => {
    targetOval.addEventListener("mouseenter", (e) => {
        mouseInTarget = true;
        gsap.to(cursor, {
          scaleX: 1,
          scaleY: 0.5,
          left: "-1.45em", 
          top: "1.7em",
          duration: 0.44,
          ease: "none"
        });
      });
    
      targetOval.addEventListener("mouseleave", (e) => {
        mouseInTarget = false;
        gsap.to(cursor, {
          scaleX: 0.07,
          scaleY: 0.07,
          left: "-1.6em", 
          top: "1.52em",
          duration: 0.44,
          ease: "none"
        });
      });

      targetOval.addEventListener("pointerdown", () => {
        gsap.to(cursor, {
          scaleX: 1.2,
          scaleY: 0.6,
          duration: 0.33
        });
      });
      
      targetOval.addEventListener("pointerup", () => {
        gsap.to(cursor, {
          scaleX: 1,
          scaleY: 0.5,
          duration: 0.33
        });
       });

    });

    let targetsMini = gsap.utils.toArray(".mini-cta__btn");
  
    targetsMini.forEach((mini) => {
      mini.addEventListener("mouseenter", (e) => {
        mouseInTarget = true;
        gsap.to(cursor, {
          scaleX: 0.5,
          scaleY: 0.25,
          duration: 0.33,
          ease: "none",
          overwrite: 'auto'
        });
      });
  
      mini.addEventListener("mouseleave", (e) => {
        mouseInTarget = false;
        gsap.to(cursor, {
          scaleX: 0.07,
          scaleY: 0.07,
          duration: 0.33,
          ease: "none",
          overwrite: 'auto'
        });
      });
  
  mini.addEventListener("pointerdown", () => {
    gsap.to(cursor, {
      scaleX: 0.6,
      scaleY: 0.3,
      duration: 0.33
    });
  });
  
  mini.addEventListener("pointerup", () => {
    gsap.to(cursor, {
      scaleX: 0.5,
      scaleY: 0.25,
      duration: 0.33
    });
   });
  });

     // Add class on CTAs to center cursor and lower Z
    
     $( ".cta-btn, .lg-cta__btn, .vid-start__btn, .revert-back__btn, .footer__cta-legal, .footer__cta-share, .footer__cta-share-fallback, .footer__cta-contact, .footer__cta-top, .topic-nav__next, .topic-nav__prev, .reb__skip-btn, .reb__skip-up-btn, .spa__skip-btn, .spa__skip-up-btn" ).mouseenter(function() {
      $('.cursor-dot').addClass('cta-stuck');
    });
    
      $( ".cta-btn, .lg-cta__btn, .vid-start__btn, .revert-back__btn, .footer__cta-legal, .footer__cta-share, .footer__cta-share-fallback, .footer__cta-contact, .footer__cta-top, .topic-nav__next, .topic-nav__prev, .reb__skip-btn, .reb__skip-up-btn, .spa__skip-btn, .spa__skip-up-btn" ).mouseleave(function() {
      $('.cursor-dot').removeClass('cta-stuck');
    });
      
    // Add class on Top bar CTAs to center cursor and elevate Z
    
    $( ".menu__btn, .menu-close__btn, .mrebel__submit-query, .currency__btn, .currency-exit__btn, .quiz-cta__btn, .cookie-ok__btn, .nav__logo-btn" ).mouseenter(function() {
      $('.cursor-dot').addClass('top-stuck');
    });
    
      $( ".menu__btn, .menu-close__btn, .mrebel__submit-query, .currency__btn, .currency-exit__btn, .quiz-cta__btn, .cookie-ok__btn, .nav__logo-btn" ).mouseleave(function() {
      $('.cursor-dot').removeClass('top-stuck');
    }); 
  
}
