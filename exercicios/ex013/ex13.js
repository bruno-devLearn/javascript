// Seletores dos campos do formulário
const input_data = document.querySelector("#data");
const citacao_text = document.querySelector("#citacao");
const input_text = document.querySelector("#autoria");

// Seletores dos elementos que exibem a citação formatada
const title = document.querySelector("#titulo");
const fraseElement = document.querySelector("#frase");
const autorElement = document.querySelector("#autor");

// Botão de download da imagem
const downloadBtn = document.querySelector("#btnDownload");

// Função para editar a imagem/citação exibida
function editarImg() {
    title.textContent = input_data.value;
    fraseElement.textContent = citacao_text.value;
    autorElement.textContent = input_text.value;
    downloadBtn.style.display = "block";
}

// Modal de aviso
const modalDiv = document.querySelector(".modal");

// Função para abrir o modal
function abrirModal() {
    modalDiv.style.display = "block";
}

// Seletores dos botões e select do formulário
const send = document.querySelector("#btnCriar");
const imagesSelect = document.querySelector("#images");

// Evento do botão Criar: valida os campos e exibe modal se faltar algo
send.addEventListener("click", (e) => {
    if (
        input_data.value == "" ||
        citacao_text.value == "" ||
        input_text.value == "" ||
        imagesSelect.value == ""
    ) {
        abrirModal();
    } else {
        editarImg();
    }

    e.preventDefault();
});

// Botão para fechar o modal
const close = document.querySelector("#btnFecharModal");

close.addEventListener("click", () => {
    modalDiv.style.display = "none";
});

// Seletores do fundo da citação e botão Limpar
const fundo = document.querySelector(".fundo1");
const reset = document.querySelector("#btnLimpar");

// Evento do botão Limpar: limpa campos e esconde fundo e botão de download
reset.addEventListener("click", () => {
    title.textContent = "";
    fraseElement.textContent = "";
    autorElement.textContent = "";

    imagesSelect.value = "";

    fundo.style.display = "none";
    downloadBtn.style.display = "none";
});

// Função para trocar a imagem de fundo da citação
function selectImg() {
    let imagesSelect_value = imagesSelect.value;

    fundo.style.display = "block";
    fundo.style.background = `url(./images/fundos/${imagesSelect_value})`;
}

// Evento para trocar o fundo ao selecionar uma imagem
imagesSelect.addEventListener("change", selectImg);

// Função para baixar a imagem da citação usando html2canvas
function download() {
    html2canvas(fundo, { useCORS: true }).then((canvas) => {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "citacao.png";
        link.click();
    });
}

// Evento do botão de download
downloadBtn.addEventListener("click", download);
