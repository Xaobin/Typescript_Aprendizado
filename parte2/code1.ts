export { };

// IF ... ELSE ... ELSEIF - - APRENDIZADO TYPESCRYPT
//==============================================
const numMax = 100;
let counter = 100;

if (counter < numMax) {
  counter++
}
console.log(counter);
//==============================================
const permission = 16;
if (permission >= 18) {
  console.log('Habilitado para dirigir!')
}
const permission01 = 18;
//==============================================
if (permission01 <= 17) {
  console.log("Maior de Idade")
} else {
  console.log("Não é maior de Idade")
}
//==============================================
let discount: number;

let purchaseValor = 14;

if (purchaseValor > 0 && purchaseValor <= 5) {
  discount = 5;
} else if (purchaseValor > 5 && purchaseValor <= 10) {
  discount = 10;
} else {
  discount = 15;
}
console.log(`Seu desconto foi de...: ${discount}% discount`);
//==============================================

const idade = 16;
const votar = (idade >= 18) ? 'Pode votar.' : 'Não Pode Votar.'
console.log(votar);
