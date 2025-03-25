let nome = "Ricardo Tufão Silva";
let nacionalidade = "Brasileiro";
let idade = 28;
let peso = 77;
let altura = "1.80";

document.write("<h1>Informações</h1>");
document.write(nome + "<br>");
document.write(nacionalidade + "<br>");
document.write(idade + "anos <br>");
document.write(peso + "kg <br>");
document.write(altura + "m <br>");

const dia = "25";
const mes = "03";
const ano = "2025";

const frase =
    "O sucesso nasce do querer, da determinação e persistência em se chegar a um objetivo. Mesmo não atingindo o alvo, quem busca e vence obstáculos, no mínimo fará coisas admiráveis.";
const autor = "José de Alencar";

document.write("<h1>Frase do dia</h1>");
document.write(`${dia}/${mes}/${ano} <br>`);
document.write(frase + "<br>");
document.write(autor + "<br>");

const meses = [
    "Janeiro",
    " Fevereiro",
    " Março",
    " Abril",
    " Maio",
    " Junho",
    " Julho",
    " Agosto",
    " Setembro",
    " Outubro",
    " Novembro",
    " Dezembro",
];

document.write("<h1>Array de meses</h1>");
document.write(meses);

const jogo = {
    nome: "Hollow Knight",
    desenvolvedora: "Team Cherry",
    lancamento: 2017,
};

document.write("<h1>Objeto Jogo</h1>");
document.write("Jogo: " + jogo.nome + "<br>");
document.write("Desenvolvido por: " + jogo.desenvolvedora + "<br>");
document.write("Ano de lançamento: " + jogo.lancamento + "<br>");
