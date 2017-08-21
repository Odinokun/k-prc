module.exports = function() {

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

  

};