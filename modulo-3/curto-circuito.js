/*
&&
  Em JavaScript, o operador && é usado para realizar uma avaliação de curto-circuito em expressões condicionais. Funciona da seguinte forma:

  - Ele avalia a primeira expressão à esquerda do &&.
  - Se essa expressão for falsa, a avaliação para por aí, e o resultado da expressão é false. Isso é chamado de "curto-circuito".
  - Se a primeira expressão for verdadeira, ele continua avaliando as expressões subsequentes à direita do &&.
  - O resultado final será o valor da última expressão avaliada ou true se todas as expressões forem verdadeiras.
*/

var x = 5;
var y = 10;

var resultado = (x < 10) && (y > 5);

console.log(resultado); // Isso imprimirá "true" porque ambas as expressões são verdadeiras.


/*
||
  retorna o valor verdadeiro
*/

console.log( 0 || false || 'string normal')