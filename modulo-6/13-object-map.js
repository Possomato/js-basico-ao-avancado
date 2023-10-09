// aula 13 - mod 6 - estrutura de dados com map

const pessoas = [
  { id: 3, nome: 'gabriel'},
  { id: 1, nome: 'rafael'},
  { id: 2, nome: 'miguel'}
]

const novasPessoas = new Map()

for (const pessoa of pessoas){
  const { id } = pessoa
  novasPessoas.set(id, { ...pessoa} )
}

console.log(novasPessoas) 