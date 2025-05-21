<?php
if ($_SERVER["REQUEST_METHOD"] == 'POST') {
    $name = htmlspecialchars(trim($_POST['login']));
    $email = htmlspecialchars(trim($_POST['email']));
    $password = htmlspecialchars(trim($_POST['password']));

    if (empty($name) || empty($email) || empty($password)) {
        echo 'Заполните все поля';
        exit;
    }
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo 'Введите корректный email';
        exit;
    }
    $userData = [
        'name' => $name,
        'email' => $email,
        'password' => $password,
        'timestamp' => date('Y-m-d H:i:s')
    ];
    $allData = [];
    if (file_exists('data.json')) {
        $json = file_get_contents('data.json');
        $allData = json_decode($json, true) ?: [];
        foreach ($allData as $user) {
            if ($user['email'] === $email) {
                echo 'Пользователь с таким email уже существует';
                exit;
            }
            if ($user['name'] === $name) {
                echo 'Пользователь с таким логином уже существует';
                exit;
            }
        }
    }

    $allData[] = $userData;
    if (file_put_contents('data.json', json_encode($allData, JSON_PRETTY_PRINT))) {
        echo "Данные сохранены: $name";
    } else {
        echo 'Ошибка при сохранении данных';
    }
}
