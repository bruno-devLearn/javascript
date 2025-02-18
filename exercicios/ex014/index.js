let url = "data.json";
let dados;
let i;

let titleElements = document.getElementsByClassName("titulo");
let releaseDateElements = document.getElementsByClassName("lancamento");
let developerElements = document.getElementsByClassName("desenvolvedora");
let genreElements = document.getElementsByClassName("genero");

fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        dados = data.jogos;

        dadosFunction(dados);
    });

function dadosFunction(dados) {
    for (i = 0; i < dados.length; i++) {
        titleElements[i].textContent = dados[i].titulo;
        releaseDateElements[i].textContent = dados[i].lancamento;
        developerElements[i].textContent = dados[i].desenvolvedora;
        genreElements[i].textContent = dados[i].genero;
    }
}
