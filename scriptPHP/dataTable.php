<?php

include_once 'config.php';

$query = "SELECT * FROM utiliz";

$data = mysqli_query($conn, $query);

if ($data) {
            echo '<table class="table table-dark">';
            echo '<thead>';
            echo '<tr>';
            echo '<th>ID</th>';
            echo '<th>EMAIL</th>';
            echo '<th>PASSWORD</th>';
            echo '<th>EDITAR</th>';
            echo '<th>ELIMINAR</th>';
            echo '</tr>';
            echo '</thead>';
            echo '<tbody>';
            while ($row = mysqli_fetch_array($data)) {
                echo '<tr>';
                echo '<td>' . $row['id'] . '</td>';
                echo '<td>' . $row['email'] . '</td>';
                echo '<td>' . $row['passsword'] . '</td>';
                echo '<td></td>';
                echo '<td></td>';
                echo '</tr>';
            }
            echo '</tbody>';
            echo '</table>';

       
} else {
    echo 'Erro ao carregar os dados!';
}

$conn -> close();
?>
