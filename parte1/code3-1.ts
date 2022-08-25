//export { };

// ==> Variáveis [Type Annotations]
let nome = 'Xaobin';
console.log(nome);

// ==> Arrays [Type Annotations]
let categorias= ['Filmes', 'Músicas', 'Eletrodomésticos', 'Ferramentas', 'Informática'];
console.log(categorias);

// ==> Objetos [Type Annotations]
//let carro: {   nome: string;  ano: number;  preco: number;};

let carro = { nome: 'Toyota Etios Sedan', ano: 2022, preco: 60000 };
console.log(carro.nome);
console.log(carro.ano);
console.log(carro.preco);

// ==> Functions [Type Annotation]
function multiplicarNumero(num1, num2) {
  return num1 * num2;
}

console.log(multiplicarNumero(2, 5)); 
