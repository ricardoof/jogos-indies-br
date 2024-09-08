function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    if(!campoPesquisa) {
        section.innerHTML = "<p class=nao-encontrado>Nada foi encontrado. Você precisa digitar o nome de um jogo ou estudio</p>"
        return;
    }
    campoPesquisa = campoPesquisa.toLowerCase();

    let resultados = "";
    let nome = "";
    let estudio = "";
    let tags = "";
    let imagensPossiveis = [];

    for (let jogo of jogos) {
        nome = jogo.nome.toLowerCase();
        estudio = jogo.estudio.toLowerCase();
        tags = jogo.tags.toLocaleLowerCase();

        if(nome.includes(campoPesquisa) || estudio.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
                <div class="item-resultado">
                    <h2>${jogo.nome}</h2>
                    <h3>${jogo.estudio}</h2>
                    <p class="descricao-meta">${jogo.descricao}</p>
                    <a href=${jogo.link} target="_blank">Página na Steam</a>
                </div>
            `;
            imagensPossiveis.push(jogo.imagem);
        }
    }

    if(!resultados) {
        resultados = "<p class=nao-encontrado>Jogo não encontrado ou não cadastrado</p>"
    }

    section.innerHTML = resultados;
    if (imagensPossiveis.length > 0) {
        const indiceAleatorio = Math.floor(Math.random() * imagensPossiveis.length);
        const imagemAleatoria = imagensPossiveis[indiceAleatorio];
        document.body.style.backgroundImage = `url(${imagemAleatoria})`;
    }
}
