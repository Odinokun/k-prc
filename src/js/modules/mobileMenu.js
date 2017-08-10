module.exports = function() {

  // begin mobile menu open/close
  $('#burger label').on('click', function() {
    $('.header-nav__list').toggleClass('active');
    $('body').toggleClass('fix');
  });
  // end mobile menu open/close

};