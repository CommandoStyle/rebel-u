 // Sub-links hover fill
  
 const lgSubLink = (mouseenter, mouseout) => {
 
    $(function() {  
      $('.sub__link')
        .on('mouseenter', function(e) {
                var parentOffset = $(this).offset(),
                  relX = e.pageX - parentOffset.left, // clientX in loco
                  relY = e.pageY - parentOffset.top;
                $(this).find('.btn-inner').css({top:relY, left:relX})
        })
        .on('mouseout', function(e) {
                var parentOffset = $(this).offset(),
                  relX = e.pageX - parentOffset.left,
                  relY = e.pageY - parentOffset.top;
            $(this).find('.btn-inner').css({top:relY, left:relX})
        });
    });
    
    $( ".sub__link" ).mouseenter(function() {
    $('.cursor-dot').addClass('hide');
      });
    
    $( ".sub__link" ).mouseleave(function() {
    $('.cursor-dot').removeClass('hide');
      });



}

export default lgSubLink;
 