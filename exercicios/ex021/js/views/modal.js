const modalDiv = document.querySelector("#modal");
const tituloModal = document.querySelector("#titulo");
const textoModal = document.querySelector("#mensagemModal");

export function registerModal() {
    modalDiv.style.display = "block";
    tituloModal.textContent = "Cadastro";
    textoModal.textContent = "Pessoa cadastrada com sucesso!";
}

const closeBtn = document.querySelector("#btnClose");

function closeModal() {
    modalDiv.style.display = "none";
    tituloModal.textContent = "";
    textoModal.textContent = "";
}

closeBtn.addEventListener("click", closeModal);
