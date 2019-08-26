<?php

/**
 * @Mailer
 *
 */
$json = array();
$subject_message 		= "Contact Form Received";
$success_message 		= 'Message Sent.';
$failure_message 		= 'Message Fail.';
$recipient 				= 'etwordpress01@gmail.com';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
	
	extract($_POST['contact']);
    // Get the form fields and remove whitespace.
    $name 		= strip_tags(trim($name));
    $name 		= str_replace(array("\r", "\n"), array(" ", " "), $name);
    $email 		= filter_var(trim($email), FILTER_SANITIZE_EMAIL);
    $message 	= trim($message);

    // Check that data was sent to the mailer.
    if (empty($name) 
		|| empty($subject) 
		|| empty($phone) 
		|| empty($message) 
		|| ! filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Set a 400 (bad request) response code and exit.
        $json['type'] = "error";
        $json['message'] = 'Oops! Please complete the form and also add valid email address.';
        echo json_encode($json);
        exit;
    }
	
    // Build the email content.
    $email_content = '
					<div style="max-width: 600px; width: 100%; margin: 0 auto; overflow: hidden; color: #919191; font:400 16px/26px \'Open Sans\', Arial, Helvetica, sans-serif;">
						<div style="width: 100%; float: left; padding: 30px 30px 0; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;">
							<div style="width: 100%; float: left; padding: 0 0 60px; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;">
								<h1 style="margin: 0; font-size: 20px; line-height: 20px; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; color: #333; font-weight: normal;font-family: \'Open Sans\', Arial, Helvetica, sans-serif;">Hi, </h1>
								<div style="width: 100%; float: left;">
									<p>You have received a new message form one of visitor. Informations are given below.</p>
								</div>
								<div style="width: 100%; float: left; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;">
									<ul style="margin: 0; width: 100%; float: left; list-style: none; font-size: 14px; line-height: 20px; padding: 0 0 15px; font-family: \'Open Sans\', Arial, Helvetica, sans-serif;">
										<li style="margin: 0;width: 100%; float: left; line-height: inherit; list-style-type: none; background: #f7f7f7;">
											<strong style="width: 50%; float: left; padding: 10px; color: #333; font-weight: 400; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;">Name:</strong>
											<span style="width: 50%; float: left; padding: 10px; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;">'.$name.'</span>
										</li>
										<li style="margin: 0;width: 100%; float: left; line-height: inherit; list-style-type: none;">
											<strong style="width: 50%; float: left; padding: 10px; color: #333; font-weight: 400; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;">Subject:</strong>
											<span style="width: 50%; float: left; padding: 10px; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;">'.$subject.'</span>
										</li>
										<li style="margin: 0;width: 100%; float: left; line-height: inherit; list-style-type: none; background: #f7f7f7;">
											<strong style="width: 50%; float: left; padding: 10px; color: #333; font-weight: 400; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;">Phone:</strong>
											<span style="width: 50%; float: left; padding: 10px; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;">'.$phone.'</span>
										</li>
										<li style="margin: 0;width: 100%; float: left; line-height: inherit; list-style-type: none;">
											<strong style="width: 50%; float: left; padding: 10px; color: #333; font-weight: 400; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;">Email:</strong>
											<span style="width: 50%; float: left; padding: 10px; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;">'.$email.'</span>
										</li>
									</ul>
									<p>'.$message.'</p>
								</div>
							</div>
						</div>
					</div>

					';

    // Build the email headers.
	$email_headers .= "MIME-Version: 1.0\r\n";
	$email_headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
    $email_headers .= "From: $name <$email>";

    // Send the email.
    if (mail($recipient, $subject_message, $email_content, $email_headers)) {
        $json['type'] 		= "success";
        $json['message'] 	= $success_message;
        echo json_encode($json);
        die();
    } else {
        $json['type'] 		= "error";
        $json['message'] 	= $failure_message;
        echo json_encode($json);
        die();
    }
} else {
    $json['type'] = "error";
    $json['message'] = $failure_message;
    echo json_encode($json);
    die();
}