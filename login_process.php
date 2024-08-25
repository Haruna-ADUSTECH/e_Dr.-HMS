<?php
session_start();
require 'connection.php'; // Include the database connection file

// Check if form is submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Retrieve form data
    $email = trim($_POST['email']);
    $password = trim($_POST['password']);
    $user_type = trim($_POST['user_type']);

    // Validate form data
    if (empty($email) || empty($password) || empty($user_type)) {
        echo "All fields are required.";
        exit;
    }

    // Prepare SQL based on user type
    if ($user_type === 'user') {
        $sql = "SELECT * FROM users WHERE email = ? LIMIT 1";
    } elseif ($user_type === 'doctor') {
        $sql = "SELECT * FROM doctors WHERE email = ? LIMIT 1";
    } else {
        echo "Invalid user type selected.";
        exit;
    }

    // Prepare and execute the statement
    if ($stmt = $conn->prepare($sql)) {
        $stmt->bind_param('s', $email);
        $stmt->execute();
        $result = $stmt->get_result();

        // Check if the user exists
        if ($result->num_rows == 1) {
            $user = $result->fetch_assoc();

            // Verify password
            if (password_verify($password, $user['password'])) {
                // Store user information in session variables
                $_SESSION['user_id'] = $user['id'];
                $_SESSION['username'] = $user['username'];
                $_SESSION['user_type'] = $user_type;

                // Redirect to the appropriate dashboard
                if ($user_type === 'user') {
                    header("Location: user_dashboard.html");
                } elseif ($user_type === 'doctor') {
                    header("Location: doctor_dashboard.html");
                }
                exit;
            } else {
                echo "Invalid email or password.";
            }
        } else {
            echo "No user found with this email.";
        }

        // Close the statement
        $stmt->close();
    } else {
        echo "Database query failed.";
    }

    // Close the database connection
    $conn->close();
} else {
    echo "Invalid request method.";
}
?>
