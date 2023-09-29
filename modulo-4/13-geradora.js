// aula 13 - mod 4

function* gerador1(){
  //código qualquer...
  yield 'valor1'
  //código qualquer...
  yield 'valor2'
  //código qualquer...
  yield 'valor3'
}

const g1 = gerador1()

for (let valor of g1){
  console.log(valor)
}