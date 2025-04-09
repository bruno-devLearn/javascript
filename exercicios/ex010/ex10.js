let hour;
let min;
let sec;

let day;
let month;
let year;
let week;

function tempoFunction() {
    let tempo = new Date();

    hour = String(tempo.getHours());
    min = String(tempo.getMinutes());
    sec = String(tempo.getSeconds());

    day = String(tempo.getDate());
    month = String(tempo.getMonth());
    year = String(tempo.getFullYear());

    week = tempo.getDay();

    hour.length == 1 ? (hour = "0" + hour) : (hour = "" + hour);
    min.length == 1 ? (min = "0" + min) : (min = "" + min);
    sec.length == 1 ? (sec = "0" + sec) : (sec = "" + sec);

    day.length == 1 ? (day = "0" + day) : (day = "" + day);
    month.length == 1 ? (month = "0" + month) : (month = "" + month);
}

const hDigital_Element = document.querySelector("#h");
const mDigital_Element = document.querySelector("#m");
const sDigital_Element = document.querySelector("#s");

const hSmart_Element = document.querySelector("#hSmart");
const mSmart_Element = document.querySelector("#mSmart");
const sSmart_Element = document.querySelector("#sSmart");

function setTime() {
    tempoFunction();

    hDigital_Element.textContent = hour;
    mDigital_Element.textContent = min;
    sDigital_Element.textContent = sec;

    hSmart_Element.textContent = hour;
    mSmart_Element.textContent = min;
    sSmart_Element.textContent = sec;

    data_Element.textContent = `${day}/${month}/${year}`;
    week_Element.textContent = setDay(week);
}

const week_Element = document.querySelector("#semana");
const data_Element = document.querySelector("#data");

function setDay(week) {
    let semana = "";

    switch (week) {
        case 0:
            semana = "DOM";
            break;
        case 1:
            semana = "SEG";
            break;
        case 2:
            semana = "TER";
            break;
        case 3:
            semana = "QUA";
            break;
        case 4:
            semana = "QUI";
            break;
        case 5:
            semana = "SEX";
            break;
        case 6:
            semana = "SAB";
            break;
    }

    return semana;
}

setInterval(() => {
    setTime();
}, 1000);

let lon;
let lat;
let url;

function getPosition() {
    navigator.geolocation.getCurrentPosition((pos) => {
        lat = pos.coords.latitude;
        lon = pos.coords.longitude;
        url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&APPID=622296cd4fda08b69c46ccfa980f968d`;
        fetchApi(url);
    });
}

getPosition();

let dataGlobal;

function fetchApi(url) {
    fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((dados) => {
            dataGlobal = dados;
            setData();
        })
        .catch((err) => {
            console.log("nao foi possivel ter acesso aos dados");
        });
}

const cidade = document.querySelector(".city");
const temp = document.querySelector("#temp");
const humidade = document.querySelector("#umidad");

function setData() {
    let tempC = ((5 / 9) * (dataGlobal.main.temp - 32)).toFixed(1);

    cidade.textContent = dataGlobal.name;
    temp.textContent = tempC;
    humidade.textContent = dataGlobal.main.humidity;
}
