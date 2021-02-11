function validaUser(){
    var userStr = localStorage.getItem("userDASH");
    if (!userStr){
        window.location = "index.html";
        return;
    }   
}
function getAlarmes(){
    var url = `http://localhost:8088/alarme`;
    fetch(url).then(resposta => resposta.json()).then(lista => mostrarAlarmes(lista))
}
function mostrarAlarmes(lista){
    strRelatorio = "";
    for (i=0; i<lista.length; i++){
        var alarme = lista[i];
        strRelatorio = strRelatorio + `<div class="row">
                                          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                             ${alarme.nome}
                                          </div>
                                          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                             ${alarme.descricao}
                                          </div>
                                      </div>`;
    }
    document.getElementById("alarme").innerHTML = strRelatorio;
}