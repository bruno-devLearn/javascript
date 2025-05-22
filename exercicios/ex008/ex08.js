// objetos de questão
const q1 = {
    numQuestao: 1,
    pergunta: "Boreal é o mesmo que...",
    alternativaA: "Sul",
    alternativaB: "Leste",
    alternativaC: "Norte",
    correta: "c",
};

const q2 = {
    numQuestao: 2,
    pergunta: "Austral é o mesmo que...",
    alternativaA: "Oeste",
    alternativaB: "Sul",
    alternativaC: "Norte",
    correta: "b",
};

const q3 = {
    numQuestao: 3,
    pergunta: "Nascente é o mesmo que...",
    alternativaA: "Sul",
    alternativaB: "Leste",
    alternativaC: "Oeste",
    correta: "b",
};

const q4 = {
    numQuestao: 4,
    pergunta: "Poente é o mesmo que...",
    alternativaA: "Norte",
    alternativaB: "Leste",
    alternativaC: "Oeste",
    correta: "c",
};

const q5 = {
    numQuestao: 5,
    pergunta: "O Brasil se localiza em qual continente?",
    alternativaA: "África",
    alternativaB: "Europa",
    alternativaC: "América",
    correta: "c",
};
// onjetos de questão

// armazena as questões em uma array
const questoes = [q1, q2, q3, q4, q5];

// DOM do corpo das questoes
const numQuestao = document.querySelector("#numQuestao");
const question = document.querySelector("#pergunta");
const alternativaA = document.querySelector("#a");
const alternativaB = document.querySelector("#b");
const alternativaC = document.querySelector("#c");
const number = document.querySelector("#numero");
const totalQuestao = document.querySelector("#total");

// indice das questoes
let i = 0;

// mostra as questoes ou o fim do jogo
function show() {
    if (i < questoes.length) {
        numQuestao.textContent = questoes[i].numQuestao;
        question.textContent = questoes[i].pergunta;
        alternativaA.textContent = questoes[i].alternativaA;
        alternativaB.textContent = questoes[i].alternativaB;
        alternativaC.textContent = questoes[i].alternativaC;
        number.textContent = questoes[i].numQuestao;
        totalQuestao.textContent = questoes.length;
    } else if (i == questoes.length) {
        fimDoJogo();
    }
}

// assim que a pagina carregar ele mostra as questões
window.addEventListener("load", show);

// mostra a proxima pergunta
function proximaPergunta() {
    i++;
    show();
}

// DOM do placar
const placar = document.querySelector("#instrucoes");

// array que armazena as resposta do usuario; pontuação do jogador;
let userResposta = [];
let pontuaçao = 0;

// verifica se usuario acertou e mostra o resultado no placar
function verificarAcerto() {
    if (userResposta[i] == questoes[i].correta) {
        pontuaçao += 10;
    }
    placar.textContent = `Pontos: ${pontuaçao}`;
}

// adiciona evento de clique, e faz todo controle das perguntas
alternativaA.addEventListener("click", () => {
    userResposta.push("a");
    verificarAcerto();
    proximaPergunta();
});

// adiciona evento de clique, e faz todo controle das perguntas
alternativaB.addEventListener("click", () => {
    userResposta.push("b");
    verificarAcerto();
    proximaPergunta();
});

// adiciona evento de clique, e faz todo controle das perguntas
alternativaC.addEventListener("click", () => {
    userResposta.push("c");
    verificarAcerto();
    proximaPergunta();
});

// DOM da area de questoes; DOM da area de resultados;
const questoesBlock = document.querySelector(".questoes");
const resultadoBlock = document.querySelector("#resultados");

// DOM do span que armazena sua resposta; DOM do span que armazena a resposta correta
const suaResposta = document.querySelectorAll(".resposta-usuario");
const respostaCorreta = document.querySelectorAll(".resposta-correta-texto");

// btn de rsetar
const resetBtn = document.querySelector(".resetar");

// mostra o fim do jogo
function fimDoJogo() {
    questoesBlock.style.display = "none";
    resultadoBlock.style.display = "block";
    resetBtn.style.display = "inline-block";

    for (let index = 0; index < questoes.length; index++) {
        suaResposta[index].textContent = userResposta[index];
        respostaCorreta[index].textContent = questoes[index].correta;
    }
}

// reseta o jogo
function resetarJogo() {
    pontos = 0;
    location.reload();
}

// quando clicado reseta o jogo e 0 a pontuação
resetBtn.addEventListener("click", resetarJogo);
