//APRENDIZADO TYPESCRIPT - type annotation
export { };

//=========================================
let nome: string = 'Xaobin';
console.log(nome);
//=========================================
let categorias: string[] = ['Filmes', 'Músicas', 'Eletrodomésticos', 'Ferramentas', 'Informática'];
console.log(categorias);
//=========================================
//========================================= Objetos - Type Annotations
let carro: {
  nome: string;
  ano: number;
  preco: number;
};
carro = { nome: 'Toyota Etios Sedan', ano: 2022, preco: 60000 };
console.log(carro);

//========================================= Functions - type annotation
function multiplicarNumero(num1: number, num2: number) {
  return num1 * num2;
}
console.log(multiplicarNumero(2, 5)); 
//=========================================
