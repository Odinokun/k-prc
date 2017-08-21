<?php
  // $sendto = "viktor@kozyris.com";
  $sendto2 = "odinokun@gmail.com";
  
  $subject = $_POST['theme'];
  $nameform = $_POST['nameform'];

  $name    = $_POST['name'];
  $surname = $_POST['surname'];
  $email   = $_POST['email'];
  $phone   = $_POST['phone'];
  $message = $_POST['message'];

  if ($nameform == "callback-sec__form") {
    $msg = "Пришла заявка от <b>$name</b>, 
              телефон - <b>$phone</b>, 
              коментарий - <b>$message</b>";
  } elseif ($nameform == "popup-callback__form") {
     $msg = "Пришел заказ обратного звонка от <b>$name</b>, 
              телефон - <b>$phone</b>,
              коментарий - <b>$message</b>";
  } elseif ($nameform == "popup-director__form") {
     $msg = "Пришло письмо с вопросом к директору от <b>$name</b>, 
              email - <b>$email</b>,
              телефон - <b>$phone</b>,
              message - <b>$message</b>";
  } elseif ($nameform == "popup-vacancies__form") {
     $msg = "Пришло письмо с заявкой на вакансию от <b>$name</b>,  <b>$surname</b>, 
              email - <b>$email</b>,
              телефон - <b>$phone</b>,
              message - <b>$message</b>";
  } else {
     $msg = "Пришло письмо от <b>$name</b>, 
              email - <b>$email</b>,
              телефон - <b>$phone</b>,
              message - <b>$message</b>";
  };
  $headers = "From: PRC.ru\r\nContent-type: text/html; charset=utf-8 \r\n";

  // mail ($sendto, $subject, $msg, $headers);
  mail ($sendto2, $subject, $msg, $headers);
?>