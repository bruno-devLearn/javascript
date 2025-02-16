// Objetivo quiz usando json
let titulo = document.getElementById("titulo");
titulo.textContent = "Quiz";

const questao = document.getElementsByClassName("questao");
let nQuestao = document.getElementById("nQuestao");
let pergunta = document.getElementById("pergunta");
let qtdQuestoes;

let a = document.getElementById("a");
let b = document.getElementById("b");
let c = document.getElementById("c");
let d = document.getElementById("d");

let numero = document.getElementById("numero");
const total = document.getElementById("total");

let resposta = [];

// coloca o data.json numa variavel
const url = "data.json";

// função que chama os dados do json, e chama a função exibir
function pegarDados() {
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            qtdQuestoes = data.questoes.length;

            exibir(data);
            return qtdQuestoes;
        });
}

pegarDados();

// variavel que controla o indice das questoes
let index = 1;

// exibe as questoes na tela
function exibir(data) {
    if (index < qtdQuestoes) {
        nQuestao.textContent = data.questoes[index].numQuestao;
        pergunta.textContent = data.questoes[index].pergunta;

        a.textContent = data.questoes[index].alternativaA;
        b.textContent = data.questoes[index].alternativaB;
        c.textContent = data.questoes[index].alternativaC;
        d.textContent = data.questoes[index].alternativaD;

        numero.textContent = data.questoes[index].numQuestao;
        total.textContent = qtdQuestoes - 1;
    }
    verificaResposta(data);
}

// passa para a proxima questao
function proximaQuestao() {
    if (index < qtdQuestoes) {
        index++;
        if (index == qtdQuestoes) {
            resultado();
        }
    }
}

// variaveis de sons
const somAcerto = document.getElementById("somAcerto");
const somErro = document.getElementById("somErro");

// variaveis de pontuação
let placar = document.getElementById("instrucoes");
let pontos = 0;

// verifica se acrtou e executa um som referente ao estado
function verificaResposta(data) {
    if (resposta[index - 1] == data.questoes[index - 1].correta) {
        pontos += 10;
        instrucoes.textContent = `Pontos: ${pontos}`;
        somAcerto.play();
    } else if (
        resposta != data.questoes[index - 1].correta &&
        resposta.length
    ) {
        somErro.play();
    }
    return pontos;
}

// adiciona eventos de cliques
a.addEventListener("click", function () {
    if (index < qtdQuestoes) {
        resposta[index] = "a";
        pegarDados();
        proximaQuestao();
    }
});
b.addEventListener("click", function () {
    if (index < qtdQuestoes) {
        resposta[index] = "b";
        pegarDados();
        proximaQuestao();
    }
});
c.addEventListener("click", function () {
    if (index < qtdQuestoes) {
        resposta[index] = "c";
        pegarDados();
        proximaQuestao();
    }
});
d.addEventListener("click", function () {
    if (index < qtdQuestoes) {
        resposta[index] = "d";
        pegarDados();
        proximaQuestao();
    }
});

const result = document.getElementsByClassName("resultado");
const btn = document.getElementById("btnReiniciar");

function resultado() {
    let correta = document.getElementsByClassName("resposta-correta");
    let suaResposta = document.getElementsByClassName("sua-resposta");

    function corretaTXT() {
        correta[0].textContent = "Resposta correta: b";
        correta[1].textContent = "Resposta correta: c";
        correta[2].textContent = "Resposta correta: b";
        correta[3].textContent = "Resposta correta: d";
        correta[4].textContent = "Resposta correta: b";
        correta[5].textContent = "Resposta correta: a";
        correta[6].textContent = "Resposta correta: b";
        correta[7].textContent = "Resposta correta: a";
        correta[8].textContent = "Resposta correta: d";
        correta[9].textContent = "Resposta correta: c";
        correta[10].textContent = "Resposta correta: d";
        correta[11].textContent = "Resposta correta: d";
    }

    function suaRespostaTXT() {
        suaResposta[0].textContent = "Sua resposta: " + resposta[1];
        suaResposta[1].textContent = "Sua resposta: " + resposta[2];
        suaResposta[2].textContent = "Sua resposta: " + resposta[3];
        suaResposta[3].textContent = "Sua resposta: " + resposta[4];
        suaResposta[4].textContent = "Sua resposta: " + resposta[5];
        suaResposta[5].textContent = "Sua resposta: " + resposta[6];
        suaResposta[6].textContent = "Sua resposta: " + resposta[7];
        suaResposta[7].textContent = "Sua resposta: " + resposta[8];
        suaResposta[8].textContent = "Sua resposta: " + resposta[9];
        suaResposta[9].textContent = "Sua resposta: " + resposta[10];
        suaResposta[10].textContent = "Sua resposta: " + resposta[11];
        suaResposta[11].textContent = "Sua resposta: " + resposta[12];
    }

    btn.addEventListener("click", function () {
        location.reload();
    });

    questao[0].style.display = "none";
    result[0].style.display = "block";
    corretaTXT();
    suaRespostaTXT();
}
