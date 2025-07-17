const getData = () => JSON.parse(localStorage.getItem("pessoas")) || [];

export const setData = (pessoas) =>
    localStorage.setItem("pessoas", JSON.stringify(pessoas));

export const pessoas = getData();

console.log(pessoas);
