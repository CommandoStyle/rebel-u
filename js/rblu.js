//import barba from '@barba/core';
import barbaPrefetch from '@barba/prefetch';

//Turn off GSAP alerts
gsap.config({
  nullTargetWarn: false,
  trialWarn: false
});

//Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, Observer, SplitText, ExpoScaleEase, MotionPathPlugin, MorphSVGPlugin);

//Barba prefectch init
barba.use(barbaPrefetch);

/**
* Scroll
*/

import scroll from './scroll/scroll';
import resetScroll from './scroll/resetScroll';
import noHoverScroll from './scroll/noHoverScroll';

/**
* Transition animations
*/

import homeIntroOnce from './transitions/homeIntroOnce';
import homeIntro from './transitions/homeIntro';
import propIntroOnce from './transitions/propIntroOnce';
import propIntroCta from './transitions/propIntroCta';
import propIntro from './transitions/propIntro';
import alumniIntroOnce from './transitions/alumniIntroOnce';
import alumniIntroCta from './transitions/alumniIntroCta';
import alumniIntro from './transitions/alumniIntro';
import alumniLeave from './transitions/alumniLeave';
import alumIntro from './transitions/alumIntro';
import alumIntroOnce from './transitions/alumIntroOnce';
import aboutIntroOnce from './transitions/aboutIntroOnce';
import aboutIntroCta from './transitions/aboutIntroCta';
import aboutIntro from './transitions/aboutIntro';
import homeLeave from './transitions/homeLeave';
import mrebelIntroOnce from './transitions/mrebelIntroOnce';
import mrebelIntroCta from './transitions/mrebelIntroCta';
import mrebelIntro from './transitions/mrebelIntro';
import mrebelLeave from './transitions/mrebelLeave';
import ebelPostIntroOnce from './transitions/mrebelPostIntroOnce';
import ebelPostIntro from './transitions/mrebelPostIntro';
import legalFooterLeave from './transitions/legalFooterLeave';
import legalIntroOnce from './transitions/legalIntroOnce';
import legalIntro from './transitions/legalIntro';
import legalIntroIframe from './transitions/legalIntroIframe';
import legalIntroNav from './transitions/legalIntroNav';
import legalIntroCookie from './transitions/legalIntroCookie';
import cookieLeave from './transitions/cookieLeave';

/**
* Global
*/

import arrowCtaBtn from './global/arrowCtaBtn';
import cursorFirstNew from './global/cursorFirstNew';
import globalMisc from './global/globalMisc';
import navMenuNew from './global/navMenuNew';
import quizGlobal from './global/quizGlobal';
import morphCursor from './global/morphCursor';
import smlArrowCta from './global/smlArrowCta';
import revertHome from './global/revertHome';
import revertSubPg from './global/revertSubPg';
import lgSubLink from './global/lgSubLink';
import quizStLottie from './global/quizStLottie';
import navHoverNew from './global/navHoverNew';
import bookedCover from './global/bookedCover';
import NavRevertCurrent from './global/NavRevertCurrent';
import cookieSelect from './global/cookieSelect';
import iframeOut from './global/iFrameOut';
import iframeOutQuery from './global/iFrameOutQuery';
//import initWebflow from './global/initWebflow';
//import muzak from './global/muzak';

/**
* Home
*/

import homeEbelSwiper from './home/homeEbelSwiper';
import homePowEmoji from './home/homePowEmoji';
import homeStReveal from './home/homeStReveal';
import homeStLottie from './home/homeStLottie';
import homeMarquees from './home/homeMarquees';
import homeCloseNavHome from './home/homeCloseNavHome';
//import homeTestiSwiper from './home/homeTestiSwiper';

/**
* Proposition
*/

import propMarquees from './proposition/propMarquees';
import propREBsuccess from './proposition/propREBsuccess';
import propFaqAccordion from './proposition/propFaqAccordion';
import propStLottie from './proposition/propStLottie';
import propStSpacers from './proposition/propStSpacers';
import propStRebHotstuff from './proposition/propStRebHotstuff';
import redactedSt from './proposition/redactedSt';
import subLinkImages from './proposition/subLinkImages';
import propCurrencyMenu from './proposition/propCurrencyMenu';
import propStRebDeets from './proposition/propStRebDeets';
import propStSpaDeets from './proposition/propStSpaDeets';
import propCurrencyPick from './proposition/propCurrencyPick';
import propBookingCb from './proposition/propBookingCb';
import propBookingRebS from './proposition/propBookingRebS';
import propBookingRebM from './proposition/propBookingRebM';
import propBookingRebXXL from './proposition/propBookingRebXXL';
import propBookingSpa from './proposition/propBookingSpa';
import propCbSwiper from './proposition/propCbSwiper';
//import propStCB from './proposition/propStCB';
//import propBooking from './proposition/propBooking';

/**
* Alumni
*/

import alumRevertSt from './alumni/alumRevertSt';
import alumniImages from './alumni/alumniImages';
import alumniMarquees from './alumni/alumniMarquees';

/**
* About
*/

import aboutMarquees from './about/aboutMarquees';
import aboutStGlobe from './about/aboutStGlobe';
import aboutYouVideo from './about/aboutYouVideo';
import aboutStX from './about/aboutStX';
//import aboutVidScreenSaver from './about/aboutVidScreenSaver';
//import aboutStFrame1 from './about/aboutStFrame1';

/**
* Mr Ebel
*/

import mrebelMarquees from './mr-ebel/mrebelMarquees';
import mrebelPostRevertSt from './mr-ebel/mrebelPostRevertSt';
import mrebelQuery from './mr-ebel/mrebelQuery';
import mrebelTopicSwipers from './mr-ebel/mrebelTopicSwipers';
import mrebelSubscribe from './mr-ebel/mrebelSubscribe';
import mrebelImages from './mr-ebel/mrebelImages';
import mrebelTopicCounters from './mr-ebel/mrebelTopicCounters';
//import mrebelSubLinks from './mr-ebel/mrebelSubLinks';

/**
* Legal
*/

import legalLottie from './legal/legalLottie';
import legalMarquees from './legal/legalMarquees';
import legalLinksSt from './legal/legalLinksSt';

/**
* Error
*/

import errorMarquees from './error/errorMarquees';

// Get mouse position on click  
let percentTop;
let percentLeft;
$(document).on("click", function (e) {
  let mouseTop = e.pageY - $(window).scrollTop();
  let mouseLeft = e.pageX;
  percentTop = (mouseTop / $(window).height()) * 100;
  percentLeft = (mouseLeft / $(window).width()) * 100;
});

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

              return gsap.fromTo(
                data.next.container,
                { clipPath: `circle(0% at ${percentLeft}% ${percentTop}%)` },
                { clipPath: `circle(140.9% at ${percentLeft}% ${percentTop}%)`, delay: 0.75, duration: 1.1, ease: "power2.inOut", clearProps: "clipPath",
                onComplete: () => {
                window.scrollTo({ top: 0, behavior: 'instant' });
                $(data.next.container).removeClass("fixed"); }});   

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
               
              return gsap.fromTo(
                data.next.container,
                { clipPath: `circle(0% at ${percentLeft}% ${percentTop}%)` },
                { clipPath: `circle(140.9% at ${percentLeft}% ${percentTop}%)`, delay: 0.75, duration: 1.1, ease: "power2.inOut", clearProps: "clipPath",
                onComplete: () => {
                window.scrollTo({ top: 0, behavior: 'instant' });
                $(data.next.container).removeClass("fixed"); }}); 
                      
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
            leave(data) { return gsap.fromTo(data.current.container, { autoAlpha: 1 }, { delay: 0.9, autoAlpha: 1, duration: 0.001 }); },
            enter(data) {
                        
            $(data.next.container).addClass("fixed");
                                      
            propIntroCta();
                                       
            return gsap.fromTo(
            data.next.container,
            { clipPath: `circle(0% at ${percentLeft}% ${percentTop}%)` },
            { clipPath: `circle(140.9% at ${percentLeft}% ${percentTop}%)`, delay: 0.75, duration: 1.1, ease: "power2.inOut", clearProps: "clipPath",
             onComplete: () => {
             window.scrollTo({ top: 0, behavior: 'instant' });
             $(data.next.container).removeClass("fixed"); }});   
                                          
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
                                     
          return gsap.fromTo(
          data.next.container,
          { clipPath: `circle(0% at ${percentLeft}% ${percentTop}%)` },
          { clipPath: `circle(140.9% at ${percentLeft}% ${percentTop}%)`, delay: 0.75, duration: 1.1, ease: "power2.inOut", clearProps: "clipPath",
           onComplete: () => {
           window.scrollTo({ top: 0, behavior: 'instant' });
           $(data.next.container).removeClass("fixed"); }});   
                                        
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
               
              return gsap.fromTo(
                data.next.container,
                { clipPath: `circle(0% at ${percentLeft}% ${percentTop}%)` },
                { clipPath: `circle(140.9% at ${percentLeft}% ${percentTop}%)`, delay: 0.75, duration: 1.1, ease: "power2.inOut", clearProps: "clipPath",
                onComplete: () => {
                window.scrollTo({ top: 0, behavior: 'instant' });
                $(data.next.container).removeClass("fixed"); }});   
                  
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
                                       
          return gsap.fromTo(
          data.next.container,
          { clipPath: `circle(0% at ${percentLeft}% ${percentTop}%)` },
          { clipPath: `circle(140.9% at ${percentLeft}% ${percentTop}%)`, delay: 0.75, duration: 1.1, ease: "power2.inOut", clearProps: "clipPath",
          onComplete: () => {
          window.scrollTo({ top: 0, behavior: 'instant' });
          $(data.next.container).removeClass("fixed"); }});   
                                          
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
                                                   
          return gsap.fromTo(
          data.next.container,
          { clipPath: `circle(0% at ${percentLeft}% ${percentTop}%)` },
          { clipPath: `circle(140.9% at ${percentLeft}% ${percentTop}%)`, delay: 0.75, duration: 1.1, ease: "power2.inOut", clearProps: "clipPath",
          onComplete: () => {
          window.scrollTo({ top: 0, behavior: 'instant' });
          $(data.next.container).removeClass("fixed"); }});   
                                                      
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
 
              return gsap.fromTo(
                data.next.container,
                { clipPath: `circle(0% at ${percentLeft}% ${percentTop}%)` },
                { clipPath: `circle(140.9% at ${percentLeft}% ${percentTop}%)`, delay: 0.75, duration: 1.1, ease: "power2.inOut", clearProps: "clipPath",
                onComplete: () => {
                window.scrollTo({ top: 0, behavior: 'instant' });
                $(data.next.container).removeClass("fixed"); }});   

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
               
              return gsap.fromTo(
                data.next.container,
                { clipPath: `circle(0% at ${percentLeft}% ${percentTop}%)` },
                { clipPath: `circle(140.9% at ${percentLeft}% ${percentTop}%)`, delay: 0.75, duration: 1.1, ease: "power2.inOut", clearProps: "clipPath",
                onComplete: () => {
                window.scrollTo({ top: 0, behavior: 'instant' });
                $(data.next.container).removeClass("fixed"); }});   
                  
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
                             
           return gsap.fromTo(
           data.next.container,
           { clipPath: `circle(0% at ${percentLeft}% ${percentTop}%)` },
           { clipPath: `circle(140.9% at ${percentLeft}% ${percentTop}%)`, delay: 0.75, duration: 1.1, ease: "power2.inOut", clearProps: "clipPath",
           onComplete: () => {
           window.scrollTo({ top: 0, behavior: 'instant' });
           $(data.next.container).removeClass("fixed"); }});   
                                
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
 
              return gsap.fromTo(
                data.next.container,
                { clipPath: `circle(0% at ${percentLeft}% ${percentTop}%)` },
                { clipPath: `circle(140.9% at ${percentLeft}% ${percentTop}%)`, delay: 0.75, duration: 1.1, ease: "power2.inOut", clearProps: "clipPath",
                onComplete: () => {
                window.scrollTo({ top: 0, behavior: 'instant' });
                $(data.next.container).removeClass("fixed"); }});   
                  
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
                                                   
           return gsap.fromTo(
           data.next.container,
           { clipPath: `circle(0% at ${percentLeft}% ${percentTop}%)` },
           { clipPath: `circle(140.9% at ${percentLeft}% ${percentTop}%)`, delay: 0.75, duration: 1.1, ease: "power2.inOut", clearProps: "clipPath",
           onComplete: () => {
           window.scrollTo({ top: 0, behavior: 'instant' });
          $(data.next.container).removeClass("fixed"); }});   
                                                      
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
                                                    
            return gsap.fromTo(
            data.next.container,
            { clipPath: `circle(0% at ${percentLeft}% ${percentTop}%)` },
            { clipPath: `circle(140.9% at ${percentLeft}% ${percentTop}%)`, delay: 0.75, duration: 1.1, ease: "power2.inOut", clearProps: "clipPath",
            onComplete: () => {
            window.scrollTo({ top: 0, behavior: 'instant' });
           $(data.next.container).removeClass("fixed"); }});   
                                                       
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
 
              return gsap.fromTo(
                data.next.container,
                { clipPath: `circle(0% at ${percentLeft}% ${percentTop}%)` },
                { clipPath: `circle(140.9% at ${percentLeft}% ${percentTop}%)`, delay: 0.75, duration: 1.1, ease: "power2.inOut", clearProps: "clipPath",
                onComplete: () => {
                window.scrollTo({ top: 0, behavior: 'instant' });
                $(data.next.container).removeClass("fixed"); }});   

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
               
              return gsap.fromTo(
                data.next.container,
                { clipPath: `circle(0% at ${percentLeft}% ${percentTop}%)` },
                { clipPath: `circle(140.9% at ${percentLeft}% ${percentTop}%)`, delay: 0.75, duration: 1.1, ease: "power2.inOut", clearProps: "clipPath",
                onComplete: () => { 
                scrollTo({ top: 0, behavior: 'instant' });
                $(data.next.container).removeClass("fixed"); }});   
                  
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
                                        
           return gsap.fromTo(
           data.next.container,
           { clipPath: `circle(0% at ${percentLeft}% ${percentTop}%)` },
           { clipPath: `circle(140.9% at ${percentLeft}% ${percentTop}%)`, delay: 0.75, duration: 1.1, ease: "power2.inOut", clearProps: "clipPath",
           onComplete: () => {
           window.scrollTo({ top: 0, behavior: 'instant' });
           $(data.next.container).removeClass("fixed"); }});   
                                           
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
                                        
           return gsap.fromTo(
           data.next.container,
           { clipPath: `circle(0% at 34.5% 32%)` },
           { clipPath: `circle(140.9% at 34.5% 32%)`, delay: 0.75, duration: 1.1, ease: "power2.inOut", clearProps: "clipPath",
           onComplete: () => {
           window.scrollTo({ top: 0, behavior: 'instant' });
           $(data.next.container).removeClass("fixed"); }});   
                                           
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
