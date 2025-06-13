import { positions } from "./setShips.js";

let min = 1;
let max = 21;

let green = [];
const numerosSet = new Set();

export function getGreenPositions() {
    const divCoords = document.querySelectorAll(".map div div");

    while (green.length < 5) {
        const numeros = Math.floor(Math.random() * max) + min;

        numerosSet.add(numeros);
        green = [...numerosSet];
    }

    for (let i = 0; i < green.length; i++) {
        divCoords[positions[green[i]]].classList.add("green");
        divCoords[positions[green[i]]].classList.remove("orange");

        console.log(divCoords[positions[green[i]]]);
    }
}
