//APRENDIZADO TYPESCRIPT
//TEMA: Index signature - Assinatura de Índice
//https://dmitripavlutin.com/typescript-index-signatures/

//Início do código, objetos que serão usados
const salary1 = {
  baseSalary: 100_000,
  yearlyBonus: 20_000
};
 
const salary2 = {
  contractSalary: 110_000
};
/*
 * 
 * Por que a assinatura do índice?
A ideia das assinaturas de índice é digitar objetos de estrutura desconhecida
quando você conhece apenas os tipos de chave e valor.

Uma assinatura de índice se encaixa no caso do parâmetro salário:
a função deve aceitar objetos salário de estruturas diferentes 
— apenas que os valores sejam números.

Vamos anotar o parâmetro salary Object  com uma assinatura de índice:
 * 
 */
function totalSalary(salaryObject: { [key: string]: number }) {
  let total = 0;
  for (const name in salaryObject) {
    total += salaryObject[name];
  }
  return total;
}
 
totalSalary(salary1); // => 120_000
totalSalary(salary2); // => 110_000
/*
 * { [key: string]: number } é a assinatura de índice, que informa 
 * ao TypeScript que salary deve ser um objeto com tipo string como
 * chave e tipo number como valor.

Agora o totalSalary() aceita como argumentos tanto salary1 quanto
salary2, pois são objetos com valores numéricos.

No entanto, a função não aceitaria um objeto que tenha, por exemplo,
strings como valores:
const salary3 = {
  baseSalary: '100 thousands'
};
 
totalSalary(salary3);

Argument of type '{ baseSalary: string; }' is not assignable to parameter of type '{ [key: string]: number; }'.
  Property 'baseSalary' is incompatible with index signature.
    Type 'string' is not assignable to type 'number'.
 * 
 */

/*
 * Sintaxe de assinatura de índice
A sintaxe de uma assinatura de índice é bastante simples e se parece com a sintaxe de uma propriedade, mas com uma diferença. Em vez do nome da propriedade, basta escrever o tipo da chave entre colchetes: { [key: KeyType]: ValueType }.

Aqui estão alguns exemplos de assinaturas de índice.
 */

interface StringByString {
  [key: string]: string;
}
 
const heroesInBooks: StringByString = {
  'Gunslinger': 'The Dark Tower',
  'Jack Torrance': 'The Shining'
}; 
//----------------------------
interface Options {
  [key: string]: string | number | boolean;
  timeout: number;
}
 
const options: Options = {
  timeout: 1000,
  timeoutMessage: 'The request timed out!',
  isFileUpload: false
};
