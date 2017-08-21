module.exports = function() {

  // begin отправка формы callback
  $("form").submit(function() {
    $.ajax({
      type: "POST",
      url: "assets/php/mail.php",
      data: $(this).serialize()
    }).done(function() {
      $('.popup').fadeOut();
      $('.popup-success').fadeIn();
      $('form')[0].reset();
      // $('body').removeClass('no-scroll');
      // alert("Мы с Вами свяжемся в ближайшее время.");
    });
    return false;
  });
  // end   отправка формы callback

};