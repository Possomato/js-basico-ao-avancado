// aula 05 - mod 6 - objetos
// manipulando prototypes

// Object.keys - retorna as chaves
// Object.freeze - congela um objeto
// Object.defineProperties - define várias propriedades
// Object.defineProperty - define uma propriedade
 

function Carro(modelo, preco){
  this.modelo = modelo
  this.preco = preco
}

Carro.prototype.desconto = function(percentual) {
  this.preco = this.preco - (this.preco * (percentual / 100))
}

const golf = new Carro('golf', 80000)
golf.desconto(10)
console.log(golf)

const jetta = {
  modelo: 'jetta',
  preco: 200000,
  versao: 'GLI'
}

Object.setPrototypeOf(jetta, Carro.prototype)
jetta.desconto(20)
console.log(jetta)