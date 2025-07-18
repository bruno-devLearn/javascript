import Pessoa from "../models/Pessoa.js";
import { setData, pessoas } from "./database.js";
import { registerModal, existente } from "../views/modal.js";
import { buildTable } from "../views/table.js";
import { edit } from "./edit.js";

// Seleciona o formulário pelo id
const form = document.querySelector("#formulario");

// Adiciona evento de submit ao formulário
form.addEventListener("submit", function (event) {
    if (!form.checkValidity()) {
        // deixa o browser mostrar erros nativos
        return;
    }

    // Para o envio real e recarga da página
    event.preventDefault();
    getValues();
});

// Seleciona os inputs pelo id
const idInput = document.querySelector("#idPessoa");
const nomeInput = document.querySelector("#nome");
const idadeInput = document.querySelector("#idade");
const pesoInput = document.querySelector("#peso");
const alturaInput = document.querySelector("#altura");

idInput.value = "";
nomeInput.value = "";
idadeInput.value = "";
pesoInput.value = "";
alturaInput.value = "";

// Função para capturar e tratar os valores dos inputs
function getValues() {
    let id = idInput.value;
    let nome = nomeInput.value;
    let idade = idadeInput.value;
    let peso = pesoInput.value;
    let altura = alturaInput.value;

    // Formata nome completo: limpa espaços extras e capitaliza cada palavra
    nome = nome
        .trim()
        .replace(/\s+/g, " ")
        .split(" ")
        .map(
            (palavra) =>
                palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase()
        )
        .join(" ");

    // troca a virgula por ponto
    altura = altura.replace(",", ".");

    // Ajusta altura para formato decimal se necessário
    if (!altura.includes(".")) {
        while (altura.length < 3) {
            altura = altura + "0";
        }

        altura = String(parseFloat(altura) / 100);
    }

    // Chama função para criar pessoa com os valores tratados
    criarPessoa(id, nome, idade, peso, altura);
}

// Função para criar pessoa caso o formularios seja valido
function criarPessoa(id, nome, idade, peso, altura) {
    if (
        validarNome(nome) && // Valida nome
        validarIdade(idade) && // Valida idade
        validarPeso(peso) && // Valida peso
        validarAltura(altura) && // Valida altura
        !verificarCampos(nome, idade, peso, altura) // Verifica se há campos vazios
    ) {
        const pessoa = new Pessoa(nome, idade, peso, altura, pessoas.length);

        // Verifica se já existe uma pessoa com o mesmo nome
        const existe = pessoas.some((p) => p.nome === pessoa.nome);

        // caso nao exista salva no localStorage, se nao abre um modal de erro

        if (id == "") {
            if (!existe) {
                pessoas.push(pessoa);
                registerModal();
            } else {
                existente();
                return;
            }
        } else {
            edit(pessoas[Number(id)]);
        }

        buildTable();
        setData(pessoas);

        idInput.value = "";
        nomeInput.value = "";
        idadeInput.value = "";
        pesoInput.value = "";
        alturaInput.value = "";
    }
}

// Validação do nome usando regex para letras e espaços
function validarNome(nome) {
    const regex = /^[A-Za-zÀ-ÿ\s]+$/;
    return regex.test(nome);
}

// Validação da idade: até 3 dígitos
function validarIdade(idade) {
    const regex = /^\d{1,3}$/;
    return regex.test(idade);
}

// Validação do peso: número inteiro ou decimal
function validarPeso(peso) {
    const regex = /^\d+(\.\d+)?$/;
    return regex.test(peso);
}

// Validação da altura: aceita formatos decimais e inteiros específicos
function validarAltura(altura) {
    const regex =
        /^(?:([1-2]\d{2}|300)|((0\.(?:4[7-9]|[5-9]\d))|([1-2](?:[.,]\d{1,2})?)|(3[.,]0{1,2})))$/;
    return regex.test(altura);
}

// Verifica se algum campo está vazio
function verificarCampos(nome, idade, peso, altura) {
    if (
        nome.trim() === "" ||
        idade.trim() === "" ||
        peso.trim() === "" ||
        altura.trim() === ""
    ) {
        return true;
    }

    return false;
}
