module.exports = function() {

  // begin отправка формы callback
  $("form").submit(function() {
    $.ajax({
      type: "POST",
      url: "assets/php/mail.php",
      data: $(this).serialize()
    }).done(function() {
      $('.popup').fadeOut(0);
      $('form')[0].reset();
      $('.popup-success').fadeIn();
    });
    return false;
  });
  // end   отправка формы callback

};