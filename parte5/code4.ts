/*
 Generic classes
Classes genéricas TypeScript
https://www.typescripttutorial.net/typescript-tutorial/typescript-generic-classes/

Resumo : neste tutorial, você aprenderá como desenvolver classes
genéricas do TypeScript.

Introdução às classes genéricas do TypeScript
Uma classe genérica tem uma lista de parâmetros de tipo genérico entre
colchetes angulares <>que segue o nome da classe:
*/
class firstClassName<T>{
    //... 
}
/*
O TypeScript permite que você tenha vários tipos genéricos na lista de 
parâmetros de tipo. Por exemplo:
*/
class secondClassName<K,T>{
    //...
}
/*
As restrições genéricas também são aplicadas aos tipos genéricos na classe:
*/
class thirdClassName<T extends TypeA>{
    //...
}
/*
Colocar o parâmetro de tipo na classe permite desenvolver métodos e propriedades
que funcionam com o mesmo tipo.

Exemplo de classes genéricas do TypeScript
Neste exemplo, desenvolveremos uma classe genérica Stack.

Uma pilha é uma estrutura de dados que funciona no princípio do último que entra,
primeiro que sai (ou LIFO). Isso significa que o primeiro elemento que você coloca
na pilha é o último elemento que você pode obter da pilha.

Normalmente, uma pilha tem um tamanho. Por padrão é vazio. A pilha tem duas operações
principais:

Push: empurra um elemento para a pilha.
Pop: pop um elemento da pilha.
O seguinte mostra uma classe de pilha genérica completa chamada Stack<T>:
*/
class Stack<T> {
    private elements: T[] = [];

    constructor(private size: number) {
    }
    isEmpty(): boolean {
        return this.elements.length === 0;
    }
    isFull(): boolean {
        return this.elements.length === this.size;
    }
    push(element: T): void {
        if (this.elements.length === this.size) {
            throw new Error('The stack is overflow!');
        }
        this.elements.push(element);

    }
    pop(): T {
        if (this.elements.length == 0) {
            throw new Error('The stack is empty!');
        }
        return this.elements.pop();
    }
}

//O seguinte cria uma nova pilha de números:

let numbers = new Stack<number>(5);

//Esta função retorna um número aleatório entre dois números low e high:

function randBetween(low: number, high: number): number {
    return Math.floor(Math.random() * (high - low + 1) + low);
}
/*
Agora, você pode usar a função randBetween() para gerar números aleatórios para
inserir na pilha de números:
*/
let numbers = new Stack<number>(5);

while (!numbers.isFull()) {
    let n = randBetween(1, 10);
    console.log(`Push ${n} into the stack.`)
    numbers.push(n);
}
/*
Resultado:

Push 3 into the stack.
Push 2 into the stack. 
Push 1 into the stack. 
Push 8 into the stack. 
Push 9 into the stack. 

O seguinte mostra como remover elementos da pilha até que ela esteja vazia:
*/
while (!numbers.isEmpty()) {
    let n = numbers.pop();
    console.log(`Pop ${n} from the stack.`);
}
/*
Resultado:

Pop 9 from the stack.
Pop 8 from the stack.
Pop 1 from the stack.
Pop 2 from the stack.
Pop 3 from the stack.

Da mesma forma, você pode criar uma pilha de strings. Por exemplo:
*/
let words = 'The quick brown fox jumps over the lazy dog'.split(' ');

let wordStack = new Stack<string>(words.length);

// push words into the stack
words.forEach(word => wordStack.push(word));

// pop words from the stack
while (!wordStack.isEmpty()) {
    console.log(wordStack.pop());
}
/*

*/
