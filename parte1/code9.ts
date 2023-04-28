//APRENDIZADO TYPESCRYPT - ENUM
// ==> Exemplo 01: Numeric Enums (Enums Numérico)
//https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#enums
/*
 Enums são um recurso adicionado ao JavaScript pelo TypeScript que permite descrever
 um valor que pode ser um de um conjunto de possíveis constantes nomeadas.  Ao contrário
 da maioria dos recursos do TypeScript, essa não é uma adição de nível de tipo ao 
 JavaScript, mas algo adicionado à linguagem e ao tempo de execução.  Por causa disso, 
 é um recurso que você deve saber que existe, mas talvez adie o uso, a menos que 
 tenha certeza.  Você pode ler mais sobre enums na página de referência do Enum:
 https://www.typescriptlang.org/docs/handbook/enums.html
 * 
 * 
 */
enum Idioma {
  Portugues,
  Espanhol,
  Ingles,
  Frances,
}
console.log(Idioma);
//=========================================String Enums
enum Dia {
  Segunda = 'SEG',
  Terca = 'TER',
  Quarta = 'QUA',
  Quinta = 'QUI',
  Sexta = 'SEX',
  Sabado = 'SAB',
  Domingo = 'DOM',
}
console.log("Enum dia: "+Dia.Terca);
//=========================================Enum com uma chave: (usando o const)
const enum Comida {
  Hamburger = 'Hamburger',
  Massa = 'Massa',
  Pizza = 'Pizza',
  Torta = 'Torta',
  Churrasco = 'Churrasco',
}
function comida(c: Comida) {
  return '---Comida muito saborosa!---';
}

console.log(comida(Comida.Pizza));
console.log(comida(Comida.Churrasco));
//=========================================
enum Tarefa {
  Todo,
  Progress,
  Done,
}
const endTask = {
  id: 1,
  status: Tarefa.Done,
  descricao: 'Congratulations! Tarefa concluída com sucesso!',
};

if (endTask.status === Tarefa.Done) {
  console.log('Enviar e-mail: Tarefa Concluída!');
}
//=========================================
