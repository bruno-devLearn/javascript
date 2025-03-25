/* Arquivo JS aula 05 Objetos */

// CRIAR OBEJTO
let pessoa = {
    nome: "Bruno",
    idade: 16,
    peso: 47.5,
    altura: 1.5,
    doador: false,
};

let produtos = {
    descicao: [],
    preco: [],
};

const carros = {
    marca: ["Ford", "Fiat", "GM"],
    modelo: ["Ka", "Uno", "Corsa"],
    ano: [1999, 2005, 2010],
};

// como acessar uma propriedade usando .
pessoa.nome;
pessoa.idade;
pessoa.peso;
pessoa.altura;

// ACESSAR propriedade usando ['']
pessoa["nome"];
pessoa["idade"];
pessoa["peso"];
pessoa["altura"];

// OPERAÇÃO IMC = peso / (altura * altura)
let imc = pessoa.peso / (pessoa.altura * pessoa.altura);

// toFixed(X)
// limita o numero de casas decimais
console.log("IMC " + imc.toFixed(2));

// ALTERAR/ATUALIZAR VALOR  da propriedade
produtos.descicao = ["Arroz"];
produtos.preco = [4.99];

// usando spreed operator
produtos.descicao = [...produtos.descicao, "Feijao", "Trigo"];
produtos.preco = [...produtos.preco, 9.99, 4.79];

// usando spreed operator em obejtos const
carros.marca = [...carros.marca, "WV"];
carros.modelo = [...carros.modelo, "Fusca"];
carros.ano = [...carros.ano, 1976];

carros;
