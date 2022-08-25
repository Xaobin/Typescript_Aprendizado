/*
 TypeScript – Method Overriding
TypeScript – Substituição de método
https://www.tutorialkart.com/typescript/typescript-method-overriding/

Substituição de método é um processo de derrubar um método de
superclasse por método de mesmo nome e parâmetros na subclasse.

A substituição de método é útil quando a subclasse deseja modificar
o comportamento da superclasse para determinadas tarefas.

Exemplo
A seguir está um exemplo simples de substituição de método onde o
método eat() da classe Student substitui o método eat() da classe Person.
*/
class Person{
    name:string
 
    eat():void{
        console.log(this.name+" eats when hungry.")
    }
}
 
class Student extends Person{
    // variables
    rollnumber:number;
 
    // constructors
    constructor(rollnumber:number, name1:string){
        super(); // calling Parent's constructor
        this.rollnumber = rollnumber
        this.name = name1
    }
 
    // functions
    displayInformation():void{
        console.log("Name : "+this.name+", Roll Number : "+this.rollnumber)
    }
 
    // overriding super class method
    eat():void{
        console.log(this.name+" eats during break.")
    }
}
 
var student1 = new Student(2, "Rohit")
 
student1.displayInformation()
student1.eat()
//Quando o programa .ts acima é compilado para o arquivo .js.

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.eat = function () {
        console.log(this.name + " eats when hungry.");
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    // constructors
    function Student(rollnumber, name1) {
        var _this = _super.call(this) || this;
        _this.rollnumber = rollnumber;
        _this.name = name1;
        return _this;
    }
    // functions
    Student.prototype.displayInformation = function () {
        console.log("Name : " + this.name + ", Roll Number : " + this.rollnumber);
    };
    // overriding super class method
    Student.prototype.eat = function () {
        console.log(this.name + " eats during break.");
    };
    return Student;
}(Person));
var student1 = new Student(2, "Rohit");
student1.displayInformation();
student1.eat();
/*
 Você pode executar o arquivo .js usando um editor online try 
javascript copiando o código javascript para o editor de código,

Name : Rohit, Roll Number : 2
VM73:35 Rohit eats during break.

Chamar métodos de superclasse da subclasse
Os métodos de superclasse imediatos podem ser chamados da
subclasse usando a palavra-chave super .
*/
eat():void{
        super.eat()
        console.log(this.name+" eats during break.")
    }
//Substitua este método pelo da classe Aluno e execute o programa.

//O método eat() na classe Person é executado para super.eat().

/*Conclusão
Neste tutorial do TypeScript , aprendemos a substituir o 
comportamento das classes pai usando a substituição de método 
com a ajuda do programa Example TypeScript.
*/
