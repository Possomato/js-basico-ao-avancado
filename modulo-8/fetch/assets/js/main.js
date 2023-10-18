document.addEventListener('click', (e) => {
  e.preventDefault()
  const elemento = e.target
  const tag = elemento.tagName.toLowerCase()

  tag === 'a' ? carregaPagina(elemento) : console.log('ñ é link')
})

async function carregaPagina(el){
  try{
    const href = el.getAttribute('href')
    const response = await fetch(href)

    const html = await response.text()
    carregaResultado(html)
  }
  catch (erro){
    console.log(erro)
  }
}

function carregaResultado(response){
  const resultado = document.querySelector('.resultado')
  resultado.innerHTML = response
}