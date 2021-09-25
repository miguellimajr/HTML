function salvar() {

    nome = document.getElementById("nome").value 
    var matricula = document.getElementById("matricula").value 
    var idFuncional = document.getElementById("idFuncional").value 
    var cargo = document.getElementById("cargo").value 
    var lotacao = document.getElementById("lotacao").value 
    var cpf = document.getElementById("cpf").value 
    var nascimento = document.getElementById("nascimento").value 
    var tel = document.getElementById("tel").value 
    var cel = document.getElementById("cel").value 
    var email = document.getElementById("email").value  
    
    
        
    console.log (nome)

    document.getElementById("inputNome").innerHTML = nome
    



}


function reset () {

    /* var nome = document.getElementById("nome") */
    console.log (nome)
    
    /* nome = "teste" */
    document.getElementById("inputNome").innerHTML = "<input type='text' id='nome' class='inputDuplo' value= '"+nome +"'/>"

    
}