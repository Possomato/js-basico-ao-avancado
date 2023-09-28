// aula 08 - mod 4

// this -  

function criarPessoa(nome, sobrenome){
  return{
    nome,
    sobrenome,
    peso: 70,
    fala : function(assunto){
      return `${nome} está falando ${assunto}, ele tem ${this.peso} kgs`
    }
  }
}

const pessoa1 = criarPessoa('gabriel', 'possomato')

console.log(pessoa1.fala('sobre dieta'))