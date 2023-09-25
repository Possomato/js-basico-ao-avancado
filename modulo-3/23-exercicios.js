// aula 23 - mod 3

// escreva um função que recebe 2 números e retorne o maior deles

// const qualEhMaior = (num1, num2) => num1 > num2 ? `${num1} > ${num2}` : `${num1} < ${num2}`


// função que recebe 2 argumentos, sendo largura e altura de uma imagem e retorna true se for paisagem 

// const ePaisagem = (largura, altura) => largura > altura

// Escreva uma função que recebe um número e
// retorne o seguinte:
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz
// Número NÃO é divisível por 3 e 5 = Retorna o próprio número
// Checar se o número é realmente um número = Retorna o próprio número

const fizzBuzz = (num) => {

  if (typeof num === 'number'){  
  if(num % 3 == 0 && num % 5 == 0){
    return 'FizzBuzz'
  } else if ( num % 3 == 0){
    return 'Fizz'
  } else if ( num % 5 == 0){
    return 'Buzz'
  } else{
    return num
  }} else{
    return `Não é um número, é ${typeof num}`
  }
}

console.log(fizzBuzz(7))