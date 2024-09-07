function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let resultados = ""

    for (let jogo of jogos) {
        resultados += `
            <div class="item-resultado">
                <h2>${jogo.nome}</h2>
                <p class="descricao-meta">${jogo.descricao}</p>
                <a href=${jogo.link} target="_blank">Página na Steam</a>
            </div>
        `
    }

    section.innerHTML = resultados;
}
