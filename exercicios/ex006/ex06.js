// Input onde o usuário insere o valor em reais
const valorInput = document.querySelector("#valorEmReal");

// Opções de moeda disponíveis
const moedaRadio = document.getElementsByName("moedaEstrangeira");

// Botões de converter
const send = document.querySelector("#btnConverter");

// Adiciona evento de clique no botão de conversão
send.addEventListener("click", (e) => {
    e.preventDefault(); // Evita recarregar a página
    moedaSelectFunction(); // Identifica a moeda selecionada
    casoMoeda(); // Faz o cálculo da conversão
    menssagem(); // Exibe a mensagem com o resultado
});

// Função que desabilita o botão caso o input esteja vazio ou inválido
function bloquearBtn() {
    if (
        valorInput.value == "" ||
        valorInput.value == 0 ||
        valorInput.value == null
    ) {
        send.setAttribute("disabled", "disabled");
        send.style.background = "#ccc";
        send.style.cursor = "not-allowed";
    }
}

// Função que ativa o botão se o input tiver um valor válido
function ativarBtn() {
    if (parseFloat(valorInput.value) > 0) {
        send.removeAttribute("disabled");
        btnConverter.style.background = "#ffc107";
        send.style.cursor = "pointer";
    }
}

// Taxas de câmbio
let moedaSelect = "";
const dolar = 5.7;
const euro = 5.99;
const libra = 7.19;
const bitcoin = 581627;

// Identifica qual moeda foi selecionada pelo usuário
function moedaSelectFunction() {
    if (moedaRadio[0].checked) {
        moedaSelect = "dolar";
    } else if (moedaRadio[1].checked) {
        moedaSelect = "euro";
    } else if (moedaRadio[2].checked) {
        moedaSelect = "libra";
    } else if (moedaRadio[3].checked) {
        moedaSelect = "bitcoin";
    }
    return moedaSelect;
}

// Variável onde será armazenado o resultado da conversão
let result = 0;

// Faz o cálculo da conversão com base na moeda selecionada
function casoMoeda() {
    switch (moedaSelect) {
        case "dolar":
            result = parseFloat(valorInput.value) / dolar;
            break;
        case "euro":
            result = parseFloat(valorInput.value) / euro;
            break;
        case "libra":
            result = parseFloat(valorInput.value) / libra;
            break;
        case "bitcoin":
            result = parseFloat(valorInput.value) / bitcoin;
            break;
    }
    return result;
}

// Variável que armazena o resultado formatado
let resultadoFormatado = "";

// Função que formata o resultado da conversão para exibição
let menssagemFormatada = () => {
    switch (moedaSelect) {
        case "dolar":
            resultadoFormatado = result.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
            });
            break;
        case "euro":
            resultadoFormatado = result.toLocaleString("de-DE", {
                style: "currency",
                currency: "EUR",
            });
            break;
        case "libra":
            resultadoFormatado = result.toLocaleString("en-GB", {
                style: "currency",
                currency: "GBP",
            });
            break;
        case "bitcoin":
            resultadoFormatado = result.toFixed(5);
    }
    return resultadoFormatado;
};

// Elemento onde a mensagem será exibida
const message = document.querySelector("#aviso");

// Função que exibe a mensagem com o valor convertido
function menssagem() {
    let valor = parseFloat(valorInput.value);
    message.textContent =
        "O valor " +
        valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        }) +
        " convertido em " +
        moedaSelect +
        " é " +
        menssagemFormatada();
}

// botao de limpar
const clear = document.querySelector("#btnLimpar");

clear.addEventListener("click", () => {
    valorInput.value = "";
    message.textContent = "Digite o valor, escolha a moeda e converter";
    moedaRadio[0].checked = false;
    moedaRadio[1].checked = false;
    moedaRadio[2].checked = false;
    moedaRadio[3].checked = false;
});
