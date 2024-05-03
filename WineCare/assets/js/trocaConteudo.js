document.addEventListener("DOMContentLoaded", function() {


    // ADICIONA UM OUVINTE DE CLICK EM CADA ITEM DA LISTA DO MENU


    document.getElementById("dashboard").addEventListener("click", function() {


        // MOSTRA O CONTEÚDO DA DASH E ESCONDE OS OUTROS

        document.getElementById("dashboard-content").style.display = "block";
        document.getElementById("vinicola-content").style.display = "block";
        document.getElementById("graficos-content").style.display = "none";
        document.getElementById("barris-content").style.display = "none";
        document.getElementById("notificacoes-content").style.display = "none";
        document.getElementById("configuracoes-content").style.display = "none";
    });


    document.getElementById("notificacoes").addEventListener("click", function() {

        
        // MOSTRA O CONTEÚDO DA NOTIFIICAÇÕES E ESCONDE OS OUTROS

        document.getElementById("notificacoes-content").style.display = "block";
        document.getElementById("dashboard-content").style.display = "none";
        document.getElementById("configuracoes-content").style.display = "none";
    });


    document.getElementById("configuracoes").addEventListener("click", function() {

        
        // MOSTRA O CONTEÚDO DA NOTIFIICAÇÕES E ESCONDE OS OUTROS

        document.getElementById("configuracoes-content").style.display = "block";
        document.getElementById("dashboard-content").style.display = "none";
        document.getElementById("notificacoes-content").style.display = "none";
    });


    document.getElementById("card-vinicola1").addEventListener("click", function() {
        

        // MOSTRA O CONTEÚDO DE BARRIS E ESCONDE OS OUTROS
        
        document.getElementById("barris-content").style.display = "block";
        document.getElementById("vinicola-content").style.display = "none";
        document.getElementById("graficos-content").style.display = "none";

        document.getElementById("card-agrupamento1").style.display = "block";
        document.getElementById("card-agrupamento2").style.display = "block";
        document.getElementById("card-agrupamento3").style.display = "block";
        document.getElementById("card-agrupamento4").style.display = "block";
        document.getElementById("card-agrupamento5").style.display = "block";
    });


    document.getElementById("card-barril1").addEventListener("click", function() {
        

        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS
        
        document.getElementById("vinicola-content").style.display = "none";
        document.getElementById("barris-content").style.display = "none";
        document.getElementById("graficos-content").style.display = "block";
        document.getElementById("dash1").style.display = "block";
        document.getElementById("dash2").style.display = "none";
        document.getElementById("dash3").style.display = "none";
        document.getElementById("dash4").style.display = "none";
        document.getElementById("dash5").style.display = "none";
    });
    
    document.getElementById("card-barril2").addEventListener("click", function() {
        
        
        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS
        
        document.getElementById("vinicola-content").style.display = "none";
        document.getElementById("barris-content").style.display = "none";
        document.getElementById("graficos-content").style.display = "block";
        document.getElementById("dash1").style.display = "none";
        document.getElementById("dash2").style.display = "block";
        document.getElementById("dash3").style.display = "none";
        document.getElementById("dash4").style.display = "none";
        document.getElementById("dash5").style.display = "none";
    });

    document.getElementById("card-barril3").addEventListener("click", function() {
        
        
        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS
        
        document.getElementById("vinicola-content").style.display = "none";
        document.getElementById("barris-content").style.display = "none";
        document.getElementById("graficos-content").style.display = "block";
        document.getElementById("dash1").style.display = "none";
        document.getElementById("dash2").style.display = "none";
        document.getElementById("dash3").style.display = "block";
        document.getElementById("dash4").style.display = "none";
        document.getElementById("dash5").style.display = "none";
    });

    document.getElementById("card-barril4").addEventListener("click", function() {
        
        
        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS
        
        document.getElementById("vinicola-content").style.display = "none";
        document.getElementById("barris-content").style.display = "none";
        document.getElementById("graficos-content").style.display = "block";
        document.getElementById("dash1").style.display = "none";
        document.getElementById("dash2").style.display = "none";
        document.getElementById("dash3").style.display = "none";
        document.getElementById("dash4").style.display = "block";
        document.getElementById("dash5").style.display = "none";
    });

    document.getElementById("card-barril5").addEventListener("click", function() {
        
        
        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS
        
        document.getElementById("vinicola-content").style.display = "none";
        document.getElementById("barris-content").style.display = "none";
        document.getElementById("graficos-content").style.display = "block";
        document.getElementById("dash1").style.display = "none";
        document.getElementById("dash2").style.display = "none";
        document.getElementById("dash3").style.display = "none";
        document.getElementById("dash4").style.display = "none";
        document.getElementById("dash5").style.display = "block";
    });



    // MUDANDO PARA AS DASH PELA KPI
    
    document.getElementById("card1").addEventListener("click", function() {
        
        
        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS
        
        document.getElementById("barris-content").style.display = "block";
        document.getElementById("graficos-content").style.display = "none";
        
        document.getElementById("card-agrupamento1").style.display = "block";
        document.getElementById("card-agrupamento2").style.display = "none";
        document.getElementById("card-agrupamento3").style.display = "none";
        document.getElementById("card-agrupamento4").style.display = "none";
        document.getElementById("card-agrupamento5").style.display = "none";


        document.getElementById("vinicola-content").style.display = "none";

    });

    document.getElementById("card2").addEventListener("click", function() {
        
        
        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS
        
        document.getElementById("barris-content").style.display = "block";
        document.getElementById("graficos-content").style.display = "none";

        document.getElementById("card-agrupamento1").style.display = "none";
        document.getElementById("card-agrupamento2").style.display = "block";
        document.getElementById("card-agrupamento3").style.display = "none";
        document.getElementById("card-agrupamento4").style.display = "none";
        document.getElementById("card-agrupamento5").style.display = "none";

        document.getElementById("vinicola-content").style.display = "none";
    });

    document.getElementById("card3").addEventListener("click", function() {
        
        
        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS
        
        document.getElementById("barris-content").style.display = "block";
        document.getElementById("graficos-content").style.display = "none";

        document.getElementById("card-agrupamento1").style.display = "none";
        document.getElementById("card-agrupamento2").style.display = "none";
        document.getElementById("card-agrupamento3").style.display = "block";
        document.getElementById("card-agrupamento4").style.display = "none";
        document.getElementById("card-agrupamento5").style.display = "none";

        document.getElementById("vinicola-content").style.display = "none";
    });

    document.getElementById("card4").addEventListener("click", function() {
        
        
        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS
        
        document.getElementById("barris-content").style.display = "block";
        document.getElementById("graficos-content").style.display = "none";

        document.getElementById("card-agrupamento1").style.display = "none";
        document.getElementById("card-agrupamento2").style.display = "none";
        document.getElementById("card-agrupamento3").style.display = "none";
        document.getElementById("card-agrupamento4").style.display = "block";
        document.getElementById("card-agrupamento5").style.display = "none";

        document.getElementById("vinicola-content").style.display = "none";
    });

    document.getElementById("card5",).addEventListener("click", function() {
        
        
        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS
        
        document.getElementById("barris-content").style.display = "block";
        document.getElementById("graficos-content").style.display = "none";

        document.getElementById("card-agrupamento1").style.display = "none";
        document.getElementById("card-agrupamento2").style.display = "none";
        document.getElementById("card-agrupamento3").style.display = "none";
        document.getElementById("card-agrupamento4").style.display = "none";
        document.getElementById("card-agrupamento5").style.display = "block";

        document.getElementById("vinicola-content").style.display = "none";
    });


    document.getElementById("card1.1").addEventListener("click", function() {
        
        
        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS
        
        document.getElementById("barris-content").style.display = "block";
        document.getElementById("graficos-content").style.display = "none";
        
        document.getElementById("card-agrupamento1").style.display = "block";
        document.getElementById("card-agrupamento2").style.display = "none";
        document.getElementById("card-agrupamento3").style.display = "none";
        document.getElementById("card-agrupamento4").style.display = "none";
        document.getElementById("card-agrupamento5").style.display = "none";


        document.getElementById("vinicola-content").style.display = "none";

    });

    document.getElementById("card1.2").addEventListener("click", function() {
        
        
        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS
        
        document.getElementById("barris-content").style.display = "block";
        document.getElementById("graficos-content").style.display = "none";
        document.getElementById("card-agrupamento1").style.display = "none";
        document.getElementById("card-agrupamento2").style.display = "block";
        document.getElementById("card-agrupamento3").style.display = "none";
        document.getElementById("card-agrupamento4").style.display = "none";
        document.getElementById("card-agrupamento5").style.display = "none";
    });

    document.getElementById("card1.3").addEventListener("click", function() {
        
        
        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS
        
        document.getElementById("barris-content").style.display = "block";
        document.getElementById("graficos-content").style.display = "none";
        document.getElementById("card-agrupamento1").style.display = "none";
        document.getElementById("card-agrupamento2").style.display = "none";
        document.getElementById("card-agrupamento3").style.display = "block";
        document.getElementById("card-agrupamento4").style.display = "none";
        document.getElementById("card-agrupamento5").style.display = "none";
    });

    document.getElementById("card1.4").addEventListener("click", function() {
        
        
        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS
        
        document.getElementById("barris-content").style.display = "block";
        document.getElementById("graficos-content").style.display = "none";
        document.getElementById("card-agrupamento1").style.display = "none";
        document.getElementById("card-agrupamento2").style.display = "nonw";
        document.getElementById("card-agrupamento3").style.display = "none";
        document.getElementById("card-agrupamento4").style.display = "block";
        document.getElementById("card-agrupamento5").style.display = "none";
    });

    document.getElementById("card1.5",).addEventListener("click", function() {
        
        
        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS
        
        document.getElementById("barris-content").style.display = "block";
        document.getElementById("graficos-content").style.display = "none";
        document.getElementById("card-agrupamento1").style.display = "none";
        document.getElementById("card-agrupamento2").style.display = "none";
        document.getElementById("card-agrupamento3").style.display = "none";
        document.getElementById("card-agrupamento4").style.display = "none";
        document.getElementById("card-agrupamento5").style.display = "block";
    });


    document.getElementById("card2.1").addEventListener("click", function() {
        
        
        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS
        
        document.getElementById("barris-content").style.display = "block";
        document.getElementById("graficos-content").style.display = "none";
        
        document.getElementById("card-agrupamento1").style.display = "block";
        document.getElementById("card-agrupamento2").style.display = "none";
        document.getElementById("card-agrupamento3").style.display = "none";
        document.getElementById("card-agrupamento4").style.display = "none";
        document.getElementById("card-agrupamento5").style.display = "none";


        document.getElementById("vinicola-content").style.display = "none";

    });

    document.getElementById("card2.2").addEventListener("click", function() {
        
        
        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS
        
        document.getElementById("barris-content").style.display = "block";
        document.getElementById("graficos-content").style.display = "none";
        document.getElementById("card-agrupamento1").style.display = "none";
        document.getElementById("card-agrupamento2").style.display = "block";
        document.getElementById("card-agrupamento3").style.display = "none";
        document.getElementById("card-agrupamento4").style.display = "none";
        document.getElementById("card-agrupamento5").style.display = "none";
    });

    document.getElementById("card2.3").addEventListener("click", function() {
        
        
        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS
        
        document.getElementById("barris-content").style.display = "block";
        document.getElementById("graficos-content").style.display = "none";
        document.getElementById("card-agrupamento1").style.display = "none";
        document.getElementById("card-agrupamento2").style.display = "none";
        document.getElementById("card-agrupamento3").style.display = "block";
        document.getElementById("card-agrupamento4").style.display = "none";
        document.getElementById("card-agrupamento5").style.display = "none";
    });

    document.getElementById("card2.4").addEventListener("click", function() {
        
        
        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS
        
        document.getElementById("barris-content").style.display = "block";
        document.getElementById("graficos-content").style.display = "none";
        document.getElementById("card-agrupamento1").style.display = "none";
        document.getElementById("card-agrupamento2").style.display = "nonw";
        document.getElementById("card-agrupamento3").style.display = "none";
        document.getElementById("card-agrupamento4").style.display = "block";
        document.getElementById("card-agrupamento5").style.display = "none";
    });

    document.getElementById("card2.5",).addEventListener("click", function() {
        
        
        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS
        
        document.getElementById("barris-content").style.display = "block";
        document.getElementById("graficos-content").style.display = "none";
        document.getElementById("card-agrupamento1").style.display = "none";
        document.getElementById("card-agrupamento2").style.display = "none";
        document.getElementById("card-agrupamento3").style.display = "none";
        document.getElementById("card-agrupamento4").style.display = "none";
        document.getElementById("card-agrupamento5").style.display = "block";
    });


    document.getElementById("card3.1").addEventListener("click", function() {
        
        
        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS
        
        document.getElementById("barris-content").style.display = "block";
        document.getElementById("graficos-content").style.display = "none";
        
        document.getElementById("card-agrupamento1").style.display = "block";
        document.getElementById("card-agrupamento2").style.display = "none";
        document.getElementById("card-agrupamento3").style.display = "none";
        document.getElementById("card-agrupamento4").style.display = "none";
        document.getElementById("card-agrupamento5").style.display = "none";


        document.getElementById("vinicola-content").style.display = "none";

    });

    document.getElementById("card3.2").addEventListener("click", function() {
        
        
        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS
        
        document.getElementById("barris-content").style.display = "block";
        document.getElementById("graficos-content").style.display = "none";
        document.getElementById("card-agrupamento1").style.display = "none";
        document.getElementById("card-agrupamento2").style.display = "block";
        document.getElementById("card-agrupamento3").style.display = "none";
        document.getElementById("card-agrupamento4").style.display = "none";
        document.getElementById("card-agrupamento5").style.display = "none";
    });

    document.getElementById("card3.3").addEventListener("click", function() {
        
        
        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS
        
        document.getElementById("barris-content").style.display = "block";
        document.getElementById("graficos-content").style.display = "none";
        document.getElementById("card-agrupamento1").style.display = "none";
        document.getElementById("card-agrupamento2").style.display = "none";
        document.getElementById("card-agrupamento3").style.display = "block";
        document.getElementById("card-agrupamento4").style.display = "none";
        document.getElementById("card-agrupamento5").style.display = "none";
    });

    document.getElementById("card3.4").addEventListener("click", function() {
        
        
        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS
        
        document.getElementById("barris-content").style.display = "block";
        document.getElementById("graficos-content").style.display = "none";
        document.getElementById("card-agrupamento1").style.display = "none";
        document.getElementById("card-agrupamento2").style.display = "nonw";
        document.getElementById("card-agrupamento3").style.display = "none";
        document.getElementById("card-agrupamento4").style.display = "block";
        document.getElementById("card-agrupamento5").style.display = "none";
    });

    document.getElementById("card3.5",).addEventListener("click", function() {
        
        
        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS
        
        document.getElementById("barris-content").style.display = "block";
        document.getElementById("graficos-content").style.display = "none";
        document.getElementById("card-agrupamento1").style.display = "none";
        document.getElementById("card-agrupamento2").style.display = "none";
        document.getElementById("card-agrupamento3").style.display = "none";
        document.getElementById("card-agrupamento4").style.display = "none";
        document.getElementById("card-agrupamento5").style.display = "block";
    });


    document.getElementById("card4.1").addEventListener("click", function() {
        
        
        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS
        
        document.getElementById("barris-content").style.display = "block";
        document.getElementById("graficos-content").style.display = "none";
        
        document.getElementById("card-agrupamento1").style.display = "block";
        document.getElementById("card-agrupamento2").style.display = "none";
        document.getElementById("card-agrupamento3").style.display = "none";
        document.getElementById("card-agrupamento4").style.display = "none";
        document.getElementById("card-agrupamento5").style.display = "none";


        document.getElementById("vinicola-content").style.display = "none";

    });

    document.getElementById("card4.2").addEventListener("click", function() {
        
        
        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS
        
        document.getElementById("barris-content").style.display = "block";
        document.getElementById("graficos-content").style.display = "none";
        document.getElementById("card-agrupamento1").style.display = "none";
        document.getElementById("card-agrupamento2").style.display = "block";
        document.getElementById("card-agrupamento3").style.display = "none";
        document.getElementById("card-agrupamento4").style.display = "none";
        document.getElementById("card-agrupamento5").style.display = "none";
    });

    document.getElementById("card4.3").addEventListener("click", function() {
        
        
        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS
        
        document.getElementById("barris-content").style.display = "block";
        document.getElementById("graficos-content").style.display = "none";
        document.getElementById("card-agrupamento1").style.display = "none";
        document.getElementById("card-agrupamento2").style.display = "none";
        document.getElementById("card-agrupamento3").style.display = "block";
        document.getElementById("card-agrupamento4").style.display = "none";
        document.getElementById("card-agrupamento5").style.display = "none";
    });

    document.getElementById("card4.4").addEventListener("click", function() {
        
        
        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS
        
        document.getElementById("barris-content").style.display = "block";
        document.getElementById("graficos-content").style.display = "none";
        document.getElementById("card-agrupamento1").style.display = "none";
        document.getElementById("card-agrupamento2").style.display = "nonw";
        document.getElementById("card-agrupamento3").style.display = "none";
        document.getElementById("card-agrupamento4").style.display = "block";
        document.getElementById("card-agrupamento5").style.display = "none";
    });

    document.getElementById("card4.5",).addEventListener("click", function() {
        
        
        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS
        
        document.getElementById("barris-content").style.display = "block";
        document.getElementById("graficos-content").style.display = "none";
        document.getElementById("card-agrupamento1").style.display = "none";
        document.getElementById("card-agrupamento2").style.display = "none";
        document.getElementById("card-agrupamento3").style.display = "none";
        document.getElementById("card-agrupamento4").style.display = "none";
        document.getElementById("card-agrupamento5").style.display = "block";
    });


    document.getElementById("card5.1").addEventListener("click", function() {
        
        
        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS
        
        document.getElementById("barris-content").style.display = "block";
        document.getElementById("graficos-content").style.display = "none";
        
        document.getElementById("card-agrupamento1").style.display = "block";
        document.getElementById("card-agrupamento2").style.display = "none";
        document.getElementById("card-agrupamento3").style.display = "none";
        document.getElementById("card-agrupamento4").style.display = "none";
        document.getElementById("card-agrupamento5").style.display = "none";


        document.getElementById("vinicola-content").style.display = "none";

    });

    document.getElementById("card5.2").addEventListener("click", function() {
        
        
        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS
        
        document.getElementById("barris-content").style.display = "block";
        document.getElementById("graficos-content").style.display = "none";
        document.getElementById("card-agrupamento1").style.display = "none";
        document.getElementById("card-agrupamento2").style.display = "block";
        document.getElementById("card-agrupamento3").style.display = "none";
        document.getElementById("card-agrupamento4").style.display = "none";
        document.getElementById("card-agrupamento5").style.display = "none";
    });

    document.getElementById("card5.3").addEventListener("click", function() {
        
        
        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS
        
        document.getElementById("barris-content").style.display = "block";
        document.getElementById("graficos-content").style.display = "none";
        document.getElementById("card-agrupamento1").style.display = "none";
        document.getElementById("card-agrupamento2").style.display = "none";
        document.getElementById("card-agrupamento3").style.display = "block";
        document.getElementById("card-agrupamento4").style.display = "none";
        document.getElementById("card-agrupamento5").style.display = "none";
    });

    document.getElementById("card5.4").addEventListener("click", function() {
        
        
        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS
        
        document.getElementById("barris-content").style.display = "block";
        document.getElementById("graficos-content").style.display = "none";
        document.getElementById("card-agrupamento1").style.display = "none";
        document.getElementById("card-agrupamento2").style.display = "nonw";
        document.getElementById("card-agrupamento3").style.display = "none";
        document.getElementById("card-agrupamento4").style.display = "block";
        document.getElementById("card-agrupamento5").style.display = "none";
    });

    document.getElementById("card5.5",).addEventListener("click", function() {
        
        
        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS
        
        document.getElementById("barris-content").style.display = "block";
        document.getElementById("graficos-content").style.display = "none";
        document.getElementById("card-agrupamento1").style.display = "none";
        document.getElementById("card-agrupamento2").style.display = "none";
        document.getElementById("card-agrupamento3").style.display = "none";
        document.getElementById("card-agrupamento4").style.display = "none";
        document.getElementById("card-agrupamento5").style.display = "block";
    });

});