// Variáveis para hora, minuto e segundo
let hora;
let min;
let sec;

// Função que pega a hora atual
function time() {
    const tempo = new Date();

    hora = String(tempo.getHours());
    min = String(tempo.getMinutes());
    sec = String(tempo.getSeconds());
}

// DOM dos elementos do relógio digital
const hour_digital = document.querySelector("#h");
const min_digital = document.querySelector("#m");
const sec_digital = document.querySelector("#s");

// Atualiza o relógio digital na tela
function digitalTime() {
    time();

    hour_digital.textContent = hora.padStart(2, "0");
    min_digital.textContent = min.padStart(2, "0");
    sec_digital.textContent = sec.padStart(2, "0");
}

// DOM dos elementos do relógio smart
const hour_smart = document.querySelector("#hSmart");
const min_smart = document.querySelector("#mSmart");
const sec_smart = document.querySelector("#sSmart");

// Atualiza o relógio smart na tela
function smartTime() {
    time();

    hour_smart.textContent = hora.padStart(2, "0");
    min_smart.textContent = min.padStart(2, "0");
    sec_smart.textContent = sec.padStart(2, "0");
}

// Variáveis para dia, mês, ano e dia da semana
let dia;
let mes;
let ano;
let weekDay;

// Função que pega a data atual
function data() {
    const tempo = new Date();

    dia = String(tempo.getDate());
    mes = String(tempo.getMonth() + 1);
    ano = String(tempo.getFullYear());
    weekDay = String(tempo.getDay());
}

// DOM dos elementos de data e semana
const dataText = document.querySelector("#data");
const weekText = document.querySelector("#semana");

// Atualiza a data formatada na tela
function smartData() {
    data();
    let diaFormatado;
    let mesFormatado;

    dia.length == 1 ? (diaFormatado = "0" + dia) : (diaFormatado = dia);
    mes.length == 1 ? (mesFormatado = "0" + mes) : (mesFormatado = mes);

    dataText.textContent = diaFormatado + "/" + mesFormatado + "/" + ano;
}

// Atualiza o dia da semana na tela
function smartWeek() {
    switch (weekDay) {
        case "0":
            weekText.textContent = "Dom";
            break;
        case "1":
            weekText.textContent = "Seg";
            break;
        case "2":
            weekText.textContent = "Ter";
            break;
        case "3":
            weekText.textContent = "Qua";
            break;
        case "4":
            weekText.textContent = "Qui";
            break;
        case "5":
            weekText.textContent = "Sex";
            break;
        case "6":
            weekText.textContent = "Sab";
            break;
    }
}

// Atualiza todos os dados do relógio e data
function atualizarData() {
    digitalTime();
    smartTime();
    smartData();
    smartWeek();
}

// Atualiza relógio e data a cada segundo
setInterval(atualizarData, 1000);

// Função para atualizar localização e clima
function atualizarTudo() {
    getPosition();
}

// Ao carregar a página, pega a localização e clima
window.addEventListener("load", atualizarTudo);

// Atualiza localização e clima a cada 10 minutos
setTimeout(getPosition, 600000);

// Variáveis para latitude, longitude e url da API
let lon;
let lat;
let url = "";

// Pega a posição do usuário e monta a url da API
function getPosition() {
    navigator.geolocation.getCurrentPosition((pos) => {
        lat = pos.coords.latitude;
        lon = pos.coords.longitude;

        // Monta a url da API com as coordenadas do usuário
        url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&APPID=622296cd4fda08b69c46ccfa980f968d`;

        getApi();
    });
}

// Variável para guardar os dados da API
let dados;

// Busca os dados da API do clima
async function getApi() {
    try {
        const resposta = await fetch(url);
        if (!resposta.ok) {
            throw new Error(`Erro na API: ${resposta.status}`);
        }
        dados = await resposta.json();
        weather();
    } catch (error) {
        console.error(error);
    }
}

// DOM dos elementos de cidade, temperatura e umidade
const cidade = document.querySelector(".city");
const temperatura = document.querySelector("#temp");
const humidade = document.querySelector("#umidad");

// Atualiza as informações do clima na tela
function weather() {
    const celcius = dados.main.temp;
    let tempInCelsius = ((5 / 9) * (celcius - 32)).toFixed(1);

    cidade.textContent = dados.name;
    humidade.textContent = dados.main.humidity;
    temperatura.textContent = tempInCelsius;
}
