// aula 01 - mod 8 - JS assincrono

function aleatorio(min, max){
  min *= 1000
  max *= 1000
  return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(mnsgm, tempo){
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      resolve(mnsgm)
    }, tempo)
  })
}

esperaAi('frase 1', aleatorio(1, 3))
  .then(resposta => {
    console.log(resposta)
    return esperaAi('frase 2', aleatorio(1, 3))
  })
  .then(resposta => {
    console.log(resposta)
  })
