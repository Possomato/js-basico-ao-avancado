// aula 01 - mod 6 - objetos

//padroes de projetos:
// factory functions / constructor functions / classes

// exemplo de factory function
function criaPessoa(nome, sobrenome){
  return{
    nome,
    sobrenome,
    nomeCompleto() {
      return`${this.nome} ${this.sobrenome}`
    }
  }
}
const pessoa1 = criaPessoa('gabriel', 'possomato')
console.log(pessoa1.nomeCompleto())


// exemplo de constructor function

function Pessoa(nome, sobrenome){
  this.nome = nome
  this.sobrenome = sobrenome
}

// a diferença é que o 'new' cria um objeto vazio, atrelando a palavra 'this' ao objeto
const pessoa2 = new Pessoa('gabriel', 'possomato')