// aula 01 - mod 7 - classes

class Pessoa{
  constructor(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
  }

  falar(){
    console.log(`${this.nome} está falando`)
  }
}

const pessoa = new Pessoa('gabriel', 'possomato')
pessoa.falar()