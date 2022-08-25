//APRENDIZADO TYPESCRIPT
//KEYOF TYPE OPERATOR
//https://www.typescriptlang.org/docs/handbook/2/keyof-types.html

/*O  operador de tipo keyof
O keyofoperador pega um tipo de objeto e produz uma string ou 
união literal numérica de suas chaves. O seguinte tipo P é do mesmo tipo que “x” | “s”:
*/
type Point = { x: number; y: number };
type P = keyof Point;
    
type P = keyof Point
/*
Se o tipo tiver uma assinatura de índice stringou , retornará esses tipos:numberkeyof
*/
type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish;
    
type A = number
 
type Mapish = { [k: string]: boolean };
type M = keyof Mapish;
    
type M = string | number
/*
Observe que neste exemplo, Mis string | number— isso ocorre porque as chaves 
de objeto JavaScript são sempre forçadas a uma string, portanto, obj[0]é 
sempre igual a obj["0"].

keyofos tipos tornam-se especialmente úteis quando combinados com tipos mapeados,
sobre os quais aprenderemos mais adiante.
*/
