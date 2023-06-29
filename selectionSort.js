const livros = require('./listaLivros');
const menorValor = require('./menorValor')

livros.forEach((_, indice) => {
    let menor = menorValor(livros, indice)
   
    let livroAtual = livros[indice];
    console.log('Posição atual: ', indice);
    console.log('Livro atual: ', livros[indice]);
    let livroMenorPreco = livros[menor];
    console.log('Livro mais barato: ', livros[menor])
   
    livros[indice] = livroMenorPreco
    livros[menor] = livroAtual 
   })
   
   console.log(livros)
/*
for(let atual = 0; atual < livros.length; atual++) {
    let menor = menorValor(livros, atual);

    let livroAtual = livros[atual];
    console.log('Posição atual: ', atual);
    console.log('Livro atual: ', livros[atual]);
    let livroMenorPreco = livros[menor];
    console.log('Livro mais barato: ', livros[menor])

    livros[atual] = livroMenorPreco;
    livros[menor] = livroAtual;
}

console.log(livros)
*/