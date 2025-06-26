import { buildTrueCoords } from "./shipsPositions.js";
import { getShips } from "./setShipsClass.js";

export let topPositions = [
    -2, 25, 72, 108, 140, 170, 195, 223, 250, 276, 302, 330, 358, 384, 413, 445,
    481, 528, 553,
];

export let leftPositions = [
    0, 48, 96, 143, 191, 238, 286, 334, 381, 430, 477, 525, 572, 620, 668, 715,
    763, 811, 859,
];

const mapa = document.querySelector(".coords");

function createCoords() {
    let latIndex = 90;
    let latString = "N";

    for (let y = 0; y < topPositions.length; y++) {
        let longIndex = 180;
        let longString = "W";

        const latLinha = document.createElement("div");
        latLinha.style.width = "100%";
        latLinha.style.height = "4px";
        latLinha.style.position = "absolute";
        latLinha.style.top = topPositions[y] + "px";

        for (let x = 0; x < leftPositions.length; x++) {
            const longPoint = document.createElement("div");
            longPoint.style.position = "absolute";
            longPoint.style.left = leftPositions[x] + "px";

            // Definir longitude
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

            longPoint.setAttribute("data-long", longIndex + longString);
            latLinha.appendChild(longPoint);
        }

        mapa.appendChild(latLinha);

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

        latLinha.setAttribute("data-lat", latIndex + latString);
    }

    buildTrueCoords();
    getShips();
}

createCoords();
