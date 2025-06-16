import { topPositions, leftPositions } from "./createCoords.js";
import { getCoords } from "./coordsGame-event.js";

const latInput = document.querySelector("#latitude");
const latSelect = document.querySelector("#ns");

latInput.value = "0";
latSelect.value = "N";

const latDiv = document.querySelector(".latitude");

const wanted = document.querySelector("#aviso");

function setLatDivPosition() {
    let lat = String(latInput.value) + String(latSelect.value);

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

        wanted.textContent = "";
    }

    const latSpan = document.querySelector("#lat1");
    latSpan.textContent = latInput.value + "°" + latSelect.value;

    if (latInput.value == "0") {
        latSpan.textContent = "0°";
    }
}

const longInput = document.querySelector("#longitude");
const longSelect = document.querySelector("#eo");

longInput.value = "0";
longSelect.value = "O";

const longDiv = document.querySelector(".longitude");

function setLongDivPosition() {
    let long = String(longInput.value) + String(longSelect.value);

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

        wanted.textContent = "";
    }

    const longSpan = document.querySelector("#lon1");
    longSpan.textContent = longInput.value + "°" + longSelect.value;

    if (longInput.value == "0") {
        longSpan.textContent = "0°";
    }
}

latInput.addEventListener("input", setLatDivPosition);
longInput.addEventListener("input", setLongDivPosition);

latSelect.addEventListener("change", setLatDivPosition);
longSelect.addEventListener("change", setLongDivPosition);

const jogarBtn = document.querySelector("#btnJogar");
jogarBtn.addEventListener("click", getCoords);
