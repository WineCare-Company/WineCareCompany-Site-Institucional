document.addEventListener("DOMContentLoaded", function () {


    // ADICIONA UM OUVINTE DE CLICK EM CADA ITEM DA LISTA DO MENU


    document.getElementById("dashboard").addEventListener("click", function () {


        // MOSTRA O CONTEÚDO DA DASH E ESCONDE OS OUTROS

        document.getElementById("dashboard").style.color = "#e1186c";
        document.getElementById("notificacoes").style.color = "black";
        document.getElementById("vinicola-container").style.display = "block";
        document.getElementById("barril-container").style.display = "none";
        document.getElementById("dash-content").style.display = "none";
        document.getElementById("notificacoes-content").style.display = "none";
        document.getElementById("configuracoes-content").style.display = "none";
        document.getElementById("btnVoltar").style.display = "none";

    });


    document.getElementById("notificacoes").addEventListener("click", function () {


        // MOSTRA O CONTEÚDO DA NOTIFIICAÇÕES E ESCONDE OS OUTROS

        document.getElementById("notificacoes").style.color = "#e1186c";
        document.getElementById("dashboard").style.color = "black";
        document.getElementById("btnVoltar").style.display = "none";
        document.getElementById("vinicola-container").style.display = "none";
        document.getElementById("barril-container").style.display = "none";
        document.getElementById("dash-content").style.display = "none";
        document.getElementById("notificacoes-content").style.display = "block";
        document.getElementById("configuracoes-content").style.display = "none";

    });


    // CARD VINICOLA

    document.getElementById("card-vinicola1").addEventListener("click", function () {

        document.getElementById("btnVoltar").style.display = "none";

        document.getElementById("dashboard").style.color = "#e1186c";
        document.getElementById("notificacoes").style.color = "black";

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


    // CARDS BARRIL

    document.getElementById("card-barril1").addEventListener("click", function () {

        document.getElementById("dashboard").style.color = "#e1186c";
        document.getElementById("notificacoes").style.color = "black";

        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS

        document.getElementById("barril-cards-content").style.display = "none";
        document.getElementById("vinicola-container").style.display = "none";
        document.getElementById("barril-container").style.display = "block";
        document.getElementById("dash-content").style.display = "block";

        document.getElementById("btnVoltar").style.display = "block";
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

    document.getElementById("card-barril2").addEventListener("click", function () {

        document.getElementById("dashboard").style.color = "#e1186c";
        document.getElementById("notificacoes").style.color = "black";

        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS

        document.getElementById("barril-cards-content").style.display = "none";
        document.getElementById("vinicola-container").style.display = "none";
        document.getElementById("barril-container").style.display = "block";
        document.getElementById("dash-content").style.display = "block";

        document.getElementById("btnVoltar").style.display = "block";
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

    document.getElementById("card-barril3").addEventListener("click", function () {

        document.getElementById("dashboard").style.color = "#e1186c";
        document.getElementById("notificacoes").style.color = "black";

        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS

        document.getElementById("barril-cards-content").style.display = "none";
        document.getElementById("vinicola-container").style.display = "none";
        document.getElementById("barril-container").style.display = "block";
        document.getElementById("dash-content").style.display = "block";

        document.getElementById("btnVoltar").style.display = "block";
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

    document.getElementById("card-barril4").addEventListener("click", function () {

        document.getElementById("dashboard").style.color = "#e1186c";
        document.getElementById("notificacoes").style.color = "black";

        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS

        document.getElementById("barril-cards-content").style.display = "none";
        document.getElementById("vinicola-container").style.display = "none";
        document.getElementById("barril-container").style.display = "block";
        document.getElementById("dash-content").style.display = "block";

        document.getElementById("btnVoltar").style.display = "block";
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

    document.getElementById("card-barril5").addEventListener("click", function () {

        document.getElementById("dashboard").style.color = "#e1186c";
        document.getElementById("notificacoes").style.color = "black";

        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS

        document.getElementById("barril-cards-content").style.display = "none";
        document.getElementById("vinicola-container").style.display = "none";
        document.getElementById("barril-container").style.display = "block";
        document.getElementById("dash-content").style.display = "block";

        document.getElementById("btnVoltar").style.display = "block";
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

    document.getElementById("card-barril6").addEventListener("click", function () {

        document.getElementById("dashboard").style.color = "#e1186c";
        document.getElementById("notificacoes").style.color = "black";

        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS

        document.getElementById("barril-cards-content").style.display = "none";
        document.getElementById("vinicola-container").style.display = "none";
        document.getElementById("barril-container").style.display = "block";
        document.getElementById("dash-content").style.display = "block";

        document.getElementById("btnVoltar").style.display = "block";
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

    document.getElementById("card-barril7").addEventListener("click", function () {

        document.getElementById("dashboard").style.color = "#e1186c";
        document.getElementById("notificacoes").style.color = "black";

        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS

        document.getElementById("barril-cards-content").style.display = "none";
        document.getElementById("vinicola-container").style.display = "none";
        document.getElementById("barril-container").style.display = "block";
        document.getElementById("dash-content").style.display = "block";

        document.getElementById("btnVoltar").style.display = "block";
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

    document.getElementById("card-barril8").addEventListener("click", function () {

        document.getElementById("dashboard").style.color = "#e1186c";
        document.getElementById("notificacoes").style.color = "black";

        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS

        document.getElementById("barril-cards-content").style.display = "none";
        document.getElementById("vinicola-container").style.display = "none";
        document.getElementById("barril-container").style.display = "block";
        document.getElementById("dash-content").style.display = "block";

        document.getElementById("btnVoltar").style.display = "block";
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

    document.getElementById("card-barril9").addEventListener("click", function () {

        document.getElementById("dashboard").style.color = "#e1186c";
        document.getElementById("notificacoes").style.color = "black";

        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS

        document.getElementById("barril-cards-content").style.display = "none";
        document.getElementById("vinicola-container").style.display = "none";
        document.getElementById("barril-container").style.display = "block";
        document.getElementById("dash-content").style.display = "block";

        document.getElementById("btnVoltar").style.display = "block";
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

    document.getElementById("card-barril10").addEventListener("click", function () {

        document.getElementById("dashboard").style.color = "#e1186c";
        document.getElementById("notificacoes").style.color = "black";

        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS

        document.getElementById("barril-cards-content").style.display = "none";
        document.getElementById("vinicola-container").style.display = "none";
        document.getElementById("barril-container").style.display = "block";
        document.getElementById("dash-content").style.display = "block";

        document.getElementById("btnVoltar").style.display = "block";
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

    document.getElementById("card-barril11").addEventListener("click", function () {

        document.getElementById("dashboard").style.color = "#e1186c";
        document.getElementById("notificacoes").style.color = "black";

        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS

        document.getElementById("barril-cards-content").style.display = "none";
        document.getElementById("vinicola-container").style.display = "none";
        document.getElementById("barril-container").style.display = "block";
        document.getElementById("dash-content").style.display = "block";

        document.getElementById("btnVoltar").style.display = "block";
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

    document.getElementById("card-barril12").addEventListener("click", function () {

        document.getElementById("dashboard").style.color = "#e1186c";
        document.getElementById("notificacoes").style.color = "black";

        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS

        document.getElementById("barril-cards-content").style.display = "none";
        document.getElementById("vinicola-container").style.display = "none";
        document.getElementById("barril-container").style.display = "block";
        document.getElementById("dash-content").style.display = "block";

        document.getElementById("btnVoltar").style.display = "block";
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


    // FILTRANDO OS BARRIS PELA KPI

    document.getElementById("card1").addEventListener("click", function () {


        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS

        document.getElementById("btnVoltar").style.display = "block";

        document.getElementById("dash-content").style.display = "none";
        document.getElementById("vinicola-container").style.display = "none";

        document.getElementById("barril-container").style.display = "block";
        document.getElementById("barril-cards-content").style.display = "block";

        document.getElementById("dashboard").style.color = "#e1186c";
        document.getElementById("notificacoes").style.color = "black";

        document.getElementById("card1").style.backgroundColor = "#1e08111c";
        document.getElementById("card2").style.backgroundColor = "transparent";
        document.getElementById("card3").style.backgroundColor = "transparent";
        document.getElementById("card4").style.backgroundColor = "transparent";
        document.getElementById("card5").style.backgroundColor = "transparent";

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

    document.getElementById("card2").addEventListener("click", function () {


        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS

        document.getElementById("btnVoltar").style.display = "block";

        document.getElementById("dash-content").style.display = "none";
        document.getElementById("vinicola-container").style.display = "none";

        document.getElementById("barril-container").style.display = "block";
        document.getElementById("barril-cards-content").style.display = "block";

        document.getElementById("dashboard").style.color = "#e1186c";
        document.getElementById("notificacoes").style.color = "black";

        document.getElementById("card2").style.backgroundColor = "#1e08111c";
        document.getElementById("card1").style.backgroundColor = "transparent";
        document.getElementById("card3").style.backgroundColor = "transparent";
        document.getElementById("card4").style.backgroundColor = "transparent";
        document.getElementById("card5").style.backgroundColor = "transparent";

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

    document.getElementById("card3").addEventListener("click", function () {


        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS

        document.getElementById("btnVoltar").style.display = "block";

        document.getElementById("dash-content").style.display = "none";
        document.getElementById("vinicola-container").style.display = "none";

        document.getElementById("barril-container").style.display = "block";
        document.getElementById("barril-cards-content").style.display = "block";

        document.getElementById("dashboard").style.color = "#e1186c";
        document.getElementById("notificacoes").style.color = "black";

        document.getElementById("card3").style.backgroundColor = "#1e08111c";
        document.getElementById("card1").style.backgroundColor = "transparent";
        document.getElementById("card2").style.backgroundColor = "transparent";
        document.getElementById("card4").style.backgroundColor = "transparent";
        document.getElementById("card5").style.backgroundColor = "transparent";

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

    document.getElementById("card4").addEventListener("click", function () {


        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS

        document.getElementById("btnVoltar").style.display = "block";

        document.getElementById("dash-content").style.display = "none";
        document.getElementById("vinicola-container").style.display = "none";

        document.getElementById("barril-container").style.display = "block";
        document.getElementById("barril-cards-content").style.display = "block";

        document.getElementById("dashboard").style.color = "#e1186c";
        document.getElementById("notificacoes").style.color = "black";

        document.getElementById("card4").style.backgroundColor = "#1e08111c";
        document.getElementById("card1").style.backgroundColor = "transparent";
        document.getElementById("card2").style.backgroundColor = "transparent";
        document.getElementById("card3").style.backgroundColor = "transparent";
        document.getElementById("card5").style.backgroundColor = "transparent";

        document.getElementById("card-barril1").style.display = "none";
        document.getElementById("card-barril2").style.display = "none";
        document.getElementById("card-barril3").style.display = "none";
        document.getElementById("card-barril4").style.display = "block";
        document.getElementById("card-barril5").style.display = "none";
        document.getElementById("card-barril6").style.display = "block";
        document.getElementById("card-barril7").style.display = "none";
        document.getElementById("card-barril8").style.display = "none";
        document.getElementById("card-barril9").style.display = "none";
        document.getElementById("card-barril10").style.display = "none";
        document.getElementById("card-barril11").style.display = "none";
        document.getElementById("card-barril12").style.display = "none";

    });

    document.getElementById("card5").addEventListener("click", function () {

        document.getElementById("btnVoltar").style.display = "block";


        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS

        document.getElementById("dash-content").style.display = "none";
        document.getElementById("vinicola-container").style.display = "none";

        document.getElementById("barril-container").style.display = "block";
        document.getElementById("barril-cards-content").style.display = "block";

        document.getElementById("dashboard").style.color = "#e1186c";
        document.getElementById("notificacoes").style.color = "black";

        document.getElementById("card5").style.backgroundColor = "#1e08111c";
        document.getElementById("card1").style.backgroundColor = "transparent";
        document.getElementById("card2").style.backgroundColor = "transparent";
        document.getElementById("card3").style.backgroundColor = "transparent";
        document.getElementById("card4").style.backgroundColor = "transparent";

        document.getElementById("card-barril1").style.display = "none";
        document.getElementById("card-barril2").style.display = "none";
        document.getElementById("card-barril3").style.display = "none";
        document.getElementById("card-barril4").style.display = "none";
        document.getElementById("card-barril6").style.display = "none";
        document.getElementById("card-barril7").style.display = "none";
        document.getElementById("card-barril8").style.display = "none";
        document.getElementById("card-barril9").style.display = "none";
        document.getElementById("card-barril10").style.display = "none";
        document.getElementById("card-barril11").style.display = "none";
        document.getElementById("card-barril12").style.display = "none";

        var temperaturaGlobal = window.temperaturaGlobal;

        console.log(temperaturaGlobal);

        if (temperaturaGlobal > 20) {

            document.getElementById("card-barril5").style.display = "block";

        }

        else {
            document.getElementById("card-barril5").style.display = "none";

        }


    });


    // BOTÃO VOLTAR - (VOLTA PARA A VISÃO GERAL DOS BARRIS)

    document.getElementById("btnVoltar").addEventListener("click", function () {


        // MOSTRA O CONTEÚDO DA VINICOLA E ESCONDE OS OUTROS

        document.getElementById("btnVoltar").style.display = "none";

        document.getElementById("dashboard").style.color = "#e1186c";
        document.getElementById("notificacoes").style.color = "black";

        // MOSTRA O CONTEÚDO DE BARRIS E ESCONDE OS OUTROS

        document.getElementById("vinicola-container").style.display = "none";
        document.getElementById("barril-container").style.display = "block";
        document.getElementById("barril-cards-content").style.display = "block";

        document.getElementById("card5").style.backgroundColor = "transparent";
        document.getElementById("card1").style.backgroundColor = "transparent";
        document.getElementById("card2").style.backgroundColor = "transparent";
        document.getElementById("card3").style.backgroundColor = "transparent";
        document.getElementById("card4").style.backgroundColor = "transparent";

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
        document.getElementById("dash12").style.display = "none";

    });

});