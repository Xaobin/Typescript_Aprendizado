/*
TypeScript - Classe abstrata
https://www.tutorialsteacher.com/typescript/abstract-class

Defina uma classe abstrata no Typescript usando a palavra- abstractchave.
Classes abstratas são principalmente para herança onde outras classes
podem derivar delas. Não podemos criar uma instância de uma classe abstrata.

Uma classe abstrata normalmente inclui um ou mais métodos abstratos ou
declarações de propriedade. A classe que estende a classe abstrata deve
definir todos os métodos abstratos.

A classe abstrata a seguir declara um método abstrato finde também inclui
um método normal display.

Exemplo: classe abstrata 
*/
abstract class Person {
    name: string;
    
    constructor(name: string) {
        this.name = name;
    }

    display(): void{
        console.log(this.name);
    }

    abstract find(string): Person;
}

class Employee extends Person { 
    empCode: number;
    
    constructor(name: string, code: number) { 
        super(name); // must call super()
        this.empCode = code;
    }

    find(name:string): Person { 
        // execute AJAX request to find an employee from a db
        return new Employee(name, 1);
    }
}

let emp: Person = new Employee("James", 100);
emp.display(); //James

let emp2: Person = emp.find('Steve');
/*
No exemplo acima, Personé uma classe abstrata que inclui uma propriedade
e dois métodos, um dos quais é declarado como abstrato. O find()método é um
método abstrato e, portanto, deve ser definido na classe derivada. 
A Employeeclasse deriva da Personclasse e, portanto, deve definir o find() 
método como abstrato. A Employeeclasse deve implementar todos os métodos 
abstratos da Personclasse, caso contrário o compilador mostrará um erro. 
*/
//================================================================
//================================================================
//================================================================
/*
Relacionamentos entre classes
Relationships Between Classes

Na maioria dos casos, as classes no TypeScript são comparadas estruturalmente, 
da mesma forma que os outros tipos.

Por exemplo, essas duas classes podem ser usadas no lugar uma da outra porque 
são idênticas:
*/
class Point1 {
  x = 0;
  y = 0;
}
 
class Point2 {
  x = 0;
  y = 0;
}
 
// OK
const p: Point1 = new Point2();
/*
Da mesma forma, relacionamentos de subtipos entre classes existem mesmo se não
houver herança explícita:
*/
class Person {
  name: string;
  age: number;
}
 
class Employee {
  name: string;
  age: number;
  salary: number;
}
 
// OK
const p: Person = new Employee();
/*
Isso parece simples, mas há alguns casos que parecem mais estranhos do que outros.

Classes vazias não têm membros. Em um sistema de tipo estrutural, um tipo sem membros
geralmente é um supertipo de qualquer outra coisa. Então, se você escrever uma classe
vazia (não!), qualquer coisa pode ser usada no lugar dela:
*/
class Empty {}
 
function fn(x: Empty) {
  // can't do anything with 'x', so I won't
}
 
// All OK!
fn(window);
fn({});
fn(fn);
