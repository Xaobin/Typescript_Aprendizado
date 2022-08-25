//APRENDIZADO TYPESCRYPT - TUPLAS
//https://www.typescriptlang.org/docs/handbook/2/objects.html
//https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types
//=========================================
console.log("============================================================");
let pessoa: [string, string, number];
pessoa = ['Tahva Bjorna', 'Cloud Advocate Java', 34];
console.log("========== Pessoa [Tupla]====================");
console.log(pessoa);

//========================================= Acessando o valor da Tupla
console.log("========== Pessoa[1] - Tupla");
let pessoa1: [string, string, number];
pessoa1 = ['Jeff Stronghold', 'Cloud Advocate Golang', 34];
console.log(pessoa1[1]);
//========================================= Tuplas em TypeScrit (com labels)
let pessoa2: [nome: string, posicao: string, idade: number] = ['Jeff Bergston', 'Cloud Advocate JS Technologies', 34];
console.log("============ Pessoa2 - Tuplas - Outra forma - lablets");
console.log(pessoa2);
//=========================================Tuplas com Spread Operator
console.log("========== Tuplas - Spread Operator ===================");
let listaPessoas: [string, ...string[]] = ['Janaína', 'Olga', 'Poliana', 'Xênia', 'Clara'];
console.log(...listaPessoas);
//========================================= Lista Heterogênea de Tupla:
console.log("=========Tuplas Listagem heterogênea =====================");
let listaPessoas2: [number, boolean, ...string[]] = [5, true, ...listaPessoas];
console.log(listaPessoas2);
//=========================================Uso de função com Tuplas
console.log("=========Uso de Função em Tuplas=====================");
function listarPessoas(nomes: string[], idades: number[]) {
    return [...nomes, ...idades];
}
let resultado = listarPessoas(['Xaobin', 'My Robot'], [34, 68]);
console.log(resultado)
//=========================================Labeled Tuples com Spread Operator numa função
console.log("=========Labeled Tuplas com Spread Operator=====================");
type Nome = 
        | [primeiroNome: string, sobrenome: string]
        | [primeiroNome: string, nomeMeio: string, sobrenome: string]

function criarPessoa(...nome: Nome) {
    return [...nome];
}
console.log(criarPessoa('Xaobin', 'Gadelha'));
console.log("==============================");
console.log(criarPessoa('Cyborg', 'Lima', 'Couto'));
console.log("==============================");
//=========================================
