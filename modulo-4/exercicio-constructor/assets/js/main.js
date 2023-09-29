
function Calculadora(){
    this.display = document.querySelector('#display')
    this.btnClear = document.querySelector('.btn-clear')

    this.inicia = () => {
      this.cliqueBotoes()
      this.pressionaEnter()
    }

    this.pressionaEnter = () => {
      this.display.addEventListener('keyup', e =>{
        if(e.key === 'Enter'){
          this.fazConta()
        }
      })
    }

    this.fazConta = () => {
      let conta = this.display.value

      try{
        conta = eval(conta)

        if(!conta){
          alert('conta inv;alida')
          return
        }

        this.display.value = conta
      } catch(e){
        alert('conta inválida')
      }
    }

    this.btnClear = () => {
      this.display.value = ''
    }

    this.apagaUm = () => {
      this.display.value = this.display.value.slice(0, -1)
    }

    this.cliqueBotoes = () => {
      document.addEventListener('click', (e) =>{
        const elemento = e.target //identifica o botao

        if(elemento.classList.contains('btn-num')){
          this.btnParaDisplay(elemento.innerText)
        }
        
        if (elemento.classList.contains('btn-clear')){
          this.btnClear()
        }

        if (elemento.classList.contains('btn-del')){
          this.apagaUm()
        }

        if (elemento.classList.contains('btn-eq')){
          this.fazConta()
        }
      })
    }

    this.btnParaDisplay = (valor) => {
      this.display.value += valor
    }
}

const calculadora = new Calculadora()
calculadora.inicia()