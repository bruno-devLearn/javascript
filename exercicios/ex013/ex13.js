// Objetivo fazer relogios digitais
let tempoAtual = new Date();

// Elementos do relogio principal
let hMainText = document.getElementById("h");
let minMainText = document.getElementById("m");
let secMainText = document.getElementById("s");

// Elementos do relogio smart
let hSmartText = document.getElementById("hSmart");
let minSmartText = document.getElementById("mSmart");
let secSmartText = document.getElementById("sSmart");

// Função para pegar a hora
function pegarHora() {
    // Pegar a hora atual
    tempoAtual = new Date();

    // Pegar a hora, minuto e segundo
    let h = tempoAtual.getHours();
    let min = tempoAtual.getMinutes();
    let sec = tempoAtual.getSeconds();

    // Transformar em string
    let hStr = String(h);
    let minStr = String(min);
    let secStr = String(sec);

    // Adicionar 0 a esquerda se for menor que 10
    if (hStr.length == 1) {
        hStr = "0" + h;
    }
    if (minStr.length == 1) {
        minStr = "0" + min;
    }
    if (secStr.length == 1) {
        secStr = "0" + sec;
    }

    // Atualizar os textos
    hMainText.textContent = hStr;
    minMainText.textContent = minStr;
    secMainText.textContent = secStr;

    hSmartText.textContent = hStr;
    minSmartText.textContent = minStr;
    secSmartText.textContent = secStr;
}

// Atualizar a hora a cada segundo
setInterval(() => {
    pegarHora();
}, 1000);

// Elementos da data
let weekText = document.getElementById("semana");
let dayText = document.getElementById("data");

// Função para pegar a data
function pegarData() {
    // Pegar a data atual
    tempoAtual = new Date();

    // Pegar o dia da semana, dia, mês e ano
    let dayWeek = tempoAtual.getDay();
    let day = tempoAtual.getDate();
    let month = tempoAtual.getMonth() + 1;
    let year = tempoAtual.getFullYear();

    // Transformar em string
    let dayStr = String(day);
    let monthStr = String(month);

    // transformar o dia da semana em texto
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

    // Adicionar 0 a esquerda se for menor que 10
    if (dayStr.length == 1) {
        dayStr = "0" + day;
    }
    if (monthStr.length == 1) {
        monthStr = "0" + month;
    }

    // Atualizar os textos
    weekText.textContent = dayWeek;
    dayText.textContent = dayStr + "/" + monthStr + "/" + year;
}

// Evocar a função
pegarData();

// Elementos do clima
let tempText = document.getElementById("temp");
let umidadeText = document.getElementById("umidad");
let localText = document.getElementsByClassName("city");

// Função para pegar a posição do usuário
function getUserPosition() {
    // variável para armazenar a url
    let url = "";

    // Pegar a posição do usuário
    navigator.geolocation.getCurrentPosition((pos) => {
        let lat = pos.coords.latitude;
        let long = pos.coords.longitude;

        // Montar a url
        url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&APPID=622296cd4fda08b69c46ccfa980f968d`;

        // Chamar a API para pegar os dados
        fetch(url).then((response) => {
            // Pegar os dados
            response.json().then((data) => {
                // Pegar o nome do local, a temperatura e a umidade
                let local = data.name;
                let temp = (5 / 9) * (data.main.temp - 32);
                let umidade = data.main.humidity;

                // Atualizar os textos
                localText[0].textContent = local;
                tempText.textContent = temp.toFixed(1);
                umidadeText.textContent = umidade;
            });
        });
    });
}

// Evocar a função
getUserPosition();
