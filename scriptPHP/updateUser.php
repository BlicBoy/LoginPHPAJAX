<?php

include_once 'config.php';


$id = $_POST["id"];
$email = $_POST["email"];
$password = $_POST["password"];

$query = "UPDATE `utiliz` SET email = '".$email."', passsword = '".$password."' WHERE id = '".$id."'";


if(mysqli_query($conn,$query)){
    echo 'success';
}else{
    echo 'error';
}



$conn -> close();   
?>