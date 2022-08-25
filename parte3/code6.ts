/*
 * 
 * Decorators
 * Um Decorator é um tipo especial de declaração que pode ser
 * anexada a uma declaração de classe, método, acessador, propriedade
 * ou parâmetro.  Decoradores usam a forma @expression, onde expressão
 * deve resultar em uma função que será chamada em tempo de execução
 * com informações sobre a declaração decorada.
 * 
Por exemplo, dado o decorador @sealed, podemos escrever a função 
sealed da seguinte forma:
 function sealed(target) {
  // do something with 'target' ...
}
 
https://www.typescriptlang.org/docs/handbook/decorators.html

Executar
tsc --target ES5 --experimentalDecorators
*
*/ 

function first() {
  console.log("first(): factory evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("first(): called");
  };
}
 
function second() {
  console.log("second(): factory evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("second(): called");
  };
}
 
class ExampleClass {
  @first()
  @second()
  method() {}
}
/*
 * O que imprimiria esta saída no console:
first(): factory evaluated
second(): factory evaluated
second(): called
first(): called
 */
