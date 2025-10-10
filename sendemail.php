<?php
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name    = trim(htmlspecialchars($_POST['form_name'] ?? ''));
    $email   = trim(htmlspecialchars($_POST['form_email'] ?? ''));
    $subject = trim(htmlspecialchars($_POST['form_subject'] ?? ''));
    $phone   = trim(htmlspecialchars($_POST['form_phone'] ?? ''));
    $message = trim(htmlspecialchars($_POST['form_message'] ?? ''));

    if(empty($name) || empty($email) || empty($message)){
        echo json_encode(["status"=>"error","message"=>"Please fill all required fields."]);
        exit;
    }

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

    if(mail($to, $email_subject, $email_body, $headers)){
        echo json_encode(["status"=>"success","message"=>"Thank you! Your message has been sent."]);
    } else {
        echo json_encode(["status"=>"error","message"=>"Failed to send email. Try again later."]);
    }
} else {
    echo json_encode(["status"=>"error","message"=>"Invalid request"]);
}
?>
