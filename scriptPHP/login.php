<?php

$ip = "localhost"; //(hostname)
$username = "root";
$password = "";
$database = "teste";
$port = 3306;

$conn = mysqli_connect($ip,$username,$password,$database,$port);

$email = $_POST["email"];
$password = $_POST["password"];

if($conn)
{
  $data = mysqli_query($conn,"select * from utiliz where email = '$email' and passsword = '$password'");
  if(mysqli_fetch_assoc($data)){
      echo 'success';
  }else{
      echo 'error';
  }
}else{
    echo 'error';
}

?>
