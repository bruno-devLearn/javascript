// =============================================
// Objetivos:
// =============================================

// 1. Exibir na tela:
//    - pegar as perguntas do json --
//    - Mostrar o número da questão --
//    - Mostrar a pergunta --
//    - Mostrar as alternativas --

// 2. Passar para próxima pergunta assim que clicar nas alternativas:
//    - Verificar se a resposta está correta --
//    - Se estiver correta, avançar para a próxima --
//    - Se estiver errada, apenas avançar (ou indicar erro) --
//    - animação de erro e acerto --
//    - som de acerto e erro --
//    - sistema de pontos --

// 3. Ter o fim de jogo:
//    - Quando acabar as questões, exibir mensagem de fim de jogo
//    - Ocultar as perguntas e alternativas
//    - Mostrar pontuação final
//    - som de aplausos
//    - reiniciar apos 8 segundos
// ===========================================

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

const nQuestionElement = document.querySelector("#nQuestao");
const questionElement = document.querySelector("#pergunta");
const A_AlternativaElement = document.querySelector("#a");
const B_AlternativaElement = document.querySelector("#b");
const C_AlternativaElement = document.querySelector("#c");
const D_AlternativaElement = document.querySelector("#d");
const numberElement = document.querySelector("#numero");
const totalElement = document.querySelector("#total");

let i = 0;

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

const artQuestoes = document.querySelector(".questao");
const acertoSound = document.querySelector("#somAcerto");
const erroSound = document.querySelector("#somErro");

function acertou() {
    acertoSound.play();
    artQuestoes.classList.add("acertou");
    setTimeout(() => {
        artQuestoes.classList.remove("acertou");
    }, 150);
}

function errou() {
    erroSound.play();
    artQuestoes.classList.add("errou");
    setTimeout(() => {
        artQuestoes.classList.remove("errou");
    }, 150);
}

const instructionsElement = document.querySelector("#instrucoes");
let pontos = 0;

function verificarAcerto() {
    if (suaResposta == dataGlobal.questoes[i].correta) {
        acertou();
        pontos += 10;
    } else {
        errou();
    }
    instructionsElement.textContent = `Pontos: ${pontos}`;
}

function proximaQuestao() {
    ++i;
    if (i < dataGlobal.questoes.length) {
        showQuestoes(dataGlobal);
    } else {
        fimDoJogo();
    }
}

let suaResposta = "";

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

const aplausosSound = document.querySelector("#somAplausos");

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
