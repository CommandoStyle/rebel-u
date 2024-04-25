const mrebelTopicSwipers = () => {

//RANDOM Swiper
  const BegSwiper = new Swiper(".swiper.ebel-beginnings", {
    direction: "horizontal",
    //followFinger: true,
    effect: "slide",
    slidesPerView: 2.5,
    spaceBetween: 60,
    speed: 1000,
    //centerInsufficientSlides: true,
    navigation: {
     nextEl: '#beg-next',
     prevEl: '#beg-prev'
    },
    breakpoints: {
      375: {
        slidesPerView: 1.4
      },
      768: {
        slidesPerView: 1.48
      },
      992: {
        slidesPerView: 2.541
      }
    }
  });

  //Mindset Swiper
  const MindsetSwiper = new Swiper(".swiper.ebel-mindset", {
    direction: "horizontal",
    //followFinger: true,
    effect: "slide",
    slidesPerView: 2.5,
    spaceBetween: 60,
    speed: 1000,
    navigation: {
     nextEl: '#mindset-next',
     prevEl: '#mindset-prev'
    },
    breakpoints: {
      375: {
        slidesPerView: 1.4
      },
      768: {
        slidesPerView: 1.48
      },
      992: {
        slidesPerView: 2.541
      }
    }
  });

  //Misc Swiper
  const MiscSwiper = new Swiper(".swiper.ebel-misc", {
    direction: "horizontal",
    //followFinger: true,
    effect: "slide",
    slidesPerView: 2.5,
    spaceBetween: 60,
    speed: 1000,
    navigation: {
     nextEl: '#misc-next',
     prevEl: '#misc-prev'
    },
    breakpoints: {
      375: {
        slidesPerView: 1.4
      },
      768: {
        slidesPerView: 1.48
      },
      992: {
        slidesPerView: 2.541
      }
    }
  });

  //POST Swiper
  const PostSwiper = new Swiper(".swiper.ebel-post", {
    direction: "horizontal",
    //followFinger: true,
    effect: "slide",
    slidesPerView: 2.5,
    spaceBetween: 60,
    speed: 1000,
    navigation: {
     nextEl: '#post-next',
     prevEl: '#post-prev'
    },
    breakpoints: {
      375: {
        slidesPerView: 1.4
      },
      768: {
        slidesPerView: 1.48
      },
      992: {
        slidesPerView: 2.541
      }
    }
  });

}

export default mrebelTopicSwipers;