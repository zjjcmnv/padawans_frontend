function checksenha(senha1,senha2){
    if(senha1 != senha2){
        newfield =`<div class="mb-3">
        <label for="txtSenha" class="form-label">Insira sua Senha</label>
        <input type="password" class="form-control senha" id="txtSenha" aria-describedby="emailHelp">
        </div>`
        document.getElementById("txtSenha").innerHTML = newfield;
    }
}

function cadastrar(){
    var txtNome = document.getElementById("txtNome").value;
    var txtEmail = document.getElementById("txtEmail").value;
    var txtRacf = document.getElementById("txtRacf").value;
    var txtRamal = document.getElementById("txtRamal").value;
    var txtLinkf = document.getElementById("txtLinkf").value;
    var txtSenha = document.getElementById("txtSenha").value;

    var novoUser = {
        nome : txtNome,
        email : txtEmail,
        racf: txtRacf,
        ramal : txtRamal,
        linkFoto:txtLinkf,
        senha: txtSenha
    }

    var cabecalho = {
        method : "POST",
        body: JSON.stringify(novoUser),
        headers : {
            "Content-type":"application/json"
        }
    }
    fetch("http://localhost:8088/novousuario",cabecalho).then(resposta => {
        if(resposta.status == 201){
            alert("Usuário criado com sucesso")
            window.location = "index.html";
        }
        else{
            alert("Ocorreu algum problema nos campos")
        }
    })
    
}