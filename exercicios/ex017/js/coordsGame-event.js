import { endGame_win, endGame_lose } from "./end-game.js";

const latInput = document.querySelector("#latitude");
const latSelect = document.querySelector("#ns");

const longInput = document.querySelector("#longitude");
const longSelect = document.querySelector("#eo");

let divCoords;

export function getDivCoords() {
    divCoords = document.querySelectorAll(".map div div");
}

export function getCoords() {
    let lat = Number(latInput.value);
    let long = Number(longInput.value);

    if (latSelect.value == "S") {
        lat = -lat;
    }

    if (longSelect.value == "O") {
        long = -long;
    }

    start(lat, long);
}

function verificaBarco(div) {
    let shipsStats;
    const img = div.querySelector("img");

    if (img) {
        shipsStats = true;
    } else {
        shipsStats = false;
    }

    return shipsStats;
}

const wanted = document.querySelector("#aviso");

function start(lat, long) {
    divCoords.forEach((div) => {
        const divLat = div.getAttribute("data-latitude");
        const divLong = div.getAttribute("data-longitude");

        if (divLat === String(lat) && divLong === String(long)) {
            const barco = verificaBarco(div);

            if (barco == true) {
                const corBarco = div.classList;

                if (corBarco == "green") {
                    classGreen(div);
                    modal("verde");
                } else if (corBarco == "orange") {
                    classOrange(div);
                    modal("laranja");
                }
            } else {
                wanted.textContent = "clique em um barco";
            }
        }
    });
}

const greenPointsText = document.querySelector("#pontosGreen");
export let greenPoints = 0;

function classGreen(div) {
    const img = div.querySelector("img");

    img.setAttribute("src", "");
    img.setAttribute("src", "./images/navio-green.png");

    greenPoints += 1;
    greenPointsText.textContent = greenPoints;

    endGame_win();
}

const orangePointsText = document.querySelector("#pontosOrange");
export let orangePoints = 0;

function classOrange(div) {
    const img = div.querySelector("img");

    img.setAttribute("src", "");
    img.setAttribute("src", "./images/navio-orange.png");

    orangePoints += 1;
    orangePointsText.textContent = orangePoints;

    endGame_lose();
}

const modalDiv = document.querySelector(".modal");
const latText = document.querySelector("#longitudeText");
const longText = document.querySelector("#latitudeText");
const colorText = document.querySelector("#color");

function modal(barco) {
    modalDiv.style.display = "block";
    latText.textContent =
        "longitude :" + longInput.value + "°" + longSelect.value;
    longText.textContent =
        "latitude: " + latInput.value + "°" + latSelect.value;
    colorText.textContent = "barco: " + barco;
}

const closeBtn = document.querySelector(".fechar");

closeBtn.addEventListener("click", () => {
    modalDiv.style.display = "none";
});
