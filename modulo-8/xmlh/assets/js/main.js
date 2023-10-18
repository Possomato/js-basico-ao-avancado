const request = (objeto) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open(objeto.method, objeto.url, true)
    xhr.send()
  
    xhr.addEventListener('load', () => {
      if(xhr.status >= 200 && xhr.status < 300){
        resolve(xhr.responseText)
      } else {
        reject(xhr.statusText)
      }
    })
  })
}

document.addEventListener('click', (e) => {
  e.preventDefault()
  const elemento = e.target
  const tag = elemento.tagName.toLowerCase()

  tag === 'a' ? carregaPagina(elemento) : console.log('ñ é link')
})

async function carregaPagina(el){
  const href = el.getAttribute('href')

  const objConfig = {
    method: 'GET',
    url: href,
  }

  try{
    const response = await request(objConfig)
    carregaResultado(response)
  } catch(e){
    console.log(e)
  }
}

function carregaResultado(response){
  const resultado = document.querySelector('.resultado')
  resultado.innerHTML = response
}