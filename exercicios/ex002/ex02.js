// pega os inputs
const nomeInput = document.querySelector("#nome");
const idadeInput = document.querySelector("#idade");
const pesoInput = document.querySelector("#peso");
const alturaInput = document.querySelector("#altura");

// input de resultado
const resultInput = document.querySelector("#resultadoImc");

// campo de resultados
const nomeDiv = document.querySelector("#nome-div");
const idadeDiv = document.querySelector("#idade-div");
const pesoDiv = document.querySelector("#peso-div");
const alturaDiv = document.querySelector("#altura-div");
const imcDiv = document.querySelector("#imc-div");

// status do peso
const menssage = document.querySelector("#aviso");

let menssageFunct = function status(calculo) {
    if (calculo < 18.5) {
        return (menssage.textContent = "Baixo Peso");
    } else if (calculo < 25) {
        return (menssage.textContent = "Baixo Normal");
    } else if (calculo < 26) {
        return (menssage.textContent = "Baixo Normal");
    } else if (calculo < 30) {
        return (menssage.textContent = "Sobrepeso");
    } else if (calculo < 35) {
        return (menssage.textContent = "Obesidade I");
    } else if (calculo < 40) {
        return (menssage.textContent = "Obesidade II");
    } else if (calculo > 40) {
        return (menssage.textContent = "Obesidade III");
    } else {
        return (menssage.textContent = "Informe seu peso corretamente");
    }
};

// coloca os resultados no campo
function setResultado(calculo) {
    nomeDiv.textContent = nomeInput.value;
    idadeDiv.textContent = idadeInput.value + " anos";
    pesoDiv.textContent = pesoInput.value + " Kg";
    alturaDiv.textContent = alturaInput.value + " m";
    imcDiv.textContent = `${calculo.toFixed(2)} ${menssageFunct(calculo)}`;
}

// botoes de limpar e enviar
const send = document.querySelector("#btnEnviar");
const clear = document.querySelector("#btnLimpar");

// faz o calculo e chama a função
send.addEventListener("click", function (event) {
    event.preventDefault();
    let calculo =
        parseFloat(pesoInput.value) /
        (parseFloat(alturaInput.value) * parseFloat(alturaInput.value));

    resultInput.value = calculo.toFixed(2);

    setResultado(calculo);
});
