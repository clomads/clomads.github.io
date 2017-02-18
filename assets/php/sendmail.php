<?php
// Email Submit
// Note: filter_var() requires PHP >= 5.2.0
if ( empty($_POST['yourmom']) && isset($_POST['email']) && isset($_POST['name']) && isset($_POST['text']) && filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) ) {

  // detect & prevent header injections
  $test = "/(content-type|bcc:|cc:|to:)/i";
  foreach ( $_POST as $key => $val ) {
    if ( preg_match( $test, $val ) ) {
      exit;
    }
  }

  //send email
  mail( "clomads@gmail.com", "clomads.com - Message from ".$_POST['name'], $_POST['text'], "From:" . $_POST['email'] );

}
?>
