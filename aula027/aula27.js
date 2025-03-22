function* cores() {
    yield "Vermelho";
    yield "Verde";
    yield "Azul";
}

const itc = cores();
console.log(itc.next().value);
console.log(itc.next().value);
console.log(itc.next().value);
console.log(itc.next().value);

/* -------------------------- */

function* perguntas() {
    const nome = yield "Qual seu nome?";
    const esporte = yield "Qual seu esporte favorito?";
    return "seu nome é " + nome + ", seu esporte favorito é " + esporte;
}

const itp = perguntas();
console.log(itp.next().value);
console.log(itp.next("Bruno").value);
console.log(itp.next("Formula 1").value);

/* -------------------------- */

function* contador() {
    let i = 0;
    while (true) {
        yield i++;
    }
}

const iti = contador();
console.log(iti.next().value);
console.log(iti.next().value);
console.log(iti.next().value);
