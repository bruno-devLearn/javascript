// Importa o array de pessoas do módulo database
import { pessoas } from "../controllers/database.js";

// Seleciona a div que contém os dados, e o tbody
const divData = document.querySelector("#dados");
const tbodyTag = divData.querySelector("table > tbody");

// Função para construir a tabela com os dados das pessoas
export function buildTable() {
    // Verifica se há pessoas cadastradas
    if (pessoas.length > 0) {
        // Limpa o conteúdo atual do tbody
        tbodyTag.innerHTML = "";

        // Exibe a div de dados
        divData.style.display = "block";

        // Para cada pessoa, cria uma linha na tabela
        pessoas.forEach((pessoa) => {
            const tr = document.createElement("tr");

            // Puxa os dados via getters (seguro com atributos privados)
            const dados = [
                pessoa.id,
                pessoa.nome,
                pessoa.idade,
                pessoa.peso,
                pessoa.altura,
                pessoa.imc,
                pessoa.classificacao,
            ];

            // Cria uma célula para cada dado
            dados.forEach((valor) => {
                const td = document.createElement("td");
                td.innerHTML = valor;
                tr.appendChild(td);
            });

            tbodyTag.appendChild(tr);
        });
    } else {
        // Se não há pessoas, esconde a div
        divData.style.display = "none";
    }
}

// Chama a função para construir a tabela ao carregar o módulo
buildTable();
