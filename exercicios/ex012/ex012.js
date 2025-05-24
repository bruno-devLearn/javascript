const spanObj = document.querySelectorAll(".obj");

const lutador = {
    lutador: "Israel Adesanya",
    nacionalidade: "Nigeriano",
    idade: 35,
    peso: 84,
    altura: 1.93,
};

for (let index = 0; index < 5; index++) {
    const indiceObj = Object.keys(lutador)[index];
    spanObj[index].textContent = lutador[indiceObj];
}
