//APRENDIZADO TYPESCRIPT - ANY
//https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any
/*
 * O TypeScript também tem um tipo especial, any, que você pode usar sempre que não quiser que um valor específico cause erros de verificação de tipo.

 Quando um valor é do tipo any, você pode acessar qualquer propriedade dele (que por sua vez será do tipo any), chamá-lo como uma função, atribuí-lo a (ou de) um valor de qualquer tipo ou praticamente qualquer outra coisa
 */
// ==> Exemplo 01: Tipo Any
const a: any = 44;
const b: any = ['Tahvo'];

const result = a + b;
console.log(result);

//========================================= 'any' é inferido implícitamente
const formulario: { [campoFomulario: string]: any } = {
  nome: 'Tahvo',
  sobrenome: 'Bataev',
  idade: 44,
};
console.log(formulario);
//=========================================
