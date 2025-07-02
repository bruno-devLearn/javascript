// Função principal para atribuir classes aos navios sorteados
export function getShips() {
    const ships = document.querySelectorAll(".map div div img");
    const shipsIndex = [];

    // Adiciona data-index a cada navio e armazena os índices
    ships.forEach((element, index) => {
        element.setAttribute("data-index", index);
        shipsIndex.push(index);
    });

    // Distribui os navios entre as categorias
    comercialShips(ships, shipsIndex);
    militarShips(ships, shipsIndex);
    turismoShips(ships, shipsIndex);
    pescaShips(ships, shipsIndex);
    piratariaShips(ships, shipsIndex);
}

// Array para armazenar índices dos navios comerciais
const comercial = [];

// Sorteia e define navios comerciais
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

// Array para armazenar índices dos navios militares
const miltar = [];

// Sorteia e define navios militares
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

// Array para armazenar índices dos navios de turismo
const turismo = [];

// Sorteia e define navios de turismo
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

// Array para armazenar índices dos navios de pesca
const pesca = [];

// Sorteia e define navios de pesca
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

// Array para armazenar índices dos navios de pirataria
const pirataria = [];

// Sorteia e define navios de pirataria
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
