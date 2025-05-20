// onde fica o numero aleatorio
let randomNumber;

// gera um numero aleatorio entre 1 e 10
function gerarNumero() {
    let max = 10;
    let min = 1;
    randomNumber = Math.floor(Math.random() * max) + min;

    console.log(randomNumber); // mostra o número no console (debug)
    return randomNumber;
}

// gera o numero assim que a pagina carregar
window.addEventListener("load", gerarNumero);

// musica de fundo
const sound = document.querySelector("#musicaDeFundo");

// lógica do botão de música
function musicBg() {
    if (sound.paused) {
        sound.play();
    } else {
        sound.pause();
        sound.currentTime = 0;
    }
}

// botão e evento de clique para música
const soundBtn = document.querySelector("#btnSom");
soundBtn.addEventListener("click", musicBg);

// DOM do botão de jogo
const sendBtn = document.querySelector("#btnChutar");

// bloqueia o botão de chute
function bloquearBtn() {
    sendBtn.setAttribute("disabled", "disabled"); // corrigido aqui
    sendBtn.style.backgroundColor = "#ccc";
    sendBtn.style.cursor = "not-allowed";
}

// ativa o botão de chute
function ativarBtn() {
    sendBtn.removeAttribute("disabled"); // corrigido aqui
    sendBtn.style.backgroundColor = "#222";
    sendBtn.style.cursor = "pointer";
}

// DOM do input e da mensagem de aviso
const input = document.querySelector("#inputNumero");
const menssageText = document.querySelector("#aviso");

// exibe mensagem temporária e bloqueia o botão
function flashMenssage(menssage) {
    bloquearBtn();
    menssageText.textContent = menssage;

    setTimeout(() => {
        menssageText.textContent = "";
        menssageText.classList.remove("errou");
        menssageText.classList.remove("acertou");
        input.value = "";
    }, 3000);
}

// valida se o número digitado é válido
function numeroValido() {
    const inputValue = parseInt(input.value);

    if (inputValue < 1 || inputValue > 10 || isNaN(inputValue)) {
        flashMenssage(
            "Você não está sendo um(a) mentalista! Digite um número inteiro entre 1 e 10."
        );
        menssageText.classList.add("errou");
    }
}

// eventos do input: valida ao perder o foco e ativa música ao clicar
input.addEventListener("blur", numeroValido);
input.addEventListener("click", () => {
    sound.play();
    ativarBtn();
});

let chute = "";

// lógica do jogo: compara o chute com o número aleatório
function jogo() {
    const inputValue = input.value;

    if (inputValue < randomNumber) {
        chute = "menor";
    } else if (inputValue > randomNumber) {
        chute = "maior";
    } else {
        chute = "certo";
    }

    return chute;
}

// executa ações conforme o resultado do chute
function jogoSwitch() {
    jogo();

    switch (chute) {
        case "menor":
            flashMenssage("Chute menor que o número secreto");
            menssageText.classList.add("errou");
            break;
        case "maior":
            flashMenssage("Chute maior que o número secreto");
            menssageText.classList.add("errou");
            break;
        case "certo":
            flashMenssage("Acertou, o número secreto era " + randomNumber);
            menssageText.classList.add("acertou");
            gerarNumero(); // gera novo número para próxima rodada
            break;
    }
}

// evento de clique no botão de chute
const playBtn = document.querySelector("#btnChutar");

playBtn.addEventListener("click", (e) => {
    const inputValue = input.value;

    if (inputValue < 1 || inputValue > 10 || isNaN(inputValue)) {
        numeroValido();
    } else {
        jogoSwitch();
    }

    e.preventDefault(); // previne comportamento padrão do botão
});
