document.addEventListener("DOMContentLoaded", function() {

    // ADICIONA UM OUVINTE DE CLICK EM CADA ITEM DA LISTA DO MENU

    document.getElementById("dashboard").addEventListener("click", function() {

        // MOSTRA O CONTEÚDO DA DASH E ESCONDE OS OUTROS

        document.getElementById("dashboard-content").style.display = "block";
        document.getElementById("graficos-content").style.display = "none";
        document.getElementById("vinicola-content").style.display = "block";
        document.getElementById("notificacoes-content").style.display = "none";
        document.getElementById("configuracoes-content").style.display = "none";
    });

    document.getElementById("notificacoes").addEventListener("click", function() {
        
        // MOSTRA O CONTEÚDO DA NOTIFIICAÇÕES E ESCONDE OS OUTROS

        document.getElementById("dashboard-content").style.display = "none";
        document.getElementById("notificacoes-content").style.display = "block";
        document.getElementById("configuracoes-content").style.display = "none";
    });
    document.getElementById("configuracoes").addEventListener("click", function() {
        
        // MOSTRA O CONTEÚDO DA NOTIFIICAÇÕES E ESCONDE OS OUTROS

        document.getElementById("dashboard-content").style.display = "none";
        document.getElementById("notificacoes-content").style.display = "none";
        document.getElementById("configuracoes-content").style.display = "block";
    });

    document.getElementById("card-vinicola1").addEventListener("click", function() {
        
        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS
        
        document.getElementById("vinicola-content").style.display = "none";
        document.getElementById("graficos-content").style.display = "block";
    });

});