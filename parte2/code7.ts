//DEFAULT PARAMETER - APRENDIZADO TYPESCRIPT
export {};
//==============================================
function discountCompra(preco: number, desconto = 0.07) {
  return preco * (1 - desconto);
}
console.log(discountCompra(100)); //93
//==============================================
function showMensagem(mensagem: string, cumprimenta = 'Olá a todos!') {
  return cumprimenta + ' ' + mensagem + '!';
}
console.log(showMensagem('Java Developers'));
//==============================================
function showNome(nome: string, sobrenome = 'Bubamara') {
  return nome + ' ' + sobrenome;
}
const result_1 = showNome('Dara');
const result_2 = showNome('Dara', undefined);
// const result_3 = showNome('Dara', 'Bubamara', 'La Senhorita');
const result_4 = showNome('Dara', 'Bubamara');
console.log(result_1);
console.log(result_2);
// console.log(result_3);
console.log(result_4);
//==============================================
