import Pessoa from "../models/Pessoa.js";

// Recupera os dados do localStorage e transforma em instâncias da classe Pessoa
export const pessoas = (JSON.parse(localStorage.getItem("pessoas")) || []).map(
    (p, i) => {
        return new Pessoa(p.nome, p.idade, p.peso, p.altura, i);
    }
);

export function setData(data) {
    // Converte instâncias de Pessoa para objetos simples
    const plainData = data.map((p) => ({
        nome: p.nome,
        idade: p.idade,
        peso: p.peso,
        altura: p.altura,
    }));
    localStorage.setItem("pessoas", JSON.stringify(plainData));
}
