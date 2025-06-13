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
                } else if (corBarco == "orange") {
                    classOrange(div);
                }
            }
        }
    });
}

const greenPointsText = document.querySelector("#pontosGreen");
let greenPoints = 0;

function classGreen(div) {
    const img = div.querySelector("img");

    img.setAttribute("src", "");
    img.setAttribute("src", "./images/navio-green.png");

    greenPoints += 1;
    greenPointsText.textContent = greenPoints;
}

const orangePointsText = document.querySelector("#pontosOrange");
let orangePoints = 0;

function classOrange(div) {
    const img = div.querySelector("img");

    img.setAttribute("src", "");
    img.setAttribute("src", "./images/navio-orange.png");

    orangePoints += 1;
    orangePointsText.textContent = orangePoints;
}

// TODO: abrir modal caso encontre barcos laranjas, verdes ou clique no que nao seja um barco
