// guarda o arquivo json
const url = "data.json";

// vai guardar os dados
let json;

// retorna os dados do json
async function chamaData() {
    try {
        const data = await fetch(url);

        if (!data.ok) {
            throw new Error(`Erro HTTP: ${data.status}`);
        }

        json = await data.json();
        return json;
    } catch (error) {
        console.error("Erro ao pegar dados:", error);
    }
}

// inicia tudo
async function iniciar() {
    await chamaData();
    show();
}

// assim que carregar a pagina ele inicia
window.addEventListener("load", iniciar);

// variavel de indice das questoes
let i = 0;

// DOM do numero da questao e pergunta
const nQuestao = document.querySelector("#nQuestao");
const question = document.querySelector("#pergunta");

// DOM das alternativas
const alternativaA = document.querySelector("#a");
const alternativaB = document.querySelector("#b");
const alternativaC = document.querySelector("#c");
const alternativaD = document.querySelector("#d");

// DOM da quantidade de questoes
const number = document.querySelector("#numero");
const totalDeQuestoes = document.querySelector("#total");

// poe as questoes na tela
function showQuestoes() {
    nQuestao.textContent = json.questoes[i].numQuestao;
    question.textContent = json.questoes[i].pergunta;

    alternativaA.textContent = json.questoes[i].alternativaA;
    alternativaB.textContent = json.questoes[i].alternativaB;
    alternativaC.textContent = json.questoes[i].alternativaC;
    alternativaD.textContent = json.questoes[i].alternativaD;

    number.textContent = json.questoes[i].numQuestao;
    total.textContent = json.questoes.length;
}

// mostra as perguntas ou o fim de jogo
function show() {
    if (i < json.questoes.length) {
        showQuestoes();
    } else if (i == json.questoes.length) {
        fimDoJogo();
    }
}

// passa para a proxima questao
function proximaQuestao() {
    i++;
    show();
}

// array que guarda as resposta do usuario. e variavel de pontuação
let respostaUser = [];
let pontuacao = 0;

// DOM do som de acerto
const acertoSound = document.querySelector("#somAcerto");

// caso o usuario acerte
function acertou() {
    pontuacao += 10;
    acertoSound.play();
    acertoSound.currentTime = 0;
}

// DOM do som de erro
const erroSound = document.querySelector("#somErro");

// caso o usuario erre
function errou() {
    erroSound.play();
    erroSound.currentTime = 0;
}

// DOM do placar
const placar = document.querySelector("#instrucoes");

// verifica se o usuario acertou
function verificarAcerto() {
    if (respostaUser[i] == json.questoes[i].correta) {
        acertou();
    } else {
        errou();
    }

    placar.textContent = `Pontos: ${pontuacao}`;
}

// evento de clique, verifica e passa pra proxima questao
alternativaA.addEventListener("click", () => {
    respostaUser.push("a");
    verificarAcerto();
    proximaQuestao();
});

// evento de clique, verifica e passa pra proxima questao
alternativaB.addEventListener("click", () => {
    respostaUser.push("b");
    verificarAcerto();
    proximaQuestao();
});

// evento de clique, verifica e passa pra proxima questao
alternativaC.addEventListener("click", () => {
    respostaUser.push("c");
    verificarAcerto();
    proximaQuestao();
});

// evento de clique, verifica e passa pra proxima questao
alternativaD.addEventListener("click", () => {
    respostaUser.push("d");
    verificarAcerto();
    proximaQuestao();
});

// DOM do blocos
const questoesBlock = document.querySelector(".questao");
const resultadosBlock = document.querySelector(".resultados");

// DOM do som de aplauso e botao de resetar
const aplausoSound = document.querySelector("#somAplausos");
const reset = document.querySelector(".reset");

// mostra o fim do jogo
function fimDoJogo() {
    const suaResposta_text = document.querySelectorAll(".resposta-usuario");
    const respostaCorreta_text = document.querySelectorAll(
        ".resposta-correta-texto"
    );

    questoesBlock.style.display = "none";
    resultadosBlock.style.display = "block";
    reset.style.display = "inline-block";

    for (let index = 0; index < json.questoes.length; index++) {
        suaResposta_text[index].textContent = respostaUser[index];
        respostaCorreta_text[index].textContent = json.questoes[index].correta;
    }

    aplausoSound.play();
}

// reseta o jogo
function resetar() {
    pontuacao = 0;
    location.reload();
}

// ao clicado chama a função de resetar
reset.addEventListener("click", resetar);
