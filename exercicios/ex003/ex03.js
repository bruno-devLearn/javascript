// Seleciona os inputs das notas e do campo de média
const nota1_input = document.querySelector("#nota1");
const nota2_input = document.querySelector("#nota2");
const result_input = document.querySelector("#media");

let imc; // Vai guardar a média das notas

// Função para calcular a média das notas
function imcCalc() {
    let nota1 = parseFloat(nota1_input.value);
    let nota2 = parseFloat(nota2_input.value);

    imc = (nota1 + nota2) / 2; // Calcula a média
    result_input.value = imc; // Mostra a média no input
    return imc;
}

let status; // Vai guardar a situação do aluno

// Função para definir a situação do aluno com base na média
function defineStatus() {
    if (imc < 0 || imc > 10) {
        status = "Invalido";
    } else if (imc <= 3) {
        status = "Reprovado(a)";
    } else if (imc <= 7) {
        status = "Recuperação";
    } else if (imc <= 10) {
        status = "Aprovado(a)";
    }

    return status;
}

const sit_box = document.querySelector("#situacao"); // Campo para mostrar a situação

// Função para atualizar a situação na tela e mudar as cores
function situation() {
    defineStatus();
    console.log(status);

    switch (status) {
        case "Aprovado(a)":
            sit_box.classList.remove("reprovado");
            sit_box.classList.remove("recuperacao");
            sit_box.classList.add("aprovado");
            sit_box.value = "Aprovado(a)";
            break;
        case "Recuperação":
            sit_box.classList.remove("reprovado");
            sit_box.classList.remove("aprovado");
            sit_box.classList.add("recuperacao");
            sit_box.value = "Recuperação";
            break;
        default:
        case "Reprovado(a)":
            sit_box.classList.remove("recuperacao");
            sit_box.classList.remove("aprovado");
            sit_box.classList.add("reprovado");
            sit_box.value = "Reprovado(a)";
            break;
        case "Invalido":
            flashMenssage();
            break;
    }
}

const formTag = document.querySelector("form");
const menssage = document.querySelector("#aviso");

// Função para mostrar mensagem de erro rapidinho
function flashMenssage() {
    formTag.reset();

    sit_box.classList.remove("reprovado");
    sit_box.classList.remove("recuperacao");
    sit_box.classList.remove("aprovado");

    menssage.classList.add("reprovado");
    menssage.textContent = "Digite uma nota entre 0.0 e 10.0";

    result_input.value = "";

    setTimeout(() => {
        menssage.classList.remove("reprovado");
        menssage.textContent = "";
    }, 2000); // Some depois de 2 segundos
}

// Função para validar as notas quando sai do campo
function blur() {
    if (
        nota1_input.value < 0 ||
        nota1_input.value > 10 ||
        nota2_input.value < 0 ||
        nota2_input.value > 10
    ) {
        flashMenssage();
    }
}

// Adiciona o evento de validação ao sair dos campos de nota
nota1_input.addEventListener("blur", blur);
nota2_input.addEventListener("blur", blur);

const send = document.querySelector("#btnCalcular");
const clear = document.querySelector("#btnLimpar");

// Quando clicar em calcular, faz tudo acontecer!
send.addEventListener("click", (e) => {
    e.preventDefault();

    if (nota1_input.value != "" && nota2_input.value != "") {
        imcCalc();
        blur();
        situation();
    }
});

// Quando clicar em limpar, tira todas as cores
clear.addEventListener("click", () => {
    sit_box.classList.remove("reprovado");
    sit_box.classList.remove("recuperacao");
    sit_box.classList.remove("aprovado");
});
