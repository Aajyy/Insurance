<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name    = htmlspecialchars($_POST['form_name']);
    $email   = htmlspecialchars($_POST['form_email']);
    $subject = htmlspecialchars($_POST['form_subject']);
    $phone   = htmlspecialchars($_POST['form_phone']);
    $message = htmlspecialchars($_POST['form_message']);


    $servername = "localhost";   // usually localhost
    $username   = "root";        // your DB username
    $password   = "";            // your DB password
    $dbname     = "messages_db"; // your database name

    $conn = new mysqli($servername, $username, $password, $dbname);

   
    if ($conn->connect_error) {
        die("Database connection failed: " . $conn->connect_error);
    }

    
    $sql = "INSERT INTO messages (name, email, phone, subject, message) 
            VALUES ('$name', '$email', '$phone', '$subject', '$message')";

    if ($conn->query($sql) === TRUE) {
        $last_id = $conn->insert_id; 
    } else {
        echo "Database Error: " . $conn->error;
    }

    $conn->close();

    /* =========================
       2. Send Email
    ========================= */
    $to = "yadavajay48069@gmail.com";  
    $email_subject = "Contact Form (ID: $last_id) - " . (!empty($subject) ? $subject : "New Message");

    $email_body = "You have received a new message from your website contact form:\n\n" .
                  "ID: $last_id\n" .
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
