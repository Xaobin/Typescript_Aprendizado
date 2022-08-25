//REST PARAMETERS - APRENDIZADO TYPESCRIPT
/*
https://www.typescripttutorial.net/typescript-tutorial/typescript-rest-parameters/

neste tutorial, você aprenderá sobre os parâmetros rest
do TypeScript que permitem representar um número indefinido
de argumentos como um array.

Um parâmetro rest permite que uma função aceite zero
ou mais argumentos do tipo especificado. No TypeScript,
os parâmetros rest seguem estas regras:

Uma função tem apenas um parâmetro de descanso.
O parâmetro rest aparece por último na lista de parâmetros.
O tipo do parâmetro rest é um tipo de arrray .
*/
//=================================================
function getTotal(...numbers: number[]): number {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
}
//==================================================
console.log(getTotal()); // 0
console.log(getTotal(10, 20)); // 30
console.log(getTotal(10, 20, 30)); // 60
//==================================================
export {};
//==============================================
function sumNumeros(...numeros: number[]) {
  let total = 0;
  numeros.forEach((numero) => (total += numero));
  return total;
}
console.log(sumNumeros(30, 20));
console.log(sumNumeros(40, 50, 50, 40, 20));
//==============================================
function listClientes(frase: string, ...clients: string[]) {
  return frase + ' ' + clients.join(', ');
}
console.log(
  listClientes(
    'Jeff, Bem vindo ao nosso estabelecimento...:',
    'Bernard, Welcome',
    'Steve, Bienvenido',
    'Gutemberg, Bem vindo',
    'Wadson, Olá',
  ),
);
//==============================================
class Produtos {
  public showProdutos(...produtos: string[]): void {
    for (const produto of produtos) {
      console.log(produto);
    }
  }
}
const deptoInformatica: Produtos = new Produtos();
console.log(
  'All products from the computer department are available in stock...: ',
);

deptoInformatica.showProdutos(
  'Mouse',
  'Notebook',
  'USB',
  'Monitor',
  'Teclado',
  'WebCam',
);
//==============================================
