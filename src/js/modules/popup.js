module.exports = function() {

  // begin popup open
  $('.popup-open').on('click', function() {
    var popupName = $('.popup-open').data('open');

    $('.popup-' + popupName).fadeIn();
    $('.popup__layer').fadeIn();
    $('body').addClass('no-scroll');

    return false;
  });
  // end   popup open

  // begin popup close
  $('.popup__layer, .popup-close').on('click', function() {
    $('.popup, .popup__layer').fadeOut();
    $('body').removeClass('no-scroll');
    
    return false;
  });
  // end   popup close

  

};