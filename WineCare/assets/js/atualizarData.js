// FUNÇÃO PARA PEGAR A DATA ATUAL E ATUALIZAR NO SITE

function atualizarData() {

    // CRIA UM OBJETO DE DATA

    var dataAtual = new Date();

    // FORMATA A DATA COMO ( dd/mm/aaaa )

    var dia = dataAtual.getDate();
    var mes = dataAtual.getMonth() + 1; // OS MESES COMEÇAM DO ZERO
    var ano = dataAtual.getFullYear();


    // Atualiza o conteúdo do parágrafo com a data formatada
    var data = document.getElementById('data-atual');
    data.textContent = dia + "/" + mes + "/" + ano

}

document.addEventListener("DOMContentLoaded", function() {
    // Chama a função inicialmente para exibir a data atual
    atualizarData();

    // Atualiza a data a cada segundo (1000 milissegundos)
    setInterval(atualizarData, 1000);
});