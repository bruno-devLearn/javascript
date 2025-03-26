// seleção de input's
const nota1Input = document.querySelector("#nota1");
const nota2Input = document.querySelector("#nota2");
const mediaInput = document.querySelector("#media");

// btn de calcular
const sendBtn = document.querySelector("#btnCalcular");

// adicipna um evento de clique no btn
sendBtn.addEventListener("click", (event) => {
    event.preventDefault();

    let nota1 = parseFloat(nota1Input.value);
    let nota2 = parseFloat(nota2Input.value);
    let soma = (nota1 + nota2) / 2;

    mediaInput.value = soma;
    situacao(soma);
});

// define a situação do aluno
function situacao(soma) {
    let sit = "";

    if (soma >= 7 && soma <= 10) {
        sit = "Aprovado(a)";
    } else if (soma >= 3 && soma < 7) {
        sit = "Recuperação";
    } else if (soma > 0 && soma < 3) {
        sit = "Reprovado(a)";
    }

    situacaoFunction(sit);
}

// onde mostra a situação do aluno
const situacaoInput = document.querySelector("#situacao");

// muda o status e a formatação da situação
function situacaoFunction(sit) {
    switch (sit) {
        case "Aprovado(a)":
            situacaoInput.value = "Aprovado(a)";
            situacaoInput.classList.remove("reprovado");
            situacaoInput.classList.remove("recuperacao");
            situacaoInput.classList.add("aprovado");
            break;
        case "Recuperação":
            situacaoInput.value = "Recuperação";
            situacaoInput.classList.remove("aprovado");
            situacaoInput.classList.remove("reprovado");
            situacaoInput.classList.add("recuperacao");
            break;
        case "Reprovado(a)":
            situacaoInput.value = "Reprovado(a)";
            situacaoInput.classList.remove("aprovado");
            situacaoInput.classList.remove("recuperacao");
            situacaoInput.classList.add("reprovado");
            break;
    }
}

// flash menssage
const menssage = document.querySelector("#aviso");
const formTag = document.querySelector("form");

// define a flash menssage
function validarNumero() {
    let nota1 = nota1Input.value;
    let nota2 = nota2Input.value;

    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
        menssage.textContent = "Digite uma nota entre 0.0 e 10.0";
        menssage.classList.add("alerta");
        formTag.reset();
        setTimeout(() => {
            menssage.textContent = "";
            menssage.classList.remove("alerta");
        }, 2000);
    }
}

// botao de limpar
const clearBtn = document.querySelector("#btnLimpar");

// adiciona um evento ao botao de limpar
clearBtn.addEventListener("click", (e) => {
    e.preventDefault();

    formTag.reset();
    situacaoInput.classList.remove("aprovado");
    situacaoInput.classList.remove("recuperacao");
    situacaoInput.classList.remove("reprovado");
});
