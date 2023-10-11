// aula 04 - mod 7 - classes
// metodos estaticos = Um método estático em JavaScript é como uma função que pertence a uma classe, mas você pode chamá-lo diretamente na classe, em vez de em uma instância da classe.



class ControleRemoto{
  constructor(tv){
    this.tv = tv
    this.volume = 0
  }

  aumentarVolume(){
    this.volume += 2
  }

  static trocaPilha(){
    console.log('ok, vou trocar')
  }
}

const controle = new ControleRemoto
controle.aumentarVolume()
controle.aumentarVolume()
controle.aumentarVolume()
// console.log(controle.volume)
// ControleRemoto.trocaPilha()

/*
Desafio: Calculadora de Geometria

Crie uma classe chamada Geometria com os seguintes métodos estáticos:

calcularAreaRetangulo(base, altura): Este método deve calcular e retornar a área de um retângulo com base e altura fornecidas.

calcularAreaCirculo(raio): Este método deve calcular e retornar a área de um círculo com o raio fornecido.

calcularAreaTriangulo(base, altura): Este método deve calcular e retornar a área de um triângulo com base e altura fornecidas.
*/

class Geometria{
  static calcularAreaRetangulo(base, altura){
    return base * altura
  }
  static calcularAreaCirculo(raio){
    return 3.14 * raio ** 2
  }
  static calcularAreaTriangulo(base, altura){
    return (base * altura) / 2
  }
}

console.log(Geometria.calcularAreaCirculo(4))