<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['formData'])) {$formData = $_POST['formData'];}
    if (isset($_POST['email'])) {$email = $_POST['email'];}
    if (isset($_POST['name'])) {$name = $_POST['name'];}
    if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
    $to = "eko-dent2001@mail.ru"; /*Укажите ваш адрес электронной почты*/
    $headers = "Content-type: text/plain; charset = utf-8";
    $subject = "$formData";
    $message = "$formData\n\nПочта: $email \n\nИмя: $name \n\nТелефон: $phone";
    $send = mail ($to, $subject, $message, $headers);
    if ($send == 'true')
    {
        echo "<script>
            alert('Ваша заявка отправлена!');
            window.location.href='/';
            </script>";
    }
    else
    {
        echo "<center><b>Ошибка. Сообщение не отправлено! Проверьте правильность введенных данных</b></center>";
    }
} else {
    http_response_code(403);
    echo "Попробуйте еще раз";
}
?>