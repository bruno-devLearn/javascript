// area de questoes
const q1 = {
    numQuestao: 1,
    pergunta: "Boreal é o mesmo que...",
    alternativaA: "Sul",
    alternativaB: "Leste",
    alternativaC: "Norte",
    alternativaD: "Oeste",
    correta: "c",
};

const q2 = {
    numQuestao: 2,
    pergunta: "Qual é a capital do Brasil?",
    alternativaA: "Rio de Janeiro",
    alternativaB: "Brasília",
    alternativaC: "Salvador",
    alternativaD: "Lisboa",
    correta: "b",
};

const q3 = {
    numQuestao: 3,
    pergunta: "Austral é o mesmo que...",
    alternativaA: "Oeste",
    alternativaB: "Leste",
    alternativaC: "Norte",
    alternativaD: "Sul",
    correta: "d",
};

const q4 = {
    numQuestao: 4,
    pergunta: "A linha do Equador divide a Terra em...",
    alternativaA: "Leste e Oeste",
    alternativaB: "Norte e Sul",
    alternativaC: "Verão e Inverno",
    alternativaD: "Solstícios e Eclipses",
    correta: "b",
};

const q5 = {
    numQuestao: 5,
    pergunta: "Nascente é o mesmo que...",
    alternativaA: "Lado que o sol nasce",
    alternativaB: "Abaixo do Equador",
    alternativaC: "Lado que o sol se põe",
    alternativaD: "Acima do Equador",
    correta: "a",
};

const q6 = {
    numQuestao: 6,
    pergunta: "Qual é o clima predominante do Brasil?",
    alternativaA: "Polar",
    alternativaB: "Tropical",
    alternativaC: "Desértico",
    alternativaD: "Temperado do Norte",
    correta: "b",
};

const q7 = {
    numQuestao: 7,
    pergunta: "Poente é o mesmo que...",
    alternativaA: "Lado onde o sol se põe",
    alternativaB: "Lado onde o sol nasce",
    alternativaC: "Abaixo do Equador",
    alternativaD: "Acima do Equador",
    correta: "a",
};

const q8 = {
    numQuestao: 8,
    pergunta: "O Brasil se localiza em qual continente?",
    alternativaA: "África",
    alternativaB: "Europa",
    alternativaC: "Oceania",
    alternativaD: "América",
    correta: "d",
};

const q9 = {
    numQuestao: 9,
    pergunta: "Qual é a única capital do Brasil cortada pela linha do Equador?",
    alternativaA: "Belém",
    alternativaB: "São Luís",
    alternativaC: "Macapá",
    alternativaD: "Boa Vista",
    correta: "c",
};

const q10 = {
    numQuestao: 10,
    pergunta: "Considerando a extensão territorial o Brasil é o ...",
    alternativaA: "3º maior",
    alternativaB: "2º maior",
    alternativaC: "4º maior",
    alternativaD: "5º maior",
    correta: "d",
};
// area de questoes

// array das questoes
const questoes = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

// indice das questoes
let i = 0;

// DOM do numero da questao e a pergunta
const nQuestao = document.querySelector("#numQuestao");
const question = document.querySelector("#pergunta");

// DOM das alternativas
const alternativaA = document.querySelector("#a");
const alternativaB = document.querySelector("#b");
const alternativaC = document.querySelector("#c");
const alternativaD = document.querySelector("#d");

// DOM da barra de progresso e da questao atual
const progress = document.querySelector("#progresso");
const number = document.querySelector("#numero");

// DOM do total de questoes
const totalQuestions = document.querySelector("#total");

// mostra as questoes
function showQuestoes() {
    nQuestao.textContent = questoes[i].numQuestao;
    question.textContent = questoes[i].pergunta;

    alternativaA.textContent = questoes[i].alternativaA;
    alternativaB.textContent = questoes[i].alternativaB;
    alternativaC.textContent = questoes[i].alternativaC;
    alternativaD.textContent = questoes[i].alternativaD;

    progress.value = questoes[i].numQuestao;
    number.textContent = questoes[i].numQuestao;

    total.textContent = questoes.length;
}

// mostra as questoes ou o fim do jogo
function show() {
    if (i < questoes.length) {
        showQuestoes();
    } else if (i == questoes.length) {
        fimDoJogo();
    }
}

// assim que a pagina carregar poe as questoes na tela
window.addEventListener("load", show);

// passa para a proxima questao
function proximaQuestao() {
    i++;
    show();
}

// DOM do bloco de questoes, e sons de acerto e erro
const articleQuestoes = document.querySelector(".questoes");
const erroSound = document.querySelector("#somErro");
const acertoSound = document.querySelector("#somAcerto");

let respostaUser = [];
let pontuacao = 0;

// caso o usuario acerte
function acerto() {
    pontuacao += 10;
    articleQuestoes.classList.add("acertou");
    acertoSound.play();

    setTimeout(() => {
        articleQuestoes.classList.remove("acertou");
    }, 150);

    acertoSound.currentTime = 0;
}

// caso o usuario erre
function erro() {
    articleQuestoes.classList.add("errou");
    erroSound.play();

    setTimeout(() => {
        articleQuestoes.classList.remove("errou");
    }, 150);

    erroSound.currentTime = 0;
}

// DOM do placar
const placar = document.querySelector("#instrucoes");

// verfica se o usuario acertou ou errou
function verificaAcerto() {
    if (respostaUser[i] == questoes[i].correta) {
        acerto();
    } else {
        erro();
    }

    placar.textContent = `pontos: ${pontuacao}`;
}

// faz total controle das questoes
alternativaA.addEventListener("click", () => {
    respostaUser.push("a");
    verificaAcerto();
    proximaQuestao();
});

// faz total controle das questoes
alternativaB.addEventListener("click", () => {
    respostaUser.push("b");
    verificaAcerto();
    proximaQuestao();
});

// faz total controle das questoes
alternativaC.addEventListener("click", () => {
    respostaUser.push("c");
    verificaAcerto();
    proximaQuestao();
});

// faz total controle das questoes
alternativaD.addEventListener("click", () => {
    respostaUser.push("d");
    verificaAcerto();
    proximaQuestao();
});

// DOM do bloco de resultados e som de aplausos
const resltadosBlock = document.querySelector(".resultados");
const aplausoSound = document.querySelector("#somAplausos");

// DOM do botao de reset
const btnReset = document.querySelector(".reset");

// fim do jogo
function fimDoJogo() {
    const respostaUser_text = document.querySelectorAll(".resposta-usuario");
    const respostaCorreta_text = document.querySelectorAll(
        ".resposta-correta-texto"
    );

    articleQuestoes.style.display = "none";
    resltadosBlock.style.display = "block";
    btnReset.style.display = "inline-block";

    aplausoSound.play();

    for (let index = 0; index < questoes.length; index++) {
        respostaUser_text[index].textContent = respostaUser[index];
        respostaCorreta_text[index].textContent = questoes[index].correta;
    }
}

// reseta o jogo
function resetarJogo() {
    pontos = 0;
    location.reload();
}

// quando clicado chama o a função de resetar o jogo
btnReset.addEventListener("click", resetarJogo);
