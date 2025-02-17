// Objetivo fazer relogios digitais
let horaAtual = new Date();

let hMainText = document.getElementById("h");
let minMainText = document.getElementById("m");
let secMainText = document.getElementById("s");

function pegarHoraMain() {
    horaAtual = new Date();

    let hMain = horaAtual.getHours();
    let minMain = horaAtual.getMinutes();
    let secMain = horaAtual.getSeconds();

    let hMainStr = String(hMain);
    let minMainStr = String(minMain);
    let secMainStr = String(secMain);

    hMainStr.length == 1
        ? (hMainText.textContent = "0" + hMain)
        : (hMainText.textContent = hMainStr);

    minMainStr.length == 1
        ? (minMainText.textContent = "0" + minMain)
        : (minMainText.textContent = minMainStr);

    secMainStr.length == 1
        ? (secMainText.textContent = "0" + secMain)
        : (secMainText.textContent = secMainStr);
}

setInterval(() => {
    pegarHoraMain();
}, 1000);
