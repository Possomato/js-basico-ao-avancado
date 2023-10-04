// aula 05 - mod 5

// map: retorna array do mesmo tamanho, com alteração nos valores


//dobrar valores
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 271]
// const numerosDobrados = numeros.map((valor, indice, array) => valor * 2)

const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55},
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47}
]

console.log(pessoas.map((valor) => valor.nome))
console.log(pessoas.map((valor) => ({idade: valor.idade})))
console.log(pessoas.map((valor, indice) => {
  valor.id = indice
  return valor
}))
