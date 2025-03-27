// variavel que recebe o numero aleatorio
let num = 0;

// gera o numero
function randomNumber() {
    num = Math.ceil(Math.random() * 10);
    return num;
}

// botao de som, e som
const soundBtn = document.querySelector("#btnSom");
const bgSound = document.querySelector("#musicaDeFundo");

// pausa ou inicia o som
soundBtn.addEventListener("click", () => {
    if (bgSound.muted) {
        bgSound.muted = false;
    } else {
        bgSound.muted = true;
    }
});

// input onde voce digita o numero
const input = document.querySelector("#inputNumero");

// inicia a musica ao clicar no input
input.addEventListener("click", () => {
    bgSound.play();
});

// adiciona um evento blur, e inicia a verificação de valor vazio
input.addEventListener("blur", verificarInput);

// verifica se o valor é vazio e se verdadeiro ele desabilta
function verificarInput() {
    if (input.value == "" || input.value <= 0 || input.value > 10) {
        sendBtn.setAttribute("disabled", true);
        sendBtn.style.backgroundColor = "#ccc";
        sendBtn.style.cursor = "not-allowed";
        menssage.classList.add("errou");
        menssage.textContent =
            "Você não está sendo um(a) mentalista! Digite um número inteiro entre 1 e 10.";

        // habilita o butao apos um tempo
        setTimeout(() => {
            sendBtn.removeAttribute("disabled");
            sendBtn.style.backgroundColor = "#222";
            sendBtn.style.cursor = "pointer";
            menssage.classList.remove("errou");
            menssage.textContent = "";
            input.value = "";
        }, 3000);
    }
}

// botao de verificação
const sendBtn = document.querySelector("#btnChutar");

// adiciona um clique ao botao e chama as funçoes
sendBtn.addEventListener("click", function (event) {
    event.preventDefault();
    verificarAcerto();
    casoAcerto();
    retirarMenssage();
});

// onde vai ficar o status de acertou
let statusAcerto = "";

// define qual o status da tentativa
function verificarAcerto() {
    if (input.value == num) {
        statusAcerto = "acertou";
    } else if (input.value < num) {
        statusAcerto = "menor";
    } else if (input.value > num) {
        statusAcerto = "maior";
    } else if (input.value == "") {
        statusAcerto = "undefined";
    }

    // retorna o status
    return statusAcerto;
}

// onde fica a menssagem
const menssage = document.querySelector("#aviso");

// define a menssagem
function casoAcerto() {
    switch (statusAcerto) {
        case "acertou":
            menssage.classList.add("acertou");
            menssage.textContent = "Acertou, o número secreto era " + num;
            randomNumber();
            break;
        case "menor":
            menssage.classList.add("errou");
            menssage.textContent = "Chute menor que o número secreto";
            break;
        case "maior":
            menssage.classList.add("errou");
            menssage.textContent = "Chute maior que o número secreto";
            break;
    }
}

// retira a menssagem
function retirarMenssage() {
    setTimeout(() => {
        menssage.classList.remove("acertou");
        menssage.classList.remove("errou");
        menssage.textContent = "";
        input.value = "";
    }, 3000);
}
