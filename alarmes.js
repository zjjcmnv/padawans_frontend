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
                                          <div class="col-xs-2 col-sm-4 col-md-6 col-lg-4 col-xl-3">
                                             ${alarme.nome}
                                          </div>
                                          <div class="col-xs-10 col-sm-8 col-md-6 col-lg-8 col-xl-9">
                                             ${alarme.descricao}
                                          </div>
                                      </div>`;
    }
    document.getElementById("alarme").innerHTML = strRelatorio;
}