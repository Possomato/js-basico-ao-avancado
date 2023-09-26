// aula 29 - mod 3

try {
  console.log(naoExisto);
} catch (erro) {
  console.log('naoExisto não existe');
  console.log(erro);
}

// Agora, vamos lançar uma exceção personalizada
throw new Error('Isso é uma exceção personalizada');
