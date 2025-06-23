import {
    openModal,
    closeModal,
    clearEvent,
    buildData,
    storage,
} from "./storage.js";

const closeBtn = document.querySelector("#modalClose");
const cancelBtn = document.querySelector("#cancelar");

closeBtn.addEventListener("click", closeModal);
cancelBtn.addEventListener("click", clearEvent);

const inputName = document.querySelector("#nome");
const inputEmail = document.querySelector("#email");
const inputNumb = document.querySelector("#celular");
const inputCity = document.querySelector("#cidade");

export function getInputs() {
    const inputName = document.querySelector("#nome");
    const inputEmail = document.querySelector("#email");
    const inputNumb = document.querySelector("#celular");
    const inputCity = document.querySelector("#cidade");

    return {
        nome: inputName,
        email: inputEmail,
        numero: inputNumb,
        cidade: inputCity,
    };
}

export function getValues() {
    return {
        nome: inputName.value,
        email: inputEmail.value,
        numero: inputNumb.value,
        cidade: inputCity.value,
    };
}

function validateCampName() {
    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?: [A-Za-zÀ-ÖØ-öø-ÿ]+)*$/;

    if (regex.test(inputName.value) == true) {
        return true;
    }

    return false;
}

function validateCampEmail() {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (regex.test(inputEmail.value) == true) {
        return true;
    }

    return false;
}

function validateCampNumb() {
    const regex = /^\(?\d{2}\)?[\s-]?\d{4,5}[\s-]?\d{4}$/;

    if (regex.test(inputNumb.value) == true) {
        return true;
    }

    return false;
}

function validateCampCity() {
    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[ \-'][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/;

    if (regex.test(inputCity.value) == true) {
        return true;
    }

    return false;
}

export function invalidateNullCamps() {
    if (
        inputName.value == "" ||
        inputEmail.value == "" ||
        inputNumb.value == "" ||
        inputCity.value == ""
    ) {
        return true;
    }

    return false;
}

export function pessoaExistente() {
    if (
        storage.some((obj) => obj.nome == inputName.value) &&
        storage.some((obj) => obj.email == inputEmail.value) &&
        storage.some((obj) => obj.numero == inputNumb.value) &&
        storage.some((obj) => obj.cidade == inputCity.value)
    ) {
        return true;
    }

    return false;
}

const wantedMenssage = document.querySelector("#wanted");

export function startData() {
    const nomeValido = validateCampName();
    const emailValido = validateCampEmail();
    const numeroValido = validateCampNumb();
    const cidadeValida = validateCampCity();
    const camposVazios = invalidateNullCamps();
    const existe = pessoaExistente();

    if (!nomeValido) {
        wantedMenssage.textContent =
            "Nome inválido. Use apenas letras e espaços.";
        return;
    }

    if (!emailValido) {
        wantedMenssage.textContent = "Email inválido.";
        return;
    }

    if (!numeroValido) {
        wantedMenssage.textContent = "Número inválido. Ex: (99) 99999-9999";
        return;
    }

    if (!cidadeValida) {
        wantedMenssage.textContent = "Cidade inválida. Use apenas letras.";
        return;
    }

    if (camposVazios) {
        wantedMenssage.textContent = "Todos os campos são obrigatórios.";
        return;
    }

    if (existe) {
        wantedMenssage.textContent = "Essa pessoa já está cadastrada.";
        return;
    }

    buildData();

    setTimeout(() => {
        clearEvent();
    }, 50);
}

function removeMenssage() {
    wantedMenssage.textContent = "";
}

inputName.addEventListener("input", removeMenssage);
inputEmail.addEventListener("input", removeMenssage);
inputNumb.addEventListener("input", removeMenssage);
inputCity.addEventListener("input", removeMenssage);

const registerBtn = document.querySelector("#cadastrarCliente");
registerBtn.addEventListener("click", (event) => {
    inputName.value = "";
    inputEmail.value = "";
    inputNumb.value = "";
    inputCity.value = "";

    openModal(event);
});
