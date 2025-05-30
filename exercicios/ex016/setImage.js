import { getDados } from "./req.js";
import { afterLiCreated } from "./ex16.js";

async function get() {
    const dadosGlobais = await getDados();
    setImageFunct(dadosGlobais);
}

const videoClass = document.querySelectorAll(".videos");

function setImageFunct(dadosGlobais) {
    for (let i = 0; i < videoClass.length; i++) {
        for (let index = 0; index < dadosGlobais.videos[i].length; index++) {
            const video = document.createElement("li");

            const urlImage = `https://img.youtube.com/vi/${dadosGlobais.videos[i][index].videoId}/maxresdefault.jpg`;
            const image = document.createElement("img");

            image.setAttribute("src", urlImage);
            image.classList.add("capa-thumb");

            const urlVideo = `https://www.youtube.com/embed/${dadosGlobais.videos[i][index].videoId}`;

            video.setAttribute("data-src", urlVideo);
            video.appendChild(image);

            videoClass[i].appendChild(video);
        }
    }
    const categoriaTitle = document.querySelectorAll(".tituloCategoria");

    for (let x = 0; x < videoClass.length; x++) {
        categoriaTitle[x].textContent = dadosGlobais.categorias[x].titulo;
    }

    afterLiCreated();
}

get();
