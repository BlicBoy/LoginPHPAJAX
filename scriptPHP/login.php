<?php

include_once 'config.php';

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

$conn -> close();

?>
