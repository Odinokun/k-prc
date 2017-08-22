module.exports = function() {

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
  // AHTUNG  обязательно указать параметр 100 у fadeIn/fadeOut 
  // в скрипте-фильтре статей
  $('.friday__filter .btn').on('click', function() {
    var $container = $('#friday__masonry');
    $container.masonry();
    masonryFunc()
    setTimeout(masonryFunc,300)
  });

  // end   MASONRY

};