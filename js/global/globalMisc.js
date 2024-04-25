export const globalMisc = () => {

// disable hover on load

$(document).ready(function(){
  setTimeout(function(){
         $('.nav__logo-btn, .menu__btn').css('pointer-events', 'all')
  }, 3000);
});

$(document).ready(function(){
  setTimeout(function(){
         $('.mrebel__submit-query').css('pointer-events', 'all')
  }, 1500);
});
 
// Restart clock
new Clock({ selector: "data-clock3" });
new Clock({ selector: "data-clock1" });

// Back button - to fix with Barba history and scroll position
//let revertmrebel = document.querySelector(".revert__mrebel");

//revertmrebel.addEventListener('click', function (e) {
//e.preventDefault();
//window.history.back();
//});

$(document).ready(function() {
 const postcounter = document.querySelectorAll('.topic-item').length;
 $('.mrebel-posts__amount').text(postcounter); 
  });

}
