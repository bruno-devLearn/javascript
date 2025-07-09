// programa principal
// POO = PROGRAMAÇÃO ORIENTADA A OBJETOS

// classes = modelos ou moldes de objetos
// objetos = sao abstrações ou representações de 'coisas' que existem no mundo
// objeto = instancia ou objeto do tipo | objeto é um tipo de dados

class Pessoa {
    static totalPessoas = 0;

    // metodos = funções ou comportamentos
    constructor(nome, idade, peso, altura) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.imc = this.calculaIMC(this.peso, this.altura);
        this.classificacaoIMC = this.classificacaoIMC(this.imc);
        Pessoa.totalPessoas += 1;
    }

    calculaIMC(peso, altura) {
        const imc = peso / (altura * altura);
        return parseFloat(imc.toFixed(1));
    }

    classificacaoIMC(imc) {
        if (imc >= 40) {
            return "Obesidade III";
        } else if (imc >= 35) {
            return "Obesidade II";
        } else if (imc >= 30) {
            return "Obesidade I";
        } else if (imc >= 25) {
            return "Sobrepeso";
        } else if (imc >= 18.5) {
            return "Peso Normal";
        } else if (imc < 18.5) {
            return "Abaixo do Peso";
        }
    }

    // get = pegar
    get Nome() {
        return this.nome;
    }

    get Idade() {
        return this.idade;
    }

    get Peso() {
        return this.peso;
    }

    get Altura() {
        return this.altura;
    }

    get totalPessoas() {
        return Pessoa.totalPessoas;
    }

    //set = setar;
    set Nome(novoNome) {
        this.nome = novoNome;
    }

    set Idade(novaIdade) {
        this.idade = novaIdade;
    }

    set Peso(novoPeso) {
        this.peso = novoPeso;
    }

    set Altura(novaAltura) {
        this.altura = novaAltura;
    }
}

// criar novo objeto a partir da class, instanciar

let pessoa1 = new Pessoa("Bruno", 17, 55.3, 1.5);
let pessoa2 = new Pessoa("Maria", 66, 70.3, 1.66);
let pessoa3 = new Pessoa("Ana", 20, 42.3, 1.41);
let pessoa4 = new Pessoa("Bia", 50, 98.7, 1.52);

console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);
console.log(pessoa4);

console.log(pessoa1.nome);
pessoa1.nome = "bruno queiroz";
console.log(pessoa1.nome);

console.log(Pessoa.totalPessoas);
