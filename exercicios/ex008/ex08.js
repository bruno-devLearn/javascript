// area de criação de perguntas
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

// array onde ficara todas as perguntas em objs
const questoes = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

// todo DOM de perguntas + complementos
const nQuestaoElement = document.querySelector("#numQuestao");
const questionElement = document.querySelector("#pergunta");
const A_Element = document.querySelector("#a");
const B_Element = document.querySelector("#b");
const C_Element = document.querySelector("#c");
const D_Element = document.querySelector("#d");
const progressElement = document.querySelector("#progresso");
const numberElement = document.querySelector("#numero");
const totalElemet = document.querySelector("#total");

// variavel de indice de perguntas
let i = 0;

// função para mostrar as perguntas na tela
function showElements() {
    nQuestaoElement.textContent = questoes[i].numQuestao;
    questionElement.textContent = questoes[i].pergunta;
    A_Element.textContent = questoes[i].alternativaA;
    B_Element.textContent = questoes[i].alternativaB;
    C_Element.textContent = questoes[i].alternativaC;
    D_Element.textContent = questoes[i].alternativaD;
    progressElement.value = questoes[i].numQuestao;
    numberElement.textContent = questoes[i].numQuestao;
    totalElemet.textContent = questoes.length;
}

// chama a função para mostrar na tela
showElements();

// onde fica os elementos de questao + sons de erro e acerto
const artQuestoes = document.querySelector(".questoes");
const acertoSound = document.querySelector("#somAcerto");
const erroSound = document.querySelector("#somErro");

// caso acerte faz animação e som
function acertou() {
    acertoSound.play();
    artQuestoes.classList.add("acertou");
    setTimeout(() => {
        artQuestoes.classList.remove("acertou");
    }, 150);
}

// caso erre faz animação e som
function errou() {
    erroSound.play();
    artQuestoes.classList.add("errou");
    setTimeout(() => {
        artQuestoes.classList.remove("errou");
    }, 150);
}

// variaveis de controle de pontuação
const instructionsElement = document.querySelector("#instrucoes");
let pontos = 0;

// verifica se acertou
function verificarSeAcertou() {
    if (suaResposta == questoes[i].correta) {
        pontos += 10;
        acertou();
    } else {
        errou();
    }

    instructionsElement.textContent = `Pontos: ${pontos}`;
}

// passa para proxima pergunta
function proximaQuestao() {
    ++i;
    if (i < questoes.length) {
        showElements();
    } else {
        fimDoJogo();
    }
}

// vai armazenar sua resposta
let suaResposta = "";

// adciona cliques as alternativas, resposta e chama funções de controle
A_Element.addEventListener("click", () => {
    suaResposta = "a";
    verificarSeAcertou();
    proximaQuestao();
});

B_Element.addEventListener("click", () => {
    suaResposta = "b";
    verificarSeAcertou();
    proximaQuestao();
});

C_Element.addEventListener("click", () => {
    suaResposta = "c";
    verificarSeAcertou();
    proximaQuestao();
});

D_Element.addEventListener("click", () => {
    suaResposta = "d";
    verificarSeAcertou();
    proximaQuestao();
});

// som de aplausos
const aplausosSound = document.querySelector("#somAplausos");

// fim do jogo, apos 8 segundos reinicia tudo
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
