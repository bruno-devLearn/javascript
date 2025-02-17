// Objetivo fazer relogios digitais
let tempoAtual = new Date();

let hMainText = document.getElementById("h");
let minMainText = document.getElementById("m");
let secMainText = document.getElementById("s");

let hSmartText = document.getElementById("hSmart");
let minSmartText = document.getElementById("mSmart");
let secSmartText = document.getElementById("sSmart");

function pegarHora() {
    tempoAtual = new Date();

    let h = tempoAtual.getHours();
    let min = tempoAtual.getMinutes();
    let sec = tempoAtual.getSeconds();

    let hStr = String(h);
    let minStr = String(min);
    let secStr = String(sec);

    hMainText.textContent = hStr;
    minMainText.textContent = minStr;
    secMainText.textContent = secStr;

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

function ajusteTempo(hStr) {}

let weekText = document.getElementById("semana");
let dayText = document.getElementById("data");

function pegarData() {
    tempoAtual = new Date();

    let dayWeek = tempoAtual.getDay();
    let day = tempoAtual.getDate();
    let month = tempoAtual.getMonth() + 1;
    let year = tempoAtual.getFullYear();

    let dayStr = String(day);
    let monthStr = String(month);
    let yearStr = String(year);

    switch (dayWeek) {
        case 0:
            dayWeek = "Dom";
            break;

        case 1:
            dayWeek = "Seg";
            break;

        case 2:
            dayWeek = "Ter";
            break;

        case 3:
            dayWeek = "Qua";
            break;

        case 4:
            dayWeek = "Qui";
            break;

        case 5:
            dayWeek = "Sex";
            break;

        case 6:
            dayWeek = "Sab";
            break;
    }

    if (dayStr.length == 1) {
        dayStr = "0" + day;
    }
    if (monthStr.length == 1) {
        monthStr = "0" + month;
    }

    weekText.textContent = dayWeek;
    dayText.textContent = day + "/" + month + "/" + year;
}

setInterval(() => {
    pegarHora();
}, 1000);
pegarData();
