<?php

include_once 'scriptPHP/config.php';

$id = $_POST("id");

$query = "DELETE FROM utiliz WHERE id = '".$id."'";





$conn -> close();
?>