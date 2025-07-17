// DOM de seletores do modal
const modalDiv = document.querySelector("#modal");
const tituloModal = document.querySelector("#titulo");
const textoModal = document.querySelector("#mensagemModal");

// Exibe o modal com mensagem de cadastro realizado
export function registerModal() {
    modalDiv.style.display = "block";
    tituloModal.textContent = "Cadastro";
    textoModal.textContent = "Pessoa cadastrada com sucesso!";
}

// Exibe o modal com mensagem de erro de cadastro existente
export function existente() {
    modalDiv.style.display = "block";
    tituloModal.textContent = "Erro";
    textoModal.textContent = "Ja existe um cadastro com esse nome";
}

// Seleciona o botão de fechar do modal
const closeBtn = document.querySelector("#btnClose");

// Função para fechar o modal e limpar os textos
function closeModal() {
    modalDiv.style.display = "none";
    tituloModal.textContent = "";
    textoModal.textContent = "";
}

// Adiciona evento de clique ao botão para fechar o modal
closeBtn.addEventListener("click", closeModal);
