export const mrebelTopicCounters = () => {

//Count Beginnings
$(document).ready(function() {
const beginningscounter = document.querySelectorAll('.beginnings-post').length;
$('.mrebel-beginnings__count').text(beginningscounter); 
 });

 //Count Mindset
 $(document).ready(function() {
    const mindsetcounter = document.querySelectorAll('.mindset-post').length;
    $('.mrebel-mindset__count').text(mindsetcounter); 
     });

   //Count Misc
     $(document).ready(function() {
        const misccounter = document.querySelectorAll('.misc-post').length;
        $('.mrebel-misc__count').text(misccounter); 
         });

}
