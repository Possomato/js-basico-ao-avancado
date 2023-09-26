let inputHoras = document.querySelector('#horas')
let inputMinutos = document.querySelector('#minutos')
let inputSegundos = document.querySelector('#segundos')

const botaoIniciar = document.querySelector('#iniciar')
const botaoPausar = document.querySelector('#pausar')
const botaoZerar = document.querySelector('#zerar')

const timerContainer = document.querySelector('.timer')

let segundos = 0
let minutos = 0
let horas = 0
let intervalID = null

function timer() {
  intervalID = setInterval(() => {
    segundos += 1

    if (segundos === 4) {
      segundos = 0
      minutos += 1
    }

    if (minutos === 4) {
      minutos = 0
      horas += 1
    }

    inputHoras.textContent = horas.toString().padStart(2, '0')
    inputMinutos.textContent = minutos.toString().padStart(2, '0')
    inputSegundos.textContent = segundos.toString().padStart(2, '0')
  }, 1000)
}



botaoIniciar.addEventListener('click', () => {
  if (intervalID === null) {
    timerContainer.style.color = 'black'
    timer()
  }
})

botaoPausar.addEventListener('click', () => {
  if (intervalID !== null) {
    timerContainer.style.color = 'red'

    clearInterval(intervalID)
    intervalID = null
  }
})

botaoZerar.addEventListener('click', () => {
  clearInterval(intervalID)
  intervalID = null;

  minutos = 0
  horas = 0
  segundos = 0
  inputHoras.textContent = '00'
  inputMinutos.textContent = '00'
  inputSegundos.textContent = '00'

  timerContainer.style.color = 'black'
})

