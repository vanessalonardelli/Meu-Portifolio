const botaoTema = document.querySelector("#botao-tema");

botaoTema.addEventListener("click", () => {
    document.body.classList.toggle("tema-escuro");
});

const projetos = [
    {
        titulo: "Portfólio Pessoal",
        descricao: "Desenvolvido como projeto prático acadêmico utilizando HTML e CSS.",
        tecnologias: ["HTML", "CSS", "JavaScript"]
    },
    {
        titulo: "Gerenciamento de Estoque",
        descricao: "Projeto acadêmico desenvolvido em Python usando matrizes para gerenciamento de produtos, categorias e cliente em colaboração.",
        tecnologias: ["Python"]
    },
    {
        titulo: "Bot-Discord",
        descricao: "Projeto acadêmico desenvolvido em Java utilizando a biblioteca JDA, com funcionalidades automáticas para um servidor do Discord.",
        tecnologias: ["Java", "JDA"]
    },
    {
        titulo: "Nutricore",
        descricao: "Aplicativo de monitoramento de saúde desenvolvido como projeto pessoal e acadêmico, com recursos para acompanhamento de alimentação, atividades físicas e evolução do usuário, utilizando HTML, CSS, Kotlin, SQL e Firebase.",
        tecnologias: ["HTML", "CSS", "Kotlin", "SQL", "Firebase"]
    }
];

const listaProjetos = document.querySelector("#lista-projetos");

function criarCard(projeto) {
    const card = document.createElement("article");
    card.classList.add("projeto");

    const titulo = document.createElement("h3");
    titulo.textContent = projeto.titulo;

    const descricao = document.createElement("p");
    descricao.textContent = projeto.descricao;

    card.append(titulo, descricao);
    return card;
}

for (const projeto of projetos) {
    listaProjetos.append(criarCard(projeto));
}
