// VARIAVEL GLOBAL

var tentativas = 3;

function login() {

    
var emailVar = inp_email.value;
var senhaVar = inp_senha.value;


if (emailVar == "" || senhaVar == "") {
    div_erro.style.display = "block"
    mensagem_erro.innerHTML = "(Mensagem de erro para todos os campos em branco)";

    return false;
}
else {
    setInterval(sumirMensagem, 5000)
}

console.log("FORM LOGIN: ", emailVar);
console.log("FORM SENHA: ", senhaVar);


fetch("/usuarios/autenticar", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        emailServer: emailVar,
        senhaServer: senhaVar,
    
    })
}).then(function (resposta) {
    console.log("ESTOU NO THEN DO entrar()!")

    if (resposta.ok) {
        console.log(resposta);

        resposta.json().then(json => {
            console.log(json);
            console.log(JSON.stringify(json));
            sessionStorage.ID_USUARIO = json.id;
            sessionStorage.NOME_USUARIO = json.nome;
            sessionStorage.EMAIL_USUARIO = json.email;
-
            setTimeout(function () {
                window.location = "dash.html";
            }, 1000); // apenas para exibir o loading

        });

    } else {
        for (var i = tentativas; i > 0; i--) {

            console.log("Houve um erro ao tentar realizar o login!");
            tentativas--;

            i = tentativas;

            alert(`Login incorreto. Tentativas restantes: ${i}`);

            if (tentativas == 0) {

                alert("Você não tem mais tentativas.")
                setTimeout(function () {
                    sumirMensagem();
                }, 5000);
                window.location.href = 'index.html';



            }
            break;
            resposta.text().then(texto => {
                console.error(texto);

            });
        }
    }
}).catch(function (erro) {
    console.log(erro);
})
function sumirMensagem() {
    div_erro.style.display = "none";
}
return false;

 }