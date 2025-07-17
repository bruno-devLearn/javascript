// Função para obter os dados do localStorage, retorna array vazio se não houver dados
const getData = () => JSON.parse(localStorage.getItem("pessoas")) || [];

// Função para salvar o array de pessoas no localStorage
export const setData = (pessoas) =>
    localStorage.setItem("pessoas", JSON.stringify(pessoas));

// Exporta o array de pessoas já carregado do localStorage
export const pessoas = getData();

console.log(pessoas);
