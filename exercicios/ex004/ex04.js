// Seleciona elementos do DOM
const result = document.querySelector("#sorteado");
const dado = document.querySelector("#imgDado");
const btn = document.querySelector("#btnSortear");
const sound = document.querySelector("#dadoRolando");

// Define valores mínimo e máximo do dado
const max = 6;
const min = 1;
let num = 0;

// Função para sortear um número aleatório entre 1 e 6
function sortear() {
    num = Math.floor(Math.random() * max) + min;
    return num;
}

// Função para animar e mostrar o resultado do sorteio
function formatar() {
    result.classList.add("aparecer");
    dado.classList.add("animar");
    sound.play(); // Toca o som do dado rolando
    btn.style.display = "none"; // Esconde o botão

    setTimeout(() => {
        result.classList.remove("aparecer");
        dado.classList.remove("animar");

        result.textContent = num; // Mostra o número sorteado
        dado.setAttribute("src", "./images/dado/" + num + ".png"); // Atualiza a imagem do dado

        btn.style.display = "inline-block"; // Mostra o botão novamente
    }, 1750);
}

// Evento de clique no botão para sortear o dado
btn.addEventListener("click", (e) => {
    e.preventDefault();

    sortear();
    formatar();
});
