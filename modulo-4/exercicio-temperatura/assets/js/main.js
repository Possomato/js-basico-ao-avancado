const cToF = document.querySelector('#c-to-f')
const fToC = document.querySelector('#f-to-c')

const celToFah = (cel) => cel * 1.8 + 32
const fahToCel = (fah) => (fah - 32) / 1.8

cToF.addEventListener('click', () =>{
  const celsius = prompt('Insira os Graus Celsius')
  alert(`${celsius}°C = ${celToFah(celsius).toFixed(2)}°F`)
})

fToC.addEventListener('click', () =>{
  const fahrenheit = prompt('Insira os Graus fahrenheit')
  alert(`${fahrenheit}°F = ${fahToCel(fahrenheit).toFixed(2)}°C`)
})