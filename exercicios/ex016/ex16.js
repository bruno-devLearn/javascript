// quantas ul tem
const categorias = document.querySelectorAll("ul");

// array q vai ter o indice da lista e quantos li tem na lista
let lista = [];
let index = 1;

let numVideos = document.querySelectorAll(".numDeVideos");

// coloca o numero de li's no span
function numLI() {
    for (index; index < categorias.length + 1; index++) {
        lista[index] = document.querySelectorAll("#lista" + index + " li");
        numVideos[index - 1].textContent = lista[index].length;
    }
}

numLI();

function show(direction, indexLI) {
    const listaUL = document.querySelector("#lista" + indexLI);

    const mover = 100;
    const direita = mover;
    const esquerda = -mover;

    if (direction == +1) {
        listaUL.scrollBy(direita, 0);
    }
    if (direction == -1) {
        listaUL.scrollBy(esquerda, 0);
    }
}

const modalDiv = document.querySelector(".modal");
const video = document.querySelector("#iframeVideo");

function abrirModal(code) {
    video.setAttribute("src", `https://www.youtube.com/embed/${code}`);
    location.href = "#abrirModal";
}
