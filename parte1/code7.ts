//APRENDIZADO TYPESCRIPT  -Everyday types, Array, push, spread operator
/* https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays
*/
//=========================================
console.log("============= Pessoas[2]========================================");
let pessoas: string[] = ['Marília', 'Claire', 'Poliana', 'Janaína', 'Xênia'];
console.log(pessoas[2]);

//========================================= Array Object (Objeto Array):
console.log("============= Refrigerantes[3] - Array <string>");
let refrigerantes: Array<string> = ['Coca-cola', 'Pepsi', 'Sprite', 'Fanta', '7up'];
console.log(refrigerantes[3]);

//========================================= strings com método 'push'
console.log("=============Idiomas =================");
let idiomas: Array<string> = ['Português', 'Inglês', 'Espanhol', 'Francês'];
console.log(idiomas);
idiomas.push('Mandarim');
console.log("============Idiomas + mandarim ");
console.log(idiomas);
idiomas.push('Italiano');
console.log("============Idiomas + Italiano ");
console.log(idiomas);

//========================================= array - método 'length'
console.log("============ Idiomas2 Array <string> - Idiomas2 .length");
let idiomas2: Array<string> = ['Português', 'Inglês', 'Espanhol', 'Francês'];
console.log(idiomas2.length);
console.log("==============================");
//=========================================Array com Spread Operator
let listaNumeros = [0, 1, 2, 3, 4, 5];
listaNumeros = [...listaNumeros, 6, 7, 8, 9, 10];
console.log("===========listaNumeros - Spread Operator ===================");
console.log(listaNumeros);

//========================================= Array com laço de iteração
console.log("========== Array + Laço iterativo ====================");
let linguagensArray:string[] = new Array('JavaScript', 'Python', 'PHP', 'C#');
function funcaoLinguagens(linguagens:string[]) {
    for (let i = 0; i < linguagens.length; i++) {
        console.log(linguagensArray[i]); 
    }
}
funcaoLinguagens(linguagensArray);
console.log("============================================================");
//=========================================
