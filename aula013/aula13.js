let num = 40;

if (num > 10) {
    console.log("numeral maior que 10");
    if (num > 50) {
        console.log("numeral maior que 50");
    }
} else if (num > 5) {
    console.log("numeral estra entre 6 e 10");
} else {
    console.log("numeral menor ou igual a 5");
}

console.log("fim do programa");

/* -------------------------- */

let energia = 100;
let clima = "chovendo";

if (energia > 70 && clima == "sol") {
    console.log("vou a praia");
} else {
    console.log("vou ao cinema");
}
