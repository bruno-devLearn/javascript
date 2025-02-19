// elementos principais
const dataElement = document.querySelector("#data");
const citeElement = document.querySelector("#citacao");
const autorElement = document.querySelector("#autoria");

// botoes de limpar e enviar
const sendBtn = document.querySelector("#btnCriar");
const clear = document.querySelector("#btnLimpar");

// mensagem de erro
const mensagem = document.querySelector("#abrirModal");

// abri a mensagem de erro
function abrirMensagem() {
    if (
        dataElement.value === "" ||
        citeElement.value === "" ||
        autorElement.value === ""
    ) {
        mensagem.style.display = "block";
    }
}

// botao de fechar a mensagem
const close = document.querySelector("#fechar");

// fecha a mensagem
close.addEventListener("click", function () {
    mensagem.style.display = "none";
    quote.textContent = "";
    authorQuote.textContent = "";
    dataQuote.textContent = "";
});

// variaveis da citação
const quote = document.querySelector("#text");
const authorQuote = document.querySelector("#autor");
const dataQuote = document.querySelector("#data-quote");

// passa os valores pra citação
function passQuote() {
    quote.textContent = citeElement.value;
    authorQuote.textContent = autorElement.value;
    dataQuote.textContent = new Date(dataElement.value).toLocaleDateString(
        "pt-BR",
        { timeZone: "UTC" }
    );
}

// adiciona evento de clique no botao de enviar
sendBtn.addEventListener("click", function () {
    abrirMensagem();
    passQuote();
});

// limpa todos os campos
clear.addEventListener("click", function () {
    quote.textContent = "";
    authorQuote.textContent = "";
    dataQuote.textContent = "";
});

// onde vai ficar a imgem da citação
const img = document.querySelector("#citacao00");

// cria a imagem da citação
function download() {
    html2canvas(img).then((canvas) => {
        let link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "citacao-do-dia.png";
        link.click();
    });
}

// variavel do botao de download
let downloadBtn = document.querySelector(".baixar");

// baixa a imagem
downloadBtn.addEventListener("click", function () {
    download();
});
