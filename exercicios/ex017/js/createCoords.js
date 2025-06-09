import { setShipsPosition } from "./setShips.js";
import { getGreenPositions } from "./randonColors.js";

function setDivs() {
    let index = 90;
    let indexSuplementar = 90;

    let longIndex = -180;
    let latIndex = 90;

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

        let indexFormatado = indexSuplementar + strIndex;
        divCoords.classList.add(indexFormatado);

        for (let x = 0; x < 19; x++) {
            const coords = document.createElement("div");

            coords.setAttribute("data-longitude", longIndex);
            coords.setAttribute("data-latitude", latIndex);

            coords.classList.add("orange");

            divCoords.appendChild(coords);

            setPositionLat(divCoords, y);
            setPositionLong(coords, x);

            latIndex -= 10;
            longIndex += 20;

            contador++;

            if (contador == 20) {
                latIndex = 90;
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
    const topPositions = [
        -15.5, // 90N
        12.5, // 80N
        58.5, // 70N
        94.5, // 60N
        127.5, // 50N
        156.5, // 40N
        181.5, // 30N
        209.5, // 20N
        237.5, // 10N
        262.5, // 0N
        288.5, // 10S
        316.5, // 20S
        344.5, // 30S
        370.5, // 40S
        398.5, // 50S
        431.5, // 60S
        467.5, // 70S
        514.5, // 80S
        538.5, // 90S
    ];

    divCoords.style.position = "absolute";
    divCoords.style.width = "100%";
    divCoords.style.height = "1px";

    divCoords.style.top = topPositions[y] + "px";
}

function setPositionLong(coords, x) {
    const long = coords.getAttribute("data-longitude");

    const leftPositions = [
        -6.5, // -180
        37.5, // -160
        84.5, // -140
        131.5, // -120
        179.5, // -100
        226.5, // -80
        274.5, // -60
        322.5, // -40
        370.5, // -20
        418.5, // 0
        465.5, // 20
        513.5, // 40
        513.5, // 60
        560.5, // 80
        608.5, // 100
        704.5, // 120
        751.5, // 140
        799.5, // 160
        846.5, // 180
    ];

    coords.style.position = "absolute";
    coords.style.width = "1px";
    coords.style.height = "1px";

    coords.style.left = leftPositions[x] + "px";
}
