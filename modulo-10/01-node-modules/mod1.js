class Pessoa{
  constructor(nome){
    this.nome = nome
  }

  falaNome(){
    return console.log(`olá meu nome é ${this.nome}`)
  }
}

exports.classPessoa = Pessoa