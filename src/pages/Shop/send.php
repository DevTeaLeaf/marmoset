<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
$Name = @$_POST['name'];
$Surname = @$_POST["surname"]
$Phone = @$_POST['phone'];
$Country = @$_POST['country'];
$City = @$_POST['city'];
$Address = @$_POST['address'];
$Email = @$_POST['email'];
$Index = @$_POST['index'];
$formData = @$_POST['formData'];
    $to = "wesigep366@haizail.com";
    $sendfrom = "admin@marmoset.com";
$headers = "From: " . strip_tags($sendfrom) . "\r\n";
$headers .= "Reply-To: ". strip_tags($sendfrom) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";
$subject = "$formData";
$message = "$formData<br><b>Имя:</b> $Name <br><b>Фамилия:</b>$Surname <br><b>Телефон:</b> $Phone <br><b>Страна:</b> $Country <br><b>Город:</b> $City <br><b>Адрес:</b> $Address <br><b>E-mail:</b> $Email <br><b>Индекс:</b> $Index";
    $send = mail ($to, "Заявка с сайта", $message, $headers);
/*if ($send == 'true')

{
echo '<meta http-equiv="refresh" content="0; url=send.html">';
//header('location:send.html');
}
else 
{
echo '<center><p class="fail"><b>Ошибка. Сообщение не отправлено!</b></p></center>';
}
} else {
http_response_code(403);
echo "Попробуйте еще раз";
}*/
?>