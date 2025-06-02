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
}

setDivs();

function setPositionLat(divCoords, y) {
    const topPositions = [
        "0", // 90N
        "28px", // 80N
        "74px", // 70N
        "110px", // 60N
        "143px", // 50N
        "172px", // 40N
        "197px", // 30N
        "225px", // 20N
        "253px", // 10N
        "278px", // 0N
        "304px", // 10S
        "332px", // 20S
        "360px", // 30S
        "386px", // 40S
        "414px", // 50S
        "447px", // 60S
        "483px", // 70S
        "530px", // 80S
        "554px", // 90S
    ];

    divCoords.style.position = "absolute";
    divCoords.style.width = "100%";
    divCoords.style.height = "1px";

    divCoords.style.top = topPositions[y];
}

function setPositionLong(coords, x) {
    const long = coords.getAttribute("data-longitude");

    const leftPositions = [
        "0", // -180
        "48px", // -160
        "95px", // -140
        "142px", // -120
        "190px", // -100
        "237px", // -80
        "285px", // -60
        "333px", // -40
        "381px", // -20
        "429px", // 0
        "476px", // 20
        "524px", // 40
        "524px", // 60
        "571px", // 80
        "619px", // 100
        "715px", // 120
        "762px", // 140
        "810px", // 160
        "857px", // 180
    ];

    coords.style.position = "absolute";
    coords.style.width = "1px";
    coords.style.height = "1px";

    coords.style.left = leftPositions[x];
}
