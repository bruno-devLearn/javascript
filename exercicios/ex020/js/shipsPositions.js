// Índices das coordenadas inválidas (não utilizáveis para navios)
const wrongCoords = [
    5, 6, 7, 8, 23, 24, 25, 26, 27, 29, 31, 38, 39, 40, 41, 42, 43, 44, 45, 46,
    48, 49, 50, 51, 52, 53, 54, 55, 56, 58, 59, 60, 61, 63, 64, 67, 68, 69, 70,
    71, 72, 73, 74, 75, 79, 80, 81, 82, 85, 86, 87, 88, 89, 90, 91, 92, 93, 98,
    99, 100, 104, 105, 106, 107, 108, 109, 110, 111, 118, 119, 123, 124, 125,
    126, 127, 128, 129, 130, 134, 137, 138, 142, 143, 144, 145, 146, 147, 148,
    157, 158, 161, 162, 163, 165, 166, 167, 176, 177, 178, 181, 182, 185, 186,
    187, 196, 197, 200, 201, 202, 205, 206, 207, 215, 216, 219, 220, 224, 225,
    234, 238, 243, 244, 253, 265, 291, 305, 308, 310, 313, 314, 315, 316, 317,
    318, 319, 320, 321, 325, 326, 327, 328, 329, 331, 332, 333, 334, 335, 336,
    337, 338, 339, 340, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354,
    355, 356, 357, 358, 359,
];

// Função principal para construir as coordenadas válidas do mapa
export function buildTrueCoords() {
    // Seleciona todos os pontos de coordenadas do mapa
    const trueCoords = [...document.querySelectorAll(".coords div div")];
    // Ordena os índices inválidos em ordem decrescente
    const sortedCoords = [...wrongCoords].sort((a, b) => b - a);

    // Remove as coordenadas inválidas
    for (let i = 0; i < wrongCoords.length; i++) {
        trueCoords.splice(sortedCoords[i], 1);
    }

    // Chama função para sortear posições dos navios
    getShipsPosition(trueCoords);
}

// Array para armazenar as posições dos navios
const shipsPosition = [];

// Sorteia 50 posições únicas para os navios
function getShipsPosition(trueCoords) {
    let max = trueCoords.length - 1;

    while (shipsPosition.length < 50) {
        const num = Math.floor(Math.random() * (max + 1));

        if (!shipsPosition.includes(num)) {
            shipsPosition.push(num);
        }
    }

    // Posiciona os navios nas coordenadas sorteadas
    setShips(trueCoords, shipsPosition);
}

// Caminho da imagem padrão dos navios
const blackShips = "./images/navios/navio-black.png";

// Insere as imagens dos navios nas posições sorteadas
function setShips(trueCoords, shipsPosition) {
    for (let i = 0; i < shipsPosition.length; i++) {
        const img = document.createElement("img");
        img.setAttribute("src", blackShips);
        img.style.width = "25px";
        img.style.position = "absolute";
        img.style.top = "-5px";
        img.style.left = "-12.5px";
        img.style.zIndex = "1";
        img.style.cursor = "pointer";

        trueCoords[shipsPosition[i]].append(img);
    }
}
