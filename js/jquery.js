
//Login
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
                        
                        //limpa as caixas de texto
                        const inputs = document.querySelectorAll('#email, #password')
                        inputs.forEach(input=>{
                            input.value = '';
                        });
                        console.log("Caixa limpa!")

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

function add()
{
    var email = document.getElementById("email-add")
    var password = document.getElementById("password-add")
    var button = document.getElementById("button-add")
    var register = document.getElementById("register")
    var h1 = document.getElementById("h1")
    var X = document.getElementById("hide")

    //limpar caixas de texto
    const inputs = document.querySelectorAll('#email-add, #password-add')
    inputs.forEach(input=>{
        input.value = '';
    });
    console.log("Caixa limpa!")

    email.style.display = "block";
    password.style.display = "block";
    button.style.display="block";
    h1.style.display = "block";
    X.style.display = "block";

    register.style.display = "none"; 

    document.getElementById("txtInfo").innerHTML = ""
}

function hide()
{
    var email = document.getElementById("email-add")
    var password = document.getElementById("password-add")
    var button = document.getElementById("button-add")
    var register = document.getElementById("register")
    var h1 = document.getElementById("h1")
    var X = document.getElementById("hide")

       //limpar caixas de texto
       const inputs = document.querySelectorAll('#email-add, #password-add')
       inputs.forEach(input=>{
           input.value = '';
       });
       console.log("Caixa limpa!")

    email.style.display = "none";
    password.style.display = "none";
    button.style.display="none";
    h1.style.display = "none";
    X.style.display = "none";

    register.style.display = "block"; 

    document.getElementById("txtInfo").innerHTML = ""
}


//Adicionar a BD
$(document).ready(function(){
    $('#button-add').click(function(){
        var email = $('#email-add').val();
        var password = $('#password-add').val();
    
        if (email != "" && password != ""){

            $.ajax({
                type:"POST",
                url:"scriptPHP/register.php",
                data:{email:email,password:password},

                success:function(response){
                    if(response=="success")
                    {
                        document.getElementById("txtInfo").innerHTML = "Adicionado com Sucesso!"
                        console.log("Add feito com sucesso!")


                        //limpa as caixas de texto
                        const inputs = document.querySelectorAll('#email-add, #password-add') 
                        inputs.forEach(input=>{
                            input.value = '';
                        }); 
                        console.log("Caixa limpa!")
                    }
                    else{
                        document.getElementById("txtInfo").innerHTML = "Dados Invalidos!"
                        console.log("Erro - Servidor")
                    }
                }
            })

        }else{
            document.getElementById("txtInfo").innerHTML = ""
            document.getElementById("txtInfo").innerHTML = "Falta preencher campos!"
            console.log("Erro - Cliente")
        }
             
    })
})