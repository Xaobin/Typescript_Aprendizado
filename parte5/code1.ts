 /*
 Class implementing Interfaces in TypeScript #

Use a cláusula implements para implementar uma interface em uma classe,
por exemplo, class Developer implements Employee {}.  A cláusula implements
verifica se a classe satisfaz a interface definindo todas as suas propriedades e métodos.
*/
interface Employee {
  id: number;
  name: string;
  tasks: string[];

  doWork(): void;
}

class Developer implements Employee {
  constructor(
    public id: number, public name: string, public tasks: string[]
   ) {
    this.id = id;
    this.name = name;
    this.tasks = tasks;
  }

  doWork() {
    console.log(`${this.name} writes code`);
  }
}

const dev = new Developer(1, 'Tom', ['develop', 'test', 'ship']);

console.log(dev.name); // 👉️ "Tom"

