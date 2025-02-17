// Objetivo fazer relogios digitais
let horaAtual = new Date();

let hMainText = document.getElementById("h");
let minMainText = document.getElementById("m");
let secMainText = document.getElementById("s");

function pegarDataMain() {
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

let hSmartText = document.getElementById("hSmart");
let minSmartText = document.getElementById("mSmart");
let secSmartText = document.getElementById("sSmart");

function pegarDataSmart() {
    horaAtual = new Date();

    let hSmart = horaAtual.getHours();
    let minSmart = horaAtual.getMinutes();
    let secSmart = horaAtual.getSeconds();

    let hSmartStr = String(hSmart);
    let minSmartStr = String(minSmart);
    let secSmartStr = String(secSmart);

    hSmartStr.length == 1
        ? (hSmartText.textContent = "0" + hSmart)
        : (hSmartText.textContent = hSmartStr);

    minSmartStr.length == 1
        ? (minSmartText.textContent = "0" + minSmart)
        : (minSmartText.textContent = minSmartStr);

    secSmartStr.length == 1
        ? (secSmartText.textContent = "0" + secSmart)
        : (secSmartText.textContent = secSmartStr);
}

setInterval(() => {
    pegarDataMain();
    pegarDataSmart();
}, 1000);
