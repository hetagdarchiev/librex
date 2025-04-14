<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["userName"]);
    $email = htmlspecialchars($_POST["userEmail"]);
    $text = htmlspecialchars($_POST["description"]);
    if (empty($name) || empty($email) || empty($text)) {
        die("Заполните все поля!");
    }

    echo "<h1>Данные формы:</h1>";
    echo "<p>Email: $email</p>";
    echo "<p>Имя: $name</p>";
    echo "<p>Описание: $text</p>";
}
?>