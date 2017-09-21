module.exports = function() {

  // begin tab in migration page
  $(function() {
    $(window).scroll(function() {
      if($(this).scrollTop() > 1400) {
        $('.mouse-icon__wrap--up').addClass('active');
      } else {
        $('.mouse-icon__wrap--up').removeClass('active');
      }
    });

    $('.mouse-icon__wrap--up').click(function() {
      $('body,html').animate({scrollTop:0},800);
    });
  });
  // end   tab in migration page

};