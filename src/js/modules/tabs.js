module.exports = function() {

  // begin tab in migration page
  $('.migration-sec__btn-wrap .btn').on('click', function() {
    var tab = $(this).data('tab');
    $('.btn').removeClass('active');
    $(this).addClass('active');
    $('.migration-sec__table').fadeOut(0);
    $('.migration-sec__table-' + tab).fadeIn();
  });
  // end   tab in migration page

  // begin tab in service page
  $('.service-sec__tab-item').on('click', function() {
    var tab = $(this).data('tab');
    $('.service-sec__tab-item').removeClass('active');
    $(this).addClass('active');
    $('.service-header__cover').fadeOut(0);
    $('.service-header__cover-' + tab).fadeIn();
  });
  // end   tab in service page

  // begin tab in vacancies page
  $('.vacancies-item__tab-btn').on('click', function() {
    var tab = $(this).data('tab');
    $('.vacancies-item__tab-btn').removeClass('active');
    $(this).addClass('active');
    $('.vacancies-item__tab-text').removeClass('active');
    $('.vacancies-item__tab-text-' + tab).addClass('active');
  });
  // end   tab in vacancies page

  // begin tab in audit page
  $('.audit__tab-btn').on('click', function() {
    var tab = $(this).data('tab');
    $('.audit__tab-btn').removeClass('active');
    $(this).addClass('active');
    $('.audit-tab').removeClass('active');
    $('.audit-tab-' + tab).addClass('active');
    //изменяем размер слайдера при клике на таб
  });
  // end   tab in audit page
  
};