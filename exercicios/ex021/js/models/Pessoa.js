// Classe que representa uma pessoa e calcula seu IMC e classificação
export default class Pessoa {
    static ultimoId = 0; // Adiciona um contador estático

    // Propriedades privadas
    #id;
    #nome;
    #idade;
    #peso;
    #altura;
    #imc;
    #classificacao;

    // Construtor inicializa os atributos e calcula IMC e classificação
    constructor(nome, idade, peso, altura, id) {
        this.#id = id; // Recebe o id passado
        this.#nome = nome;
        this.#idade = idade;
        this.#peso = peso;
        this.#altura = altura;
        this.#imc = this.calculaIMC(this.#peso, this.#altura);
        this.#classificacao = this.classificaIMC(this.#imc);
    }

    // Método para calcular o IMC
    calculaIMC(peso, altura) {
        return (peso / (altura * altura)).toFixed(1);
    }

    // Método para classificar o IMC conforme faixas
    classificaIMC(imc) {
        if (imc >= 40) {
            return "Obesidade III";
        } else if (imc >= 35) {
            return "Obesidade II";
        } else if (imc >= 30) {
            return "Obesidade I";
        } else if (imc >= 25) {
            return "Sobrepeso";
        } else if (imc >= 18.5) {
            return "Peso normal";
        } else {
            return "Abaixo do peso";
        }
    }

    // Getters para acessar os atributos privados
    get id() {
        return this.#id;
    }

    get nome() {
        return this.#nome;
    }

    get idade() {
        return this.#idade;
    }

    get peso() {
        return this.#peso;
    }

    get altura() {
        return this.#altura;
    }

    get imc() {
        return this.#imc;
    }

    get classificacao() {
        return this.#classificacao;
    }

    // Setters para modificar os atributos privados
    set id(novoId) {
        this.#id = novoId;
    }

    set nome(novoNome) {
        this.#nome = novoNome;
    }

    set idade(novaIdade) {
        this.#idade = novaIdade;
    }

    // Ao alterar peso, recalcula IMC e classificação
    set peso(novoPeso) {
        this.#peso = novoPeso;
        this.#imc = this.calculaIMC(this.#peso, this.#altura);
        this.#classificacao = this.classificaIMC(this.#imc);
    }

    // Ao alterar altura, recalcula IMC e classificação
    set altura(novaAltura) {
        this.#altura = novaAltura;
        this.#imc = this.calculaIMC(this.#peso, this.#altura);
        this.#classificacao = this.classificaIMC(this.#imc);
    }
}
