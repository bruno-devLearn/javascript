import { pessoas } from "../controllers/database.js";

const divData = document.querySelector("#dados");
const tbodyTag = divData.querySelector("table > tbody");

export function buildTable() {
    if (pessoas.length > 0) {
        tbodyTag.innerHTML = "";

        pessoas.forEach((pessoa) => {
            divData.style.display = "block";
            const tr = document.createElement("tr");

            const chaves = [
                "id",
                "nome",
                "idade",
                "peso",
                "altura",
                "imc",
                "classificacao",
            ];

            const selecionados = chaves.map((c) => pessoa[c]);

            for (let i = 0; i < chaves.length; i++) {
                const td = document.createElement("td");

                td.innerHTML = selecionados[i];
                tr.appendChild(td);
            }

            tbodyTag.appendChild(tr);
        });
    }
}

buildTable();
