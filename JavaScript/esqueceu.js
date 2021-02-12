function mudar(){
    var txtLogin = document.getElementById("txtLogin").value;
    var txtOSenha = document.getElementById("txtOSenha").value;
    var txtNSenha = document.getElementById("txtNSenha").value;
    var txtRSenha = document.getElementById("txtRSenha").value;

    if(txtNSenha != txtRSenha){
        alert("Novas senhas não conferem");
        return;
    }

    var mensagem = {
        racf:txtLogin,
        senhaantiga:txtOSenha,
        senhanova:txtNSenha
    }

    var cabecalho = {
        method : "POST",
        body: JSON.stringify(mensagem),
        headers : {
            "Content-type":"application/json"
        }
    }
    fetch("http://localhost:8088/trocarsenha",cabecalho).then(resposta=> {
        if(resposta.status == 200){
            alert("Senha atualizada");
            window.location = "index.html";
        }
        else if(resposta.status == 404){
            alert("Usuario nao encontrado");
        }
        else if(resposta.status == 403){
            alert("Senha antiga não confere com a senha cadastrada!");
        }
    })
}