//while - APRENDIZADO TYPESCRYPT
//==============================================
let counter = 0;
while (counter < 5) {
  console.log(counter);
  counter++;
}
//==============================================
let num = 1;
while (num <= 20) {
  if (num % 5 == 0) {
    console.log('O primeiro múltiplo de 5 entre 1 a 20 é...: ', num);
    break;
  }
  num++
}
//==============================================
let counterUsuario = 0;
const usuario : string[] = ['Xênia', 'Iracema', 'Nadja'];

while (usuario[counterUsuario]) {

  console.log('Usuários...: ', usuario[counterUsuario]);
  counterUsuario++;
}
//==============================================
let counter_01 = 0;
do {
  console.log(counter_01);
  counter_01++
} while (counter_01 < 5)
//==============================================
