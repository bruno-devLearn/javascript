const videoClass = document.querySelectorAll(".videos");

const prevBtns = document.querySelectorAll("#btnPrev");
const nextBtns = document.querySelectorAll("#btnNext");

const mover = 100;
const direita = mover;
const esquerda = -mover;

prevBtns.forEach((prevBtn, index) => {
    prevBtn.addEventListener("click", () => {
        videoClass[index].scrollBy(esquerda, 0);
    });
});

nextBtns.forEach((nextBtn, index) => {
    nextBtn.addEventListener("click", () => {
        videoClass[index].scrollBy(direita, 0);
    });
});

const modalDiv = document.querySelector(".modal");
const videoIfreme = document.querySelector("#iframeVideo");

export function afterLiCreated() {
    const liTags = document.querySelectorAll(".videos li");

    liTags.forEach((li) => {
        li.addEventListener("click", () => {
            const videoUrl = li.dataset.src;

            modalDiv.style.display = "block";
            videoIfreme.setAttribute("src", videoUrl);
        });
    });
}

const close = document.querySelector("#btn");

close.addEventListener("click", () => {
    modalDiv.style.display = "none";
    videoIfreme.setAttribute("src", "");
});
