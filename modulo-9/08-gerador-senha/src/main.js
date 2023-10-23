import './assets/css/style.css'
import geraSenha from './modules/gerador-senha'

const inputquantidade = document.querySelector('#quantidade')
const inputCheckNumeros = document.querySelector('#numeros')
const inputCheckMaiusculas = document.querySelector('#maiusculas')
const inputCheckMinusculas = document.querySelector('#minusculas')
const inputCheckSimbolos = document.querySelector('#simbolos')

const botaoGerar = document.querySelector('#botaoGerar')
const resultado = document.querySelector('#resultado')

botaoGerar.addEventListener('click', () => {
  const quantidade = inputquantidade.value
  const usarNumeros = inputCheckNumeros.checked
  const usarMaiusculas = inputCheckMaiusculas.checked
  const usarMinusculas = inputCheckMinusculas.checked
  const usarSimbolos = inputCheckSimbolos.checked

  if(isNaN(quantidade) || quantidade <= 1){
    alert('Favor insira a quantidade corretamente.')
    return
  }

  resultado.textContent = geraSenha(quantidade, usarNumeros, usarMaiusculas, usarMinusculas, usarSimbolos)
})

