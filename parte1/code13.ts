//APRENDIZADO TYPESCRIPT - Never - Throw Exception
//=========================================
function error(message: string): never {
  throw new Error(message);
}
console.log(error('Erro de Mensagem - 01'));

//=========================================
function rejectMessage() {
  return error('Error de Mensagem - 02');
}
console.log(rejectMessage());

//=========================================
const loopInfinito = function loop() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    console.log('Oi, Developers!');
  }
};
const algumaCoisaVoid: void = null;
//=========================================
