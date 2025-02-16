// Objetivo quiz usando json
let titulo = document.getElementById("titulo");
titulo.textContent = "Quiz";

let questao = document.getElementById("questao");
let nQuestao = document.getElementById("nQuestao");
let pergunta = document.getElementById("pergunta");

let a = document.getElementById("a");
let b = document.getElementById("b");
let c = document.getElementById("c");
let d = document.getElementById("d");

let numero = document.getElementById("numero");
const total = document.getElementById("total");

// coloca o data.json numa variavel
const url = "data.json";

// função que chama os dados do json, e chama a função exibir
function pegarDados() {
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            exibir(data);
        });
}

pegarDados();

// variavel que controla o indice das questoes
let index = 0;

// exibe as questoes na tela
function exibir(data) {
    nQuestao.textContent = data.questoes[index].numQuestao;
    pergunta.textContent = data.questoes[index].pergunta;

    a.textContent = data.questoes[index].alternativaA;
    b.textContent = data.questoes[index].alternativaB;
    c.textContent = data.questoes[index].alternativaC;
    d.textContent = data.questoes[index].alternativaD;

    numero.textContent = data.questoes[index].numQuestao;
    total.textContent = 12;
}
