// Seletores dos elementos do modal
const modalDiv = document.querySelector("#modal"); // Div principal do modal
const tituloModal = document.querySelector("#titulo"); // Título do modal
const textoModal = document.querySelector("#mensagemModal"); // Texto/mensagem do modal

const yesBtn = document.querySelector("#sim"); // Botão "Sim" para confirmação
const noBtn = document.querySelector("#nao"); // Botão "Não" para cancelar

// Exibe o modal informando que o cadastro foi realizado com sucesso
export function registerModal() {
    modalDiv.style.display = "block";
    tituloModal.textContent = "Cadastro";
    textoModal.textContent = "Pessoa cadastrada com sucesso!";
}

// Exibe o modal informando que já existe um cadastro com o mesmo nome
export function existente() {
    modalDiv.style.display = "block";
    tituloModal.textContent = "Erro";
    textoModal.textContent = "Ja existe um cadastro com esse nome";
}

// Exibe o modal informando que não existe cadastro com o id informado
export function idInexistente() {
    modalDiv.style.display = "block";
    tituloModal.textContent = "Erro";
    textoModal.textContent = "Não existe nenhum cadastro com esse id";
}

export function atualizado() {
    modalDiv.style.display = "block";
    tituloModal.textContent = "Cadastro";
    textoModal.textContent = "Cadastro atualizado com sucesso!";
}

const idInput = document.querySelector("#id"); // Input para o id do cadastro

// Exibe o modal de confirmação para apagar um registro
export function deleteModal(event) {
    event.preventDefault(); // Evita comportamento padrão do formulário

    const index = idInput.value; // Obtém o id informado

    modalDiv.style.display = "block";
    tituloModal.textContent = "Apagar Registro?";
    textoModal.textContent =
        "Certeza que deseja apagar o registro " + index + "?";

    yesBtn.style.display = "inline-block"; // Exibe botão "Sim"
    noBtn.style.display = "inline-block"; // Exibe botão "Não"
}

// Seleciona o botão de fechar do modal
const closeBtn = document.querySelector("#btnClose");

// Função para fechar o modal e limpar os textos/botões
export function closeModal() {
    modalDiv.style.display = "none";
    tituloModal.textContent = "";
    textoModal.textContent = "";

    yesBtn.style.display = "none";
    noBtn.style.display = "none";
}

// Adiciona evento de clique ao botão de fechar para executar a função closeModal
closeBtn.addEventListener("click", closeModal);
