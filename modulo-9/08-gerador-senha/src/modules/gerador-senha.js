export default function geraSenha(quantidade, usarNumeros, usarMaiusculas, usarMinusculas, usarSimbolos) {
  let caracteresPermitidos = '';

  if (usarNumeros) {
    caracteresPermitidos += '0123456789';
  }
  if (usarMaiusculas) {
    caracteresPermitidos += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  if (usarMinusculas) {
    caracteresPermitidos += 'abcdefghijklmnopqrstuvwxyz';
  }
  if (usarSimbolos) {
    caracteresPermitidos += '!@#$%^&*()_+';
  }

  if (caracteresPermitidos === '') {
    alert('Selecione pelo menos uma opção para gerar a senha.');
    return '';
  }

  let senha = '';

  for (let index = 0; index < quantidade; index++) {
    const indiceAleatorio = Math.floor(Math.random() * caracteresPermitidos.length);
    senha += caracteresPermitidos.charAt(indiceAleatorio);
  }

  return senha;
}