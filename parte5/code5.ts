/*
 typescript 
 parameter properties
 https://medium.com/@daveford/parameter-properties-in-typescript-c99df6ba13f7
 
 Propriedades de parâmetro no TypeScript
Aqui está um truque legal que pode economizar muito código 
clichê ao criar classes. 

Suponha que você tenha uma classe simples com duas propriedades.
E o construtor é usado para inicializar as propriedades assim:
*/
classe Ponto {
    x private: número; 
    y private: número;
    constructor(x: número, y: número) { 
        this.x = x; 
        this.y = y 
    }
}
/*
Um padrão muito comum na programação orientada a objetos. 
No TypeScript existe uma abreviação para este padrão:
*/
class Point { 
    constructor( public x: number, public y: number) { 
    } 
}

//========================================================
//========================================================
//========================================================
/*
 * class expressions 
 Expressões de classe

expressões de classe (MDN)
As expressões de classe são muito semelhantes às declarações de classe. 
A única diferença real é que as expressões de classe não precisam de um nome,
embora possamos nos referir a elas por meio de qualquer identificador ao qual
elas acabaram vinculadas:
*/
const someClass = class<Type> {
  content: Type;
  constructor(value: Type) {
    this.content = value;
  }
};
 
const m = new someClass("Hello, world");
     
const m: someClass<string>

//------------------------------
/*
  https://github.com/microsoft/TypeScript/issues/497

var Rect = class { 
  area: number;

  constructor(public length: number, public width: number) {
    this.area = this.length * this.width;
  }
}
var rect = new Rect(5, 10);
*/
//========================================================
//========================================================
//========================================================
/*
 abstract classes
Classes, métodos e campos no TypeScript podem ser abstratos .

Um método abstrato ou campo abstrato é aquele que não teve uma implementação
fornecida. Esses membros devem existir dentro de uma classe abstrata , que não
pode ser instanciada diretamente.

O papel das classes abstratas é servir como uma classe base para subclasses 
que implementam todos os membros abstratos. Quando uma classe não possui 
membros abstratos, ela é considerada concreta .

Vejamos um exemplo:
*/
abstract class Base {
  abstract getName(): string;
 
  printName() {
    console.log("Hello, " + this.getName());
  }
}
 
//const b = new Base();
//Cannot create an instance of an abstract class.
/*
Não podemos instanciar Base porque new é abstrato. Em vez disso, 
precisamos criar uma classe derivada e implementar os membros abstratos:
*/
class Derived extends Base {
  getName() {
    return "world";
  }
}
 
const d = new Derived();
d.printName();
/*
Observe que, se esquecermos de implementar os membros abstratos da
classe base, receberemos um erro:

class Derived extends Base {
Non-abstract class 'Derived' does not implement inherited abstract member 'getName' from class 'Base'.
*/
  // forgot to do anything
}
/*
Assinaturas de construção abstrata
Às vezes você quer aceitar alguma função construtora de classe 
que produz uma instância de uma classe que deriva de alguma classe abstrata.

Por exemplo, você pode querer escrever este código:
*/
function greet(ctor: typeof Base) {
  const instance = new ctor();
Cannot create an instance of an abstract class.
  instance.printName();
}
/*
O TypeScript está informando corretamente que você está tentando 
instanciar uma classe abstrata. Afinal, dada a definição de greet, é
perfeitamente legal escrever este código, que acabaria construindo uma
classe abstrata:
*/
// Bad!
greet(Base);
/*
Em vez disso, você deseja escrever uma função que aceite algo com uma
assinatura de construção:
*/
function greet(ctor: new () => Base) {
  const instance = new ctor();
  instance.printName();
}
greet(Derived);
greet(Base);
/*
Argument of type 'typeof Base' is not assignable to parameter of type
'new () => Base'.
Cannot assign an abstract constructor type to a non-abstract constructor type.

Agora o TypeScript informa corretamente quais funções construtoras de 
classe podem ser invocadas - Derivedpodem porque é concretas, mas Base não podem.
*/

 
 
