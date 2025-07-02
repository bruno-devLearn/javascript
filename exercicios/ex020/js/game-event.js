// Seleciona o span de aviso para mensagens ao usuário
const avisoSpan = document.querySelector("#aviso");

// Adiciona eventos de clique nos navios e no mapa
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

// Obtém a classe do navio clicado e chama a verificação
function getShipsClass(ship) {
    const shipClass = ship.className;
    verifyClass(ship, shipClass);
}

// Caminhos dos ícones de cada tipo de navio
const pirataria = "./images/pirataria/icon-pirataria.png";
const pesca = "./images/pesca/icon-pesca.png";
const comercial = "./images/comercial/icon-comercial.png";
const militar = "./images/militar/icon-militar.png";
const turismo = "./images/turismo/icon-turismo.png";
const pescaVerde = "./images/pesca/icon-pesca-verde.png";
const piratariaVerde = "./images/pirataria/icon-pirataria-verde.png";

// Contadores de pontos legais e ilegais
let indexLegal = 0;
let indexIlegal = 0;

// Seletores dos placares de pesca e pirataria
const pescaCheck = document.querySelectorAll(".iconePesca");
const piratariaCheck = document.querySelectorAll(".iconePirataria");

// Índices para controle dos ícones verdes
let pescaIndex = 0;
let piratariaIndex = 0;

// Objeto para mapear tipos de navio e suas propriedades
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

// Seletores dos spans de pontos legais e ilegais
const legalSpan = document.querySelector("#pontosLegais");
const ilegalSpan = document.querySelector("#pontosIlegais");

// Verifica a classe do navio, atualiza ícones, placares e verifica vitória/derrota
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

// Seletores dos elementos do modal de vitória/derrota
const modal = document.querySelector(".modal");
const modalTitulo = document.querySelector(".modal-content h3");
const modalTexto = document.querySelector(".modal-content p");
const modalTime = document.querySelector(".modal-content h4");

// Tempo para reiniciar o jogo após vitória/derrota
let i = 10;

// Exibe modal de derrota e reinicia o jogo após contagem regressiva
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

// Exibe modal de vitória e reinicia o jogo após contagem regressiva
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

// Seletores dos inputs de latitude e longitude
const latInput = document.querySelector("#latitudeInformada");
const longInput = document.querySelector("#longitudeInformada");

// Exporta função para obter valores dos inputs e buscar navio na coordenada informada
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

// Busca o elemento do mapa correspondente à latitude e longitude informadas
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

// Busca o navio na coordenada informada e executa a lógica de clique
function getChild(long) {
    const ship = long.querySelector("img");

    if (ship != null) {
        getShipsClass(ship);
    } else {
        avisoSpan.textContent = "Clique Em Um Barco";
    }
}

// Adiciona evento ao botão de jogar para buscar navio pela coordenada
const playBtn = document.querySelector("#btnJogar");
playBtn.addEventListener("click", getInputsValue);
