<?php

include_once 'config.php';

$email = $_POST["email"];
$password = $_POST["password"];


$query = "SELECT * FROM utiliz WHERE email ='".$email."'"; //faz a verificação se ja existe na BD

$data = mysqli_query($conn,$query);

if(mysqli_fetch_assoc($data))
{
    echo 'error';
}else{
    $query = "INSERT INTO utiliz(email,passsword) VALUES ('".$email."','".$password."')";

    if(mysqli_query($conn, $query))
    {
        echo 'success';
    }else{
        echo 'error';
    }
}

$conn -> close();


?>