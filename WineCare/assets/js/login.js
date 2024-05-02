// VARIAVEL GLOBAL

var tentativas = 3;

function login() {

    // INPUTS

    var email = inp_email.value;
    var senha = inp_senha.value;


    // VARIAVEIS

    var loginCorreto = false;


    // VERIFICAÇÕES

    if (email != '' && senha != '') {

        for (var i = tentativas; i > 0; i--) {

            if (email == 'Cliente@gmail.com' && senha == 'cliente123') {

                loginCorreto = true;

                window.location.href = 'dash.html';

                inp_email = '';
                inp_sennha = '';

                tentativas = 3;

                break;
                
            }

            else {

                tentativas--;

                i = tentativas;

                alert(`Login incorreto. Tentativas restantes: ${i}`);

                break;

            }

        }

        if (tentativas == 0) {

            alert("Você não tem mais tentativas.")

            window.location.href = 'index.html';
            
        }
        
    }

    else {

        alert("Preencha os Campos!");

    }
    
}