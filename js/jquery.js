$(document).ready(function(){
    $('#button').click(function(){
        var email = $('#email').val();
        var password = $('#password').val();

        if(email != "" && password != "")
        {
            //start ajax code
            $.ajax({
                type:"POST",
                url:"scriptPHP/login.php",
                data:{email:email,password:password},
    
                //success function
               success:function(response){
                    if(response=="success")
                    {
                        document.getElementById("txtInfo").innerHTML = "Online!"
                        console.log("Login feito com sucesso!")
                    }else{
                        document.getElementById("txtInfo").innerHTML = "Dados Invalidos!"
                        console.log("Erro - Servidor")
                    }
               }
            })
        }
        else{
            document.getElementById("txtInfo").innerHTML = ""
            document.getElementById("txtInfo").innerHTML = "Falta preencher campos!"
            console.log("Erro - Cliente")
        }        
    })
})