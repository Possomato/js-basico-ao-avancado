// criar uma factory function, e a calculadora como um objeto
//sempre que for referenciar a chave de um objeto dentro dentro do objeto é necessário a palavra 'this'
// rever slice  

function criaCalculadora(){
  return {
    display: document.querySelector('#display'),
    btnClear: document.querySelector('.btn-clear'),

    inicia(){
      this.cliqueBotoes()
      this.pressionaEnter()
    },

    pressionaEnter(){
      this.display.addEventListener('keyup', e =>{
        if(e.key === 'Enter'){
          this.fazConta()
        }
      })
    },

    fazConta(){
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
    },

    btnClear(){
      this.display.value = ''
    },

    apagaUm(){
      this.display.value = this.display.value.slice(0, -1)
    },

    cliqueBotoes(){
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
    },

    btnParaDisplay(valor){
      this.display.value += valor
    },
  }
}

const calculadora = criaCalculadora()
calculadora.inicia()