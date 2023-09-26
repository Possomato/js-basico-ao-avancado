// aula 30 - mod 3

function mostraHora(){
  let data = new Date()

  return data.toLocaleTimeString('pt-br', {
    hour12: false
  })
}

const timer = setInterval(() => console.log(mostraHora()), 1000) // configura algum intervalo de tempo para que a função seja executada

setTimeout(() => clearInterval(timer), 5000) // executa determinada função apenas uma vez, em um determinado tempo