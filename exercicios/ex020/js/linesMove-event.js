import { topPositions, leftPositions } from "./createCoords.js";

const latLinha = document.querySelector("#linhaDeLatitude");
const latInput = document.querySelector("#latitudeInformada");
const latSelect = document.querySelector("#dirLatitude");

latLinha.style.top = topPositions[9] + "px";
latInput.value = 0;

let latContador = 0;
let latIndex = 9;

let oldValue_lat = parseInt(latInput.value);

function setLatInput() {
    const currentValue = parseInt(latInput.value);

    // Corrige o latIndex sempre que necessário
    let novoIndex = 9 - currentValue / 10;
    if (novoIndex < 0) novoIndex = 0;
    if (novoIndex > 18) novoIndex = 18;
    if (latIndex !== novoIndex) {
        latIndex = novoIndex;
    }

    latContador = currentValue;

    if (latContador > 0) {
        latSelect.value = "N";
    } else if (latContador < 0) {
        latSelect.value = "S";
    }

    oldValue_lat = currentValue;
    latLinha.style.top = topPositions[latIndex] + "px";
}

function setLatSelect() {
    latContador = -latContador;
    oldValue_lat = latContador;
    latIndex = 18 - latIndex;

    latInput.value = latContador;
    latLinha.style.top = topPositions[latIndex] + "px";
}

latInput.addEventListener("input", setLatInput);
latSelect.addEventListener("change", setLatSelect);

const longLinha = document.querySelector("#linhaDeLongitude");
const longInput = document.querySelector("#longitudeInformada");
const longSelect = document.querySelector("#dirLongitude");

longLinha.style.left = leftPositions[9] + "px";
longInput.value = 0;

let longContador = 0;
let longIndex = 9;

let oldValue_long = parseInt(longInput.value);

function setLongInput() {
    const currentValue = parseInt(longInput.value);

    if (currentValue > oldValue_long) {
        longContador += 20;
        longIndex--;
    } else if (currentValue < oldValue_long) {
        longContador -= 20;
        longIndex++;
    }

    if (longContador > 0) {
        longSelect.value = "E";
    } else if (longContador < 0) {
        longSelect.value = "W";
    }

    oldValue_long = currentValue;
    longLinha.style.left = leftPositions[longIndex] + "px";
}

function setLongSelect() {
    longContador = -longContador;
    oldValue_long = longContador;
    longIndex = 18 - longIndex;

    longInput.value = longContador;
    longLinha.style.left = leftPositions[longIndex] + "px";
}

longInput.addEventListener("input", setLongInput);
longSelect.addEventListener("change", setLongSelect);

function blockTextY(event) {
    if (!["ArrowUp", "ArrowDown", "Tab"].includes(event.key)) {
        event.preventDefault();
    }
}

function blockTextX(event) {
    if (
        !["ArrowUp", "ArrowDown", "Tab", "ArrowRight", "ArrowLeft"].includes(
            event.key
        )
    ) {
        event.preventDefault();
    }

    handleLongInputKey(event);
}

function handleLongInputKey(event) {
    let value = parseInt(longInput.value);

    if (event.key === "ArrowLeft") {
        if (value < 180) {
            value += 20;
        }
    } else if (event.key === "ArrowRight") {
        if (value > -180) {
            value -= 20;
        }
    }

    longInput.value = value;
    setLongInput();
}

latInput.addEventListener("keydown", blockTextY);
longInput.addEventListener("keydown", blockTextX);
