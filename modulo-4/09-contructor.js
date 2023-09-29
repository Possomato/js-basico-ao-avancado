// aula 09 - mod 4

// função construtora = cria e retorna o objeto
// sempre deve ser iniciado com letra maiúsculuna
// não usamos o verbo, ex. criaPessoa = Pessoa (new)

// new cria um novo objeto vazio, faz o this apontar para ele e retorna

function Pessoa(nome, sobrenome){
  this.nome = nome
  this.sobrenome = sobrenome

  this.metodo = () => console.log(nome + ': sou um método')
}

const pessoa1 = new Pessoa('gabriel', 'possomato')

pessoa1.metodo()