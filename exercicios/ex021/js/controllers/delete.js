import { pessoas, setData } from "./database.js";
import { buildTable } from "../views/table.js";
import { idInexistente, deleteModal, closeModal } from "../views/modal.js";

// Botão para apagar registro
const deleteBtn = document.querySelector("#btnApagar");
// Input para receber o id
const idInput = document.querySelector("#id");

// Div que contém os dados da tabela
const divData = document.querySelector("#dados");
// Div dos botões do modal de confirmação
const modalBtns = document.querySelector("#botoesModal");

// Função para deletar dados ao confirmar no modal
function deleteData(event) {
    // Verifica se o botão "sim" foi clicado
    if (event.target.id == "sim") {
        let id = idInput.value;

        // Validação do id
        if (id == "" || id == null || isNaN(id) || id == undefined) {
            idInput.value = 0;
            id = 0;
        }

        // Seleciona todas as linhas da tabela
        const trTag = divData.querySelectorAll("table > tbody > tr");

        // Procura o índice do objeto pelo id
        const index = pessoas.findIndex((p) => p.id == id);

        if (index !== -1) {
            // Remove o objeto do array
            pessoas.splice(index, 1);
            // Atualiza os ids dos objetos restantes
            pessoas.forEach((p, i) => (p.id = i));

            // Remove a linha correspondente da tabela
            trTag[index].remove();

            // Reconstrói a tabela e salva os dados
            buildTable();
            setData(pessoas);
        } else {
            // Exibe modal de id inexistente
            idInexistente();
        }

        // Esconde a div se não houver mais dados
        if (pessoas.length === 0) {
            divData.style.display = "none";
        }
    }

    // Fecha o modal após a ação
    closeModal();
}

// Adiciona eventos aos botões
deleteBtn.addEventListener("click", deleteModal);
modalBtns.addEventListener("click", deleteData);
