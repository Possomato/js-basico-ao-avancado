// aula 03 - mod 6 - objetos

// get = obtem o valor
// set = altera o valor


//exemplo constructor
function Produto(nome, preco, estoque){
  this.nome = nome
  this.preco = preco

  Object.defineProperty(this, 'estoque', {
    enumerable: true, //mostra a chave
    configurable: false, //define se pode alterar a chave
    get: () => estoque,
    set: (valor) => console.log(valor)
  })
}

// const p1 = new Produto('camise', 20, 3)
// p1.estoque = 213123
// console.log(p1)
// p1.estoque = 'teste'
// console.log(p1.estoque)

//exemplo factory
function criaProduto(nome){
  return{
    get nome(){
      return nome
    },
    set nome(valor){
      nome = valor
    }
  }
}

const p2 = criaProduto('camiseta')
console.log(p2.nome)