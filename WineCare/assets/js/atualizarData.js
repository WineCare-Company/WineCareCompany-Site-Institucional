// FUNÇÃO PARA PEGAR A DATA ATUAL E ATUALIZAR NO SITE

function atualizarData() {

    // CRIA UM OBJETO DE DATA

    var dataAtual = new Date();

    // FORMATA A DATA COMO ( dd/mm/aaaa )

    var dia = dataAtual.getDate();
    var mes = dataAtual.getMonth() + 1; // OS MESES COMEÇAM DO ZERO
    var ano = dataAtual.getFullYear();


    // ATUALIZA A DATA NA DASHBOARD

    var data1 = document.getElementById('data-atual1');
    data1.textContent = dia + "/" + mes + "/" + ano;

    var data2 = document.getElementById('data-atual2');
    data2.textContent = dia + "/" + mes + "/" + ano;

    var data3 = document.getElementById('data-atual3');
    data3.textContent = dia + "/" + mes + "/" + ano;

    var data4 = document.getElementById('data-atual4');
    data4.textContent = dia + "/" + mes + "/" + ano;

    var data5 = document.getElementById('data-atual5');
    data5.textContent = dia + "/" + mes + "/" + ano;

}

document.addEventListener("DOMContentLoaded", function() {
    
    // CHAMA A FUNÇÃO PARA EXIBIR A DATA
    
    atualizarData();

    // ATUALIZA A DATA A CADA SEGUNDO (1000 milissegundos)
    
    setInterval(atualizarData, 1000);
});