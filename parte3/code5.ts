//TypeScript - Generics
/*
https://www.digitalocean.com/community/tutorials/how-to-use-generics-in-typescript
https://www.tutorialsteacher.com/typescript/typescript-generic
Ao escrever programas, um dos aspectos mais importantes é construir componentes reutilizáveis.
Isso garante que o programa seja flexível e escalável a longo prazo.

 Os genéricos oferecem uma maneira de criar componentes reutilizáveis. 
 Os genéricos fornecem uma maneira de fazer os componentes funcionarem 
 com qualquer tipo de dados e não se restringirem a um tipo de dados. 
 Assim, os componentes podem ser chamados ou usados ​​com uma variedade 
 de tipos de dados.  Os genéricos no TypeScript são quase semelhantes 
 aos genéricos do C#.
 
No exemplo abaixo, a variável de tipo T é especificada com a função entre
colchetes angulares getArray<T>.  A variável de tipo T também é usada para
especificar o tipo dos argumentos e o valor de retorno.  Isso significa
que o tipo de dado que será especificado no momento de uma chamada de função,
também será o tipo de dado dos argumentos e do valor de retorno.

 Chamamos a função genérica getArray() e passamos o array de números e o
 array de strings.  Por exemplo, ao chamar a função como
 getArray<number>([100, 200, 300]) substituirá T pelo número e, portanto, 
 o tipo dos argumentos e o valor de retorno serão array de números.  
 Da mesma forma, para getArray<string>(["Hello", "World"]), o tipo de 
 argumentos e o valor de retorno serão array de strings.  Então agora, 
 o compilador mostrará um erro se você tentar adicionar uma string em 
 myNumArr ou um número no array myStrArr.  Assim, você obtém a vantagem 
 de verificação de tipo.
 */

function getArray<T>(items : T[] ) : T[] {
    return new Array<T>().concat(items);
}

let myNumArr = getArray<number>([100, 200, 300]);
let myStrArr = getArray<string>(["Hello", "World"]);

myNumArr.push(400); // OK
myStrArr.push("Hello TypeScript"); // OK

//myNumArr.push("Hi"); // Compiler Error
//myStrArr.push(500); // Compiler Error

//Exemplo: chamar uma função genérica sem especificar o tipo
let myNumArr2 = getArray([100, 200, 300]); // OK
let myStrArr2 = getArray(["Hello", "World"]); // OK



