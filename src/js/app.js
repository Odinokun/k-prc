$(function() {

  // begin require SVG for IE
  require('./modules/svg4everybody')();
  // end   require SVG for IE

  // begin Chrome Smooth Scroll
  require('./modules/smoothScroll')();
  // end   Chrome Smooth Scroll

  // begin scroll2ancor
  require('./modules/scroll2ancor')();
  // end   scroll2ancor

  // begin Slick slider
  require('./modules/slick')();
  // end   Slick slider

  // begin tabs
  require('./modules/tabs')();
  // end   tabs

  // begin mobile menu
  require('./modules/mobileMenu')();
  // end   mobile menu

  // begin mobile mouse-up
  require('./modules/mouse-up')();
  // end   mobile mouse-up


  // begin maskedinpt
  require('./modules/masked')();
  // end   maskedinpt

  // begin masonry gallery
  require('./modules/masonry')();
  // end   masonry gallery

  // begin masonry video
  require('./modules/video')();
  // end   masonry video
});