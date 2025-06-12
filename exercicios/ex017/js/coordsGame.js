import { topPositions, leftPositions } from "./createCoords.js";

const latInput = document.querySelector("#latitude");
const longInput = document.querySelector("#longitude");

const latSelect = document.querySelector("#ns");
const longSelect = document.querySelector("#eo");

const latDiv = document.querySelector(".latitude");
const longDiv = document.querySelector(".longitude");

function playFunction() {
    let lat = String(latInput.value) + String(latSelect.value);
    let long = String(longInput.value) + String(longSelect.value);

    setLatDivPosition(lat);
    setLongDivPosition(long);
}

function setLatDivPosition(lat) {
    let contadorLat = 90;
    let letraLat = "N";

    for (let i = 0; i < topPositions.length; i++) {
        let valueLat = contadorLat + letraLat;

        if (lat == valueLat) {
            latDiv.style.top = topPositions[i] + "px";
        }

        if (lat == "0S") {
            latDiv.style.top = topPositions[9] + "px";
        }

        if (i >= 9) {
            letraLat = "S";
            contadorLat += 10;
        } else {
            contadorLat -= 10;
        }
    }
}

function setLongDivPosition(long) {
    let contadorLong = 180;
    let letraLong = "O";

    for (let i = 0; i < leftPositions.length; i++) {
        let valueLong = contadorLong + letraLong;

        if (long == valueLong) {
            longDiv.style.left = leftPositions[i] + "px";
        }

        if (long == "0E") {
            longDiv.style.left = leftPositions[9] + "px";
        }

        if (i >= 9) {
            letraLong = "E";
            contadorLong += 20;
        } else {
            contadorLong -= 20;
        }
    }
}

latInput.addEventListener("input", playFunction);
longInput.addEventListener("input", playFunction);
