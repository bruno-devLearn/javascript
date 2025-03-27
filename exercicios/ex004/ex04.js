// pega todo conteudo do DOM
const randomCenter = document.querySelector("#sorteado");
const imgDado = document.querySelector("#imgDado");
const dadoSound = document.querySelector("#dadoRolando");
const startBtn = document.querySelector("#btnSortear");

// adiciona um evento de clique
startBtn.addEventListener("click", () => {
    // adiciona um som
    dadoSound.play();

    // adiciona as animações e some o botão
    imgDado.classList.add("animar");
    randomCenter.classList.add("aparecer");
    startBtn.style.display = "none";

    // apos um determinado tempo, remove as animações e chama a função
    setTimeout(() => {
        imgDado.classList.remove("animar");
        randomCenter.classList.remove("aparecer");
        startBtn.style.display = "inline-block";
        randomNumber();
    }, 1750);
});

// sortei os numeros e seta as imgens
function randomNumber() {
    num = Math.ceil(Math.random() * 6);
    imgDado.setAttribute("src", "./images/" + num + ".png");
    randomCenter.textContent = num;
}
