<?php
header('Content-Type: application/json');

if ($_POST['email']) {
    $email = $_POST['email'];
    $to = "sandeepyadav37806@gmail.com"; // CHANGE THIS
    $subject = "New Subscription";
    $message = "New subscriber: " . $email;
    $headers = "From: web@yourdomain.com";
    
    if (mail($to, $subject, $message, $headers)) {
        echo '{"status":"success","message":"Thank you!"}';
    } else {
        echo '{"status":"error","message":"Mail function failed"}';
    }
} else {
    echo '{"status":"error","message":"No email provided"}';
}
?>