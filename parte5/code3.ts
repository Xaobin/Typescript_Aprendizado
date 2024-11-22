/*
Static Methods
https://www.typescripttutorial.net/typescript-tutorial/typescript-static-methods-and-properties/

Métodos e propriedades estáticos do TypeScript

Propriedades estáticas
Ao contrário de uma propriedade de instância, uma propriedade estática é 
compartilhada entre todas as instâncias de uma classe.

Para declarar uma propriedade estática, você usa a palavra- staticchave.
Para acessar uma propriedade estática, você usa a className.propertyNamesintaxe. 
Por exemplo:
*/
class Employee {
    static headcount: number = 0;

    constructor(
        private firstName: string,
        private lastName: string,
        private jobTitle: string) {

        Employee.headcount++;
    }
}
/*
Neste exemplo, headcounté uma propriedade estática que inicializou em zero.
Seu valor é aumentado em 1 sempre que um novo objeto é criado.

O seguinte cria dois Employeeobjetos e mostra o valor da headcountpropriedade.
Ele retorna dois como esperado.
*/
let john = new Employee('John', 'Doe', 'Front-end Developer');
let jane = new Employee('Jane', 'Doe', 'Back-end Developer');

console.log(Employee.headcount); // 2
/*
Métodos estáticos
Semelhante à propriedade estática, um método estático também é compartilhado
entre instâncias da classe. Para declarar um método estático, use a 
palavra- staticchave antes do nome do método. 
Por exemplo:
*/
class EmployeeII {
    private static headcount: number = 0;

    constructor(
        private firstName: string,
        private lastName: string,
        private jobTitle: string) {

        Employee.headcount++;
    }

    public static getHeadcount() {
        return Employee.headcount;
    }
}
/*
Neste exemplo:

Primeiro, altere o modificador de acesso da headcountpropriedade estática 
de publicpara privatepara que seu valor não possa ser alterado fora da 
classe sem a criação de um novo Employeeobjeto.
Segundo, adicione o getHeadcount()método estático que retorna o valor 
da headcountpropriedade estática.
Para chamar um método estático, você usa a className.staticMethod()sintaxe. 
Por exemplo:
*/
let johnII = new EmployeeII('John', 'Doe', 'Front-end Developer');
let janeII = new EmployeeII('Jane', 'Doe', 'Back-end Developer');

console.log(EmployeeII.getHeadcount()); // 2
/*
Na prática, você encontrará a biblioteca que contém muitas propriedades e 
métodos estáticos como o Mathobjeto. Tem PI, E, … propriedades estáticas e
abs(), round(), etc., métodos estáticos.

Resumo
Propriedades e métodos estáticos são compartilhados por todas as instâncias de uma classe.
Use a palavra- staticchave antes de uma propriedade ou método para torná-la estática. 
*/
