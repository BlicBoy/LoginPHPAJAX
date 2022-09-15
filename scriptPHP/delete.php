<?php

include_once 'config.php';

$id = $_POST["id"];

$query = "DELETE FROM utiliz WHERE id = '".$id."'";

if(mysqli_query($conn,$query))
    echo "success";
else
    echo $conn->error;

$conn -> close();
?>