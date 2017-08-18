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
  // показываем скрытые слайды при первой прокрутке карусели
  $('.advantage-slider__list').on('afterChange', function(event, slick, currentSlide, nextSlide){
      $('.slick-cloned').css("visibility", "visible")
  });
  // инициализируем карусель
  $('.advantage-slider__list').slick({
    speed: 1000,
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 550,
        settings: {
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


  // begin slider in autstaffing.html
  // показываем скрытые слайды при первой прокрутке карусели
  $('.autstaffing-advantage-slider__list').on('afterChange', function(event, slick, currentSlide, nextSlide){
      $('.slick-cloned').css("visibility", "visible")
  });
  // инициализируем карусель
  $('.autstaffing-advantage-slider__list').slick({
    speed: 1000,
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  // end   slider in autstaffing.html



  // begin slider in about.html
  // показываем скрытые слайды при первой прокрутке карусели
  $('.about-advantage-slider__list').on('afterChange', function(event, slick, currentSlide, nextSlide){
      $('.slick-cloned').css("visibility", "visible")
  });
  // инициализируем карусель
  $('.about-advantage-slider__list').slick({
    speed: 1000,
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  // end   slider in about.html


  // begin slider in safety.html
  // показываем скрытые слайды при первой прокрутке карусели
  $('.safety-advantage-slider__list').on('afterChange', function(event, slick, currentSlide, nextSlide){
      $('.slick-cloned').css("visibility", "visible")
  });
  // инициализируем карусель
  $('.safety-advantage-slider__list').slick({
    speed: 1000,
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 550,
        settings: {
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


  // begin slider in autsorsing.html
  // показываем скрытые слайды при первой прокрутке карусели
  $('.autsorsing-advantage-slider__list').on('afterChange', function(event, slick, currentSlide, nextSlide){
      $('.slick-cloned').css("visibility", "visible")
  });
  // инициализируем карусель
  $('.autsorsing-advantage-slider__list').slick({
    speed: 1000,
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  // end   slider in autsorsing.html


  // begin slider in autsorsing.html
  // отображаем общее кол-во слайдов
  $('.autsorsing-tabs__list ').on('init', function(event, slick){
    var allSlide = slick.slideCount;
    if (allSlide < 10) {
      allSlide = "0" + allSlide;
    }
    $( "#autsorsing-tabs__counter-all" ).html(allSlide);
  });
  // отображаем текущий слайд в счетчике
  $('.autsorsing-tabs__list').on('afterChange', function(event, slick, currentSlide, nextSlide){
    var curSlide = currentSlide + 1;
    if (curSlide < 10) {
      curSlide = "0" + curSlide;
    }
    $( "#autsorsing-tabs__counter-tab" ).html(curSlide);
  });
  // инициализируем слайдер
  $('.autsorsing-tabs__list').slick({
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
        // return  (i);
    }
  });
  // end   slider in autsorsing.html



  // begin slider in audit.html
  // отображаем общее кол-во слайдов
  $('.audit-tab-01__slider-list').on('init', function(event, slick){
    var allSlide = slick.slideCount;
    if (allSlide < 10) {
      allSlide = "0" + allSlide;
    }
    $( "#audit-tab__counter-all" ).html(allSlide);
  });
  // отображаем текущий слайд в счетчике
  $('.audit-tab-01__slider-list').on('afterChange', function(event, slick, currentSlide, nextSlide){
    var curSlide = currentSlide + 1;
    if (curSlide < 10) {
      curSlide = "0" + curSlide;
    }
    $( "#audit-tab__counter-tab" ).html(curSlide);
  });
  // инициализируем слайдер
  $('.audit-tab-01__slider-list').slick({
    arrows: true,
    speed: 100,
    fade: true,
    autoplay: false,
    cssEase: 'linear',
    nextArrow: '<a class="btn btn-wr" href="">Еще</a>',
    dots: false
  });
  // end   slider in audit.html


  // begin slider in audit.html-tab3
  // отображаем общее кол-во слайдов
  $('.audit-tab-03__list ').on('init', function(event, slick){
    var allSlide = slick.slideCount;
    if (allSlide < 10) {
      allSlide = "0" + allSlide;
    }
    $( "#audit-tab-03__counter-all-01" ).html(allSlide);
  });
  // отображаем текущий слайд в счетчике
  $('.audit-tab-03__list').on('afterChange', function(event, slick, currentSlide, nextSlide){
    var curSlide = currentSlide + 1;
    if (curSlide < 10) {
      curSlide = "0" + curSlide;
    }
    $( "#audit-tab-03__counter-tab-01" ).html(curSlide);
  });
  // инициализируем слайдер
  $('.audit-tab-03__list').slick({
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
        // return  (i);
    }
  });
  // end   slider in audit.html-tab3
  
};