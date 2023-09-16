<?php
$email = $_POST['email'];
$email = htmlspecialchars($email);
$email = urldecode($email);
$email = trim($email);
mail("nikitakamennov@gmail.com", "Заявка с сайта", ". E-mail: ".$email ,"From: nikitakamennov@gmail.com" \r\n");