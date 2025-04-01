const valorInput = document.querySelector("#valorEmReal");
const moedaRadio = document.getElementsByName("moedaEstrangeira");
const clear = document.querySelector("#btnLimpar");
const send = document.querySelector("#btnConverter");

send.addEventListener("click", (e) => {
    e.preventDefault();
    moedaSelectFunction();
    casoMoeda();
    menssagem();
});

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

function ativarBtn() {
    if (parseFloat(valorInput.value) > 0) {
        send.removeAttribute("disabled");
        btnConverter.style.background = "#ffc107";
        send.style.cursor = "pointer";
    }
}

let moedaSelect = "";
const dolar = 5.7;
const euro = 5.99;
const libra = 7.19;
const bitcoin = 581627;

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

let result = 0;

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

let resultadoFormatado = "";

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

const message = document.querySelector("#aviso");

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
