// Seleciona os inputs do formulário
const nomeInput = document.querySelector("#nome-input");
const idadeInput = document.querySelector("#idade-input");
const pesoInput = document.querySelector("#peso-input");
const alturaInput = document.querySelector("#altura-input");

// Seleciona os elementos onde os resultados serão exibidos
const nomeResult = document.querySelector("#nome-result");
const idadeResult = document.querySelector("#idade-result");
const pesoResult = document.querySelector("#peso-result");
const alturaResult = document.querySelector("#altura-result");

// Seleciona os campos de resultado do IMC
const imcResult_input = document.querySelector("#resultadoImc");
const imcResult_box = document.querySelector("#imc-result");

// Função para calcular o IMC
function imcCalc() {
    imc =
        parseFloat(pesoInput.value) /
        (parseFloat(alturaInput.value) * parseFloat(alturaInput.value));
    // Retorna o IMC formatado com 2 casas decimais
    return (imcFormatado = imc.toFixed(2));
}

// Função para classificar o IMC
function imcCase() {
    imcCalc();
    let status;

    // Verifica se o valor do IMC é um número válido
    if (isNaN(Number(imcFormatado))) {
        status = "Insira seu peso corretamente";
    } else if (imcFormatado < 18.5) {
        status = "Abaixo do peso";
    } else if (imcFormatado < 24.9) {
        status = "Peso normal";
    } else if (imcFormatado < 29.9) {
        status = "Sobrepeso";
    } else if (imcFormatado < 34.9) {
        status = "Obesidade I";
    } else if (imcFormatado < 39.9) {
        status = "Obesidade II";
    } else if (imcFormatado >= 40) {
        status = "Obesidade III";
    }

    return status;
}

// Seleciona o elemento para exibir mensagens
let menssage = document.querySelector("#aviso");

// Função para exibir os resultados na tela
function set(event) {
    const status = imcCase();

    // Exibe os valores preenchidos pelo usuário
    nomeResult.textContent = nomeInput.value;
    idadeResult.textContent = idadeInput.value + " anos";
    pesoResult.textContent = pesoInput.value + " kg";
    alturaResult.textContent = alturaInput.value + " m";

    // Exibe o IMC e a classificação
    imcResult_input.value = imcFormatado;
    imcResult_box.textContent = imcFormatado + " " + status;
    menssage.textContent = status;

    // Previne o comportamento padrão do formulário
    event.preventDefault();
}

// Seleciona os botões de enviar e limpar
const send = document.querySelector("#btnEnviar");
const clear = document.querySelector("#btnLimpar");

// Adiciona o evento de clique para calcular e exibir o IMC
send.addEventListener("click", set);

// Adiciona o evento de clique para limpar os campos e resultados
clear.addEventListener("click", () => {
    nomeResult.textContent = "";
    idadeResult.textContent = "";
    pesoResult.textContent = "";
    alturaResult.textContent = "";

    imcResult_input.value = "";
    imcResult_box.textContent = "";
    menssage.textContent = "";
});
