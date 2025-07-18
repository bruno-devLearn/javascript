import { pessoas } from "./database.js";
import { atualizado } from "../views/modal.js";

const editBtn = document.querySelector("#btnEditar");
const idInput_get = document.querySelector("#id");

const idInput = document.querySelector("#idPessoa");
const nomeInput = document.querySelector("#nome");
const idadeInput = document.querySelector("#idade");
const pesoInput = document.querySelector("#peso");
const alturaInput = document.querySelector("#altura");

function setValues(event) {
    event.preventDefault();
    const id = idInput_get.value;

    idInput.value = pessoas[id].id;
    nomeInput.value = pessoas[id].nome;
    idadeInput.value = pessoas[id].idade;
    pesoInput.value = pessoas[id].peso;
    alturaInput.value = pessoas[id].altura;
}

export function edit(pessoa) {
    const nome = nomeInput.value;
    const idade = idadeInput.value;
    const peso = pesoInput.value;
    const altura = alturaInput.value;

    pessoa.nome = nome;
    pessoa.idade = idade;
    pessoa.peso = peso;
    pessoa.altura = altura;

    atualizado();
}

editBtn.addEventListener("click", setValues);
