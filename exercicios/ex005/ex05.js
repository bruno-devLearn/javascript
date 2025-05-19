// onde fica o numero aleatorio
let randomNumber;

// gera um numero aleatorio
function gerarNumero() {
    let max = 10;
    let min = 1;
    randomNumber = Math.floor(Math.random() * max) + min;
    return randomNumber;
}

// gera o numero assim que a pagina carregar
window.addEventListener("load", gerarNumero);

// DOM do input, menssagem de aviso e botao
const input = document.querySelector("#inputNumero");
const menssage = document.querySelector("#aviso");
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

// caso o numero seja invalido da uma flash menssage e bloquei o botao
function numeroValido() {
    let inputValue = parseInt(input.value);

    if (inputValue < 1 || inputValue > 10 || isNaN(inputValue)) {
        menssage.textContent =
            "Você não está sendo um(a) mentalista! Digite um número inteiro entre 1 e 10.";
        menssage.classList.add("errou");
        bloquearBtn();

        setTimeout(() => {
            menssage.textContent = "";
            menssage.classList.remove("errou");
            ativarBtn();
        }, 3000);
    }
}

// assim que perder o foco do input executa a função
input.addEventListener("blur", numeroValido);
