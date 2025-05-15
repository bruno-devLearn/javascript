const lutador = "Israel Adesanya";
const nacionalidade = "Nigeriano";
const idade = 35;
const peso = 84;
const altura = 1.93;

document.write("<h2>Informações</h2>");
document.write(`Lutador: ${lutador} <br>`);
document.write(`Nacionalidade: ${nacionalidade} <br>`);
document.write(`Idade: ${idade} anos <br>`);
document.write(`Peso: ${peso} Kg <br>`);
document.write(`Altura:: ${altura} m <br>`);
document.write(
    '<img class="img-section" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO9M0txHq3SS4O8ZmTNBSOLt0GwuF5sAu1tw&s" alt="Lutador" />'
);

const dia = "15";
const mes = "05";
const ano = "2025";
const frase = "A persistência é o caminho do êxito.";
const autor = "Charles Chaplin";
document.write("<h2>Frase do Dia</h2>");
document.write(`${dia}/${mes}/${ano} <br>`);
document.write(frase + "<br>");
document.write(autor);

const meses = [
    "Janeiro",
    " fevereiro",
    " Março",
    " Abril",
    " Junho",
    " Julho",
    " Agosto",
    " Setembro",
    " Outubro",
    " Novembro",
    " Dezembro",
];
document.write("<h2>Aarray de Meses do Ano</h2>");
document.write(meses);

const jogo = {
    nome: "GTA VI",
    desenvolvedora: "Rockstar Games",
    lancamento: "2026",
};

document.write(
    '<img class="img-section" src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/images/74b64db493ad05fd0d5a.jpg" alt="Jogo" />'
);
document.write("<h2>Objeto Jogo</h2>");
document.write(`Jogo: ${jogo.nome} <br>`);
document.write(`Desenvolvedora: ${jogo.desenvolvedora} <br>`);
document.write(`Lançamento: ${jogo.lancamento}`);
