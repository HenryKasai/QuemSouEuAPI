const iniciar = async () => {
    const div = document.querySelector('div');
    const response = await fetch('/QuemSouEuAPI');
    const result = await response.json();
    div.insertAdjacentHTML("beforebegin", `<div>Nome: ${result.nome}</div>`);
    div.insertAdjacentHTML("beforebegin", `<div>Sobrenome: ${result.sobrenome}</div>`);
    div.insertAdjacentHTML("beforebegin", `<div>Perfil Github: <a href="result.url">${result.url}</a></div>`);
}; 

document.addEventListener('DOMContentLoaded', iniciar);