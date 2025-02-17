// Objetivo fazer relogios digitais
let horaAtual = new Date();

let hMainText = document.getElementById("h");
let minMainText = document.getElementById("m");
let secMainText = document.getElementById("s");

let hSmartText = document.getElementById("hSmart");
let minSmartText = document.getElementById("mSmart");
let secSmartText = document.getElementById("sSmart");

function pegarHora() {
    horaAtual = new Date();

    let h = horaAtual.getHours();
    let min = horaAtual.getMinutes();
    let sec = horaAtual.getSeconds();

    let hStr = String(h);
    let minStr = String(min);
    let secStr = String(sec);

    if (hStr.length == 1) {
        hStr = "0" + h;
    }
    if (minStr.length == 1) {
        minStr = "0" + min;
    }
    if (secStr.length == 1) {
        secStr = "0" + sec;
    }

    hMainText.textContent = hStr;
    minMainText.textContent = minStr;
    secMainText.textContent = secStr;

    hSmartText.textContent = hStr;
    minSmartText.textContent = minStr;
    secSmartText.textContent = secStr;
}

setInterval(() => {
    pegarHora();
}, 1000);
