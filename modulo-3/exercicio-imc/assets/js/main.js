const botao = document.querySelector('#botao')
const resultado = document.querySelector('#resultado')
let classificacao = ''

function calcularIMC(){
  const peso = document.querySelector('#peso').value
  const altura = document.querySelector('#altura').value

  imc = (peso / altura ** 2).toFixed(2)

  return(imc)
}

function classificarIMC(){
  calcularIMC()

  if(imc < 18.5){
    classificacao = `seu IMC é ${imc} (Abaixo do peso)`
  }else if (imc >= 18.5 && imc <= 24.9){
    classificacao = `seu IMC é ${imc} (Peso normal)`
  }else if (imc >= 25 && imc <= 29.9){
    classificacao = `seu IMC é ${imc} (Sobrepeso)`
  }else if (imc >= 30 && imc <= 34.9){
    classificacao = `seu IMC é ${imc} (Obesidade grau 1)`
  }else if (imc >= 35 && imc <= 39.9){
    classificacao = `seu IMC é ${imc} (Obesidade grau 2)`
  }else{
    classificacao = `seu IMC é ${imc} (Obesidade grau 3)`
  }

  return(classificacao)
}

botao.addEventListener('click', (event) =>{
  event.preventDefault()

  classificarIMC()
  resultado.innerHTML = `<p>${classificacao}</p>`
})