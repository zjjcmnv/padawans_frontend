function carregaInfo(){
    var strUser = localStorage.getItem("userDASH");

    if (!strUser){
        window.location= "index.html"
        return
    }

    var user = JSON.parse(strUser);

    document.getElementById("fotoUser").innerHTML = `<img src="${user.linkFoto}" width="100%">`;
    document.getElementById("bioUser").innerHTML = `<h4>${user.nome}</h4>
                                                    <p><strong>Racf:</strong> ${user.racf}</p>
                                                    <p><strong>Email:</strong> ${user.email}</p>
                                                    <p><strong>Ramal:</strong> ${user.ramal}</p>
                                                    <button type="button" class="btn btn-primary" onclick="logout()">LOGOUT </button>`;
}
function logout(){
    localStorage.removeItem("userDASH");
    window.location = "index.html";
}