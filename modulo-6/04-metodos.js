// aula 04 - mod 6 - objetos
// metodos uteis para objetos

// Object.keys - retorna as chaves
// Object.freeze - congela um objeto
// Object.defineProperties - define várias propriedades
// Object.defineProperty - define uma propriedade
 

const produto = {
  nome: 'caneca',
  preco: 1.8
}

// ...rest - copia um objeto
const produto2 = {...produto, material: 'inox'}
produto2.nome = 'coneca 2'
console.log(produto)
console.log(produto2)