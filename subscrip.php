<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// Only allow POST requests
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["error" => "Only POST method allowed"]);
    exit;
}

// Get email from POST
$email = trim($_POST["email"] ?? "");

// Validate email
if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["error" => "Please enter a valid email address."]);
    exit;
}

$to = "contact@nkisadvisory.in"; // Your email address
$subject = "New Newsletter Subscription";
$message = "A new user has subscribed to your newsletter:\n\nEmail: $email";
$headers = "From: noreply@nkisadvisory.in\r\n" .
           "Reply-To: $email\r\n" .
           "X-Mailer: PHP/" . phpversion();

if (mail($to, $subject, $message, $headers)) {
    echo json_encode(["success" => "Thank you for subscribing!"]);
} else {
    http_response_code(500);
    echo json_encode(["error" => "Something went wrong. Please try again later."]);
}
?>
