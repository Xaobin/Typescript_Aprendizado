/*https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces
 * Uma declaração de interface é outra maneira de nomear um tipo de objeto
*/
console.log("=== INTERFACE E TYPE ==================================");
interface Pointx {
  x: number;
  y: number;
}
 
function printCoord_(pt: Pointx) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCoord_({ x: 100, y: 100 });
console.log("=====================================");
//===================================
/*
 Alias ​​de tipo (type aliases)

 Estamos usando tipos de objeto e tipos de união escrevendo-os diretamente em anotações de tipo.  Isso é conveniente, mas é comum querer usar o mesmo tipo mais de uma vez e se referir a ele por um único nome.

 Um alias de tipo é exatamente isso - um nome para qualquer tipo.  A sintaxe para um alias de tipo é:
 */
type Point = {
  x: number;
  y: number;
};
 
//=========================================
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCoord({ x: 100, y: 100 });
//===============================================
console.log("===TYPE ANIMAL E INTERFACE ANIMAL==================================");
type Animals = {
  name: string;
}

type Bear = Animals & { 
  honey: boolean ;
}


        
console.log("=====================================");
interface Animal {
  name: string;
}

interface Bears extends Animal {
  honey: boolean;
}

/*
  const bears = getBear(){
bears.name;
bears.honey;
}
*/
//console.log(bears);
console.log("=====================================");
