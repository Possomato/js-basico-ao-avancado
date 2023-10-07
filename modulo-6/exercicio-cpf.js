function calculaDigito(valor, multiplicador, multiplicados){
  for (let index = 0; index < valor.length; index++) {
    let multiplicado = valor[index] * multiplicador
    multiplicados.push(multiplicado)
    multiplicador --
  }

  const somaMultiplicados = multiplicados.reduce((acumulador, valor) => {
    acumulador += valor
    return acumulador
  })

  return (() => {
    let valorCalculado = 11 - (somaMultiplicados % 11);
    if (valorCalculado > 9) {
      return 0;
    }
    return valorCalculado;
  })();
}

function validadorCPF(cpf){
  let noveValores = pegaPrimeirosNoveValores(cpf)

  function pegaPrimeirosNoveValores(valor) {
    const cpfInput = valor
  
    const pegaNoveValores = (cpfInput) => {
      const cpfLimpo = cpfInput.replace(/\D+/g, '')
      const cpfArray = Array.from(cpfLimpo)
      return cpfArray.slice(0, 9)
    }
  
    return pegaNoveValores(cpfInput)
  }

  function pegaPrimeiroDigito(valor){
    let multiplicador = 10
    let multiplicados = []
  
    return calculaDigito(valor, multiplicador, multiplicados)
  }
  
  const primeiroDigito = pegaPrimeiroDigito(noveValores)
  
  const dezValores = [...noveValores, primeiroDigito]
  
  function pegaSegundoDigito(valor){
    let multiplicador = 11
    let multiplicados = []
  
    return calculaDigito(valor, multiplicador, multiplicados)
  }
  
  const segundoDigito = pegaSegundoDigito(dezValores)
  
  const cpfCompleto = [...dezValores, segundoDigito]
  
  const cpfValidado = cpfCompleto.join('')

  if(cpfValidado == cpf.replace(/\D+/g, '')){
    console.log('CPF validado com sucesso!')
  } else{
    console.log('ERRO - Tente novamente')
  }

}

validadorCPF('477.665.928-00')