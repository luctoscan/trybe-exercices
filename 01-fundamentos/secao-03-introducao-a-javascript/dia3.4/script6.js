let leitor = {
  nome: "Julia",
  sobrenome: "Pessoa",
  idade: 21,
  livrosFavoritos: [
    {
      titulo: "O Pior Dia de Todos",
      autor: "Daniela Kopsch",
      editora: "Tordesilhas",
    },
  ],
};

//Acesse as chaves nome, sobrenome e titulo – esta encontra-se dentro da chave livrosFavoritos – e faça um console.log
console.log(
  "O livro favorito de " +
    leitor.nome +
    " " +
    leitor.sobrenome +
    ' se chama "' +
    leitor.livrosFavoritos[0].titulo +
    '"'
);

// Adicione um novo livro favorito na chave livrosFavoritos, que é um array
leitor.livrosFavoritos.push({
  titulo: "Harry Potter e o Prisioneiro de Azkaban",
  autor: "JK Rowling",
  editora: "Rocco",
});

// Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: “Julia tem {quantidade} livros favoritos”.

console.log(
  leitor["nome"] +
    " tem " +
    leitor["livrosFavoritos"].length +
    " livros favoritos."
);
