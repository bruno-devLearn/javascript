const cursos = ["HTML", "JS", "CSS", "PHP", "REACT"];

let c = cursos.map((el, i) => {
    return el;
});

console.log(c);

/* ------------------------------- */

let el2 = document.getElementsByTagName("div");
el2 = [...el2];
console.log(el2);

el2.map((e, i) => {
    e.innerHTML = "CFB cursos";
});

/* ------------------------------- */

const el3 = document.getElementsByTagName("div");
const val = Array.prototype.map.call(el3, ({ innerHTML }) => innerHTML);

/* ------------------------------- */

const converterInt = (e) => parseInt(e);
const dobrar = (e) => e * 2;
let num = ["1", "2", "3", "4", "5"].map(dobrar);

console.log(num);
