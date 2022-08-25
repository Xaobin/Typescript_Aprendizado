/*
 * https://fjolt.com/article/typescript-typeof-operator
 
 How the typeof Operator works in TypeScript
In Javascript, we already have a vanilla typeof 
operator which can be used to find the type of anything:

let x = "hello world";
console.log(typeof x); // Returns "string"
 */

/*
 A aplicação mais básica do typeof TypeScript é a criação de novos
 tipos básicos. Se estivermos definindo nossos próprios tipos 
 personalizados no TypeScript , podemos usar typeofpara copiar o 
 tipo de um item existente. Um exemplo simples em que pegamos um 
 number, e criamos um tipo personalizado na parte de trás dele se 
 parece com isso:
 */
let z = 1234;

// Custom type aNumber
type aNumber = typeof z;
//==============================================
let x = 1234;
let y = "string";

// Custom type aNumber
type myType = {
    name: typeof y,
    age: typeof x,
}
