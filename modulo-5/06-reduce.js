// aula 06 - mod 5

// reduce: retorna um elemnto do array


// somar todos os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const numerosSomados = numeros.reduce((acumulador, valor, indice, array) => {
  acumulador += valor
  return acumulador
}, 0)
console.log(numerosSomados)

// numeros pares
const numeroPares = numeros.reduce((acumulador, valor) => {
  valor % 2 === 0 ? acumulador.push(valor) : undefined
  return acumulador
}, [])
console.log(numeroPares)

//dobro dos valores
const numerosDobrados = numeros.reduce((acumulador, valor) => {
  acumulador.push(valor * 2)
  return acumulador
}, [])
console.log(numerosDobrados)