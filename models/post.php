<?php

namespace models;

class post
{
    private $conn;
    private $table = 'post';
    public $id;
    public $title;
    public $description;
    public $author;
    public $category;
    public $image;
    public $date;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function read()
    {
        $query = 'SELECT c.name as category,
        p.id ,
        p.title ,
        p.description ,
        p.author ,
        p.date,
        p.image ,
        p.category 
        FROM '.$this->table.' p 
        LEFT JOIN 
        categories c ON p.category = c.id
        ORDER BY p.created_at DESC';
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }
}