<?php
// Setup the connection
$conn = mysqli_connect("localhost", "root", "cedrik10", "christian");
$form = "vpi_web";

// Check the connection
if ($conn -> connect_error) {
    die("Connection failed: " . $conn -> connect_error);
}

// Create variables, ensure they're legeal strings
$name = mysqli_real_escape_string($conn, $_REQUEST['name']);
$email = mysqli_real_escape_string($conn, $_REQUEST['email']);
$subject = mysqli_real_escape_string($conn, $_REQUEST['subject']);
$time = date("Y-m-d H:i:s");

// Submit content
$sql = "INSERT INTO `vpi_web`(`name`, `email`, `phone`, `message`, `time`) VALUES ('$name','$email',0,'$subject', '$time')";

// Check submission
if ($conn->query($sql) == TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the connection
$conn->close();

header('Location: thanks.html')
?>
