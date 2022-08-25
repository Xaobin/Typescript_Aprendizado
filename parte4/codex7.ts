/*RESTRIÇÃO GENÉRICA - GENERIC CONSTRAINT
Restringir tipos com restrições genéricas do Typescript
https://frendyguo.me/typescript-generic-constraint
https://www.logicbig.com/tutorials/misc/typescript/generic-constraints.html

Qualquer linguagem tipada estaticamente suporta generic , 
Typescript não é exceção. Com genérico, podemos escrever
uma assinatura de tipo flexível que incentiva a reutilização 
de nossas funções. Sem ele, as funções ficam restritas a um 
tipo de dados específico, o que, por sua vez, dificulta a 
reutilização.
*/

function createArrayI(items: string[]) {
  return new Array().concat(items);
}
/*
No exemplo acima, a função createArrayI aceita um array de 
stringe gera um array de string. Dependendo do caso de uso,
mas podemos melhorar essa função dando a ela um tipo genérico
de modo que ela aceite mais do que apenas tipo string.
*/
function createArrayII<T>(items: T[]) { ... }

createArrayII<string>(['Hitchhiker', 'Guide', 'To', 'The', 'Galaxy']); //✅
createArrayII<number>([42]); //✅
createArrayII(['Life', 42]) //✅ // `string | number`
/*
 Com generic, podemos forçar nossa função createArrayII  a aceitar
 e retornar um tipo específico.

Além disso, omitir o tipo fará com que a função createArrayII infira 
o tipo do argumento ( ['Life', 43]é traduzido para string | number).
Isso parece ótimo, nossa função pode ser reutilizada com diferentes
assinaturas de tipo.

No entanto, muitas vezes ao escrever uma função genérica, podemos
ter algum conhecimento prévio sobre como nossa função funciona e, 
portanto, podemos restringir o tipo. No Typescript, isso é chamado de 
restrição genérica .
 */

/*
Entendendo a restrição genérica

Uma restrição genérica é simplesmente uma maneira de colocar algumas 
restrições em um tipo. Suponha que temos uma função genérica como esta,
*/
function getStuff<T>(arg: T) {}

getStuff("Hitchhiker's Guide to the Galaxy"); //✅
getStuff(42); //✅
getStuff([]); //✅
getStuff({}); //✅
getStuff(null); //✅
getStuff(undefined); //✅
/*
 Você notará que null e undefined são permitidos aqui, pode ser o
 que queríamos, mas tenho certeza que na maioria das vezes são 
 entradas inválidas. Para resolver isso, podemos colocar uma 
 restrição em nosso tipo genérico para não permitir valor vazio.
 */
function getStuffII<T extends {}>(arg: T) {}

getStuffII("Hitchhiker's Guide to the Galaxy"); //✅
getStuffII(42); //✅
getStuffII({}); //✅
getStuffII([]); //✅
getStuffII(undefined); //❌
getStuffII(null); //❌
/*
 No exemplo acima, T extends {} significa que T pode ser qualquer 
 tipo que seja uma subclasse de {} (um objeto), em Javascript string,
 number, array e object são todas subclasses de object, enquanto
 undefinede null não são, portanto não são permitidas. 
 É assim que a sintaxe de restrição genérica se parece, estendendo o T tipo.
 */
/*
 Tipo genérico com comportamento específico

Em algum lugar em nossa função, podemos invocar um método específico do argumento,
mas com generic, não podemos ter certeza de que tal propriedade existe. 
Portanto, precisamos restringir ainda mais nossa função para aceitar apenas um
argumento com uma assinatura específica.
 */
type Lengthwise = {
  length: number;
};

function getLength<T extends Lengthwise>(arg: T): number {
  return arg.length();
}

getLength("Hitchhiker's Guide to the Galaxy"); ✅ // 6
getLength(42); //❌
getLength({}); // ❌
getLength([]); // ✅ // 0
getLength(undefined); //❌
getLength(null); //❌
//No exemplo acima, only stringand arraytem a propriedade 
//.lengthenquanto o resto não é permitido. 
//===================================================================
/*
 Receba o que você pede
 
Agora que ganhamos algum terreno, vamos ver como podemos realizar
uma restrição mais avançada com o Typescript. Suponha que queremos
criar uma função que aceite uma forma personalizada e retorne 
exatamente a mesma forma como esta,
 */
const {
  foo,
  bar
} = getStuff3({
  foo: '',
  bar: ''
});
//Este é um caso perfeito para restrições genéricas. 
//Vamos começar definindo nosso tipo personalizado.
type CustomObject = {
  foo: string;
  bar: string;
  baz: string;
};
/*
 Nosso tipo personalizado tem três campos: foo, bar e baz. 
 O argumento pode ser um conjunto completo ou um subconjunto de
 CustomObject, para resolver isso podemos usar o tipo interno
 Typescript Partial.
 */
function getStuffIII<T extends Partial<CustomType>>(arg: T): T { ... }

const {
  foo, // ✅ 
  bar, // ✅
  baz // ❌ `baz` does not exist on type `{ foo: string; bar: string; }`
} = getStuffIII({
  foo: '',
  bar: ''
});
/*
 * Perfeito! Nossa função retorna exatamente a forma que pedimos, 
 * nem mais nem menos. Observe que a string vazia ''é simplesmente
 * um valor de espaço reservado para preencher a forma do objeto,
 * na verdade não faz nada (mas podemos personalizá-la).

Alternativamente, se você não gosta do fato de usarmos um objeto
para definir a forma, também podemos fazer assim,
*/
type StuffRequest = keyof CustomType;
type StuffResponse<T extends StuffRequest> = {
  [k in T]: CustomType[k];
}

function getStuffIV<T extends StuffRequest>(...args: T[]): StuffResponse<T> { ... }

const {
  foo,
  baz,
  bar // ❌ `bar` does not exist on type `StuffResponse<'foo' | 'baz'>`
} = getStuffIV('foo', 'baz');

//=================================================================
//=================================================================
interface Shape {
    draw();
}

//aplicando restrição no parâmetro de tipo S para ser apenas do tipo Shape
function drawShapes<S extends Shape>(shapes: S[]): void{
     shapes.forEach(shape => shape.draw());
}

class Circle implements Shape{
    draw() {
        console.log(`drawing Circle`)
    }
}

class Rectangle implements Shape{
    draw() {
        console.log(`drawing Rectangle`)
    }
}

let circle = new Circle();
let rectangle = new Rectangle();
drawShapes([circle, rectangle]);
//=================================================================
/* Saída
 * drawing Circle
drawing Rectangle
 */
