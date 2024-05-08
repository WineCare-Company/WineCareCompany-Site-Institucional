document.addEventListener("DOMContentLoaded", function() {


    // ADICIONA UM OUVINTE DE CLICK EM CADA ITEM DA LISTA DO MENU


    document.getElementById("dashboard").addEventListener("click", function() {


        // MOSTRA O CONTEÚDO DA DASH E ESCONDE OS OUTROS

        document.getElementById("vinicola-container").style.display = "block";
        document.getElementById("barril-container").style.display = "none";
        document.getElementById("dash-content").style.display = "none";
        document.getElementById("notificacoes-content").style.display = "none";
        document.getElementById("configuracoes-content").style.display = "none";

    });


    document.getElementById("notificacoes").addEventListener("click", function() {

        
        // MOSTRA O CONTEÚDO DA NOTIFIICAÇÕES E ESCONDE OS OUTROS

        document.getElementById("vinicola-container").style.display = "none";
        document.getElementById("barril-container").style.display = "none";
        document.getElementById("dash-content").style.display = "none";
        document.getElementById("notificacoes-content").style.display = "block";
        document.getElementById("configuracoes-content").style.display = "none";

    });


    document.getElementById("configuracoes").addEventListener("click", function() {

        
        // MOSTRA O CONTEÚDO DA NOTIFIICAÇÕES E ESCONDE OS OUTROS

        document.getElementById("vinicola-container").style.display = "none";
        document.getElementById("barril-container").style.display = "none";
        document.getElementById("dash-content").style.display = "none";
        document.getElementById("notificacoes-content").style.display = "none";
        document.getElementById("configuracoes-content").style.display = "block";
        
    });




    document.getElementById("card-vinicola1").addEventListener("click", function() {
        

        // MOSTRA O CONTEÚDO DE BARRIS E ESCONDE OS OUTROS
        
        document.getElementById("vinicola-container").style.display = "none";
        document.getElementById("barril-container").style.display = "block";
        document.getElementById("barril-cards-content").style.display = "block";

        document.getElementById("card-barril1").style.display = "block";
        document.getElementById("card-barril2").style.display = "block";
        document.getElementById("card-barril3").style.display = "block";
        document.getElementById("card-barril4").style.display = "block";
        document.getElementById("card-barril5").style.display = "block";
        document.getElementById("card-barril6").style.display = "block";
        document.getElementById("card-barril7").style.display = "block";
        document.getElementById("card-barril8").style.display = "block";
        document.getElementById("card-barril9").style.display = "block";
        document.getElementById("card-barril10").style.display = "block";
        document.getElementById("card-barril11").style.display = "block";
        document.getElementById("card-barril12").style.display = "block";

    });


    document.getElementById("card-barril1").addEventListener("click", function() {
        

        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS
        
        document.getElementById("barril-cards-content").style.display = "none";
        document.getElementById("vinicola-container").style.display = "none";
        document.getElementById("barril-container").style.display = "block";
        document.getElementById("dash-content").style.display = "block";
        
        document.getElementById("dash1").style.display = "block";
        document.getElementById("dash2").style.display = "none";
        document.getElementById("dash3").style.display = "none";
        document.getElementById("dash4").style.display = "none";
        document.getElementById("dash5").style.display = "none";
        document.getElementById("dash6").style.display = "none";
        document.getElementById("dash7").style.display = "none";
        document.getElementById("dash8").style.display = "none";
        document.getElementById("dash9").style.display = "none";
        document.getElementById("dash10").style.display = "none";
        document.getElementById("dash11").style.display = "none";
        document.getElementById("dash12").style.display = "none";
        

    });
    
    document.getElementById("card-barril2").addEventListener("click", function() {
        
        
        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS
        
        document.getElementById("barril-cards-content").style.display = "none";
        document.getElementById("vinicola-container").style.display = "none";
        document.getElementById("barril-container").style.display = "block";
        document.getElementById("dash-content").style.display = "block";
        
        document.getElementById("dash1").style.display = "none";
        document.getElementById("dash2").style.display = "block";
        document.getElementById("dash3").style.display = "none";
        document.getElementById("dash4").style.display = "none";
        document.getElementById("dash5").style.display = "none";
        document.getElementById("dash6").style.display = "none";
        document.getElementById("dash7").style.display = "none";
        document.getElementById("dash8").style.display = "none";
        document.getElementById("dash9").style.display = "none";
        document.getElementById("dash10").style.display = "none";
        document.getElementById("dash11").style.display = "none";
        document.getElementById("dash12").style.display = "none";

    });

    document.getElementById("card-barril3").addEventListener("click", function() {
        
        
        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS
        
        document.getElementById("barril-cards-content").style.display = "none";
        document.getElementById("vinicola-container").style.display = "none";
        document.getElementById("barril-container").style.display = "block";
        document.getElementById("dash-content").style.display = "block";
        
        document.getElementById("dash1").style.display = "none";
        document.getElementById("dash2").style.display = "none";
        document.getElementById("dash3").style.display = "block";
        document.getElementById("dash4").style.display = "none";
        document.getElementById("dash5").style.display = "none";
        document.getElementById("dash6").style.display = "none";
        document.getElementById("dash7").style.display = "none";
        document.getElementById("dash8").style.display = "none";
        document.getElementById("dash9").style.display = "none";
        document.getElementById("dash10").style.display = "none";
        document.getElementById("dash11").style.display = "none";
        document.getElementById("dash12").style.display = "none";

    });

    document.getElementById("card-barril4").addEventListener("click", function() {
        
        
        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS

        document.getElementById("barril-cards-content").style.display = "none";
        document.getElementById("vinicola-container").style.display = "none";
        document.getElementById("barril-container").style.display = "block";
        document.getElementById("dash-content").style.display = "block";
        
        document.getElementById("dash1").style.display = "none";
        document.getElementById("dash2").style.display = "none";
        document.getElementById("dash3").style.display = "none";
        document.getElementById("dash4").style.display = "block";
        document.getElementById("dash5").style.display = "none";
        document.getElementById("dash6").style.display = "none";
        document.getElementById("dash7").style.display = "none";
        document.getElementById("dash8").style.display = "none";
        document.getElementById("dash9").style.display = "none";
        document.getElementById("dash10").style.display = "none";
        document.getElementById("dash11").style.display = "none";
        document.getElementById("dash12").style.display = "none";
        
    });

    document.getElementById("card-barril5").addEventListener("click", function() {
        
        
        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS
        
        document.getElementById("barril-cards-content").style.display = "none";
        document.getElementById("vinicola-container").style.display = "none";
        document.getElementById("barril-container").style.display = "block";
        document.getElementById("dash-content").style.display = "block";
        
        document.getElementById("dash1").style.display = "none";
        document.getElementById("dash2").style.display = "none";
        document.getElementById("dash3").style.display = "none";
        document.getElementById("dash4").style.display = "none";
        document.getElementById("dash5").style.display = "block";
        document.getElementById("dash6").style.display = "none";
        document.getElementById("dash7").style.display = "none";
        document.getElementById("dash8").style.display = "none";
        document.getElementById("dash9").style.display = "none";
        document.getElementById("dash10").style.display = "none";
        document.getElementById("dash11").style.display = "none";
        document.getElementById("dash12").style.display = "none";

    });

    document.getElementById("card-barril6").addEventListener("click", function() {
        
        
        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS
        
        document.getElementById("barril-cards-content").style.display = "none";
        document.getElementById("vinicola-container").style.display = "none";
        document.getElementById("barril-container").style.display = "block";
        document.getElementById("dash-content").style.display = "block";
        
        document.getElementById("dash1").style.display = "none";
        document.getElementById("dash2").style.display = "none";
        document.getElementById("dash3").style.display = "none";
        document.getElementById("dash4").style.display = "none";
        document.getElementById("dash5").style.display = "none";
        document.getElementById("dash6").style.display = "block";
        document.getElementById("dash7").style.display = "none";
        document.getElementById("dash8").style.display = "none";
        document.getElementById("dash9").style.display = "none";
        document.getElementById("dash10").style.display = "none";
        document.getElementById("dash11").style.display = "none";
        document.getElementById("dash12").style.display = "none";

    });

    document.getElementById("card-barril7").addEventListener("click", function() {
        
        
        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS
        
        document.getElementById("barril-cards-content").style.display = "none";
        document.getElementById("vinicola-container").style.display = "none";
        document.getElementById("barril-container").style.display = "block";
        document.getElementById("dash-content").style.display = "block";
        
        document.getElementById("dash1").style.display = "none";
        document.getElementById("dash2").style.display = "none";
        document.getElementById("dash3").style.display = "none";
        document.getElementById("dash4").style.display = "none";
        document.getElementById("dash5").style.display = "none";
        document.getElementById("dash6").style.display = "none";
        document.getElementById("dash7").style.display = "block";
        document.getElementById("dash8").style.display = "none";
        document.getElementById("dash9").style.display = "none";
        document.getElementById("dash10").style.display = "none";
        document.getElementById("dash11").style.display = "none";
        document.getElementById("dash12").style.display = "none";

    });

    document.getElementById("card-barril8").addEventListener("click", function() {
        
        
        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS
        
        document.getElementById("barril-cards-content").style.display = "none";
        document.getElementById("vinicola-container").style.display = "none";
        document.getElementById("barril-container").style.display = "block";
        document.getElementById("dash-content").style.display = "block";
        
        document.getElementById("dash1").style.display = "none";
        document.getElementById("dash2").style.display = "none";
        document.getElementById("dash3").style.display = "none";
        document.getElementById("dash4").style.display = "none";
        document.getElementById("dash5").style.display = "none";
        document.getElementById("dash6").style.display = "none";
        document.getElementById("dash7").style.display = "none";
        document.getElementById("dash8").style.display = "block";
        document.getElementById("dash9").style.display = "none";
        document.getElementById("dash10").style.display = "none";
        document.getElementById("dash11").style.display = "none";
        document.getElementById("dash12").style.display = "none";

    });

    document.getElementById("card-barril9").addEventListener("click", function() {
        
        
        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS
        
        document.getElementById("barril-cards-content").style.display = "none";
        document.getElementById("vinicola-container").style.display = "none";
        document.getElementById("barril-container").style.display = "block";
        document.getElementById("dash-content").style.display = "block";
        
        document.getElementById("dash1").style.display = "none";
        document.getElementById("dash2").style.display = "none";
        document.getElementById("dash3").style.display = "none";
        document.getElementById("dash4").style.display = "none";
        document.getElementById("dash5").style.display = "none";
        document.getElementById("dash6").style.display = "none";
        document.getElementById("dash7").style.display = "none";
        document.getElementById("dash8").style.display = "none";
        document.getElementById("dash9").style.display = "block";
        document.getElementById("dash10").style.display = "none";
        document.getElementById("dash11").style.display = "none";
        document.getElementById("dash12").style.display = "none";

    });

    document.getElementById("card-barril10").addEventListener("click", function() {
        
        
        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS
        
        document.getElementById("barril-cards-content").style.display = "none";
        document.getElementById("vinicola-container").style.display = "none";
        document.getElementById("barril-container").style.display = "block";
        document.getElementById("dash-content").style.display = "block";
        
        document.getElementById("dash1").style.display = "none";
        document.getElementById("dash2").style.display = "none";
        document.getElementById("dash3").style.display = "none";
        document.getElementById("dash4").style.display = "none";
        document.getElementById("dash5").style.display = "none";
        document.getElementById("dash6").style.display = "none";
        document.getElementById("dash7").style.display = "none";
        document.getElementById("dash8").style.display = "none";
        document.getElementById("dash9").style.display = "none";
        document.getElementById("dash10").style.display = "block";
        document.getElementById("dash11").style.display = "none";
        document.getElementById("dash12").style.display = "none";

    });

    document.getElementById("card-barril11").addEventListener("click", function() {
        
        
        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS
        
        document.getElementById("barril-cards-content").style.display = "none";
        document.getElementById("vinicola-container").style.display = "none";
        document.getElementById("barril-container").style.display = "block";
        document.getElementById("dash-content").style.display = "block";
        
        document.getElementById("dash1").style.display = "none";
        document.getElementById("dash2").style.display = "none";
        document.getElementById("dash3").style.display = "none";
        document.getElementById("dash4").style.display = "none";
        document.getElementById("dash5").style.display = "none";
        document.getElementById("dash6").style.display = "none";
        document.getElementById("dash7").style.display = "none";
        document.getElementById("dash8").style.display = "none";
        document.getElementById("dash9").style.display = "none";
        document.getElementById("dash10").style.display = "none";
        document.getElementById("dash11").style.display = "block";
        document.getElementById("dash12").style.display = "none";

    });

    document.getElementById("card-barril12").addEventListener("click", function() {
        
        
        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS
        
        document.getElementById("barril-cards-content").style.display = "none";
        document.getElementById("vinicola-container").style.display = "none";
        document.getElementById("barril-container").style.display = "block";
        document.getElementById("dash-content").style.display = "block";
        
        document.getElementById("dash1").style.display = "none";
        document.getElementById("dash2").style.display = "none";
        document.getElementById("dash3").style.display = "none";
        document.getElementById("dash4").style.display = "none";
        document.getElementById("dash5").style.display = "none";
        document.getElementById("dash6").style.display = "none";
        document.getElementById("dash7").style.display = "none";
        document.getElementById("dash8").style.display = "none";
        document.getElementById("dash9").style.display = "none";
        document.getElementById("dash10").style.display = "none";
        document.getElementById("dash11").style.display = "none";
        document.getElementById("dash12").style.display = "block";

    });



    // MUDANDO PARA AS DASH PELA KPI
    
    document.getElementById("card1").addEventListener("click", function() {
        
        
        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS
        
        document.getElementById("dash-content").style.display = "none";
        document.getElementById("vinicola-container").style.display = "none";

        document.getElementById("barril-container").style.display = "block";
        document.getElementById("barril-cards-content").style.display = "block";
        
        document.getElementById("card-barril1").style.display = "block";
        document.getElementById("card-barril2").style.display = "none";
        document.getElementById("card-barril3").style.display = "none";
        document.getElementById("card-barril4").style.display = "none";
        document.getElementById("card-barril5").style.display = "none";
        document.getElementById("card-barril6").style.display = "none";
        document.getElementById("card-barril7").style.display = "none";
        document.getElementById("card-barril8").style.display = "none";
        document.getElementById("card-barril9").style.display = "none";
        document.getElementById("card-barril10").style.display = "none";
        document.getElementById("card-barril11").style.display = "none";
        document.getElementById("card-barril12").style.display = "none";

    });

    document.getElementById("card2").addEventListener("click", function() {
        
        
        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS
        
        document.getElementById("dash-content").style.display = "none";
        document.getElementById("vinicola-container").style.display = "none";

        document.getElementById("barril-container").style.display = "block";
        document.getElementById("barril-cards-content").style.display = "block";
        
        document.getElementById("card-barril1").style.display = "none";
        document.getElementById("card-barril2").style.display = "block";
        document.getElementById("card-barril3").style.display = "none";
        document.getElementById("card-barril4").style.display = "none";
        document.getElementById("card-barril5").style.display = "none";
        document.getElementById("card-barril6").style.display = "none";
        document.getElementById("card-barril7").style.display = "none";
        document.getElementById("card-barril8").style.display = "none";
        document.getElementById("card-barril9").style.display = "none";
        document.getElementById("card-barril10").style.display = "none";
        document.getElementById("card-barril11").style.display = "none";
        document.getElementById("card-barril12").style.display = "none";

    });

    document.getElementById("card3").addEventListener("click", function() {
        
        
        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS
        
        document.getElementById("dash-content").style.display = "none";
        document.getElementById("vinicola-container").style.display = "none";

        document.getElementById("barril-container").style.display = "block";
        document.getElementById("barril-cards-content").style.display = "block";
        
        document.getElementById("card-barril1").style.display = "none";
        document.getElementById("card-barril2").style.display = "none";
        document.getElementById("card-barril3").style.display = "none";
        document.getElementById("card-barril4").style.display = "none";
        document.getElementById("card-barril5").style.display = "none";
        document.getElementById("card-barril6").style.display = "none";
        document.getElementById("card-barril7").style.display = "none";
        document.getElementById("card-barril8").style.display = "none";
        document.getElementById("card-barril9").style.display = "none";
        document.getElementById("card-barril10").style.display = "none";
        document.getElementById("card-barril11").style.display = "none";
        document.getElementById("card-barril12").style.display = "none";

    });

    document.getElementById("card4").addEventListener("click", function() {
        
        
        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS
        
        document.getElementById("dash-content").style.display = "none";
        document.getElementById("vinicola-container").style.display = "none";

        document.getElementById("barril-container").style.display = "block";
        document.getElementById("barril-cards-content").style.display = "block";
        
        document.getElementById("card-barril1").style.display = "none";
        document.getElementById("card-barril2").style.display = "none";
        document.getElementById("card-barril3").style.display = "none";
        document.getElementById("card-barril4").style.display = "block";
        document.getElementById("card-barril5").style.display = "none";
        document.getElementById("card-barril6").style.display = "none";
        document.getElementById("card-barril7").style.display = "none";
        document.getElementById("card-barril8").style.display = "none";
        document.getElementById("card-barril9").style.display = "none";
        document.getElementById("card-barril10").style.display = "none";
        document.getElementById("card-barril11").style.display = "none";
        document.getElementById("card-barril12").style.display = "none";

    });

    document.getElementById("card5").addEventListener("click", function() {
        
        
        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS
        
        document.getElementById("dash-content").style.display = "none";
        document.getElementById("vinicola-container").style.display = "none";

        document.getElementById("barril-container").style.display = "block";
        document.getElementById("barril-cards-content").style.display = "block";
        
        document.getElementById("card-barril1").style.display = "none";
        document.getElementById("card-barril2").style.display = "none";
        document.getElementById("card-barril3").style.display = "none";
        document.getElementById("card-barril4").style.display = "none";
        document.getElementById("card-barril5").style.display = "block";
        document.getElementById("card-barril6").style.display = "block";
        document.getElementById("card-barril7").style.display = "block";
        document.getElementById("card-barril8").style.display = "block";
        document.getElementById("card-barril9").style.display = "block";
        document.getElementById("card-barril10").style.display = "block";
        document.getElementById("card-barril11").style.display = "block";
        document.getElementById("card-barril12").style.display = "block";

    });
});