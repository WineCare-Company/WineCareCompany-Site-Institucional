
function cadastrar() {
    var empresaVar = inp_empresa.value;
    var nomeVar = inp_representante.value;
    var emailVar = inp_email.value;
    var cnpjVar = Number(inp_cnpj.value);
    var telefoneVar = inp_telefone.value;
    var senhaVar = inp_senha.value;
    var indice_arroba = emailVar.indexOf('@');
    var indice_ponto = emailVar.indexOf('.');
    console.log(inp_telefone.value);
    if (
        empresaVar == "" ||
        nomeVar == "" ||
        emailVar == "" ||
        cnpjVar == "" ||
        telefoneVar == "" ||
        senhaVar == ""
      
    ) {
        // div_erro.style.display = "block";
        // mensagem_erro.innerHTML =
        alert("Todos os campos estão em branco");


        return false;
    } else if (nomeVar.length < 3 || indice_arroba <= 0 || indice_ponto <= 0 || senhaVar.length <= 3 || telefoneVar.length < 10 || empresaVar.lengt < 4 ||emailVar.lengt < 5 || cnpjVar.lengt < 6) {
        alert("Campos com valores inválidos");
        return false;
    } else {
        setInterval(sumirMensagem, 5000);
    }

    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            empresaServer: empresaVar,
            nomeServer: nomeVar,
            emailServer: emailVar,
            cnpjServer: cnpjVar,
            telefoneServer: telefoneVar,
            senhaServer: senhaVar

        }),
    })

        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
                // div_erro.style.display = "block";

                // mensagem_erro.innerHTML =
                alert("Cadastro realizado com sucesso! Redirecionando para tela de Login...");

                setTimeout(() => {
                    window.location = "login.html";
                }, "2000");

                limparFormulario();

            } else {
                throw "Houve um erro ao tentar realizar o cadastro!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);

        });
        function sumirMensagem() {
            div_erro.style.display = "none";
        }
    return false;
}