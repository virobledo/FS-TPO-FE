<?php
// Check for empty fields
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['phone']) 		||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
	
$name = $_POST['name'];
$phone = $_POST['phone'];
$email_address = $_POST['email'];
$message = $_POST['message'];
	
// Create the email and send the message
$to = 'nicolasentrenador@yahoo.com';
$email_subject = "Mensaje desde el sitio web (musculacioninteligente.com)";
$email_body = "Recibiste un nuevo mensaje del formulario de contacto de musculacioninteligente.com\n\n"."Acá están los detalles:\n\nNombre: $name\n\nTeléfono: $phone\n\nEmail: $email_address\n\nMensaje:\n$message";
$headers = "From: noreply@musculacioninteligente.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";	
mail($to,$email_subject,$email_body,$headers);
return true;			
?>