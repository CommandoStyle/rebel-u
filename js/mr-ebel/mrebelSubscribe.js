export const mrebelSubscribe = () => {  

  // SET EMAIL COVER IF ALREADY COMPLETED
if (sessionStorage.getItem("emailSuccessPlayed", true)) {

  gsap.set(".email-done__cover", { display: "flex" });
  gsap.set(".email-redact-cover", { display: "none" });
  
} 

    // REVEAL EMAIL INPUT

    gsap.registerPlugin(ScrollTrigger);

    gsap.set(".email-form", { autoAlpha: 0 });
  
    gsap.utils.toArray(".subscribe-items__wrapper").forEach(emailForm => {
    
     const emailTxt = emailForm.querySelectorAll(".email-form");
     const emailCover = emailForm.querySelectorAll([".email-redact-cover", ".cta-redact-cover"]);
    
      const emailReveal =  gsap.timeline({ paused:true })
    
      emailReveal
      .from(emailCover, { duration: 0.4, scaleX: 0, transformOrigin: "0% 100%", ease: "linear" }) 
      .to(emailTxt, { autoAlpha: 1, duration: 0.001 })
      .to(emailCover, { duration: 0.4, scaleX: 0, transformOrigin: "100% 0%", ease: "linear" })
      .to(emailCover, { display: "none"});
      
      ScrollTrigger.create({
        trigger: emailForm,
        start: "top 30%",
        onEnter: () => emailReveal.play(),
        onLeaveBack: () => emailReveal.reverse(),
      })
    })
      
      // Reveal submit btn when email is validated
      
        $(function(){
      
          ;( function( $, window, document, undefined ) {
              'use strict';
              var form        = '.form-important-class',
                  className   = 'email-active',
                  submit      = '.submit-email__btn-wrap',
                  redact      = '.redact-cover-email',
                  email       = 'input[type="email"]';
              $( form ).each( function(){
                  var $form   = $( this ),
                      $email  = $form.find( email ),
                      $submit  = $form.find( submit ),
                      $redact  = $form.find( redact ),
                      val     = '';
                  $email.on( 'keyup.addClassWhenEmail', function(){
                      val = $email.val();
                      $submit.toggleClass( className, val != '' && /^([\w-\.]+@([\w-]+\.)+[\w-]{2,12})?$/.test( val ) );  
                      $redact.toggleClass( className, val != '' && /^([\w-\.]+@([\w-]+\.)+[\w-]{2,12})?$/.test( val ) );     
                  });
              });
          })( jQuery, window, document );
        })
      
      // Disable submit on enter key
      
      $(document).ready(function() {
        $(window).keydown(function(event){
          if(event.keyCode == 13) {
            event.preventDefault();
            return false;
          }
        });
      });
  
      // on form submit
  $('.form-important-class').submit(()=>{ 
      setTimeout(()=>{
     // click our div trigger to run success anim
     $('.form-success-trigger').click(); 
      }, 666);
   });

  $("#Email").submit(function(e) {
    e.preventDefault();
   });

gsap.set("subscribe-drop__contain",{perspective:600})
gsap.set("img",{xPercent:"-50%",yPercent:"-50%"})

var total = 22;
var warp = document.getElementById("subscribe-drop__contain"), w = window.innerWidth , h = window.innerHeight;
 
 for (var i=0; i<total; i++){ 
   var Div = document.createElement('div');
   gsap.set(Div,{attr:{class:'subscribe-drop'}, x:R(0,w), y:R(-200,-150), z:R(-200,200)});
   warp.appendChild(Div);
   subsanim(Div);
 }

 function subsanim(elem) { 

   const subssubmit = gsap.timeline({ paused: true, repeat: 0 });

   subssubmit.from(elem, {delay: () => gsap.utils.random(0, 3.5), autoAlpha: 0, duration: 0.01})
   .to(".subscribe-drop__contain", {zIndex: 120, duration: 0.01}, "<")
   .to(elem, {x:'+=100', duration: () => gsap.utils.random(1.5, 3.5), rotationZ: () => gsap.utils.random(0, 180), repeat:-1, yoyo:true, ease:Sine.easeInOut})
   .to(elem, {duration: () => gsap.utils.random(1.5, 3.5), rotationX: () => gsap.utils.random(0, 18),rotationY: () => gsap.utils.random(0, 36), repeat:-1, yoyo:true, ease:Sine.easeInOut}, "<")
   .to(elem, {duration: () => gsap.utils.random(1.5, 3.5), y:h+500, ease: Linear.easeNone}, "<")
   .to(elem, {autoAlpha: 0, onComplete() { sessionStorage.setItem("emailSuccessPlayed", true) }})
   .to(".subscribe-drop__contain", {delay: 6, zIndex: 'auto'})
   .set(".email-redact-cover", { display: "none", autoAlpha: 0 });
        
document.getElementById("submit-success").addEventListener("click", subsSuccess);

function subsSuccess() {

  subssubmit.restart(); 

    };  
 };

function R(min,max) {return min+Math.random()*(max-min)};

}
