const avisoSpan = document.querySelector("#aviso");

export function addShipEvent() {
    const ships = document.querySelectorAll(".map div div img");
    const map = document.querySelector(".map");

    ships.forEach((ship) => {
        ship.addEventListener("click", (event) => {
            getShipsClass(ship);
            event.stopPropagation();
        });
    });

    map.addEventListener("click", () => {
        avisoSpan.textContent = "Clique Em Um Barco";
    });
}

function getShipsClass(ship) {
    const shipClass = ship.className;
    verifyClass(ship, shipClass);
}

const pirataria = "./images/pirataria/icon-pirataria.png";
const pesca = "./images/pesca/icon-pesca.png";
const comercial = "./images/comercial/icon-comercial.png";
const militar = "./images/militar/icon-militar.png";
const turismo = "./images/turismo/icon-turismo.png";

const pescaVerde = "./images/pesca/icon-pesca-verde.png";
const piratariaVerde = "./images/pirataria/icon-pirataria-verde.png";

let indexLegal = 0;
let indexIlegal = 0;

const pescaCheck = document.querySelectorAll(".iconePesca");
const piratariaCheck = document.querySelectorAll(".iconePirataria");

let pescaIndex = 0;
let piratariaIndex = 0;

const shipTypes = {
    pirataria: {
        icon: pirataria,
        placar: piratariaCheck,
        verde: piratariaVerde,
        index: () => piratariaIndex++,
        count: () => indexIlegal++,
    },
    pesca: {
        icon: pesca,
        placar: pescaCheck,
        verde: pescaVerde,
        index: () => pescaIndex++,
        count: () => indexIlegal++,
    },
    comercial: {
        icon: comercial,
        count: () => indexLegal++,
    },
    militar: {
        icon: militar,
        count: () => indexLegal++,
    },
    turismo: {
        icon: turismo,
        count: () => indexLegal++,
    },
};

const legalSpan = document.querySelector("#pontosLegais");
const ilegalSpan = document.querySelector("#pontosIlegais");

function verifyClass(ship, shipClass) {
    const defaultSrc = ship.src.split("/").pop();
    const type = shipTypes[shipClass];

    if (!type) return;

    ship.setAttribute("src", type.icon);
    ship.style.width = "23px";
    ship.style.top = "-11px";
    avisoSpan.textContent = "";

    if (type.placar) {
        const current = shipClass === "pirataria" ? piratariaIndex : pescaIndex;
        type.placar[current].setAttribute("src", type.verde);
        type.placar[current].style.width = "25px";
        type.index();
    }

    type.count();

    legalSpan.textContent = indexLegal;
    ilegalSpan.textContent = indexIlegal;

    if (indexLegal === 15) modalDerrota();
    if (indexIlegal === 20) modalVitoria();

    if (ship.src.split("/").pop() === defaultSrc) {
        avisoSpan.textContent = "Clique Em Um Barco Não Descoberto";
    }
}

const modal = document.querySelector(".modal");
const modalTitulo = document.querySelector(".modal-content h3");
const modalTexto = document.querySelector(".modal-content p");
const modalTime = document.querySelector(".modal-content span");

let i = 10;

function modalDerrota() {
    modal.style.display = "flex";
    modalTitulo.textContent = "Derrota";
    modalTexto.textContent = "Você encontrou muitos barcos legais";
    modalTime.textContent = "Reiniciando em " + i;

    const timer = setInterval(() => {
        i--;
        modalTime.textContent = "Reiniciando em " + i;

        if (i == 0) {
            indexLegal = 0;
            indexIlegal = 0;

            piratariaIndex = 0;
            pescaIndex = 0;

            clearInterval(timer);
            location.reload();
        }
    }, 1000);
}

function modalVitoria() {
    modal.style.display = "flex";
    modalTitulo.textContent = "Vitoria";
    modalTexto.textContent = "Você encontrou todos os barcos ilegais";
    modalTime.textContent = "Reiniciando em " + i;

    const timer = setInterval(() => {
        i--;
        modalTime.textContent = "Reiniciando em " + i;

        if (i == 0) {
            indexLegal = 0;
            indexIlegal = 0;

            piratariaIndex = 0;
            pescaIndex = 0;

            clearInterval(timer);
            location.reload();
        }
    }, 1000);
}

const latInput = document.querySelector("#latitudeInformada");
const longInput = document.querySelector("#longitudeInformada");

export function getInputsValue() {
    const lat = parseInt(latInput.value);
    const long = parseInt(longInput.value);

    let stringLat;
    let stringLong;

    if (lat > 0) {
        stringLat = "N";
    } else if (lat == 0) {
        stringLat = "";
    } else if (lat < 0) {
        stringLat = "S";
    }

    if (long < 0) {
        stringLong = "W";
    } else if (long == 0) {
        stringLong = "";
    } else if (long > 0) {
        stringLong = "E";
    }

    const valueLat = Math.abs(lat) + stringLat;
    const valueLong = Math.abs(long) + stringLong;

    getDataValues(valueLat, valueLong);
}

function getDataValues(valueLat, valueLong) {
    const latDiv = document.querySelectorAll(".coords > div");

    for (const lat of latDiv) {
        const dataLat = lat.getAttribute("data-lat");
        avisoSpan.textContent = "Clique Em Um Barco";

        if (valueLat == dataLat) {
            const longDiv = lat.querySelectorAll("div");

            for (const long of longDiv) {
                const dataLong = long.getAttribute("data-long");

                if (valueLong == dataLong) {
                    getChild(long);
                    return;
                }
            }
        }
    }
}

function getChild(long) {
    const ship = long.querySelector("img");

    if (ship != null) {
        getShipsClass(ship);
    } else {
        avisoSpan.textContent = "Clique Em Um Barco";
    }
}

const playBtn = document.querySelector("#btnJogar");
playBtn.addEventListener("click", getInputsValue);
