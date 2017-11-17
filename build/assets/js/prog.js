//====== Begin Programmer code ======
// begin popup open
$('.popup-open').on('click', function() {
  var popupName = $(this).data('open');

  $('.popup-' + popupName).fadeIn();
  $('.popup__layer').fadeIn();
  $('body').addClass('no-scroll');

  return false;
});
// end   popup open

// begin popup close
$('.popup__layer, .popup-close').on('click', function() {
  $('.popup, .popup__layer, .popup-success').fadeOut();
  $('body').removeClass('no-scroll');
  
  // закрываем попапы в шапке
  $('.geolocation-region__popup-city, .geolocation-region__popup').fadeOut();
  return false;
});
// end   popup close

// begin отправка формы
$("form").submit(function() {
  $.ajax({
    type: "POST",
    url: "assets/php/mail.php",
    data: $(this).serialize()
  }).done(function() {
    $('.popup').fadeOut(0);
    $('form')[0].reset();
    $('.popup-success, .popup__layer').fadeIn();
  });
  return false;
});
// end   отправка формы

// BEGIN активная/неактивная кнопка в форме
$(window).on('load', function() {
  $("input:checkbox:checked").parent().addClass('checked');
});

$("input:checkbox").on('click', function() {
  if ($(this).is(':checked')) {
    $(this).parent().addClass('checked');
  } else {
    $(this).parent().removeClass('checked');
  }
});
// END активная/неактивная кнопка в форме

// BEGIN выбор активного элемента в меню и синих табах !!!!!!!!! убрать при посадке на CMS
$(window).on('load', function() {
  var currentPage = $('.main').data('current');
  $('#header-nav__list .header-nav__link-' + currentPage).addClass('active')
  $('#tab-blue .tab-blue__link-' + currentPage).addClass('active')
});
// END выбор активного элемента в меню и синих табах !!!!!!!!! убрать при посадке на CMS


// BEGIN autsorsing vacancies loadmore
$(function() {
  $('.vacancies-section__item').slice(0, 8).show();
  $('.vacancies-section__loadmore').on('click', function(e) {
    e.preventDefault();
    $('.vacancies-section__item').slice(0, 100).slideDown();
    $('.vacancies-section__item-all').fadeOut(0);
  });
})
// END autsorsing vacancies loadmore

// begin friday filer
$('.friday__filter .btn').on('click', function() {
  $('.friday__filter .btn').removeClass('active');
  $(this).addClass('active');
});

$('.friday__filter .btn').on('click', function() {
  var vis = $(this).data('tezis');

  if (vis == 'all') {
    $('.friday__item').fadeIn(100);
  }
  else {
    $('.friday__item').fadeOut(100);
    $('.friday__item--' + vis).fadeIn(100);
  }
});
// end friday filer

// begin open submenu
$('.header-nav__sublist-open').on('click', function() {
  $(this).toggleClass('active');
  $(this).siblings(".header-nav__sublist-wrap").slideToggle();
});
// end open submenu

