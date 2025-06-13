export const positions = [
    21, 48, 49, 83, 112, 117, 134, 149, 156, 159, 164, 191, 217, 221, 232, 241,
    257, 263, 271, 272, 302, 307,
];

export function setShipsPosition() {
    for (let i = 0; i < positions.length; i++) {
        const divCoords = document.querySelectorAll(".map div div");
        const img_BlackShips = document.createElement("img");

        img_BlackShips.setAttribute("src", "./images/navio-black.png");
        img_BlackShips.style.width = "25px";

        img_BlackShips.style.zIndex = "1";

        img_BlackShips.style.position = "relative";
        img_BlackShips.style.top = "-15.5px";
        img_BlackShips.style.left = "-6.5px";

        divCoords[positions[i]].appendChild(img_BlackShips);
    }
}
