//Turn off GSAP alerts
gsap.config({
  nullTargetWarn: false,
  trialWarn: false
});

//Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, Observer, SplitText, ExpoScaleEase, MotionPathPlugin, MorphSVGPlugin);

/**
* Scroll
*/

import { scroll } from './scroll/scroll.js';
import { resetScroll } from './scroll/resetScroll.js';
import { noHoverScroll } from './scroll/noHoverScroll.js';

/**
* Transition animations
*/

import { homeIntroOnce } from './transitions/homeIntroOnce.js';
import { homeIntro } from './transitions/homeIntro.js';
import { propIntroOnce } from './transitions/propIntroOnce.js';
import { propIntroCta } from './transitions/propIntroCta.js';
import { propIntro } from './transitions/propIntro.js';
import { alumniIntroOnce } from './transitions/alumniIntroOnce.js';
import { alumniIntroCta } from './transitions/alumniIntroCta.js';
import { alumniIntro } from './transitions/alumniIntro.js';
import { alumniLeave } from './transitions/alumniLeave.js';
import { alumIntro } from './transitions/alumIntro.js';
import { alumIntroOnce } from './transitions/alumIntroOnce.js';
import { aboutIntroOnce } from './transitions/aboutIntroOnce.js';
import { aboutIntroCta } from './transitions/aboutIntroCta.js';
import { aboutIntro } from './transitions/aboutIntro.js';
import { homeLeave } from './transitions/homeLeave.js';
import { mrebelIntroOnce } from './transitions/mrebelIntroOnce.js';
import { mrebelIntroCta } from './transitions/mrebelIntroCta.js';
import { mrebelIntro } from './transitions/mrebelIntro.js';
import { mrebelLeave } from './transitions/mrebelLeave.js';
import { ebelPostIntroOnce } from './transitions/mrebelPostIntroOnce.js';
import { ebelPostIntro } from './transitions/mrebelPostIntro.js';
import { legalFooterLeave } from './transitions/legalFooterLeave.js';
import { legalIntroOnce } from './transitions/legalIntroOnce.js';
import { legalIntro } from './transitions/legalIntro.js';
import { legalIntroIframe } from './transitions/legalIntroIframe.js';
import { legalIntroNav } from './transitions/legalIntroNav.js';
import { legalIntroCookie } from './transitions/legalIntroCookie.js';
import { cookieLeave } from './transitions/cookieLeave.js';

/**
* Global
*/

import { arrowCtaBtn } from './global/arrowCtaBtn.js';
import { cursorFirstNew } from './global/cursorFirstNew.js';
import { globalMisc } from './global/globalMisc.js';
import { navMenuNew } from './global/navMenuNew.js';
import { quizGlobal } from './global/quizGlobal.js';
import { morphCursor } from './global/morphCursor.js';
import { smlArrowCta } from './global/smlArrowCta.js';
import { revertHome } from './global/revertHome.js';
import { revertSubPg } from './global/revertSubPg.js';
import { lgSubLink } from './global/lgSubLink.js';
import { quizStLottie } from './global/quizStLottie.js';
import { navHoverNew } from './global/navHoverNew.js';
import { bookedCover } from './global/bookedCover.js';
import { NavRevertCurrent } from './global/NavRevertCurrent.js';
import { cookieSelect } from './global/cookieSelect.js';
import { iframeOut } from './global/iFrameOut.js';
import { iframeOutQuery } from './global/iFrameOutQuery.js';
import { shareFallbackMenu } from './global/shareFallbackMenu.js';
import { share } from './global/share.js';
import { responsiveText } from './global/responsiveText.js';

/**
* Home
*/

import { homeEbelSwiper } from './home/homeEbelSwiper.js';
import { homePowEmoji } from './home/homePowEmoji.js';
import { homeStReveal } from './home/homeStReveal.js';
import { homeStLottie } from './home/homeStLottie.js';
import { homeMarquees } from './home/homeMarquees.js';
import { homeCloseNavHome } from './home/homeCloseNavHome.js';

/**
* Proposition
*/

import { propMarquees } from './proposition/propMarquees.js';
import { propREBsuccess } from './proposition/propREBsuccess.js';
import { propFaqAccordion } from './proposition/propFaqAccordion.js';
import { propStLottie } from './proposition/propStLottie.js';
import { propStSpacers } from './proposition/propStSpacers.js';
import { propStRebHotstuff } from './proposition/propStRebHotstuff.js';
import { redactedSt } from './proposition/redactedSt.js';
import { subLinkImages } from './proposition/subLinkImages.js';
import { propCurrencyMenu } from './proposition/propCurrencyMenu.js';
import { propStRebDeets } from './proposition/propStRebDeets.js';
import { propStSpaDeets } from './proposition/propStSpaDeets.js';
import { propCurrencyPick } from './proposition/propCurrencyPick.js';
import { propBookingCb } from './proposition/propBookingCb.js';
import { propBookingRebS } from './proposition/propBookingRebS.js';
import { propBookingRebM } from './proposition/propBookingRebM.js';
import { propBookingRebXXL } from './proposition/propBookingRebXXL.js';
import { propBookingSpa } from './proposition/propBookingSpa.js';
import { propCbSwiper } from './proposition/propCbSwiper.js';

/**
* Alumni
*/

import { alumRevertSt } from './alumni/alumRevertSt.js';
import { alumniImages } from './alumni/alumniImages.js';
import { alumniMarquees } from './alumni/alumniMarquees.js';

/**
* About
*/

import { aboutMarquees } from './about/aboutMarquees.js';
import { aboutStGlobe } from './about/aboutStGlobe.js';
import { aboutYouVideo } from './about/aboutYouVideo.js';
import { aboutStX } from './about/aboutStX.js';

/**
* Mr Ebel
*/

import { mrebelMarquees } from './mr-ebel/mrebelMarquees.js';
import { mrebelPostRevertSt } from './mr-ebel/mrebelPostRevertSt.js';
import { mrebelQuery } from './mr-ebel/mrebelQuery.js';
import { mrebelTopicSwipers } from './mr-ebel/mrebelTopicSwipers.js';
import { mrebelSubscribe } from './mr-ebel/mrebelSubscribe.js';
import { mrebelImages } from './mr-ebel/mrebelImages.js';
import { mrebelTopicCounters } from './mr-ebel/mrebelTopicCounters.js';

/**
* Legal
*/

import { legalLottie } from './legal/legalLottie.js';
import { legalMarquees } from './legal/legalMarquees.js';
import { legalLinksSt } from './legal/legalLinksSt.js';

/**
* Error
*/

import { errorMarquees } from './error/errorMarquees.js';

// Get mouse position on click  
let percentTop;
let percentLeft;
$(document).on("click touchstart", function (e) {
  let mouseTop = e.pageY - $(window).scrollTop();
  let mouseLeft = e.pageX;
  percentTop = (mouseTop / $(window).height()) * 100;
  percentLeft = (mouseLeft / $(window).width()) * 100;
  return false; 
});

const mmTrans = window.matchMedia("(max-width: 480px)");

// Load all functions on first load

const initRblu = () => {

    barba.hooks.once(() => {

      cursorFirstNew();
    
    });
    
    barba.hooks.beforeEnter((data) => {

      initGlobal(data.next.container);
      
      // Set cursor
      gsap.set(".cursor-dot", {
      scale: 0,
      autoAlpha: 0,
      xPercent: -38,
      yPercent: -60
      });

      resetScroll(data.next.container);

    });

    barba.hooks.after((data) => {

      cursorFirstNew(data.next.container);
      navHoverNew(data.next.container);
     
       });

       if(window.barba) {
        barba.init({
          
          preventRunning: true,
          timeout: 10000,
          sync: true,
          cacheIgnore: true,
          transitions: [

            // home
          {
            name: 'homeIn',
            to : {
              namespace: ['home'],
            },
            once(data) {

              scroll(data.next.container);
              homeIntroOnce(data.next.container); 
            
            },
            beforeEnter(data){},
            leave(data) {

              return gsap.fromTo(data.current.container, { autoAlpha: 1 }, { delay: 0.9, autoAlpha: 1, duration: 0.001 });
               
            },
            enter(data) {

              $(data.next.container).addClass("fixed");

              homeIntro();

              //iPad and Mobile
              if (mmTrans.matches) {

              return gsap.fromTo(
                data.next.container,
                { clipPath: `circle(3% at ${percentLeft - 3}% ${percentTop - 3}%)` },
                { clipPath: `circle(149.9% at ${percentLeft - 3}% ${percentTop - 3}%)`, delay: 0.75, duration: 1.1, ease: "power2.inOut", clearProps: "clipPath",
                onComplete: () => {
                window.scrollTo({ top: 0, behavior: 'instant' });
                $(data.next.container).removeClass("fixed"); }}); 

              } else {
                
                return gsap.fromTo(
                data.next.container,
                { clipPath: `circle(0% at ${percentLeft}% ${percentTop}%)` },
                { clipPath: `circle(140.9% at ${percentLeft}% ${percentTop}%)`, delay: 0.75, duration: 1.1, ease: "power2.inOut", clearProps: "clipPath",
                onComplete: () => {
                window.scrollTo({ top: 0, behavior: 'instant' });
                $(data.next.container).removeClass("fixed"); }}); 
              }

            },
            afterEnter(data) {},
            after(data) {

            scroll(data.next.container);  
              
            },
           },
            // proposition
          {
            name: 'propIn',
            to : {
              namespace: ['proposition'],
            },
            once(data) {

              scroll(data.next.container);
              propIntroOnce(data.next.container);
    
            },
            beforeEnter(data){},
            enter(data) {
            
              $(data.next.container).addClass("fixed");

              propIntro();

             //iPad and Mobile
              if (mmTrans.matches) {
               
              return gsap.fromTo(
                data.next.container,
                { clipPath: `circle(3% at ${percentLeft - 3}% ${percentTop - 3}%)` },
                { clipPath: `circle(140.9% at ${percentLeft - 3}% ${percentTop - 3}%)`, delay: 0.75, duration: 1.1, ease: "power2.inOut", clearProps: "clipPath",
                onComplete: () => {
                window.scrollTo({ top: 0, behavior: 'instant' });
                $(data.next.container).removeClass("fixed"); }}); 

                } else {

               return gsap.fromTo(
                data.next.container,
                { clipPath: `circle(0% at ${percentLeft}% ${percentTop}%)` },
                { clipPath: `circle(140.9% at ${percentLeft}% ${percentTop}%)`, delay: 0.75, duration: 1.1, ease: "power2.inOut", clearProps: "clipPath",
                onComplete: () => {
                window.scrollTo({ top: 0, behavior: 'instant' });
                $(data.next.container).removeClass("fixed"); }}); 

              }
                      
            },
            after(data) {

              //initWebflow(data.next.container);
              scroll(data.next.container);
    
            },
           },
         // proposition from home CTA (SUB btn)
           {
            name: 'propCTAsub',
            from : { custom: ({ trigger }) => { return trigger.classList && trigger.classList.contains('cta__home-sub'); },
            route: [ 'home' ] }, 
            to : { namespace: ['proposition'] },
            leave(data) { return gsap.fromTo(data.current.container, { autoAlpha: 1 }, { delay: 1, autoAlpha: 1, duration: 0.001 });
               },
            enter(data) {
                        
            $(data.next.container).addClass("fixed");
                                      
            propIntroCta();

            //iPad and Mobile
            if (mmTrans.matches) {
                                       
              return gsap.fromTo(
                data.next.container,
                { clipPath: `circle(3% at ${percentLeft - 3}% ${percentTop - 6}%)` },
                { clipPath: `circle(140.9% at ${percentLeft - 3}% ${percentTop - 6}%)`, delay: 0.5, duration: 1.1, ease: "power2.inOut", clearProps: "clipPath",
                onComplete: () => {
                window.scrollTo({ top: 0, behavior: 'instant' });
                $(data.next.container).removeClass("fixed"); }}); 

              } else {

            return gsap.fromTo(
            data.next.container,
            { clipPath: `circle(0% at ${percentLeft}% ${percentTop}%)` },
            { clipPath: `circle(140.9% at ${percentLeft}% ${percentTop}%)`, delay: 0.75, duration: 1.1, ease: "power2.inOut", clearProps: "clipPath",
             onComplete: () => {
             window.scrollTo({ top: 0, behavior: 'instant' });
             $(data.next.container).removeClass("fixed"); }});  

            }
                                          
            },
            after(data) { scroll(data.next.container); 
               }
            },
         // proposition from home CTA (Escape btn)
         {
          name: 'propCTAescape',
          from : { custom: ({ trigger }) => { return trigger.classList && trigger.classList.contains('cta__home-escape'); },
          route: [ 'home' ] }, 
          to : { namespace: ['proposition'] },
          leave(data) { return gsap.fromTo(data.current.container, { autoAlpha: 1 }, { delay: 0.9, autoAlpha: 1, duration: 0.001 }); },
          enter(data) {
                      
          $(data.next.container).addClass("fixed");
                                    
          propIntroCta();

          //iPad and Mobile
          if (mmTrans.matches) {
                                     
              return gsap.fromTo(
                data.next.container,
                { clipPath: `circle(3% at ${percentLeft - 3}% ${percentTop - 3}%)` },
                { clipPath: `circle(140.9% at ${percentLeft - 3}% ${percentTop - 3}%)`, delay: 0.75, duration: 1.1, ease: "power2.inOut", clearProps: "clipPath",
                onComplete: () => {
                window.scrollTo({ top: 0, behavior: 'instant' });
                $(data.next.container).removeClass("fixed"); }}); 

             } else {

          return gsap.fromTo(
          data.next.container,
          { clipPath: `circle(0% at ${percentLeft}% ${percentTop}%)` },
          { clipPath: `circle(140.9% at ${percentLeft}% ${percentTop}%)`, delay: 0.75, duration: 1.1, ease: "power2.inOut", clearProps: "clipPath",
           onComplete: () => {
           window.scrollTo({ top: 0, behavior: 'instant' });
           $(data.next.container).removeClass("fixed"); }}); 

          }
                                        
          },
          after(data) { scroll(data.next.container); },
          },
             // alumni
           {
            name: 'alumniIn',
            to : {
              namespace: ['alumni'],
            },
            once(data) {

              scroll(data.next.container);
              alumniIntroOnce(data.next.container);
            
            },
            beforeEnter(data){},
            enter(data) {

              $(data.next.container).addClass("fixed");
            
              alumniIntro(); 

          //iPad and Mobile
          if (mmTrans.matches) {
               
              return gsap.fromTo(
                data.next.container,
                { clipPath: `circle(3% at ${percentLeft - 3}% ${percentTop - 3}%)` },
                { clipPath: `circle(140.9% at ${percentLeft - 3}% ${percentTop - 3}%)`, delay: 0.75, duration: 1.1, ease: "power2.inOut", clearProps: "clipPath",
                onComplete: () => {
                window.scrollTo({ top: 0, behavior: 'instant' });
                $(data.next.container).removeClass("fixed"); }}); 

          } else {

                return gsap.fromTo(
                data.next.container,
                { clipPath: `circle(0% at ${percentLeft}% ${percentTop}%)` },
                { clipPath: `circle(140.9% at ${percentLeft}% ${percentTop}%)`, delay: 0.75, duration: 1.1, ease: "power2.inOut", clearProps: "clipPath",
                onComplete: () => {
                window.scrollTo({ top: 0, behavior: 'instant' });
                $(data.next.container).removeClass("fixed"); }}); 

          }
                  
            },
            afterEnter(data) {},
            after(data) {

             scroll(data.next.container);

            },
           },
          // alumni from home CTA
          {
          name: 'alumniCTA',
          from : { custom: ({ trigger }) => { return trigger.classList && trigger.classList.contains('cta__home-alumni'); },
          route: [ 'home' ] }, 
          to : { namespace: ['alumni'] },
          leave(data) { return gsap.fromTo(data.current.container, { autoAlpha: 1 }, { delay: 0.9, autoAlpha: 1, duration: 0.001 }); },
          enter(data) {
                        
          $(data.next.container).addClass("fixed");
                                      
          alumniIntroCta();

          //iPad and Mobile
          if (mmTrans.matches) {
                                       
              return gsap.fromTo(
                data.next.container,
                { clipPath: `circle(3% at ${percentLeft - 3}% ${percentTop - 3}%)` },
                { clipPath: `circle(140.9% at ${percentLeft - 3}% ${percentTop - 3}%)`, delay: 0.75, duration: 1.1, ease: "power2.inOut", clearProps: "clipPath",
                onComplete: () => {
                window.scrollTo({ top: 0, behavior: 'instant' });
                $(data.next.container).removeClass("fixed"); }}); 

          } else {

          return gsap.fromTo(
          data.next.container,
          { clipPath: `circle(0% at ${percentLeft}% ${percentTop}%)` },
          { clipPath: `circle(140.9% at ${percentLeft}% ${percentTop}%)`, delay: 0.75, duration: 1.1, ease: "power2.inOut", clearProps: "clipPath",
          onComplete: () => {
          window.scrollTo({ top: 0, behavior: 'instant' });
          $(data.next.container).removeClass("fixed"); }});

          }
                                          
          },
          after(data) { scroll(data.next.container); },
          },
          // alumni from alum revert
          {
          name: 'alumniRevert',
          from : { custom: ({ trigger }) => { return trigger.classList && trigger.classList.contains('revert-back__btn'); },
          route: [ 'alum' ] }, 
          to : { namespace: ['alumni'] },
          leave(data) { return gsap.fromTo(data.current.container, { autoAlpha: 1 }, { delay: 0.9, autoAlpha: 1, duration: 0.001 }); },
          enter(data) {
                                    
          $(data.next.container).addClass("fixed");
                                                  
          alumniIntroCta();

          //iPad and Mobile
          if (mmTrans.matches) {
                                                   
              return gsap.fromTo(
                data.next.container,
                { clipPath: `circle(3% at ${percentLeft - 3}% ${percentTop - 3}%)` },
                { clipPath: `circle(140.9% at ${percentLeft - 3}% ${percentTop - 3}%)`, delay: 0.75, duration: 1.1, ease: "power2.inOut", clearProps: "clipPath",
                onComplete: () => {
                window.scrollTo({ top: 0, behavior: 'instant' });
                $(data.next.container).removeClass("fixed"); }}); 

          } else {

          return gsap.fromTo(
          data.next.container,
          { clipPath: `circle(0% at ${percentLeft}% ${percentTop}%)` },
          { clipPath: `circle(140.9% at ${percentLeft}% ${percentTop}%)`, delay: 0.75, duration: 1.1, ease: "power2.inOut", clearProps: "clipPath",
          onComplete: () => {
          window.scrollTo({ top: 0, behavior: 'instant' });
          $(data.next.container).removeClass("fixed"); }});

          }
                                                      
          },
          after(data) { scroll(data.next.container); },
          },
           // Alum deets
           {
            name: 'alumIn',
            to : {
              namespace: ['alum'],
            },
            once(data) {

              alumIntroOnce(data.next.container);
              scroll(data.next.container);
              
            },
            before(data) {},
            leave(data) {

              return gsap.fromTo(data.next.container, { autoAlpha: 1 }, { delay: 0.9, autoAlpha: 1, duration: 0.001 });
               
            },
            afterLeave(data) {},
            beforeLeave(data) {},
            beforeEnter(data) {},
            enter(data) {

              $(data.next.container).addClass("fixed");              

              alumIntro(data.next.container);

              //iPad and Mobile
              if (mmTrans.matches) {
 
              return gsap.fromTo(
                data.next.container,
                { clipPath: `circle(3% at ${percentLeft - 3}% ${percentTop - 3}%)` },
                { clipPath: `circle(140.9% at ${percentLeft - 3}% ${percentTop - 3}%)`, delay: 0.75, duration: 1.1, ease: "power2.inOut", clearProps: "clipPath",
                onComplete: () => {
                window.scrollTo({ top: 0, behavior: 'instant' });
                $(data.next.container).removeClass("fixed"); }}); 

              } else {

                return gsap.fromTo(
                data.next.container,
                { clipPath: `circle(0% at ${percentLeft}% ${percentTop}%)` },
                { clipPath: `circle(140.9% at ${percentLeft}% ${percentTop}%)`, delay: 0.75, duration: 1.1, ease: "power2.inOut", clearProps: "clipPath",
                onComplete: () => {
                window.scrollTo({ top: 0, behavior: 'instant' });
                $(data.next.container).removeClass("fixed"); }}); 

              }

            },
            afterEnter(data) {},
            after(data) {

              scroll(data.next.container);
            
            },
           },
              // about
           {
            name: 'aboutIn',
            to : {
            namespace: ['about']},
            once(data) {
              aboutIntroOnce(data.next.container); 
              scroll(data.next.container);
            },
            enter(data) {

              $(data.next.container).addClass("fixed");
              
              aboutIntro();

              //iPad and Mobile
              if (mmTrans.matches) {
               
              return gsap.fromTo(
                data.next.container,
                { clipPath: `circle(3% at ${percentLeft - 3}% ${percentTop - 3}%)` },
                { clipPath: `circle(140.9% at ${percentLeft - 3}% ${percentTop - 3}%)`, delay: 0.75, duration: 1.1, ease: "power2.inOut", clearProps: "clipPath",
                onComplete: () => {
                window.scrollTo({ top: 0, behavior: 'instant' });
                $(data.next.container).removeClass("fixed"); }}); 

              } else {

                return gsap.fromTo(
                data.next.container,
                { clipPath: `circle(0% at ${percentLeft}% ${percentTop}%)` },
                { clipPath: `circle(140.9% at ${percentLeft}% ${percentTop}%)`, delay: 0.75, duration: 1.1, ease: "power2.inOut", clearProps: "clipPath",
                onComplete: () => {
                window.scrollTo({ top: 0, behavior: 'instant' });
                $(data.next.container).removeClass("fixed"); }});  

              }
                  
            },
            after(data) {

              scroll(data.next.container);

            },
           },
           // about from home CTA
           {
           name: 'aboutCTA',
           from : { custom: ({ trigger }) => { return trigger.classList && trigger.classList.contains('cta__home-who'); },
           route: [ 'home' ] }, 
           to : { namespace: ['about'] },
           leave(data) { return gsap.fromTo(data.current.container, { autoAlpha: 1 }, { delay: 0.9, autoAlpha: 1, duration: 0.001 }); },
           enter(data) {
              
           $(data.next.container).addClass("fixed");
                            
           aboutIntroCta();

           //iPad and Mobile
           if (mmTrans.matches) {
                                 
              return gsap.fromTo(
                data.next.container,
                { clipPath: `circle(3% at ${percentLeft - 3}% ${percentTop - 3}%)` },
                { clipPath: `circle(140.9% at ${percentLeft - 3}% ${percentTop - 3}%)`, delay: 0.75, duration: 1.1, ease: "power2.inOut", clearProps: "clipPath",
                onComplete: () => {
                window.scrollTo({ top: 0, behavior: 'instant' });
                $(data.next.container).removeClass("fixed"); }}); 

           } else {

           return gsap.fromTo(
           data.next.container,
           { clipPath: `circle(0% at ${percentLeft}% ${percentTop}%)` },
           { clipPath: `circle(140.9% at ${percentLeft}% ${percentTop}%)`, delay: 0.75, duration: 1.1, ease: "power2.inOut", clearProps: "clipPath",
           onComplete: () => {
           window.scrollTo({ top: 0, behavior: 'instant' });
           $(data.next.container).removeClass("fixed"); }});

           }
                                
           },
           after(data) { scroll(data.next.container); },
           },
            // Mr Ebel
          {
            name: 'mrebelIn',
            to : {
              namespace: ['mrebel'],
            },
            once(data) {
              
              mrebelIntroOnce(data.next.container); 
              scroll(data.next.container);
              
            },
            enter(data) {

              $(data.next.container).addClass("fixed");
              
              mrebelIntro(); 

              //iPad and Mobile
              if (mmTrans.matches) {
 
              return gsap.fromTo(
                data.next.container,
                { clipPath: `circle(3% at ${percentLeft - 3}% ${percentTop - 3}%)` },
                { clipPath: `circle(140.9% at ${percentLeft - 3}% ${percentTop - 3}%)`, delay: 0.75, duration: 1.1, ease: "power2.inOut", clearProps: "clipPath",
                onComplete: () => {
                window.scrollTo({ top: 0, behavior: 'instant' });
                $(data.next.container).removeClass("fixed"); }}); 

              } else {

                return gsap.fromTo(
                data.next.container,
                { clipPath: `circle(0% at ${percentLeft}% ${percentTop}%)` },
                { clipPath: `circle(140.9% at ${percentLeft}% ${percentTop}%)`, delay: 0.75, duration: 1.1, ease: "power2.inOut", clearProps: "clipPath",
                onComplete: () => {
                window.scrollTo({ top: 0, behavior: 'instant' });
                $(data.next.container).removeClass("fixed"); }}); 

              }
                  
            },
            afterEnter(data) {},
            after(data) {

              scroll(data.next.container);
              
            }
           },
          // mr Ebel from home CTA
           {
           name: 'mrebelCTA',
           from : { custom: ({ trigger }) => { return trigger.classList && trigger.classList.contains('cta__home-mr'); },
           route: [ 'home' ] }, 
           to : { namespace: ['mrebel'] },
           leave(data) { return gsap.fromTo(data.current.container, { autoAlpha: 1 }, { delay: 0.9, autoAlpha: 1, duration: 0.001 }); },
           enter(data) {
                                    
           $(data.next.container).addClass("fixed");
                                                  
           mrebelIntroCta();

          //iPad and Mobile
          if (mmTrans.matches) {
                                                   
              return gsap.fromTo(
                data.next.container,
                { clipPath: `circle(3% at ${percentLeft - 3}% ${percentTop - 3}%)` },
                { clipPath: `circle(140.9% at ${percentLeft - 3}% ${percentTop - 3}%)`, delay: 0.75, duration: 1.1, ease: "power2.inOut", clearProps: "clipPath",
                onComplete: () => {
                window.scrollTo({ top: 0, behavior: 'instant' });
                $(data.next.container).removeClass("fixed"); }});   

          } else {

           return gsap.fromTo(
           data.next.container,
           { clipPath: `circle(0% at ${percentLeft}% ${percentTop}%)` },
           { clipPath: `circle(140.9% at ${percentLeft}% ${percentTop}%)`, delay: 0.75, duration: 1.1, ease: "power2.inOut", clearProps: "clipPath",
           onComplete: () => {
           window.scrollTo({ top: 0, behavior: 'instant' });
          $(data.next.container).removeClass("fixed"); }});   

          }
                                                      
          },
          after(data) { scroll(data.next.container); },
          },
          // mr Ebel from post revert
          {
            name: 'mrebelRevert',
            from : { custom: ({ trigger }) => { return trigger.classList && trigger.classList.contains('revert-back__btn'); },
            route: [ 'mrebel-post' ] }, 
            to : { namespace: ['mrebel'] },
            leave(data) { return gsap.fromTo(data.current.container, { autoAlpha: 1 }, { delay: 0.9, autoAlpha: 1, duration: 0.001 }); },
            enter(data) {
                                     
            $(data.next.container).addClass("fixed");
                                                   
            mrebelIntroCta();

          //iPad and Mobile
          if (mmTrans.matches) {
                                                    
              return gsap.fromTo(
                data.next.container,
                { clipPath: `circle(3% at ${percentLeft - 3}% ${percentTop - 3}%)` },
                { clipPath: `circle(140.9% at ${percentLeft - 3}% ${percentTop - 3}%)`, delay: 0.75, duration: 1.1, ease: "power2.inOut", clearProps: "clipPath",
                onComplete: () => {
                window.scrollTo({ top: 0, behavior: 'instant' });
                $(data.next.container).removeClass("fixed"); }}); 

          } else {

            return gsap.fromTo(
            data.next.container,
            { clipPath: `circle(0% at ${percentLeft}% ${percentTop}%)` },
            { clipPath: `circle(140.9% at ${percentLeft}% ${percentTop}%)`, delay: 0.75, duration: 1.1, ease: "power2.inOut", clearProps: "clipPath",
            onComplete: () => {
            window.scrollTo({ top: 0, behavior: 'instant' });
           $(data.next.container).removeClass("fixed"); }});  

          }
                                                       
           },
           after(data) { scroll(data.next.container); },
           },
          // Mr Ebel POSTS
          {
            name: 'mrebelPost',
            to : {
              namespace: ['mrebel-post'],
            },
            once(data) {
              
              ebelPostIntroOnce(data.next.container);
              scroll(data.next.container);
              
            },
            leave(data) {

              return gsap.fromTo(data.next.container, { autoAlpha: 1 }, { delay: 0.9, autoAlpha: 1, duration: 0.001 });

            },
            afterLeave(data) {},
            beforeLeave(data) {},
            beforeEnter(data) {},
            enter(data) {

              $(data.next.container).addClass("fixed");

              ebelPostIntro(); 

          //iPad and Mobile
          if (mmTrans.matches) {
 
              return gsap.fromTo(
                data.next.container,
                { clipPath: `circle(3% at ${percentLeft - 3}% ${percentTop - 3}%)` },
                { clipPath: `circle(140.9% at ${percentLeft - 3}% ${percentTop - 3}%)`, delay: 0.75, duration: 1.1, ease: "power2.inOut", clearProps: "clipPath",
                onComplete: () => {
                window.scrollTo({ top: 0, behavior: 'instant' });
                $(data.next.container).removeClass("fixed"); }}); 

          } else {

                return gsap.fromTo(
                data.next.container,
                { clipPath: `circle(0% at ${percentLeft}% ${percentTop}%)` },
                { clipPath: `circle(140.9% at ${percentLeft}% ${percentTop}%)`, delay: 0.75, duration: 1.1, ease: "power2.inOut", clearProps: "clipPath",
                onComplete: () => {
                window.scrollTo({ top: 0, behavior: 'instant' });
                $(data.next.container).removeClass("fixed"); }}); 

          }

            },
            afterEnter(data) {},
            after(data) {
              
              scroll(data.next.container);

            },
           },
           // Legal
             {
             name: 'legalIn',
             to : {
               namespace: ['legal'],
             },
             once(data) {

               legalIntroOnce(data.next.container);
               scroll(data.next.container);
               
             },
             leave(data) {

              return gsap.fromTo(data.current.container, { autoAlpha: 1 }, { delay: 0.9, autoAlpha: 1, duration: 0.001 });
               
            },
             afterLeave(data) {},
             beforeLeave(data) {},
             beforeEnter(data) {},
             enter(data) {

              $(data.next.container).addClass("fixed");

              legalIntro();

             //iPad and Mobile
             if (mmTrans.matches) {
               
              return gsap.fromTo(
                data.next.container,
                { clipPath: `circle(3% at ${percentLeft - 3}% ${percentTop - 3}%)` },
                { clipPath: `circle(140.9% at ${percentLeft - 3}% ${percentTop - 3}%)`, delay: 0.75, duration: 1.1, ease: "power2.inOut", clearProps: "clipPath",
                onComplete: () => {
                window.scrollTo({ top: 0, behavior: 'instant' });
                $(data.next.container).removeClass("fixed"); }}); 

             } else {

                return gsap.fromTo(
                data.next.container,
                { clipPath: `circle(0% at ${percentLeft}% ${percentTop}%)` },
                { clipPath: `circle(140.9% at ${percentLeft}% ${percentTop}%)`, delay: 0.75, duration: 1.1, ease: "power2.inOut", clearProps: "clipPath",
                onComplete: () => { 
                scrollTo({ top: 0, behavior: 'instant' });
                $(data.next.container).removeClass("fixed"); }}); 

             }
                  
             },
             afterEnter(data) {},
             after(data) {
               
               scroll(data.next.container);
 
             },
            },
     // Legal from nav
           {
            name: 'legalNav',
           from : { custom: ({ trigger }) => { return trigger.classList && trigger.classList.contains('nav-legal'); },

            to : ['legal'] },
            leave(data) { return gsap.fromTo(data.current.container, { autoAlpha: 1 }, { delay: 0.9, autoAlpha: 1, duration: 0.001 }); },
            enter(data) {
                         
            $(data.next.container).addClass("fixed");
                                       
            legalIntroNav();

            //iPad and Mobile
            if (mmTrans.matches) {
                                        
              return gsap.fromTo(
                data.next.container,
                { clipPath: `circle(3% at ${percentLeft - 3}% ${percentTop - 3}%)` },
                { clipPath: `circle(140.9% at ${percentLeft - 3}% ${percentTop - 3}%)`, delay: 0.75, duration: 1.1, ease: "power2.inOut", clearProps: "clipPath",
                onComplete: () => {
                window.scrollTo({ top: 0, behavior: 'instant' });
                $(data.next.container).removeClass("fixed"); }}); 

            } else {

           return gsap.fromTo(
           data.next.container,
           { clipPath: `circle(0% at ${percentLeft}% ${percentTop}%)` },
           { clipPath: `circle(140.9% at ${percentLeft}% ${percentTop}%)`, delay: 0.75, duration: 1.1, ease: "power2.inOut", clearProps: "clipPath",
           onComplete: () => {
           window.scrollTo({ top: 0, behavior: 'instant' });
           $(data.next.container).removeClass("fixed"); }});

            }
                                           
            },
            after(data) { scroll(data.next.container); },
            },
               // Legal from cookie btn
               {
               name: 'legalCookie',
               from : { custom: ({ trigger }) => { return trigger.classList && trigger.classList.contains('cookie-policy__btn'); },
    
                to : ['legal'] },
                leave(data) { return gsap.fromTo(data.current.container, { autoAlpha: 1 }, { delay: 0.9, autoAlpha: 1, duration: 0.001 }); },
                enter(data) {
                             
                $(data.next.container).addClass("fixed");
                                           
                legalIntroCookie();
                                          
                                               
                },
                after(data) { scroll(data.next.container); 
                  $(data.next.container).removeClass("fixed");},
                },
                   // Legal from iFrame
           {
            name: 'legalIframe',
           from : { custom: ({ trigger }) => { return trigger.classList && trigger.classList.contains('iframe-out__btn'); },

            to : ['legal'] },
            leave(data) { return gsap.fromTo(data.current.container, { autoAlpha: 1 }, { delay: 0.9, autoAlpha: 1, duration: 0.001 }); },
            enter(data) {
                         
            $(data.next.container).addClass("fixed");
                                       
            legalIntroIframe();

            //iPad and Mobile
            if (mmTrans.matches) {
                                        
           return gsap.fromTo(
           data.next.container,
           { clipPath: `circle(3% at 34.5% 32%)` },
           { clipPath: `circle(140.9% at 34.5% 32%)`, delay: 0.75, duration: 1.1, ease: "power2.inOut", clearProps: "clipPath",
           onComplete: () => {
           window.scrollTo({ top: 0, behavior: 'instant' });
           $(data.next.container).removeClass("fixed"); }});

            } else {

           return gsap.fromTo(
           data.next.container,
           { clipPath: `circle(0% at 34.5% 32%)` },
           { clipPath: `circle(140.9% at 34.5% 32%)`, delay: 0.75, duration: 1.1, ease: "power2.inOut", clearProps: "clipPath",
           onComplete: () => {
           window.scrollTo({ top: 0, behavior: 'instant' });
           $(data.next.container).removeClass("fixed"); }});

            }
                                           
            },
            after(data) { scroll(data.next.container); },
            }],
          views: [{
            namespace: 'home',
          afterEnter(data) { 
            navMenuNew(data.next.container);
            initHome(data.next.container); 
            noHoverScroll(data.next.container);
            }
          }, {
            namespace: 'proposition',
            afterEnter(data) {      
              initProposition(data.next.container); 
              initBooking(data.next.container);
              navMenuNew(data.next.container); 
              noHoverScroll(data.next.container);
            }
          }, {
            namespace: 'alumni',
            afterEnter(data) {
             initAlumni(data.next.container);
             navMenuNew(data.next.container);
             noHoverScroll(data.next.container);
            }
          }, {
            namespace: 'alum',
            afterEnter(data) {
              initAlum(data.next.container);
              navMenuNew(data.next.container);
              noHoverScroll(data.next.container);
            }
          }, {
            namespace: 'about',
            afterEnter(data) {  
              initAbout(data.next.container);  
              navMenuNew(data.next.container);
              noHoverScroll(data.next.container);
            }
        }, {
            namespace: 'mrebel',
            afterEnter(data) {
              navMenuNew(data.next.container);
              initEbel(data.next.container); 
              noHoverScroll(data.next.container);
            }
        }, {
            namespace: 'mrebel-post',
            afterEnter(data) { 
              navMenuNew(data.next.container);
              initEbelPost(data.next.container); 
              noHoverScroll(data.next.container);
          }
        }, { 
           namespace: 'legal',
           afterEnter(data) { 
             initLegal(data.next.container);
             navMenuNew(data.next.container);
             noHoverScroll(data.next.container);
         }
       }, { 
        namespace: 'error',
        afterEnter(data) { 
          initError(data.next.container);
          navMenuNew(data.next.container);
      }
    }]
     })
   }
}

initRblu();

// Global scripts
function initGlobal() {

setTimeout(() => {

arrowCtaBtn();
morphCursor();
quizGlobal();
bookedCover();
cookieSelect();
iframeOut();
responsiveText();

}, 0);

}

// Home scripts
function initHome() {

  setTimeout(() => {
  
  homeMarquees();   
  homePowEmoji();
  homeStLottie();
  homeStReveal();
  homeEbelSwiper();
  homeLeave();
  homeCloseNavHome();
  quizStLottie();
  legalFooterLeave();
  cookieLeave();
  globalMisc();
  share();
  shareFallbackMenu();
  //homeTestiSwiper();
  //muzak();
  
  }, 0);
  
  }

// Proposition scripts
function initProposition() {

setTimeout(() => {

propMarquees();  
subLinkImages();
propStLottie();
quizStLottie();
propStSpacers();
propStRebHotstuff();
redactedSt();
propStRebDeets(); 
propStSpaDeets();
revertHome();
propFaqAccordion();
legalFooterLeave();
cookieLeave();
globalMisc();
NavRevertCurrent();
propCbSwiper();
smlArrowCta();
share();
shareFallbackMenu();

}, 0);
    
}

function initBooking() {

  setTimeout(() => {
  
  propCurrencyPick();
  propCurrencyMenu();
  propREBsuccess();
  propBookingCb();
  propBookingRebS();
  propBookingRebM();
  propBookingRebXXL();
  propBookingSpa();
  
  }, 0);
      
}


// Alumni scripts
function initAlumni() {

  setTimeout(() => {
  
  alumniMarquees();  
  alumniLeave();
  alumniImages();
  revertHome();
  quizStLottie();
  legalFooterLeave();
  cookieLeave();
  globalMisc();
  NavRevertCurrent();
  share();
  shareFallbackMenu();
  //muzak();
  
}, 0);
  
  }

// Alum deets scripts
function initAlum() {

  setTimeout(() => {
  
  revertSubPg();
  alumniLeave();
  alumniImages();
  alumRevertSt();
  revertHome();
  smlArrowCta();
  quizStLottie();
  legalFooterLeave();
  cookieLeave();
  globalMisc();
  NavRevertCurrent();
  share();
  shareFallbackMenu();
  //muzak();
  
  }, 0);
  
  }

// About scripts
function initAbout() {

setTimeout(() => {

aboutMarquees();  
aboutStGlobe();
aboutYouVideo();
aboutStX();
revertHome();
quizStLottie();
legalFooterLeave();
cookieLeave();
globalMisc();
NavRevertCurrent();
propFaqAccordion();
share();
shareFallbackMenu();
//muzak();
//aboutVidScreenSaver();
//aboutStFrame1();

}, 0);

}

// Mr Ebel scripts
function initEbel() {

setTimeout(() => {

mrebelSubscribe();
mrebelMarquees();   
mrebelImages();
mrebelLeave();  
lgSubLink();
mrebelTopicSwipers();
mrebelQuery();
revertHome();
smlArrowCta();
quizStLottie();
legalFooterLeave();
cookieLeave();
globalMisc();
mrebelTopicCounters();
NavRevertCurrent();
iframeOutQuery();
share();
shareFallbackMenu();

}, 0);

}

// Mr Ebel Posts scripts
function initEbelPost() {

  setTimeout(() => {
  
  globalMisc();
  mrebelLeave();  
  revertSubPg();
  mrebelPostRevertSt();
  mrebelTopicSwipers();
  mrebelSubscribe();
  mrebelQuery();
  revertHome();
  smlArrowCta();
  legalFooterLeave();
  cookieLeave();
  mrebelImages();
  globalMisc();
  NavRevertCurrent();
  share();
  shareFallbackMenu();
 
  }, 0);
  
  }

  // Legal scripts
function initLegal() {

  setTimeout(() => {
    
    legalMarquees();
    lgSubLink();
    revertHome();
    globalMisc();
    NavRevertCurrent();
    legalLottie();
    quizStLottie();
    legalLinksSt();
    share();
    shareFallbackMenu();
 
  }, 0);

} 

    // Error scripts
function initError() {

  setTimeout(() => {
    
    errorMarquees();
    revertSubPg();
    lgSubLink();
    revertHome();
    globalMisc();

  }, 0);
  
  }
