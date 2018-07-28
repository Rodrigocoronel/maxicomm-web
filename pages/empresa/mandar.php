<?php 
if(isset($_POST['submit'])){

    $from = "info@maxicomm.net";
    $to = "rodrigo.coronel.14@gmail.com"; // this is your Email address
    $email = $_POST['email']; // this is the sender's Email address
    $nombre = $_POST['nombre'];
    $telefono = $_POST['telefono'];

    $subject = "Cotizacion";
    $subject2 = $_POST['mensaje'];

    $message = $nombre . " wrote the following:" . "\n\n" . $_POST['message'];
    $message2 = $nombre . " wrote the following:" . "\n\n" . $_POST['message'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;

    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo "Mail Sent. Thank you " . $first_name . ", we will contact you shortly.";
    // header('Location' : )
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    }
?>