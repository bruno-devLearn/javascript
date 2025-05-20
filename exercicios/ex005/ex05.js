// onde fica o numero aleatorio
let randomNumber;

// gera um numero aleatorio
function gerarNumero() {
    let max = 10;
    let min = 1;
    randomNumber = Math.floor(Math.random() * max) + min;

    console.log(randomNumber);
    return randomNumber;
}

// gera o numero assim que a pagina carregar
window.addEventListener("load", gerarNumero);

// musica de fundo
const sound = document.querySelector("#musicaDeFundo");

// logica do btn de musica
function musicBg() {
    if (sound.paused) {
        sound.play();
    } else {
        sound.pause();
        sound.currentTime = 0;
    }
}

// bota e evento de clique adicionando a ele
const soundBtn = document.querySelector("#btnSom");
soundBtn.addEventListener("click", musicBg);

// DOM do botao de jogo
const sendBtn = document.querySelector("#btnChutar");

// bloqueia o btn
function bloquearBtn() {
    sendBtn.setAttribute("desibled", "desibled");
    sendBtn.style.backgroundColor = "#ccc";
    sendBtn.style.cursor = "not-allowed";
}

// ativa o btn
function ativarBtn() {
    sendBtn.setAttribute("desibled", false);
    sendBtn.style.backgroundColor = "#222";
    sendBtn.style.cursor = "pointer";
}

// DOM do input e da menssagem
const input = document.querySelector("#inputNumero");
const menssageText = document.querySelector("#aviso");

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

// caso o numero seja invalido da uma flash menssage e bloquei o botao
function numeroValido() {
    const inputValue = parseInt(input.value);

    if (inputValue < 1 || inputValue > 10 || isNaN(inputValue)) {
        flashMenssage(
            "Você não está sendo um(a) mentalista! Digite um número inteiro entre 1 e 10."
        );
        menssageText.classList.add("errou");
    }
}

// assim que perder o foco do input executa a função; assim que clicar no input toca a musica
input.addEventListener("blur", numeroValido);
input.addEventListener("click", () => {
    sound.play();
    ativarBtn();
});

let chute = "";

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
            gerarNumero();
            break;
    }
}

const playBtn = document.querySelector("#btnChutar");

playBtn.addEventListener("click", (e) => {
    const inputValue = input.value;

    if (inputValue < 1 || inputValue > 10 || isNaN(inputValue)) {
        numeroValido();
    } else {
        jogoSwitch();
    }

    e.preventDefault();
});
