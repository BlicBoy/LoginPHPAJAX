//limpa se existir alertas
function clearAlerts(){
    var error = document.getElementById("error-alert")
    var success = document.getElementById("success-alert")

    error.style.display = "none";
    success.style.display = "none"
    
}

//alerta de erro com mensagem varivel
function errorModal(message){

    var error = document.getElementById("error-alert")
    var msg = document.getElementById("txt-error")
    console.log("Erro")
    error.style.display = "block"
    msg.innerHTML = message
}

//alerta de sucesso com mensagem varivel
function successModal(message){
    var success = document.getElementById("success-alert")
    var msg = document.getElementById("txt-success")
    console.log("Sucesso")
    success.style.display = "block"
    msg.innerHTML = message
}

//limpa caixas de texto dentro do modal add
function limpaTexto(){
    const inputs = document.querySelectorAll('#email, #pwd')
    inputs.forEach(input=>{
        input.value = '';
    });

    clearAlerts()
}

//Adicionar DB via Modal Bootstrap 5
function addModal(){

    var email = $('#email').val()
    var password = $('#pwd').val()

   if(email != "" && password != ""){
    $.ajax({
        type:"POST",
        url:"scriptPHP/register.php",
        data:{email:email,password:password},

        success:function(response){
            if(response=="success")
            {
                clearAlerts()
                successModal("Dados Introduzidos com sucesso!")
                console.log("Sucesso - Dados Introduzidos")
            }
            else{
                clearAlerts()
                errorModal("Ocorreu um erro do servidor!")
                console.log("Erro - Servidor")
            }
        }
    })

   }else{
    clearAlerts()
    errorModal("Os campos não foram preenchidos!")
    console.log("Erro - Falta de Dados!")
   }

}

