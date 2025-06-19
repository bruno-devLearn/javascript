const getStorage = () => {
    const data = localStorage.getItem("database");
    return data ? JSON.parse(data) : [];
};

const setStorage = (storage) =>
    localStorage.setItem("database", JSON.stringify(storage));

export function setItem(text) {
    storage.push({ tarefa: text, status: "" });
    setStorage(storage);
}

export function setList(tarefa, status, index) {
    const labelTag = document.createElement("label");

    setLabel(labelTag, tarefa, status, index);
    setStatus(labelTag);
    setBtnEvent(labelTag);

    i = storage.length;
}

function setLabel(labelTag, tarefa, status, index) {
    if (index == undefined) {
        index = 0;
    }

    labelTag.classList.add("todo__item");
    labelTag.setAttribute("data-index", index);

    labelTag.innerHTML = `
    <input type="checkbox" ${status} >
    <div>${tarefa}</div>
    <button>X</button>
    `;

    const todoListDiv = document
        .querySelector("#todoList")
        .appendChild(labelTag);
}

function setStatus(labelTag) {
    const checkbox = labelTag.querySelector("input");

    checkbox.addEventListener("click", (event) => {
        const index = Number(labelTag.getAttribute("data-index"));
        storage[index].status = "checked";
        setStorage(storage);
    });
}

function setBtnEvent(labelTag) {
    const botao = labelTag.querySelector("button");

    botao.addEventListener("click", (event) => {
        const labelTag = event.target.parentElement;
        const tarefaIndex = Number(labelTag.getAttribute("data-index"));
        removeItem_storage(tarefaIndex, labelTag);
    });
}

export function removeItem_storage(tarefaIndex, labelTag) {
    storage.splice(tarefaIndex, 1);

    labelTag.remove();

    const labels = document.querySelectorAll(".todo__item");
    labels.forEach((label, index) => {
        label.setAttribute("data-index", index);
    });

    i--;
    setStorage(storage);
}
const wanted = document.querySelector(".wanted");

export function tarefaExistente(text, existe, vazio) {
    if (existe == true) {
        wanted.textContent = "Essa tarefa ja existe";
    } else if (vazio == true) {
        wanted.textContent = "Escreva uma tarefa valida";
    }

    text.addEventListener("input", () => {
        wanted.textContent = "";
    });
}

export let i = 0;
export let storage = getStorage();

storage.forEach((item, index) => {
    setList(item.tarefa, item.status, index);
});
