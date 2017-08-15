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


  // begin slider in autstaffing.html
  // отображаем общее кол-во слайдов
  $('.autstaffing-tabs__list ').on('init', function(event, slick){
    var allSlide = slick.slideCount;
    if (allSlide < 10) {
      allSlide = "0" + allSlide;
    }
    $( "#autstaffing-tabs__counter-all" ).html(allSlide);
  });
  // отображаем текущий слайд в счетчике
  $('.autstaffing-tabs__list').on('afterChange', function(event, slick, currentSlide, nextSlide){
    var curSlide = currentSlide + 1;
    if (curSlide < 10) {
      curSlide = "0" + curSlide;
    }
    $( "#autstaffing-tabs__counter-tab" ).html(curSlide);
  });
  // инициализируем слайдер
  $('.autstaffing-tabs__list').slick({
    arrows: true,
    speed: 100,
    fade: true,
    autoplay: false,
    cssEase: 'linear',
    nextArrow: '<a class="btn btn-bw" href="">Еще</a>',
    dots: true,
    dotsClass: 'custom_paging',
    customPaging: function (slider, i) {
        // return  (i + 1) + '/' + slider.slideCount;
        i = i + 1;
        if (i < 10) {
          i = "0" + i;
        }
        return  (i);
    }
  });
  // end   slider in autstaffing.html


  // begin slider in advantage section
  $('.autstaffing-advantage-slider__list').slick({
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



  // begin slider in about.html
  $('.about-advantage-slider__list').slick({
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
  // end   slider in about.html


  // begin slider in safety.html
  $('.safety-advantage-slider__list').slick({
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
  // end   slider in safety.html


  // begin slider in safety.html
  // отображаем общее кол-во слайдов
  $('.safety-tabs__list ').on('init', function(event, slick){
    var allSlide = slick.slideCount;
    if (allSlide < 10) {
      allSlide = "0" + allSlide;
    }
    $( "#safety-tabs__counter-all" ).html(allSlide);
  });
  // отображаем текущий слайд в счетчике
  $('.safety-tabs__list').on('afterChange', function(event, slick, currentSlide, nextSlide){
    var curSlide = currentSlide + 1;
    if (curSlide < 10) {
      curSlide = "0" + curSlide;
    }
    $( "#safety-tabs__counter-tab" ).html(curSlide);
  });
  // инициализируем слайдер
  $('.safety-tabs__list').slick({
    arrows: true,
    speed: 100,
    fade: true,
    autoplay: false,
    cssEase: 'linear',
    nextArrow: '<a class="btn btn-bw" href="">Еще</a>',
    dots: true,
    dotsClass: 'custom_paging',
    customPaging: function (slider, i) {
        // return  (i + 1) + '/' + slider.slideCount;
        i = i + 1;
        if (i < 10) {
          i = "0" + i;
        }
        return  (i);
    }
  });
  // end   slider in safety.html
  
};