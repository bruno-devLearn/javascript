// chama o Json
const url = "data.json";
let dataGlobal;

fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        dataGlobal = data;
        showQuestoes(dataGlobal);
    });

// todo DOM para corpo das questoes
const nQuestionElement = document.querySelector("#nQuestao");
const questionElement = document.querySelector("#pergunta");
const A_AlternativaElement = document.querySelector("#a");
const B_AlternativaElement = document.querySelector("#b");
const C_AlternativaElement = document.querySelector("#c");
const D_AlternativaElement = document.querySelector("#d");
const numberElement = document.querySelector("#numero");
const totalElement = document.querySelector("#total");

// variavel de indice das questoes
let i = 0;

// mostra as questoes na tela
function showQuestoes(dataGlobal) {
    nQuestionElement.textContent = dataGlobal.questoes[i].numQuestao;
    questionElement.textContent = dataGlobal.questoes[i].pergunta;
    A_AlternativaElement.textContent = dataGlobal.questoes[i].alternativaA;
    B_AlternativaElement.textContent = dataGlobal.questoes[i].alternativaB;
    C_AlternativaElement.textContent = dataGlobal.questoes[i].alternativaC;
    D_AlternativaElement.textContent = dataGlobal.questoes[i].alternativaD;
    numberElement.textContent = dataGlobal.questoes[i].numQuestao;
    totalElement.textContent = dataGlobal.questoes.length;
}

// DOM para acerto ou erro de questoes
const artQuestoes = document.querySelector(".questao");
const acertoSound = document.querySelector("#somAcerto");
const erroSound = document.querySelector("#somErro");

// caso tenha acertado
function acertou() {
    acertoSound.play();
    artQuestoes.classList.add("acertou");
    setTimeout(() => {
        artQuestoes.classList.remove("acertou");
    }, 150);
}

// caso tenha errado
function errou() {
    erroSound.play();
    artQuestoes.classList.add("errou");
    setTimeout(() => {
        artQuestoes.classList.remove("errou");
    }, 150);
}

// area de pontuação
const instructionsElement = document.querySelector("#instrucoes");
let pontos = 0;

// verifica se o usuario acertou
function verificarAcerto() {
    if (suaResposta == dataGlobal.questoes[i].correta) {
        acertou();
        pontos += 10;
    } else {
        errou();
    }
    instructionsElement.textContent = `Pontos: ${pontos}`;
}

// passa pra proxima pergunta
function proximaQuestao() {
    ++i;
    if (i < dataGlobal.questoes.length) {
        showQuestoes(dataGlobal);
    } else {
        fimDoJogo();
    }
}

// guarda a resposta do usuario
let suaResposta = "";

// adiciona evento de clique pra todas as alternativas
A_AlternativaElement.addEventListener("click", () => {
    suaResposta = "a";
    verificarAcerto();
    proximaQuestao();
});

B_AlternativaElement.addEventListener("click", () => {
    suaResposta = "b";
    verificarAcerto();
    proximaQuestao();
});

C_AlternativaElement.addEventListener("click", () => {
    suaResposta = "c";
    verificarAcerto();
    proximaQuestao();
});

D_AlternativaElement.addEventListener("click", () => {
    suaResposta = "d";
    verificarAcerto();
    proximaQuestao();
});

// som de aplausos
const aplausosSound = document.querySelector("#somAplausos");

// define o fim dop jogo
function fimDoJogo() {
    artQuestoes.style.display = "none";
    aplausosSound.play();

    instructionsElement.classList.add("placar");
    instructionsElement.textContent =
        "Fim de Jogo! Você conseguiu " + pontos + " pontos";

    setTimeout(() => {
        location.reload();
    }, 8000);
}
