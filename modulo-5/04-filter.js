// aula 04 - mod 5


// filter: sempre retorna um array com a mesma quantidade de elementos, ou menos

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 271]

// forma bruta com functions

// function maiorQueDez(array){
//   const numerosMaioresQueDez = []
//   for (const numero of array) {
//     if(numero > 10){
//       numerosMaioresQueDez.push(numero)
//     }
//   }
//   console.log(numerosMaiorQueDez)
// }


// com filter

const numerosFiltrados = numeros.filter((valor) => valor > 10)
// console.log(numerosFiltrados)


const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23},
  { nome: 'Eduardo', idade: 55},
  { nome: 'Letícia', idade: 19},
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 }
]

const pessoasComNomeGrande = pessoas.filter((valor) => valor.nome.length >= 5)
const pessoasVelhas = pessoas.filter((valor) => valor.idade > 50)
const pessoasComUltimaLetraA = pessoas.filter((valor) => valor.nome.endsWith('a'))


console.log(pessoasComNomeGrande)
console.log(pessoasVelhas)
console.log(pessoasComUltimaLetraA)