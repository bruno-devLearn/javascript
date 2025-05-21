// botao de conversão
const convertBtn = document.querySelector("#btnConverter");

// bloqueia o botão
function bloquearBtn() {
    convertBtn.setAttribute("disabled", true);
    convertBtn.style.backgroundColor = "#ccc";
    convertBtn.style.cursor = "not-allowed";
}

// ativa o botão
function ativarBtn() {
    convertBtn.removeAttribute("disabled");
    convertBtn.style.cursor = "pointer";
    convertBtn.style.backgroundColor = "#ffc107";
}

// inputs de seleção de moeda
const radioInput = document.getElementsByName("moedaEstrangeira");

// verifica se todos os inputs nao estao vazios
function verificaCampo() {
    for (let i = 0; i < radioInput.length; i++) {
        if (radioInput[i].checked) return false;
    }
    return true;
}

// input de inserção do valor a ser convertido
const textInput = document.querySelector("#valorEmReal");

// verifica os requisitos da conversao caso bloqueia/ativa o botão
function statusDoBtn() {
    let textInputValue = parseFloat(textInput.value);
    const vazio = verificaCampo();

    if (isNaN(textInputValue) || parseFloat(textInputValue) < 0 || vazio) {
        bloquearBtn();
    } else {
        ativarBtn();
    }
}

// da eventos ao input para ativar ou bloquear o botão
textInput.addEventListener("input", statusDoBtn);
textInput.addEventListener("click", statusDoBtn);
textInput.addEventListener("change", statusDoBtn);

// vai guardar a moeda escolhida
let moedaEscolhida = "";

// guarda a moeda escolhida e bloquia/ativa o botão
for (let i = 0; i < radioInput.length; i++) {
    radioInput[i].addEventListener("click", () => {
        moedaEscolhida = radioInput[i].value;
        statusDoBtn();
    });
}

// define o valor da moeda de conversão
function formatarMoeda() {
    switch (moedaEscolhida) {
        case "Dólar":
            return 5.66;
        case "Euro":
            return 6.36;
        case "Libra":
            return 7.55;
        case "Bitcoins":
            return 593770.43;
    }
}

// vai guardar o resultado da conversão
let resultado = 0;

// converte pra moeda escolhida
function converterMoeda() {
    formatarMoeda();
    let real = parseFloat(textInput.value);
    let moedaEstrangeira = formatarMoeda();

    resultado = real / moedaEstrangeira;
    return resultado;
}

// vai guardar o resultado formatado de acordo com a moeda
let resultadoFormatado = "";

// formata o resultado de acordo com a moeda
function formatarResultado() {
    converterMoeda();

    switch (moedaEscolhida) {
        case "Dólar":
            resultadoFormatado = resultado.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
            });
            break;
        case "Euro":
            resultadoFormatado = resultado.toLocaleString("de-DE", {
                style: "currency",
                currency: "EUR",
            });
            break;
        case "Libra":
            resultadoFormatado = resultado.toLocaleString("en-GB", {
                style: "currency",
                currency: "GBP",
            });
            break;
        case "Bitcoins":
            resultadoFormatado = resultado.toFixed(5);
    }

    return resultadoFormatado;
}

// onde vai aparecer o resultado da conversão
const resultBox = document.querySelector("#aviso");

// inseri o resultado no campo de resuultado
function mensagemFormatada() {
    formatarResultado();
    let real = parseFloat(textInput.value);

    resultBox.textContent =
        "O valor " +
        real.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
        }) +
        " convertido em " +
        moedaEscolhida +
        " é " +
        resultadoFormatado;
}

// adiciona um evento de clique ao botao, onde coverte e poe no campo de resultado
convertBtn.addEventListener("click", () => {
    converterMoeda();
    mensagemFormatada();
});

// botao de limpar
const clear = document.querySelector("#btnLimpar");

// função de que limpa todo campo
function limparCampos() {
    textInput.focus();
    textInput.value = "";

    for (let i = 0; i < radioInput.length; i++) {
        radioInput[i].checked = false;
    }

    statusDoBtn();
}

// adiciona um evento de clique onde limpa os campos
clear.addEventListener("click", limparCampos);
