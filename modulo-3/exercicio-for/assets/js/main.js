const elementos = [
  {tag: 'p', texto: 'Frase 1'},
  {tag: 'div', texto: 'Frase 2'},
  {tag: 'footer', texto: 'Frase 3'},
  {tag: 'section', texto: 'Frase 4'}
]
const divFrases = document.querySelector('.frases')

for(let i = 0; i<= elementos.length; i ++){
  let {tag, texto} = elementos[i]

  divFrases.innerHTML += `<${tag}>${texto}</${tag}>`
}