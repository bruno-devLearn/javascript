// area de criação das questoes
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

// array de agrupamentop das questoes
const questoes = [q1, q2, q3, q4, q5];

// pega todo DOM do corpo das questoes e complementos
const nQuestaoElement = document.querySelector("#numQuestao");
const questionElement = document.querySelector("#pergunta");
const A_Element = document.querySelector("#a");
const B_Element = document.querySelector("#b");
const C_Element = document.querySelector("#c");
const numberElement = document.querySelector("#numero");
const totalElement = document.querySelector("#total");

// indice das questoes
let i = 0;

// coloca as questoes na tela
function showElements() {
    nQuestaoElement.textContent = questoes[i].numQuestao;
    questionElement.textContent = questoes[i].pergunta;
    A_Element.textContent = questoes[i].alternativaA;
    B_Element.textContent = questoes[i].alternativaB;
    C_Element.textContent = questoes[i].alternativaC;
    numberElement.textContent = questoes[i].numQuestao;
    totalElement.textContent = questoes.length;
}

// chama a função de mostrar as questoes
showElements();

// onde vai ficar sua resposta
let suaResposta = "";

// adciona + 1 ao indice, chama a proxima questao ou o fim do jogo
function proximaQuestao() {
    ++i;
    if (i < questoes.length) {
        showElements();
    } else {
        fimDoJogo();
    }
}

// eventos de cliques as alternativas e chamada das funções de controle
A_Element.addEventListener("click", () => {
    suaResposta = "a";
    verificarAcerto();
    proximaQuestao();
});

B_Element.addEventListener("click", () => {
    suaResposta = "b";
    verificarAcerto();
    proximaQuestao();
});

C_Element.addEventListener("click", () => {
    suaResposta = "c";
    verificarAcerto();
    proximaQuestao();
});

// onde vai ficar sua pontuação
const pontuacaoElement = document.querySelector("#instrucoes");
let pontos = 0;

// verificar se acertou e ganha mais 10 pontos
function verificarAcerto() {
    if (suaResposta == questoes[i].correta) {
        pontos += 10;
    }
    pontuacaoElement.textContent = `Pontos: ${pontos}`;
}

// variaveis de aviso
const articleElement = document.querySelector(".questoes");
const avisoElement = document.querySelector("#aviso");

// chama o fim de jogo e reinia apos 3 segundos
function fimDoJogo() {
    articleElement.style.display = "none";
    avisoElement.textContent = "Você conseguiu " + pontos + " pontos";

    setTimeout(() => {
        pontos = 0;
        location.reload();
    }, 3000);
}
