const noHoverScroll = () => {

 // pointer events none on buttons on scroll

    $(function() {

        var timer, btn = $('.lg-cta__btn, .sml-cta__btn, .hero-scroll, .arrow, .is--alumni-hover, .prop-sub__link, .cb-sub__link, .reb-sub__link, .spa-sub__link, .what-the-faq__items-contain, .what-the-faq__btn, .mrebel-sub__link, .mrebel-post__link, .mrebel-latest__link, .inline-link_long'),
            flag = false;
        $(window).scroll(function() {
            if (!flag) {
                flag = true;
                btn.addClass('disable-hover');
            }
            clearTimeout(timer);
            timer = setTimeout(function() {
                btn.removeClass('disable-hover');
                flag = false;
            }, 500);
        });
    });
    
  }

export default noHoverScroll;