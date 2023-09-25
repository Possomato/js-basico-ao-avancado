// aula 21 - mod 3

const golf = {
  modelo: 'gti',
  motor: 'ea-888',
  bancos: 'xadrez',
  cor: 'nardo grey'
}

// for in -> lê os índices ou chaves do objeto 

for (let chave in golf){
  console.log(chave, golf[chave])
}