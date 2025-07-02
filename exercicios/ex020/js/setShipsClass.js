export function getShips() {
    const ships = document.querySelectorAll(".map div div img");
    const shipsIndex = [];

    ships.forEach((element, index) => {
        element.setAttribute("data-index", index);
        shipsIndex.push(index);
    });

    comercialShips(ships, shipsIndex);
    militarShips(ships, shipsIndex);
    turismoShips(ships, shipsIndex);
    pescaShips(ships, shipsIndex);
    piratariaShips(ships, shipsIndex);
}

const comercial = [];

function comercialShips(ships, shipsIndex) {
    comercial.length = 0;

    while (comercial.length < 10) {
        let max = shipsIndex.length - 1;
        const num = Math.floor(Math.random() * (max + 1));
        const shipIdx = shipsIndex[num];

        if (!comercial.includes(shipIdx)) {
            comercial.push(shipIdx);

            ships[shipIdx].classList.add("comercial");
            shipsIndex.splice(num, 1);
        }
    }
}

const miltar = [];

function militarShips(ships, shipsIndex) {
    miltar.length = 0;

    while (miltar.length < 10) {
        let max = shipsIndex.length - 1;
        const num = Math.floor(Math.random() * (max + 1));
        const shipIdx = shipsIndex[num];

        if (!miltar.includes(shipIdx)) {
            miltar.push(shipIdx);

            ships[shipIdx].classList.add("militar");
            shipsIndex.splice(num, 1);
        }
    }
}

const turismo = [];

function turismoShips(ships, shipsIndex) {
    turismo.length = 0;

    while (turismo.length < 10) {
        let max = shipsIndex.length - 1;
        const num = Math.floor(Math.random() * (max + 1));
        const shipIdx = shipsIndex[num];

        if (!turismo.includes(shipIdx)) {
            turismo.push(shipIdx);

            ships[shipIdx].classList.add("turismo");
            shipsIndex.splice(num, 1);
        }
    }
}

const pesca = [];

function pescaShips(ships, shipsIndex) {
    pesca.length = 0;

    while (pesca.length < 10) {
        let max = shipsIndex.length - 1;
        const num = Math.floor(Math.random() * (max + 1));
        const shipIdx = shipsIndex[num];

        if (!pesca.includes(shipIdx)) {
            pesca.push(shipIdx);

            ships[shipIdx].classList.add("pesca");
            shipsIndex.splice(num, 1);
        }
    }
}

const pirataria = [];

function piratariaShips(ships, shipsIndex) {
    pirataria.length = 0;

    while (pirataria.length < 10) {
        let max = shipsIndex.length - 1;
        const num = Math.floor(Math.random() * (max + 1));
        const shipIdx = shipsIndex[num];

        if (!pirataria.includes(shipIdx)) {
            pirataria.push(shipIdx);

            ships[shipIdx].classList.add("pirataria");
            shipsIndex.splice(num, 1);
        }
    }
}
