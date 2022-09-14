//limpa se existir alertas
function clearAlerts() {
    var error = document.getElementById("error-alert")
    var success = document.getElementById("success-alert")

    error.style.display = "none";
    success.style.display = "none"

}

//alerta de erro com mensagem varivel
function errorModal(message) {

    var error = document.getElementById("error-alert")
    var msg = document.getElementById("txt-error")
    console.log("Erro")
    error.style.display = "block"
    msg.innerHTML = message
}

//alerta de sucesso com mensagem varivel
function successModal(message) {
    var success = document.getElementById("success-alert")
    var msg = document.getElementById("txt-success")
    console.log("Sucesso")
    success.style.display = "block"
    msg.innerHTML = message
}

//limpa caixas de texto dentro do modal add
function limpaTexto() {
    const inputs = document.querySelectorAll('#email, #pwd')
    inputs.forEach(input => {
        input.value = '';
    });

    clearAlerts()
}

function reloadPage(){
    window.location.reload(true)
}

//Adicionar DB via Modal Bootstrap 5
function addModal() {

    var email = $('#email').val()
    var password = $('#pwd').val()

    if (email != "" && password != "") {
        $.ajax({
            type: "POST",
            url: "scriptPHP/register.php",
            data: { email: email, password: password },

            success: function (response) {
                if (response == "success") {
                    clearAlerts()
                    successModal("Dados Introduzidos com sucesso!")
                    console.log("Sucesso - Dados Introduzidos")
                }
                else {
                    clearAlerts()
                    errorModal("Ocorreu um erro do servidor!")
                    console.log("Erro - Servidor")
                }
            }
        })

    } else {
        clearAlerts()
        errorModal("Os campos não foram preenchidos!")
        console.log("Erro - Falta de Dados!")
    }

}

//editar os dados (carrega os dados para dentro do modal)
$(document).ready(function () {
    $(document).on('click', 'a[data-role=update]', function () {
        limpaTexto()

        var id = $(this).data('id')
        var email = $("#" + id).children('td[data-target=email]').text();

        $('#email-update').val(email);
        $('#userId').val(id);
        $('#myModalUpdate').modal('toggle');
    })
});


//editar dados (editar no DB e editar na tabela (sem reload de pagina))
function editarData() {

    var id = $('#userId').val()
    var email = $('#email-update').val()
    var password = $('#pwd-update').val()

    if (email != "" && password != "") {
        $.ajax({
            type: "POST",
            url: "scriptPHP/updateUser.php",
            data: { id: id, email: email, password: password },
            success: function (response) {

                if (response == "success") {
                    //update da informação que esta dentro da tabela
                    console.log("Sucesso - Dados Alterados!");

                    //limpa caixas de texto
                    const inputs = document.querySelectorAll('#email-update, #pwd-update,#userId')
                    inputs.forEach(input => {
                        input.value = '';
                    });


                    $("#" + id).children('td[data-target=email]').text(email); //altera email na tabela
                    $('#myModalUpdate').modal('toggle');//fecha o modal

                } else {
                    clearAlerts()
                    errorModal("Erro ao alterar dados!")
                    console.log("Erro - Servidor")
                }


            }
        })

    } else {
        clearAlerts()
        errorModal("Os campos não foram preenchidos!")
        console.log("Erro - Falta de Dados!")
    }

}











//adicionar class
// $("button").click(function(){
//     $("#div1").addClass("important blue");
// });


//remover class
// $("button").click(function(){
//     $("#div1").removeClass("important blue");
// });


//remover ou add (troca) ao mesmo tempo
 //   $("button").click(function(){
 //   $("h1, h2, p").toggleClass("blue");
 // });