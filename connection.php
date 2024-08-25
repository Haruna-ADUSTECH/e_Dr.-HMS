<?php
// Database credentials
$servername = "localhost";  // Typically 'localhost' if your database is on the same server
$username = "your_database_username";  // Replace with your database username
$password = "your_database_password";  // Replace with your database password
$dbname = "your_database_name";  // Replace with your database name

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// If you want to use UTF-8 for your database connection
$conn->set_charset("utf8");

?>
