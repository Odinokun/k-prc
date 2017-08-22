// BEGIN Меню для навигации при разработке

// закоментить перед prodaction
$(document).ready(function ($) {
  pageWidget([
    'about',
    'agree',
    'article',
    'audit',
    'autsorsing',
    'autstaffing',
    'clients',
    'contacts',
    'friday',
    'index',
    'migration',
    'one-client',
    'safety',
    'service',
    'vacancies',
    ]);
});

function pageWidget(pages) {
  var widgetWrap = $('<div class="widget_wrap"><ul class="widget_list"></ul></div>');
  widgetWrap.prependTo("body");
  for (var i = 0; i < pages.length; i++) {
    $('<li class="widget_item"><a class="widget_link" href="'
      + pages[i]
      + '.html'
      + '">'
      + pages[i]
      + '</a></li>').appendTo('.widget_list');
  }
  var widgetStilization = $('<style>body {position:relative} .widget_wrap{position:fixed;top:0;left:0;z-index:19999;padding:10px 20px;background:#222;border-bottom-right-radius:10px;-webkit-transition:all .3s ease;transition:all .3s ease;-webkit-transform:translate(-100%,0);-ms-transform:translate(-100%,0);transform:translate(-100%,0)}.widget_wrap:after{content:" ";position:absolute;top:0;left:100%;width:24px;height:24px;background:#222 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAAAxQTFRF////////AAAA////BQBkwgAAAAN0Uk5TxMMAjAd+zwAAACNJREFUCNdjqP///y/DfyBg+LVq1Xoo8W8/CkFYAmwA0Kg/AFcANT5fe7l4AAAAAElFTkSuQmCC) no-repeat 50% 50%;cursor:pointer}.widget_wrap:hover{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}.widget_item{padding:0 0 10px}.widget_link{color:#fff;text-decoration:none;font-size:15px;}.widget_link:hover{text-decoration:underline} </style>');
  widgetStilization.prependTo(".widget_wrap");
}

// END Меню для навигации при разработке


//====== Begin Programmer code ======

// begin start video in article
$('.article-sec__video-cover').on('click', function() {
  $(this).addClass('hidden');
});
// end   start video in article


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



// begin MASONRY
function masonryFunc(){
  var $container = $('#friday__masonry');

  $container.masonry({
    columnWidth: '.grid-sizer',
    itemSelector: '.friday__item',
    gutter: 0,
    percentPosition: true,
    horizontalOrder: true
  });
} 
masonryFunc()
setTimeout(masonryFunc,300)

//перестраивание сетки при клике на фильтр
// AHTUNG  обязательно указать параметр 100 у fadeIn/fadeOut (в данном случае в файле tezisFilter.js)
$('.friday__filter .btn').on('click', function() {
  var $container = $('#friday__masonry');
  $container.masonry();
  masonryFunc()
  setTimeout(masonryFunc,300)
});

// end   MASONRY


// begin tezts filer
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

// BEGIN выбор активного элемента  !!!!!!!!! убрать при посадке на CMS
$(window).on('load', function() {
  var currentPage = $('.main').data('current');
  $('#header-nav__list .header-nav__link-' + currentPage).addClass('active')
  $('#tab-blue .tab-blue__link-' + currentPage).addClass('active')
});
// END выбор активного элемента  !!!!!!!!! убрать при посадке на CMS