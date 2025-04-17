<?php
header('Content-Type: application/json');

$host = 'localhost';
$dbname = 'library';
$user = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "SELECT 
                books.*, 
                authors.name AS author_name, 
                genres.name AS genre_name 
            FROM books 
            LEFT JOIN authors ON books.author = authors.id
            LEFT JOIN genres ON books.genre = genres.id";
    
    $stmt = $pdo->query($sql);
    $books = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode([
        'success' => true,
        'data' => $books,
        'count' => count($books)
    ], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'Database error',
        'message' => $e->getMessage(),
        'details' => [
            'expected_tables' => ['books', 'authors', 'genres'],
            'required_columns' => [
                'books' => ['id', 'name', 'author', 'genre', 'year', 'img'],
                'authors' => ['id', 'name'],
                'genres' => ['id', 'name']
            ],
            'foreign_keys' => [
                'books.author' => 'references authors.id',
                'books.genre' => 'references genres.id'
            ]
        ]
    ], JSON_UNESCAPED_UNICODE);
}