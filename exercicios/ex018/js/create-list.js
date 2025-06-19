import { i, storage, setItem, setList, tarefaExistente } from "./storage.js";

const inputNewItem = document.querySelector("#newItem input");
const addBtn = document.querySelector(".add");

inputNewItem.addEventListener("keypress", startlist);
addBtn.addEventListener("click", startlist);

function startlist(event) {
    let text = inputNewItem.value;

    if (event.key === "Enter" || event.type == "click") {
        let existe = storage.some((item) => item.tarefa === text);
        let vazio;

        if (text == "") {
            vazio = true;
        }

        if (!existe && !vazio) {
            setItem(text);
            setList(storage[i].tarefa, storage[i].status);
        } else if (existe || vazio) {
            tarefaExistente(inputNewItem, existe, vazio);
        }

        inputNewItem.value = "";
    }
}
