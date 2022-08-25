//FUNCTIONS  - APRENDIZADO TYPESCRYPT
//==============================================
export {};
//==============================================
function sumNumeros(num1: number, num2: number): number {
  return num1 + num2;
}
//==============================================
const resultado = sumNumeros(2, 2);
console.log(resultado);
//==============================================
const cumprimentar = function (mensagem: string) {
  return mensagem;
};
console.log(cumprimentar('Olá, Developers!'));
//==============================================
const cumprimentar_03 = (mensagem: string) => {
  return mensagem;
};
console.log(cumprimentar_03('Fala, Pessoal!'));
//==============================================
const cumprimentar_04 = new Function('mensagem', 'return "Fala " + mensagem');

console.log(cumprimentar_04('Galera!'));
//==============================================
