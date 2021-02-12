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
    var txtRamal = document.getElementById("txtRamal").value;
    var txtLinkf = document.getElementById("txtLinkf").value;
    var txtSenha = document.getElementById("txtSenha").value;


    window.location = "index.html";
}