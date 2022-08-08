<?php
$name=$_POST[""];
$vistor_email=$_POST[""];
$subject=$_POST[""];
$message=$_POST[""];


$email_form="info@madrasa-al-falah.netlify.app"
$email_subject="New Form Submission"
$email_body="User Name : $name.\n".
            "User Email : $vistor_email.\n".
            "Subject : $subject.\n".
            "User message : $message.\n";
$to="shaikmohammed9009@gmail.com";

$headers="From : $email_form \r\n";
$headers ="Replay To : $vistor_email \r\n";
mail($to,$email_subject,$email_body,$headers);
header("Location: index.html");

?>