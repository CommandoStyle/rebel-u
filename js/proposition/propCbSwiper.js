// CB Slick slider

const propCbSwiper = () => {
  
    const cbSwiper = new Swiper('.swiper.cb-options', {
      direction: "vertical",
      loop: true,
      followFinger: false,
      slidesPerView: 1,
      effect: "slide",
      speed: 1200,
      autoplay: {
        delay: 1200
      }
    });
    
  }
  
export default propCbSwiper;