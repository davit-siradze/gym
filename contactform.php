<?php 
if (isset($_POST ['subbmit'])){
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailForm = $_POST['mail'];
    $message = $_POST['message'];

    $mailTo = "dato.siradze.1994@gmail.com";
    $headers = "From: ".$mailFrom;
    $txt = "You Have received an e-mail from".$name.".\n\n".$message;


    mail($mailTo, $subject, $txt, $headers);
    header("Loaction: contact.php?mailsend");
}