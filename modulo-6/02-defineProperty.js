// aula 02 - mod 6 - objetos

function Produto(nome, preco, estoque){
  this.nome = nome
  this.preco = preco

  Object.defineProperty(this, 'estoque', {
    enumerable: true, //mostra a chave
    value: estoque, // valor da chave
    writable: false, //define se o valor pode ser alterado
    configurable: false //define se pode alterar a chave
  })
}

const p1 = new Produto('camise', 20, 3)
p1.estoque = 213123
console.log(p1)