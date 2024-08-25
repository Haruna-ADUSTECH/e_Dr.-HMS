-- Create database
CREATE DATABASE e_dr;

-- Use the e_dr database
USE e_dr;

-- Create Users table (Patients)
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    whatsapp_number VARCHAR(15) NOT NULL UNIQUE,
    profile_picture VARCHAR(255) DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Doctors table
CREATE TABLE doctors (
    doctor_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    whatsapp_number VARCHAR(15) NOT NULL UNIQUE,
    profile_picture VARCHAR(255) DEFAULT NULL,
    specialization VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Consultation Requests table
CREATE TABLE consultation_requests (
    request_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    doctor_id INT NOT NULL,
    request_type ENUM('call', 'video_call', 'chat') NOT NULL,
    status ENUM('pending', 'completed', 'cancelled') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (doctor_id) REFERENCES doctors(doctor_id) ON DELETE CASCADE
);

-- Sample Data for Users (Patients)
INSERT INTO users (username, email, password, whatsapp_number, profile_picture) VALUES
('John Doe', 'johndoe@example.com', 'password123', '+1234567890', 'uploads/john_doe.jpg'),
('Jane Smith', 'janesmith@example.com', 'password123', '+1234567891', 'uploads/jane_smith.jpg');

-- Sample Data for Doctors
INSERT INTO doctors (username, email, password, whatsapp_number, profile_picture, specialization) VALUES
('Dr. Ali Hassan', 'alihassan@example.com', 'password123', '+1234567892', 'uploads/dr_ali_hassan.jpg', 'Cardiologist'),
('Dr. Sarah Lee', 'sarahlee@example.com', 'password123', '+1234567893', 'uploads/dr_sarah_lee.jpg', 'Dermatologist');

-- Sample Data for Consultation Requests
INSERT INTO consultation_requests (user_id, doctor_id, request_type) VALUES
(1, 1, 'call'),
(2, 2, 'video_call');
