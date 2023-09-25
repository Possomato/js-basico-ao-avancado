const paragrafos = document.querySelector('#paragrafos')
const ps = paragrafos.querySelectorAll('p')

const estilosBody = getComputedStyle(document.body)
const bgcolorBody = estilosBody.backgroundColor

for (let p of ps){
  p.style.backgroundColor = bgcolorBody
  p.style.color = 'white'
}
