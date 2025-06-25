import { buildTrueCoords } from "./shipsPositions.js";

let topPositions = [
    -14.5, 12.5, 59.5, 95.5, 127.5, 157.5, 182.5, 210.5, 237.5, 263.5, 289.5,
    317.5, 345.5, 371.5, 400.5, 432.5, 468.5, 515.5, 540.5,
];

let leftPositions = [
    -12.5, 35.5, 83.5, 130.5, 178.5, 225.5, 273.5, 321.5, 368.5, 417.5, 464.5,
    512.5, 559.5, 607.5, 655.5, 702.5, 750.5, 798.5, 846.5,
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
}

createCoords();
