// Seleciona os elementos que mostram o número de vídeos
const numVideos = document.querySelectorAll(".numDeVideos");

// guarda os ul e o indice dos li
let videos_class;
let index = 0;

// Atualiza a quantidade de vídeos em cada lista
function Num() {
    for (let i = 1; i <= 5; i++) {
        videos_class = document.querySelector("#lista" + i);
        const videos_li = videos_class.querySelectorAll("li");
        numVideos[index].textContent = videos_li.length;
        index++;
    }
}

// Seleciona os botões de navegação
const prevBtn = document.querySelectorAll("#btnPrev");
const nextBtn = document.querySelectorAll("#btnNext");

// navegação em 100px
let mover = 100;
let direita = mover;
let esquerda = -mover;

// Função para rolar as listas para esquerda ou direita
function show() {
    videos_class = document.querySelectorAll(".videos");
    for (let i = 0; i < videos_class.length; i++) {
        prevBtn[i].addEventListener("click", () => {
            videos_class[i].scrollBy(esquerda, 0);
        });
        nextBtn[i].addEventListener("click", () => {
            videos_class[i].scrollBy(direita, 0);
        });
    }
}

// Atualiza ao carregar a página
window.addEventListener("load", () => {
    Num();
    show();
});

// Modal do vídeo
const modalClass = document.querySelector(".modal");
const iframeVideo = document.querySelector("#iframeVideo");

// Abre o modal com o vídeo
function abrirModal(code) {
    modalClass.style.display = "block";
    iframeVideo.setAttribute("src", `https://www.youtube.com/embed/${code}`);
}

// Fecha o modal
const close = document.querySelector("#btn");
close.addEventListener("click", () => {
    modalClass.style.display = "none";
    iframeVideo.setAttribute("src", "");
});
