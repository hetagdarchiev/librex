<?php
header('Content-Type: application/json');

$host = 'localhost';
$dbname = 'boks';
$user = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Исправленный запрос с правильными именами столбцов
    $stmt = $pdo->query("SELECT books.*, autorh.name AS author_name, genres.name AS genre_name 
        FROM books 
        LEFT JOIN autorh ON books.author = autorh.id
        LEFT JOIN genres ON books.genre = genres.id");
    
    $books = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode([
        'success' => true,
        'data' => $books
    ], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);

} catch (PDOException $e) {
    echo json_encode([
        'success' => false,
        'error' => 'Database error: ' . $e->getMessage(),
        'recommendation' => 'Проверьте названия столбцов: books.author и books.genre должны существовать'
    ], JSON_UNESCAPED_UNICODE);
}