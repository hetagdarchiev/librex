<?php
    if($_SERVER["REQUEST_METHOD"]=='POST')
    {
        $name = htmlspecialchars($_POST['login']);
        $email = htmlspecialchars($_POST['email']);
        $password = htmlspecialchars($_POST['password']);
        if (empty($name)||empty($email)||empty($password))
        {
            print 'Заполните все поля';
        }
        echo $name;
    }
?>