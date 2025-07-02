// Importa posições do mapa
import { topPositions, leftPositions } from "./createCoords.js";

// Seletores dos elementos do mapa e linhas de latitude/longitude
const mapDiv = document.querySelector(".map");
const latLinha = document.querySelector("#linhaDeLatitude");
const longLinha = document.querySelector("#linhaDeLongitude");

// Obtém o retângulo do mapa para calcular posições relativas do mouse
const rect = mapDiv.getBoundingClientRect();

// Move as linhas de latitude e longitude conforme o mouse
function getCoordsPosition(event) {
    const y = event.clientY - rect.top;
    const x = event.clientX - rect.left;

    latLinha.style.top = y + "px";
    longLinha.style.left = x + "px";

    getCoords_y(y);
    getCoords_x(x);
}

// Centraliza as linhas e reseta os inputs ao sair do mapa
function setLinesMidle() {
    latLinha.style.top = topPositions[9] + "px";
    longLinha.style.left = leftPositions[9] + "px";

    latInput.value = 0;
    longInput.value = 0;
}

// Variável auxiliar para latitude
let lat = "";

// Calcula a latitude baseada na posição Y do mouse
function getCoords_y(y) {
    for (let i = 0; i < topPositions.length - 1; i++) {
        if (y >= topPositions[i] && y < topPositions[i + 1]) {
            const lat1 = 90 - i * 10;
            const lat2 = 90 - (i + 1) * 10;

            lat = `${lat1}, ${lat2}`;

            getDeltaY(lat1, y, i);
            break;
        }
    }
}

// Calcula o delta Y para interpolação da latitude
function getDeltaY(lat1, y, i) {
    const deltaY = topPositions[i + 1] - topPositions[i];
    setLatitudeInput(deltaY, lat1, y, i);
}

// Atualiza o input de latitude conforme o mouse
function setLatitudeInput(deltaY, lat1, y, i) {
    const degreesY = ((y - topPositions[i]) / deltaY) * 10;
    latInput.value = parseInt(lat1 - parseInt(degreesY));

    if (parseInt(latInput.value) > 0) {
        latSelect.value = "N";
    } else if (parseInt(latInput.value) < 0) {
        latSelect.value = "S";
    }
}

// Seletores dos inputs de latitude
const latInput = document.querySelector("#latitudeInformada");
const latSelect = document.querySelector("#dirLatitude");

// Variável auxiliar para longitude
let long = "";

// Calcula a longitude baseada na posição X do mouse
function getCoords_x(x) {
    for (let i = 0; i < topPositions.length - 1; i++) {
        if (x >= leftPositions[i] && x < leftPositions[i + 1]) {
            const long1 = -180 + i * 20;
            const long2 = -180 + (i + 1) * 20;

            long = `${long1}, ${long2}`;

            getDeltaX(long1, x, i);
            break;
        }
    }
}

// Calcula o delta X para interpolação da longitude
function getDeltaX(long1, x, i) {
    const deltaX = leftPositions[i + 1] - leftPositions[i];
    setLongitudeInput(deltaX, long1, x, i);
}

// Atualiza o input de longitude conforme o mouse
function setLongitudeInput(deltaX, long1, x, i) {
    const degreesX = ((x - leftPositions[i]) / deltaX) * 20;
    longInput.value = parseInt(long1 + parseInt(degreesX));

    if (parseInt(longInput.value) > 0) {
        longSelect.value = "E";
    } else if (parseInt(longInput.value) < 0) {
        longSelect.value = "W";
    }
}

// Seletores dos inputs de longitude
const longInput = document.querySelector("#longitudeInformada");
const longSelect = document.querySelector("#dirLongitude");

// Eventos para movimentação do mouse no mapa
mapDiv.addEventListener("mousemove", getCoordsPosition);
mapDiv.addEventListener("mouseleave", setLinesMidle);
