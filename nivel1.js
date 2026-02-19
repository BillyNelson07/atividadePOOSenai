console.log("Exercício 1_____________________________________________________");

class Livro {
  constructor(titulo, autor, ano) {
    ((this.titulo = titulo), (this.autor = autor), (this.ano = ano));
  }

  descrever() {
    return `O livro ${this.titulo} foi publicado por ${this.autor} no ano de ${this.ano}.`;
  }
}

const livro1 = new Livro("IT", "Stephen King", 1986);
const livro2 = new Livro("The Long Walk", "Stephen King", 1979);
const livro3 = new Livro("The Shining", "Stephen King", 1977);

console.log(livro1.descrever());
console.log(livro2.descrever());
console.log(livro3.descrever());

console.log(
  "_________________________________________________________________________",
);
console.log("Exercício 2_____________________________________________________");

class Aluno {
  constructor(notas) {
    this.notas = notas;
  }

  calcularMedia() {
    let notasMedia = this.notas;
    let somaDasNotas = 0;

    for (let iterator = 0; iterator < notasMedia.length; iterator++) {
      somaDasNotas += notasMedia[iterator];
    }

    return somaDasNotas / notasMedia.length;
  }

  situacao() {
    if (this.calcularMedia() > 7) {
      return "Aprovado!";
    } else {
      return "Reprovado!";
    }
  }
}

const aluno1 = new Aluno([8, 9, 10]);
const aluno2 = new Aluno([9, 6, 1]);
const aluno3 = new Aluno([2, 4, 6]);

console.log(aluno1.situacao());
console.log(aluno2.situacao());
console.log(aluno3.situacao());

console.log(
  "_________________________________________________________________________",
);

console.log("Exercício 3_____________________________________________________");

class Produto {
  constructor(preco) {
    this.preco = preco;
  }
}

class CarrinhoDeCompras {
  constructor() {}

  listarProdutosNoCarrinho() {
    let produtosNoCarrinho = [];
    return produtosNoCarrinho;
  }

  adicionarProdutoNoCarrinho(produto) {
    let listaDeProduto = this.listarProdutosNoCarrinho();
    return listaDeProduto.unshift(produto);
  }

  calcularTotalEmProdutosNoCarrinho() {
    let quantidadeDeItensNoCarrinho = this.listarProdutosNoCarrinho().length;
    let valorTotalEmProdutosNoCarrinho = 0;
    for (
      let iterator = 0;
      iterator < quantidadeDeItensNoCarrinho.length;
      iterator++
    ) {
      valorTotalEmProdutosNoCarrinho += quantidadeDeItensNoCarrinho[iterator];
    }
    return valorTotalEmProdutosNoCarrinho;
  }
}

const produto1 = new Produto(10);
const carrinho1 = new CarrinhoDeCompras();
console.log(carrinho1.adicionarProdutoNoCarrinho(produto1));
console.log(carrinho1.listarProdutosNoCarrinho());
