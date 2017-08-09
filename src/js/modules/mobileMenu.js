module.exports = function() {

  // begin mobile menu open/close
  $('#burger label').on('click', function() {
    $('.header-nav__list').toggleClass('active');
  });
  // end mobile menu open/close

};