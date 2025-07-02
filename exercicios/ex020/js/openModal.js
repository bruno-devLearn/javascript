// Seletores dos elementos do modal
const modal = document.querySelector(".modal");
const modalTitulo = document.querySelector(".modal-content h3");
const modalH4 = document.querySelector(".modal-content h4");
const modalTexto = document.querySelector(".modal-content p");

// Seleciona todos os botões de missão
const missaoBtn = document.querySelectorAll(".missoes");

// Adiciona evento de clique para cada botão de missão
missaoBtn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        openModal(index + 1);
    });
});

// Seleciona o botão de fechar modal
const closeBtn = document.querySelector(".close");

// Evento para fechar o modal ao clicar no botão de fechar
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    closeBtn.style.display = "none";
});

// Abre o modal e exibe o conteúdo de acordo com a missão selecionada
function openModal(index) {
    modal.style.display = "flex";
    closeBtn.style.display = "flex";

    switch (index) {
        case 1:
            modalTitulo.textContent = "Missão 1 - Green";
            modalH4.textContent = "Regiões Oceânicas Aleatórias";
            modalTexto.textContent =
                "Nosso sistema detectou possíveis atividades ilegais em áreas diversas do globo. Sua missão é inspecionar os navios através das coordenadas geográficas. Encontre os barcos suspeitos e ajude a manter os mares seguros.";
            break;
        case 2:
            modalTitulo.textContent = "Missão 2 - Orange";
            modalH4.textContent = "Coordenadas Espalhadas";
            modalTexto.textContent =
                "Novas denúncias indicam a presença de navios com comportamento suspeito. Utilize as coordenadas para investigar os setores indicados e identificar atividades de pesca ilegal ou pirataria.";
            break;
        case 3:
            modalTitulo.textContent = "Missão 3 - Gold";
            modalH4.textContent = "Monitoramento Global";
            modalTexto.textContent =
                "Os radares captaram embarcações navegando em áreas de risco. Informe coordenadas para localizar e verificar navios que possam estar violando leis marítimas.";
            break;
        case 4:
            modalTitulo.textContent = "Missão 4 - Purple";
            modalH4.textContent = "Última Patrulha";
            modalTexto.textContent =
                "Última etapa da operação. Barcos ilegais podem estar em qualquer lugar. Use sua habilidade para encontrá-los a tempo. Boa sorte, comandante.";
            break;
    }
}
