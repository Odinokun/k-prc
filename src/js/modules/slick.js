module.exports = function() {

  // begin slider in top section
  $('.top-slider__list').slick({
    dots: true,
    infinite: true,
    arrows: false,
    speed: 1000,
    fade: true,
    autoplay: true,
    cssEase: 'linear'
  });
  // end   slider in top section

  // begin slider in advantage section
  $('.advantage-slider__list').slick({
    speed: 1000,
    dots: false,
    infinite: false,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          infinite: true,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          infinite: true,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 550,
        settings: {
          infinite: true,
          slidesToShow: 1
        }
      }
    ]
  });
  // end   slider in advantage section

  // begin slider in contacts.html
  $('.contacts-slider__list').slick({
    dots: false,
    infinite: false,
    arrows: true,
    speed: 1000,
    fade: true,
    autoplay: false,
    cssEase: 'linear'
  });
  // end   slider in contacts.html

};