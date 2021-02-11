function validaUser(){
    var userStr = localStorage.getItem("userDASH");
    if (!userStr){
        window.location = "index.html";
        return;
    }
}

function gerarRelatorio(){
    /*
    - recuperar os valores digitados nos campos de data
    - montar a URL para acessar esse back end
    - ao receber a resposta, extrair o JSON dela e montar o relatório
    */

    var txtIni = document.getElementById("txtDataInicio").value;
    var txtFim = document.getElementById("txtDataFim").value;

    var url = `http://localhost:8088/buscarpordata?inicio=${txtIni}&fim=${txtFim}`;
    
    fetch(url).then(resposta => resposta.json()).then(lista => preencheRelatorio(lista));
}

function preencheRelatorio(lista){
/*
estrutura do objeto evento
     {
        "numSeq": 223,                       -----> col-1                   ---> col-6
        "dataEvento": "2020-01-01",          -----> col-2                   ---> col-6
        "alarme": {
            "idAlarme": 1,
            "nome": "FAIL_LINK",             -----> col-2                   ---> col-6
            "descricao": "Link de comunicacao indisponivel" ----> col->3    ---> col-6
        },
        "equipamento": {
            "idEquipamento": 11,
            "hostname": "ROUTER_AG_075",      ----> col-2                   ---> col-6
            "ipAddr": "10.2.75.1"             ----> col-2                   ---> col-6
        }
    },
*/

   // vamos percorrer a lista e montar uma grande STRING com todo o conteúdo

   var strRelatorio = '';
   for (i=0; i<lista.length; i++){
       var evento = lista[i];

       strRelatorio = strRelatorio + `<div class="row">
                                          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-1 col-xl-1">
                                             ${evento.numSeq}
                                          </div>
                                          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-2 col-xl-2">
                                             ${evento.dataEvento}
                                          </div>
                                          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-2 col-xl-2">
                                             ${evento.alarme.nome}
                                          </div>
                                          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                             ${evento.alarme.descricao}
                                          </div>
                                          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-2 col-xl-2">
                                             ${evento.equipamento.hostname}
                                          </div>
                                          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-2 col-xl-2">
                                             ${evento.equipamento.ipAddr}
                                          </div>
                                      </div>`; 
   }

   document.getElementById("relatorio").innerHTML = strRelatorio;
}