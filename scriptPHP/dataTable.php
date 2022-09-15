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
            echo '<th>EDITAR</th>';
            echo '<th>ELIMINAR</th>';
            echo '</tr>';
            echo '</thead>';
            echo '<tbody>';
            while ($row = mysqli_fetch_array($data)) {
                echo '<tr id = '.$row['id'].'>';
                echo '<td>' . $row['id'] . '</td>';
                echo '<td data-target="email">' . $row['email'] . '</td>';
                echo '<td><a href="#" style="color:white;" data-role="update" data-id="'.$row['id'].'"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
              </svg></a></td>';
                echo '<td><a href="#" style="color:white;" data-role="delete" data-id="'.$row['id'].'"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                </svg></a></td>';
                echo '</tr>';
            }
            echo '</tbody>';
            echo '</table>';
} else {
    echo 'Erro ao carregar os dados!';
}

$conn -> close();
?>

    <!-- The Modal -->
    <div class="modal" id="myModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title">Adicionar Utilizador</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" onclick="reloadPage()"></button>
                </div>
                <!-- Modal body -->
                <div class="modal-body">

                    <!--Alerta de Erro -->
                    <div class="alert alert-danger" style="display: none;" id="error-alert">
                        <strong>Error!</strong> <span id="txt-error"></span>
                    </div>
                    <!-- Alerta de Sucesso -->
                    <div class="alert alert-success" style="display: none;" id="success-alert">
                        <strong>Sucesso!</strong> <span id="txt-success"></span>
                    </div>

                    <div class="mb-3 mt-3">
                        <label for="email" class="form-label">Email:</label>
                        <input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
                    </div>
                    <div class="mb-3">
                        <label for="pwd" class="form-label">Password:</label>
                        <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd">
                    </div>
                </div>

                <!-- Modal footer -->
                <div class="modal-footer">
                    <button type="submit" class="btn btn-dark" id="bt-adicionar-modal" onclick="addModal()">Adicionar</button>
                </div>
            </div>
        </div>
    </div>


<!-- The Modal -->
<div class="modal" id="myModalUpdate">
        <div class="modal-dialog">
            <div class="modal-content">
                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title">Update Utilizador</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <!-- Modal body -->
                <div class="modal-body">

                    <!--Alerta de Erro -->
                    <div class="alert alert-danger" style="display: none;" id="error-alert">
                        <strong>Error!</strong> <span id="txt-error"></span>
                    </div>
                    <div class="mb-3 mt-3">
                        <label for="email" class="form-label">Email:</label>
                        <input type="email" class="form-control" id="email-update" placeholder="Enter email" name="email">
                    </div>
                    <div class="mb-3">
                        <label for="pwd" class="form-label">Password:</label>
                        <input type="password" class="form-control" id="pwd-update" placeholder="Enter password" name="pswd">
                    </div>
                        <input type="hidden" id = "userId">

                </div>

                <!-- Modal footer -->
                <div class="modal-footer">
                    <button type="submit" class="btn btn-dark" id="bt-adicionar-modal" onclick="editarData()">Update</button>
                </div>
            </div>
        </div>
    </div>
