// Objetivo quiz usando json
let titulo = document.getElementById("titulo");
titulo.textContent = "Quiz";

let questao = document.getElementById("questao");
let nQuestao = document.getElementById("nQuestao");
let pergunta = document.getElementById("pergunta");
let qtdQuestoes;

let a = document.getElementById("a");
let b = document.getElementById("b");
let c = document.getElementById("c");
let d = document.getElementById("d");

let numero = document.getElementById("numero");
const total = document.getElementById("total");

let resposta;

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

let pontos = 0;

function verificaResposta(data) {
    if (resposta == data.questoes[index - 1].correta) {
        pontos += 10;
    }
    console.log(pontos);
    return pontos;
}

// adiciona eventos de cliques
a.addEventListener("click", function () {
    if (index < qtdQuestoes) {
        resposta = "a";
        pegarDados();
        proximaQuestao();
    }
});
b.addEventListener("click", function () {
    if (index < qtdQuestoes) {
        resposta = "b";
        pegarDados();
        proximaQuestao();
    }
});
c.addEventListener("click", function () {
    if (index < qtdQuestoes) {
        resposta = "c";
        pegarDados();
        proximaQuestao();
    }
});
d.addEventListener("click", function () {
    if (index < qtdQuestoes) {
        resposta = "d";
        pegarDados();
        proximaQuestao();
    }
});
