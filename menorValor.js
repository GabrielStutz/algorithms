const livros = require("./listaLivros");

function menorValor(arrProdutos, posicaoInicial) {
    let maisBarato = posicaoInicial;

    for(let atual = posicaoInicial; atual < arrProdutos.length; atual++) {
        if(arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
            maisBarato = atual;
        }
    }
    return maisBarato;
}

module.exports = menorValor;

/*  Resolução alternativa
function menorValor(arrPosicao, posicaoInicial) {
    let menorPreco = posicaoInicial;

    for(let i = 0; i < arrPosicao.length; i++) {
        if(arrPosicao[menorPreco].precos > arrPosicao[i].preco) {
            menorPreco = i;
        }
    }
    return menorPreco;
}

module.exports = menorValor;
*/