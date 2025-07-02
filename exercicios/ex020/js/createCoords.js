// Importa funções auxiliares para construir coordenadas, definir classes dos navios e adicionar eventos
import { buildTrueCoords } from "./shipsPositions.js";
import { getShips } from "./setShipsClass.js";
import { addShipEvent } from "./game-event.js";

// Arrays com as posições top e left para as linhas de latitude e longitude
export let topPositions = [
    -2, 25, 72, 108, 140, 170, 195, 223, 250, 276, 302, 330, 358, 384, 413, 445,
    481, 528, 556,
];

export let leftPositions = [
    0, 48, 96, 143, 191, 238, 286, 334, 381, 430, 477, 525, 572, 620, 668, 715,
    763, 811, 858,
];

// Seleciona o elemento do mapa onde as coordenadas serão criadas
const mapa = document.querySelector(".coords");

// Função principal para criar as coordenadas do mapa
function createCoords() {
    let latIndex = 90;
    let latString = "N";

    // Loop para criar as linhas de latitude
    for (let y = 0; y < topPositions.length; y++) {
        let longIndex = 180;
        let longString = "W";

        // Cria uma linha de latitude
        const latLinha = document.createElement("div");
        latLinha.style.width = "100%";
        latLinha.style.height = "4px";
        latLinha.style.position = "absolute";
        latLinha.style.top = topPositions[y] + "px";

        // Loop para criar os pontos de longitude em cada linha de latitude
        for (let x = 0; x < leftPositions.length; x++) {
            const longPoint = document.createElement("div");
            longPoint.style.position = "absolute";
            longPoint.style.left = leftPositions[x] + "px";

            // Define o valor da longitude de acordo com a posição x
            if (x > 0 && x < 9) {
                longIndex -= 20;
                longString = "W";
            } else if (x === 9) {
                longIndex = 0;
                longString = "";
            } else if (x > 9) {
                longIndex += 20;
                longString = "E";
            }

            // Atribui o atributo data-long ao ponto de longitude
            longPoint.setAttribute("data-long", longIndex + longString);
            latLinha.appendChild(longPoint);
        }

        // Adiciona a linha de latitude ao mapa
        mapa.appendChild(latLinha);

        // Atualiza o valor da latitude para a próxima linha
        if (y > 0 && y < 9) {
            latIndex -= 10;
            latString = "N";
        } else if (y === 9) {
            latIndex = 0;
            latString = "";
        } else if (y > 9) {
            latIndex += 10;
            latString = "S";
        }

        // Atribui o atributo data-lat à linha de latitude
        latLinha.setAttribute("data-lat", latIndex + latString);
    }

    // Chama funções auxiliares para finalizar a configuração do mapa
    buildTrueCoords();
    getShips();
    addShipEvent();
}

// Inicializa a criação das coordenadas ao carregar o script
createCoords();
