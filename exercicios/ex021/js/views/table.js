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

        // Para cada pessoa, cria uma linha na tabela
        pessoas.forEach((pessoa) => {
            // Exibe a div de dados
            divData.style.display = "block";
            // Cria uma nova linha da tabela
            const tr = document.createElement("tr");

            // Define as chaves que serão exibidas na tabela
            const chaves = [
                "id",
                "nome",
                "idade",
                "peso",
                "altura",
                "imc",
                "classificacao",
            ];

            // Seleciona os valores da pessoa conforme as chaves
            const selecionados = chaves.map((c) => pessoa[c]);

            // Para cada valor, cria uma célula na linha
            for (let i = 0; i < chaves.length; i++) {
                const td = document.createElement("td");
                td.innerHTML = selecionados[i];
                tr.appendChild(td);
            }

            // Adiciona a linha ao tbody da tabela
            tbodyTag.appendChild(tr);
        });
    }
}

// Chama a função para construir a tabela ao carregar o módulo
buildTable();
