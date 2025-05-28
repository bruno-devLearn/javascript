// Seletores dos elementos que exibem o número de vídeos em cada lista
const numVideos = document.querySelectorAll(".numDeVideos");

let videos_class;
let teste;
let i = 0;

// Função para atualizar a quantidade de vídeos em cada lista
function nVideosUpdate() {
    // Percorre as listas de vídeos (de 1 a 5)
    for (index = 1; index <= 5; index++) {
        // Seleciona a lista pelo id
        videos_class = document.querySelector("#lista" + index);

        // Seleciona todos os itens (li) da lista
        const teste = videos_class.querySelectorAll("li");
        // Atualiza o texto do elemento que mostra o número de vídeos
        numVideos[i].textContent = teste.length;
        i++;
    }
}

// Evento para atualizar a quantidade de vídeos ao carregar a página
window.addEventListener("load", nVideosUpdate);

let mover = 100;
let direita = mover;
let esquerda = -mover;

// Função para rolar a lista de vídeos para a direita ou esquerda
function show(indice, index) {
    // Seleciona a lista pelo id
    videos_class = document.querySelector("#lista" + index);
    // Se indice for 1, rola para a direita; se for -1, rola para a esquerda
    if (indice == 1) {
        videos_class.scrollBy(direita, 0);
    } else if (indice == -1) {
        videos_class.scrollBy(esquerda, 0);
    }
}
