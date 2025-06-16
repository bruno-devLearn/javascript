import { greenPoints, orangePoints } from "./coordsGame-event.js";

export function endGame_win() {
    if (greenPoints == 5) {
        modal("Verde", "Parabéns", "Venceu!");
    }
}

export function endGame_lose() {
    if (orangePoints == 5) {
        modal("Laranja", "Infelizmente", "Perdeu!");
    }
}

const modalDiv = document.querySelector(".modal div");

const textDiv = document.querySelector(".text");
const closeBtn = document.querySelector(".fechar");

const timeSpan = document.querySelector(".time");
const timeSpan_child = document.querySelector(".time span");

function modal(cor, status, resultado) {
    let i = 5;

    closeBtn.style.display = "none";
    textDiv.style.display = "none";
    timeSpan.style.display = "inline";

    setInterval(() => {
        timeSpan_child.textContent = i;
        i--;

        if (i == -1) {
            location.reload();
        }
    }, 1000);

    const textWin = document.createElement("p");
    textWin.textContent = `Você achou 5 barcos ${cor}, ${status} você ${resultado}`;

    modalDiv.appendChild(textWin);
}
