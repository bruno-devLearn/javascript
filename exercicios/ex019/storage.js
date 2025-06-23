import {
    getInputs,
    getValues,
    startData,
    invalidateNullCamps,
    pessoaExistente,
} from "./DOM.js";

const getStorage = () => {
    const data = localStorage.getItem("database");
    return data ? JSON.parse(data) : [];
};

const setStorage = (storage) =>
    localStorage.setItem("database", JSON.stringify(storage));

const modalDiv = document.querySelector("#modal");
const wantedMenssage = document.querySelector("#wanted");
const saveBtn = document.querySelector("#salvar");

export function openModal(event) {
    modalDiv.style.display = "block";

    const evento = event;

    if (event.target.id == "cadastrarCliente") {
        saveBtn.removeEventListener("click", editData);
        saveBtn.addEventListener("click", startData);
    } else if (event.target.classList.contains("green")) {
        saveBtn.removeEventListener("click", startData);
        saveBtn.addEventListener("click", () => {
            updateData(evento);
        });
    }
}

export function closeModal() {
    modalDiv.style.display = "none";
    wantedMenssage.textContent = "";
}

export function clearEvent() {
    const { nome, email, numero, cidade } = getInputs();

    nome.value = "";
    email.value = "";
    numero.value = "";
    cidade.value = "";

    modalDiv.style.display = "none";
    wantedMenssage.textContent = "";
}

let i = 0;

export function buildData() {
    const { nome, email, numero, cidade } = getValues();

    createData(nome, email, numero, cidade);
    createTable(nome, email, numero, cidade, i);
}

function createData(nome, email, numero, cidade) {
    storage.push({
        nome: nome,
        email: email,
        numero: numero,
        cidade: cidade,
    });

    setStorage(storage);
}

const tbodyTag = document.querySelector("#tableClient tbody");

function createTable(nome, email, numero, cidade, index) {
    const linha = document.createElement("tr");
    linha.setAttribute("data-index", index);

    const tdNome = document.createElement("td");
    const tdEmail = document.createElement("td");
    const tdNumero = document.createElement("td");
    const tdCidade = document.createElement("td");

    tdNome.textContent = nome;
    tdEmail.textContent = email;
    tdNumero.textContent = numero;
    tdCidade.textContent = cidade;

    const tdButton = document.createElement("td");

    const editBtn = document.createElement("button");
    editBtn.classList.add("button");
    editBtn.classList.add("green");
    editBtn.textContent = "Editar";

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("button");
    deleteBtn.classList.add("red");
    deleteBtn.textContent = "Excluir";

    tdButton.append(editBtn, deleteBtn);
    tdButton.style.display = "flex";
    tdButton.style.justifyContent = "center";
    tdButton.style.gap = "10px";

    linha.append(tdNome, tdEmail, tdNumero, tdCidade, tdButton);
    tbodyTag.appendChild(linha);

    setRemoveEvent(deleteBtn, linha);
    setEditEvent(editBtn, linha);

    i = storage.length;
}

function setRemoveEvent(deleteBtn, linha) {
    deleteBtn.addEventListener("click", () => {
        const indice = linha.getAttribute("data-index");

        storage.splice(indice, 1);
        linha.remove();

        tbodyTag.querySelectorAll("tr").forEach((tr, index) => {
            tr.setAttribute("data-index", index);
        });

        setStorage(storage);
    });
}

function setEditEvent(editBtn, linha) {
    editBtn.addEventListener("click", (event) => {
        openModal(event);

        const { nome, email, numero, cidade } = getInputs();
        const indice = linha.getAttribute("data-index");

        nome.value = storage[indice].nome;
        email.value = storage[indice].email;
        numero.value = storage[indice].numero;
        cidade.value = storage[indice].cidade;
    });
}

function updateData(evento) {
    const camposVazios = invalidateNullCamps();
    const existe = pessoaExistente();

    if (camposVazios) {
        wantedMenssage.textContent = "Todos os campos são obrigatórios.";
        return;
    }

    if (existe) {
        wantedMenssage.textContent = "Essa pessoa já está cadastrada.";
        return;
    }

    editData(evento);
    editTable(evento);
    setTimeout(() => {
        clearEvent();
    }, 50);
}

function editData(evento) {
    const { nome, email, numero, cidade } = getValues();
    const linha = evento.target.parentElement.parentElement;
    const index = linha.getAttribute("data-index");

    storage[index].nome = nome;
    storage[index].email = email;
    storage[index].numero = numero;
    storage[index].cidade = cidade;

    setStorage(storage);
}

function editTable(evento) {
    const { nome, email, numero, cidade } = getValues();
    const linha = evento.target.parentElement.parentElement;

    const td = linha.querySelectorAll("td");

    td[0].textContent = nome;
    td[1].textContent = email;
    td[2].textContent = numero;
    td[3].textContent = cidade;
}

export const storage = getStorage();

function setData() {
    storage.forEach((data, index) => {
        let nome = storage[index].nome;
        let email = storage[index].email;
        let numero = storage[index].numero;
        let cidade = storage[index].cidade;

        createTable(nome, email, numero, cidade, index);
    });
}

setData();
