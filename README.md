![RU](https://img.shields.io/badge/-RU-blue)
<h1>Инструкция по настройке электронной библиотеки LibreX</h1>
<h2>Установка и настройка базы данных</h2>
<p>Для работы электронной библиотеки LibreX требуется серверная среда XAMPP и база данных MySQL.</p>
<h3>Подключение базы данных:</h3>

<ol>
  <li>В папке librex/config/ находится файл library.sql - это дамп базы данных с книгами в формате SQL.</li>
  <li>Откройте панель управления phpMyAdmin (обычно доступна по адресу http://localhost/phpmyadmin).</li>
  <li>
    <p>Создайте новую базу данных с именем library:</p>
    <ul>
      <li>Нажмите "Создать базу данных"</li>
      <li>Введите имя: library</li>
      <li>Выберите кодировку utf8_general_ci</li>
      <li>Нажмите "Создать"</li>
    </ul>
  </li>
  <li>
    <p>Импортируйте данные:</p>
    <ul>
      <li>Выберите созданную базу library</li>
      <li>Перейдите на вкладку "Импорт"</li>
      <li>Нажмите "Выберите файл" и укажите library.sql из папки 'librex/config/'</li>
      <li>Нажмите "Вперед" для начала импорта</li>
    </ul>
  </li>
  <li>После успешного импорта обновите страницу приложения.</li>
</ol>

  <h2>Требования</h2>
<ul>
  <li>Установленный XAMPP (или аналогичный серверный пакет)</li>
  <li>Доступ к phpMyAdmin</li>
  <li>Файл базы данных `library.sql` (находится в `librex/config/`)</li>
</ul>
<br>
<br>
![ENG](https://img.shields.io/badge/-ENG-red)
<h1>Instructions for configuring the LibreX electronic library</h1>
<h2>Installing and configuring the database</h2>
<p>The LibreX electronic library requires the XAMPP server environment and a MySQL database to function.</p>
<h3>Connecting to the database:</h3>

<ol>
  <li>In the librex/config/ folder, there is a library.sql file, which is a SQL database dump of the books.</li>
  <li>Open the phpMyAdmin control panel (usually available at http://localhost/phpmyadmin).</li>
  <li>
    <p>Create a new database named library:</p>
    <ul>
      <li>Click "Create Database"</li>
      <li>Enter a name: library</li>
      <li>Select utf8_general_ci encoding</li>
      <li>Click "Create"</li>
</ul>
</li>
<li>
    <p>Import the data:</p>
    <ul>
      <li>Select the created library database</li>
      <li>Go to the "Import" tab</li>
      <li>Click "Select File" and specify library.sql from the 'librex/config/' folder</li>
      <li>Click "Next" to start the import</li>
    </ul>
  </li>
  <li>After successful import, refresh the application page.</li>
</ol>

  <h2>Requirements</h2>
<ul>
  <li>Installed XAMPP (or a similar server package)</li>
  <li>Access to phpMyAdmin</li>
  <li>Database file `library.sql` (located in `librex/config/`)</li>
</ul>
