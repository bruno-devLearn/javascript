// Importa posições e função de validação dos inputs
import { topPositions, leftPositions } from "./createCoords.js";
import { getInputsValue } from "./game-event.js";

// Seletores dos elementos de latitude
const latLinha = document.querySelector("#linhaDeLatitude");
const latInput = document.querySelector("#latitudeInformada");
const latSelect = document.querySelector("#dirLatitude");

// Inicializa linha e input de latitude
latLinha.style.top = topPositions[9] + "px";
latInput.value = 0;

let oldValue_lat = parseInt(latInput.value);
let latIndex = 9;

// Atualiza valor do input de latitude e move a linha
function setLatInput(numb) {
    let currentValue_lat = parseInt(latInput.value);
    latIndex = 9;

    if (currentValue_lat - oldValue_lat != 0) {
        if (numb == -10) {
            currentValue_lat = Math.floor(currentValue_lat / 10) * 10;
        } else if (numb == 10) {
            currentValue_lat = Math.ceil(currentValue_lat / 10) * 10;
        }
    } else {
        currentValue_lat += numb;
    }

    latInput.value = currentValue_lat;

    let numLat = currentValue_lat / 10;
    latIndex = latIndex - numLat;

    oldValue_lat = currentValue_lat;

    if (currentValue_lat > 0) {
        latSelect.value = "N";
    } else if (currentValue_lat < 0) {
        latSelect.value = "S";
    }

    latLinha.style.top = topPositions[latIndex] + "px";
}

// Inverte direção da latitude ao trocar o select
function setLatSelect() {
    const currentValue_lat = parseInt(latInput.value);

    latInput.value = -currentValue_lat;
    latIndex = 18 - latIndex;

    oldValue_lat = -currentValue_lat;
    latLinha.style.top = topPositions[latIndex] + "px";

    latSelect.blur();
}

// Eventos para input e select de latitude
latInput.addEventListener("input", setLatInput);
latSelect.addEventListener("change", setLatSelect);

// Seletores dos elementos de longitude
const longLinha = document.querySelector("#linhaDeLongitude");
const longInput = document.querySelector("#longitudeInformada");
const longSelect = document.querySelector("#dirLongitude");

// Inicializa linha e input de longitude
longLinha.style.left = leftPositions[9] + "px";
longInput.value = 0;

let oldValue_long = parseInt(longInput.value);
let longIndex = 9;

// Atualiza valor do input de longitude e move a linha
function setLongInput(numb) {
    let currentValue_long = parseInt(longInput.value);
    longIndex = 9;

    if (currentValue_long - oldValue_long != 0) {
        if (numb == -20) {
            currentValue_long = Math.floor(currentValue_long / 20) * 20;
        } else if (numb == 20) {
            currentValue_long = Math.ceil(currentValue_long / 20) * 20;
        }
    } else {
        currentValue_long += numb;
    }

    longInput.value = currentValue_long;

    let numLong = currentValue_long / 20;
    longIndex = longIndex + numLong;

    oldValue_long = currentValue_long;

    if (currentValue_long > 0) {
        longSelect.value = "E";
    } else if (currentValue_long < 0) {
        longSelect.value = "W";
    }

    longLinha.style.left = leftPositions[longIndex] + "px";
}

// Inverte direção da longitude ao trocar o select
function setLongSelect() {
    const currentValue_long = parseInt(longInput.value);

    longInput.value = -currentValue_long;
    longIndex = 18 - longIndex;

    oldValue_long = -currentValue_long;
    longLinha.style.left = leftPositions[longIndex] + "px";

    longSelect.blur();
}

// Eventos para input e select de longitude
longInput.addEventListener("input", setLongInput);
longSelect.addEventListener("change", setLongSelect);

// Função para mover linhas com as setas do teclado e Enter
function linesKey(event) {
    const valueLat = parseInt(latInput.value);
    const valueLong = parseInt(longInput.value);

    if (event.key === "ArrowUp" && valueLat < 90) {
        setLatInput(10);
    } else if (event.key == "ArrowDown" && valueLat > -90) {
        setLatInput(-10);
    }

    if (event.key == "ArrowLeft" && valueLong > -180) {
        setLongInput(-20);
    } else if (event.key == "ArrowRight" && valueLong < 180) {
        setLongInput(20);
    }

    if (event.key == "Enter") {
        getInputsValue();
    }
}

// Bloqueia digitação de caracteres não permitidos nos inputs
function blockInput(event) {
    const allowedKeys = [
        "Tab",
        "ArrowUp",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        "F1",
        "F2",
        "F3",
        "F4",
        "F5",
        "F6",
        "F7",
        "F8",
        "F9",
        "F10",
        "F11",
        "F12",
        "Escape",
    ];

    if (!allowedKeys.includes(event.key)) {
        event.preventDefault();
    }
}

// Eventos globais para navegação e bloqueio de input
document.addEventListener("keydown", linesKey);
latInput.addEventListener("keydown", blockInput);
longInput.addEventListener("keydown", blockInput);
