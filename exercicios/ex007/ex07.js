// DOM dos inputs
const inputC = document.querySelector("#numeroC");
const inputF = document.querySelector("#numeroF");
const inputK = document.querySelector("#numeroK");

// DOM dos sliders
const sliderC = document.querySelector("#celsius");
const sliderF = document.querySelector("#fahrenheit");
const sliderK = document.querySelector("#kelvin");

// faz a conversão de C pra F e K
function atualizaC() {
    inputC.value = sliderC.value;

    sliderF.value = parseFloat(inputC.value) * (9 / 5) + 32;
    inputF.value = sliderF.value;

    sliderK.value = parseFloat(inputC.value) + 273.15;
    inputK.value = sliderK.value;
}

// faz a conversão de F pra C e K
function atualizaF() {
    inputF.value = sliderF.value;

    sliderC.value = parseFloat(inputF.value - 32) / 1.8;
    inputC.value = sliderC.value;

    sliderK.value = parseFloat((inputF.value - 32) / 1.8) + 273.15;
    inputK.value = sliderK.value;
}

// faz a conversão de K pra C e F
function atualizaK() {
    inputK.value = sliderK.value;

    sliderC.value = parseFloat(inputK.value) - 273.15;
    inputC.value = sliderK.value;

    sliderF.value = parseFloat((inputK.value - 273.15) * 1.8) + 32;
    inputK.value = sliderK.value;
}

// adiciona o evento input e chama sua respectiva função
sliderC.addEventListener("input", atualizaC);
sliderF.addEventListener("input", atualizaF);
sliderK.addEventListener("input", atualizaK);

// botao de zerar
const reset = document.querySelector("#btnZerar");

// reseta os campos
function resetaCampos() {
    inputC.value = "0";
    sliderC.value = inputC.value;
    atualizaC();
}

// adiciona o evento click e chama a função de resetar
reset.addEventListener("click", resetaCampos);
