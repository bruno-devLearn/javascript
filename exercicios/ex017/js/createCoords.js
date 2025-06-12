import { setShipsPosition } from "./setShips.js";
import { getGreenPositions } from "./randonColors.js";

export const topPositions = [
    0, // 90N
    28, // 80N
    74, // 70N
    110, // 60N
    143, // 50N
    172, // 40N
    197, // 30N
    225, // 20N
    253, // 10N
    278, // 0N
    304, // 10S
    332, // 20S
    360, // 30S
    386, // 40S
    414, // 50S
    447, // 60S
    483, // 70S
    530, // 80S
    554, // 90S
];

export const leftPositions = [
    0, // -180
    44, // -160
    91, // -140
    138, // -120
    186, // -100
    233, // -80
    281, // -60
    329, // -40
    377, // -20
    425, // 0
    472, // 20
    520, // 40
    567, // 60
    615, // 80
    665, // 100
    711, // 120
    758, // 140
    806, // 160
    853, // 180
];

function setDivs() {
    let index = 90;
    let indexSuplementar = 90;

    let longIndex = -180;

    let contador = 1;
    let y = 0;

    for (let i = 0; i < 19; i++) {
        const mapDiv = document.querySelector(".map");

        const divCoords = document.createElement("div");
        let strIndex = "";

        index < 0 ? (strIndex = "S") : (strIndex = "N");
        index < 0
            ? (indexSuplementar = -indexSuplementar)
            : (indexSuplementar = indexSuplementar);

        if (index == 0) {
            strIndex = "";
        }

        let indexFormatado = indexSuplementar + strIndex;
        divCoords.classList.add(indexFormatado);

        for (let x = 0; x < 19; x++) {
            const coords = document.createElement("div");

            coords.setAttribute("data-longitude", longIndex);
            coords.setAttribute("data-latitude", indexSuplementar);

            coords.style.position = "absolute";
            coords.classList.add("orange");

            divCoords.appendChild(coords);

            setPositionLat(divCoords, y);
            setPositionLong(coords, x);

            longIndex += 20;

            contador++;

            if (contador == 20) {
                longIndex = -180;

                contador = 1;
            }
        }

        mapDiv.appendChild(divCoords);

        index < 0
            ? (indexSuplementar = -indexSuplementar)
            : (indexSuplementar = indexSuplementar);

        y++;
        index -= 10;
        indexSuplementar -= 10;
    }

    setShipsPosition();
    getGreenPositions();
}

setDivs();

function setPositionLat(divCoords, y) {
    divCoords.style.position = "absolute";
    divCoords.style.width = "100%";
    divCoords.style.height = "1px";

    divCoords.style.top = topPositions[y] + "px";
}

function setPositionLong(coords, x) {
    coords.style.position = "absolute";
    coords.style.width = "1px";
    coords.style.height = "1px";

    coords.style.left = leftPositions[x] + "px";
}
