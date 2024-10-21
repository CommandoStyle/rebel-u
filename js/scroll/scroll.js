export const scroll = () => {

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

//ScrollTrigger.config({ ignoreMobileResize: true });

let smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 3,
        speed: 1,
        effects: true,
        ignoreMobileResize: true,
        smoothTouch: 0.3,
        normalizeScroll: false,
        //preventDefault: true,
        //normalizeScroll: !!ScrollTrigger.isTouch
    });

    // SS stop / start on first load

   document.addEventListener("DOMContentLoaded", function(event) { 
      smoother.paused(true);
      });
          setTimeout(() => {
            smoother.paused(false);
         }, 3500);  

         //smoother.scrollTo(0);

  // SS stop / start on button hovers
      
  var ssHoverStop = document.querySelectorAll('.cta-btn, .menu__btn, .nav__logo-btn, .mrebel__submit-query, .nav__items-container, .nav__container, .currency__items-container, .booking-items__container, .currency__btn, .query-items__container, .mrebel-sub__link, .quiz-items__container, .quiz-cta__btn, .subs-privacy__btn, .inline__btn, .share__items-container, .share__backdrop');
      
    ssHoverStop.forEach(function(ssStop) {
         ssStop.addEventListener('mouseover', function hover() { smoother.paused(true); 
         });
         ssStop.addEventListener('mouseleave', function leave() { smoother.paused(false);
         });
       });

// SS stop / start on button click
     
var ssClickStop = document.querySelectorAll('.cta-btn, .menu__btn, .nav__logo-btn, .currency__btn, .footer__cta-share-fallback, mrebel__submit-query, .quiz-cta__btn');
var ssClickStart = document.querySelectorAll('.menu-item__current, .currency-dropdown__select, .spa-exit__success, .spa-sgd-cancel, .spa-sek-cancel, .spa-gbp-cancel, .spa-usd-cancel, .spa-eur-cancel, .rebxxl-exit__success, .rebxxl-sgd-cancel, .rebxxl-sek-cancel, .rebxxl-gbp-cancel, .rebxxl-usd-cancel, .rebxxl-eur-cancel, .rebm-exit__success, .rebm-sgd-cancel, .rebm-sek-cancel, .rebm-gbp-cancel, .rebm-usd-cancel, .rebm-eur-cancel, .rebs-exit__success, .rebs-sgd-cancel, .rebs-sek-cancel, .rebs-gbp-cancel, .rebs-usd-cancel, .rebs-eur-cancel, .cb-eur-cancel, .cb-usd-cancel, .cb-gbp-cancel, .cb-sek-cancel, .cb-sgd-cancel, .cb-exit__success, .currency-exit__btn, .share-exit__btn, .menu-close__btn, .quiz-cancel, .quiz-cancel__success, .query-cancel, .query-cancel__success');

    ssClickStop.forEach(function(ssClickStop) {
      ssClickStop.addEventListener('click', function clickin() { smoother.paused(true); });
       });

    ssClickStart.forEach(function(ssClickStart) {
      ssClickStart.addEventListener('click', function clickout() { smoother.paused(false); });
      });

  // Show and hide header on scroll
  let showHeader = gsap.timeline( { paused: true });
  let hideTag = gsap.timeline( { paused: true });

  showHeader.fromTo([".menu__btn", ".currency__btn", ".home-nav__btn", ".nav__logo-btn"], { display: "none" }, { display: "flex", duration: 0.001, overwrite: 'auto' })
            .fromTo([".home-logo", ".beta__txt", ".menu-txt", ".touch-print-open__wrap", ".query-txt", ".currencies-list__contain", ".query-away__track", ".mrebel-says__category-contain"], { opacity: 0 }, { opacity: 1, duration:0.55, ease: Power1.easeInOut, overwrite: 'auto' }).progress(1);

  hideTag.fromTo([".top-txt__inner.is--beta", ".mrebel-says__date-contain", ".beta__contain"], { opacity: 0 }, { opacity: 1, duration:0.55, ease: Power1.easeInOut, overwrite: 'auto' }).progress(1);
  
  ScrollTrigger.create({
    start: 70,
    invalidateOnRefresh: false,
    end: () => ScrollTrigger.maxScroll(window) - 2,
    onRefresh: () => showHeader.pause(),
    onUpdate: self => {
      self.direction === 1 ? showHeader.reverse() : showHeader.play();
    },
    onLeave: () => showHeader.play() // we're at the bottom of the page
  })

  ScrollTrigger.create({
    start: 75,
    invalidateOnRefresh: false,
    end: () => ScrollTrigger.maxScroll(window) - 2,
    onRefresh: () => hideTag.pause(),
    onUpdate: self => {
      self.direction === 1 ? hideTag.reverse() : hideTag.reverse();
    },
    onLeave: () => hideTag.reverse(), // we're at the bottom of the page
    onLeaveBack: () => hideTag.play() // we're at the bottom of the page
  })

/**
* Global Anchor Link
*/

  // GLOBAL - Anchor to Sub 
var HeroSubLink = gsap.utils.toArray('.hero-scroll');
HeroSubLink.forEach(HeroSub => {
  HeroSub.addEventListener('click', () => {   
  gsap.set(smoother, {
    scrollTop: Math.min(
      ScrollTrigger.maxScroll(window),
      smoother.offset(".sub-hero__container", "top -10%")
    ),
    duration: 0, onComplete:  () => { ScrollTrigger.refresh(); }
  }); 
  });
})

/**
* Proposition Anchor Links
*/

// PROP - Anchor to CB 
var CbSubLink = gsap.utils.toArray('.cb-sub__link');
CbSubLink.forEach(CbSub => {
CbSub.addEventListener('click', () => {   
  gsap.set(smoother, {
    scrollTop: Math.min(
      ScrollTrigger.maxScroll(window),
      smoother.offset("#carteblanche", "top 10px")
    ),
    duration: 0, onComplete:  () => { ScrollTrigger.refresh(); }
  });
  });
})

// PROP - post-CB booking to CB Faq

// PROP - Anchor to Reb 
var RebSubLink = gsap.utils.toArray('.reb-sub__link');
RebSubLink.forEach(RebSub => {
RebSub.addEventListener('click', () => {   
  gsap.set(smoother, {
    scrollTop: Math.min(
      ScrollTrigger.maxScroll(window),
      smoother.offset("#rebellion", "top 10px")
    ),
    duration: 0, onComplete:  () => { ScrollTrigger.refresh(); }
  });
  });
})

// PROP - Anchor to Spa 
var SpaSubLink = gsap.utils.toArray('.spa-sub__link');
SpaSubLink.forEach(SpaSub => {
SpaSub.addEventListener('click', () => {
  gsap.set(smoother, {
    scrollTop: Math.min(
      ScrollTrigger.maxScroll(window),
      smoother.offset("#spa-day", "top 10px")
    ),
    duration: 0, onComplete:  () => { ScrollTrigger.refresh(); }
  });
  });
})

// PROP - Skip REB scroll anim - down
var RebSkipBtn = gsap.utils.toArray('.reb__skip-btn');
RebSkipBtn.forEach(SkipBtn => {
SkipBtn.addEventListener('click', () => {   
         gsap.set(smoother, {
          scrollTop: Math.min(
            ScrollTrigger.maxScroll(window),
            smoother.offset("#RebLevels", "top 70px")
          ),
          duration: 0, onComplete:  () => { ScrollTrigger.refresh(); }
        });
  });
})

// PROP - Skip REB scroll anim - up
var RebSkipBtnUp = gsap.utils.toArray('.reb__skip-up-btn');
RebSkipBtnUp.forEach(RebSkipUp => {
  RebSkipUp.addEventListener('click', () => {   
         gsap.set(smoother, {
          scrollTop: Math.min(
            ScrollTrigger.maxScroll(window),
            smoother.offset("#rebellion", "top 10px")
          ),
          duration: 0, onComplete:  () => { ScrollTrigger.refresh(); }
        });
  });
})

// PROP - post-REB booking to REB Faq

// PROP - Skip SPA scroll anim - down
var SpaSkipBtn = gsap.utils.toArray('.spa__skip-btn');
SpaSkipBtn.forEach(SpaSkip => {
  SpaSkip.addEventListener('click', () => {   
         gsap.set(smoother, {
          scrollTop: Math.min(
            ScrollTrigger.maxScroll(window),
            smoother.offset("#wtffaq-spa", "top 100px")
          ),
          duration: 0, onComplete:  () => { ScrollTrigger.refresh(); }
        });
  });
})

// PROP - Skip SPA scroll anim - up
var SpaSkipBtnUp = gsap.utils.toArray('.spa__skip-up-btn');
SpaSkipBtnUp.forEach(SpaSkipUp => {
  SpaSkipUp.addEventListener('click', () => {   
         gsap.set(smoother, {
          scrollTop: Math.min(
            ScrollTrigger.maxScroll(window),
            smoother.offset("#spa-day", "top 10px")
          ),
          duration: 0, onComplete:  () => { ScrollTrigger.refresh(); }
        });
  });
})

/**
* Mr EBEL Anchor Links
*/

// Mr EBEL - Latest
var EbelLatestLink = gsap.utils.toArray('#ebel-latest-link');
EbelLatestLink.forEach(LatestLink => {
  LatestLink.addEventListener('click', () => {   
         gsap.set(smoother, {
          scrollTop: Math.min(
            ScrollTrigger.maxScroll(window),
            smoother.offset("#mrebel-latest", "top 105px")
          ),
          duration: 0, onComplete:  () => { ScrollTrigger.refresh(); }
        });
  });
})

// Mr EBEL - Misc
var EbelMiscLink = gsap.utils.toArray('#ebel-misc-link');
EbelMiscLink.forEach(MiscLink => {
  MiscLink.addEventListener('click', () => {   
         gsap.set(smoother, {
          scrollTop: Math.min(
            ScrollTrigger.maxScroll(window),
            smoother.offset("#mrebel-misc", "top -1px")
          ),
          duration: 0, onComplete:  () => { ScrollTrigger.refresh(); }
        });
  });
})

// Mr EBEL - Mindset
var EbelMindsetLink = gsap.utils.toArray('#ebel-mindset-link');
EbelMindsetLink.forEach(MindsetLink => {
  MindsetLink.addEventListener('click', () => {   
         gsap.set(smoother, {
          scrollTop: Math.min(
            ScrollTrigger.maxScroll(window),
            smoother.offset("#mrebel-mindset", "top -1px")
          ),
          duration: 0, onComplete:  () => { ScrollTrigger.refresh(); }
        });
  });
})

// Mr EBEL - Beginnings
var EbelBeginLink = gsap.utils.toArray('#ebel-beginnings-link');
EbelBeginLink.forEach(BeginLink => {
  BeginLink.addEventListener('click', () => {   
         gsap.set(smoother, {
          scrollTop: Math.min(
            ScrollTrigger.maxScroll(window),
            smoother.offset("#mrebel-beginnings", "top -1px")
          ),
          duration: 0, onComplete:  () => { ScrollTrigger.refresh(); }
        });
  });
})

/**
* Legal Anchor Links
*/

// Legal - Terms
var LegalTermsLink = gsap.utils.toArray('#legal-terms-link');
LegalTermsLink.forEach(TermsLink => {
  TermsLink.addEventListener('click', () => {   
         gsap.set(smoother, {
          scrollTop: Math.min(
            ScrollTrigger.maxScroll(window),
            smoother.offset("#legal-terms", "top 10px")
          ),
          duration: 0, onComplete:  () => { ScrollTrigger.refresh(); }
        });
  });
})

// Legal - Privacy
var LegalPrivacyLink = gsap.utils.toArray(['#legal-privacy-link', '#inline-privacy-link']);
LegalPrivacyLink.forEach(PrivacyLink => {
  PrivacyLink.addEventListener('click', () => {   
         gsap.set(smoother, {
          scrollTop: Math.min(
            ScrollTrigger.maxScroll(window),
            smoother.offset("#legal-privacy", "top 10px")
          ),
          duration: 0, onComplete:  () => { ScrollTrigger.refresh(); }
        });
  });
})

// Legal - Cookies
var LegalCookiesLink = gsap.utils.toArray(['#legal-cookies-link', '#inline-cookies-link']);
LegalCookiesLink.forEach(CookiesLink => {
  CookiesLink.addEventListener('click', () => {   
         gsap.set(smoother, {
          scrollTop: Math.min(
            ScrollTrigger.maxScroll(window),
            smoother.offset("#legal-cookies", "top 10px")
          ),
          duration: 0, onComplete:  () => { ScrollTrigger.refresh(); }
        });
  });
})

//Go to Reb-ready test on load
window.onload = (event) => {
  console.log("page is fully loaded");

  let urlHash = window.location.href.split("#")[1];
  let scrollElem = document.querySelector("#" + urlHash);
  let rebReadyDirect = gsap.timeline();

  console.log(scrollElem, urlHash);

  if (urlHash && scrollElem) {
    rebReadyDirect
     .to(smoother, { scrollTop: smoother.offset(scrollElem, "top top"), duration: 0, onComplete:  () => { smoother.paused(false); } })

     .to(smoother, { scrollTop: Math.min(
            ScrollTrigger.maxScroll(window),
            smoother.offset("#quiz-items", "top 10px")
          ),
          delay: 0.6, duration: 1.4, onComplete: () => { ScrollTrigger.refresh(); }
        });
     } 
};

}
