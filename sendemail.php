<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name    = htmlspecialchars($_POST['form_name']);
    $email   = htmlspecialchars($_POST['form_email']);
    $subject = htmlspecialchars($_POST['form_subject']);
    $phone   = htmlspecialchars($_POST['form_phone']);
    $message = htmlspecialchars($_POST['form_message']);

    /* =========================
       2. Send Email
    ========================= */
    $to = "sandeepyadav37806@gmail.com";  
    $email_subject = "Contact Form - " . (!empty($subject) ? $subject : "New Message");

    $email_body = "You have received a new message from your website contact form:\n\n" .
                  "Name: $name\n" .
                  "Email: $email\n" .
                  "Phone: $phone\n" .
                  "Subject: $subject\n\n" .
                  "Message:\n$message\n";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $email_subject, $email_body, $headers)) {
        echo "success"; 
    } else {
        echo "error";
    }
} else {
    echo "invalid request";
}
?>
