/*
 * TYPESCRIPT - Mais detalhes sobre tipos de dados 
 * Type {} - Line 236
 * Type Record - Line 257
 * Index Signature - Line 107
 * Fonte: https://wanago.io/2022/01/24/index-signatures-typescript/

Ao usar o TypeScript, geralmente nos esforçamos para definir o
tipo exato de dados com os quais estamos lidando. Às vezes não 
é possível, no entanto. Neste artigo, examinamos várias opções 
sobre como lidar com um objeto que possui uma estrutura que não 
conhecemos. Um bom exemplo é implementar um editor JSON.

O tipo de objeto
Uma das primeiras coisas que podem vir à mente ao trabalhar com
um objeto sobre o qual não sabemos nada é o tipo de objeto .

Os tipos de dados em JavaScript se enquadram em uma das duas
categorias: valores primitivos e objetos .

1. Valores primitivos: --boolean --null --undefined --Number 
--BigIntName --string --Symbol

2. Objetos
Todo valor que não é primitivo é considerado um objeto,
incluindo arrays, e é isso que o tipo de objeto no
TypeScript descreve. Infelizmente, há uma grande chance
de que ele não se encaixe no seu caso de uso. O acima é 
um problema grande o suficiente para que o pacote
@typescript-eslint/eslint-plugin costumava gerar um erro
por padrão ao usar o tipo de objeto . Os mantenedores do
plugin mudaram apenas alguns meses atrás .

Não use objeto como um tipo. O tipo de objeto  é 
atualmente difícil de usar ( veja este problema ).
Considere usar Record < string , unknown > em vez disso,
pois permite que você inspecione e use as chaves com mais
facilidade.

O problema com o tipo de objeto é que ele não é simples de usar.
*/
const user = {
  firstName: 'John',
  lastName: 'Smith'
}
 
const fullNameProperties = ['firstName', 'lastName'];
 
const fullName = createStringFromProperties(
  user,
  fullNameProperties
);
 
console.log(fullName); // John Smith
 
function createStringFromProperties(dictionary: object, properties: string[]) {
  return properties.reduce((result, propertyName) => {
    if (propertyName in dictionary) {
      const value = dictionary[propertyName];
      if (result) {
        return `${result} ${value}`;
      }
      return value;
    }
    return result;
  }, '');
}
/*
Infelizmente, o código acima causa o seguinte erro:

O elemento implicitamente tem um tipo 'qualquer' porque 
a expressão do tipo 'string' não pode ser usada para
indexar o tipo '{}'.
Nenhuma assinatura de índice com um parâmetro do tipo
'string' foi encontrada no tipo '{}'.

O problema acima é causado pela incapacidade do operador
in de ampliar o tipo de objeto quando usado. As pessoas
discutem esse problema há anos e um PR  pode corrigi-lo.
Até lá, devemos procurar outras soluções.

O tipo de objeto com o "O" maiúsculo
O tipo Object é muito semelhante e precisamos ficar atentos
a ele. Ele descreve instâncias da classe Object , mas seu
uso é desencorajado no contexto de dicionários.

O pacote @typescript-eslint/eslint-plugin reclama quando
usamos o tipo Object :

Não use Object como um tipo. O tipo Object na verdade
significa “qualquer valor não nulo”, então é marginalmente
melhor que desconhecido .
– Se você quer um tipo que significa “qualquer objeto”,
você provavelmente quer Record < string , unknown > em
vez disso.
– Se você quiser um tipo que significa “qualquer valor”,
provavelmente desejará desconhecido .

Infelizmente, a mensagem de erro está correta e o tipo
Object aceita valores primitivos diferentes de null. 
Pode ser o caso porque podemos acessar as propriedades de
Object . protótipo através dos valores primitivos.
*/
console.log(
  (true).hasOwnProperty === Object.prototype.hasOwnProperty
) // true
// Devido ao acima, o código a seguir não resulta em erro:

const isValid: Object = true;
console.log(isValid); // true
/* 
 *** A assinatura do índice ***
 * 
A assinatura de índice é uma maneira adequada de lidar com 
objetos com propriedades sobre as quais nada sabemos. Sua
sintaxe imita uma propriedade regular, mas em vez de
escrever um nome de propriedade padrão, definimos o tipo
de chaves e as propriedades.
*/
type Dictionary = {
  [key: string]: unknown;
}
/*
 Acima, afirmamos que um Dicionário é um objeto que pode
  ter qualquer número de propriedades do tipo desconhecido
 . Portanto, podemos usá-lo com a função createStringFromProperties
 que definimos no início deste artigo.
*/
const user = {
  firstName: 'John',
  lastName: 'Smith'
}
 
const propertiesToTakeIntoAccount = ['firstName', 'lastName'];
 
const fullName = createStringFromProperties(
  user,
  propertiesToTakeIntoAccount
);
 
function createStringFromProperties(dictionary: Dictionary, properties: string[]) {
  return properties.reduce((result, propertyName) => {
    if (propertyName in dictionary) {
      const value = dictionary[propertyName];
      if (typeof value !== 'string') {
        return result;
      }
      if (result) {
        return `${result} ${value}`;
      }
      return value;
    }
    return result;
  }, '');
}
/*
Como definimos todas as propriedades do Dicionário
como do tipo desconhecido , tivemos que verificar
se elas são as strings acima antes de usá-las.

Se estivermos confiantes de que todas as propriedades
de um objeto são strings, por exemplo, podemos
refletir isso em nosso tipo.
*/
type DictionaryA = {
  [key: string]: string;
}
/*
É essencial notar que o tipo Dicionário contém todas 
as propriedades possíveis, o que pode causar alguns 
problemas para nós.
*/
type DictionaryB = {
  [key: string]: string;
}
 
const dictionary: Dictionary = {};
 
dictionary.firstName.toUpperCase(); // TypeScript does not prevent that
//Para lidar com o problema acima, podemos modificar um pouco o tipo de dicionário .

type DictionaryC = {
  [key: string]: string | undefined;
}
/*
*** As limitações da assinatura de índice ***

As assinaturas de índice têm algumas limitações que 
devemos conhecer. Por exemplo, só podemos usar strings,
números e símbolos para chaves.
*/
type StringDictionaryA = {
  [key: string]: unknown;
}
 
type NumberDictionaryB = {
  [key: number]: unknown;
}
 
type SymbolDictionaryC = {
  [key: symbol]: unknown;
}
/*
TypeScript permite símbolos para chaves nas assinaturas
de índice desde a versão 4.4

Podemos definir várias assinaturas de índice,
mas precisamos garantir que os tipos de nossas propriedades
sejam compatíveis entre si.
*/
type Dictionary = {
  [key: string]: unknown;
  [key: number]: unknown;
}
/*
O tipo acima funciona bem porque usamos desconhecido
em ambas as assinaturas de índice.

Infelizmente, também não é simples usar enums e uniões
de strings.
*/
enum PossibleProperty {
  FirstName = 'firstName',
  LastName = 'lastName'
}
 
// This type causes an error
type EnumDictionary = {
  [key: PossibleProperty]: unknown;
}
 
// This type also causes an error
type UnionDictionary = {
  [key: 'firstName' | 'lastName']: unknown;
}
/*
Um tipo de parâmetro de assinatura de índice não pode 
ser um tipo literal ou um tipo genérico. Considere usar
um tipo de objeto mapeado.

Podemos lidar com o problema acima criando várias
assinaturas de índice ou usando a palavra-chave in .
*/
type EnumDictionary = {
  [key in PossibleProperty]: unknown;
}
/*
O tipo {}
Também vale a pena mencionar o tipo { } . Infelizmente, 
não significa “qualquer objeto vazio” e também aceita 
qualquer valor não nulo. O pacote 
@typescript-eslint/eslint-plugin gera um erro quando 
o usamos.

Não use {}como um tipo. {}na verdade significa “qualquer 
valor não nulo”.
*/
const isValid: {} = true;
console.log(isValid); // true
/*
Se quisermos definir o tipo de um objeto vazio por algum motivo,
podemos usar o tipo never e  uma assinatura de índice .

Se você quiser saber mais sobre o tipo nunca , confira Entendendo 
qualquer e desconhecido no TypeScript. Diferença entre nunca e nulo
*/
type EmptyObject = {
  [key: string]: never;
}
 
const emptyObject: EmptyObject = {};
/*
 Interfaces vazias se comportam da mesma forma que o tipo { } ,
 e é por isso que vale a pena usar a regra ESLint sem interface vazia .
*/
/*
 O tipo RECORD, 
Em vez das assinaturas de índice, podemos usar o tipo de 
utilitário Record . É genérico e aceita dois tipos: o tipo
das chaves e o tipo dos valores.
*/
function createStringFromProperties(
  dictionary: Record<string, unknown>,
  properties: string[]
);
/*
Acima, definimos o argumento dos dicionários como um objeto
que contém qualquer número de propriedades do tipo desconhecido .

Vamos olhar sob o capô do tipo Record :
*/
type Record<Key extends keyof any, Type> = {
    [Property in Key]: Type;
};
/*
A partir da definição acima, podemos ver que usa as
assinaturas de índice sob o capô. Pode ser útil e tornar
nosso código um pouco mais legível. Também torna mais 
simples trabalhar com enums e uniões.
*/
enum PossibleProperty {
  FirstName = 'firstName',
  LastName = 'lastName'
}
 
type EnumDictionary = Record<PossibleProperty, unknown>;
 
type UnionDictionary = Record<'firstName' | 'lastName', unknown>;
/*
Resumo
Neste artigo, passamos por vários tipos que podemos usar
ao trabalhar com objetos. Aprendemos sobre vários tipos
como object , Object e { } , que provavelmente não devemos
usar. Para lidar com nosso caso de uso, aprendemos o que
é a assinatura de índice. Também precisamos conhecer o 
tipo Record e como ele pode simplificar nosso código em 
alguns casos. Todos os itens acima podem ser úteis ao 
lidar com situações que envolvem dicionários sobre os quais
sabemos pouco. 
*/
