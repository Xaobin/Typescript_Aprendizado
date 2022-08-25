//APRENDIZADO TYPESCRIPT - Type object e resumos
export { };
//========================================= Type Object
const pessoa = {
  nome: 'Tahvo',
  sobrenome: 'Bataev',
  idade: 66,
  funcao: 'Cloud Advocate'
};
console.log("*** Const Pessoa ***");
console.log(pessoa);
console.log("*** ************* ***");
//========================================= object como parâmetros
function aBordo_01(funcionario: { nome: string }) {
  return 'Seja bem-vindo ' + funcionario.nome;
}
console.log("*** a Bordo 1 - objeto como parâmetro ***");
console.log(aBordo_01({ nome: 'Tahvo Bataev' }));
//=========================================
interface Pessoa {
  nome: string;
  funcao: string;
}
function aBordo_02(pessoa: Pessoa) {
  return (
    'Seja bem-vindo ' +
    pessoa.nome +
    '!' +
    ' Sua função aqui na empresa será ' +
    pessoa.funcao +
    '.'
  );
}
console.log("*** a Bordo 2 - objeto nomeado  - interface ***");
console.log(aBordo_02({ nome: 'Tahvo Bataev', funcao: 'Cloud Advocate' }));
//=========================================
type Pessoa03 = {
  nome: string;
  funcao: string;
  linguagem: string;
}
function aBordo_03(pessoa: Pessoa03) {
  return (
    'Seja bem-vindo ' +
    pessoa.nome +
    '!' +
    ' Sua função aqui na empresa será ' +
    pessoa.funcao +
    '.' +
    ' Você trabalhará com a linguagem ' +
    pessoa.linguagem +
    '.'
  );
}
console.log("*** a Bordo 3 - objeto com type alias ***");
console.log(aBordo_03({ nome: 'Tahvo Bataev', funcao: 'Cloud Advocate', linguagem: 'JavaScript/Typescript' }));
//=========================================
interface Pessoa04 {
  nome: string;
  funcao: string;
  linguagem: string;
  email?: string;
}
function aBordo_04(pessoa: Pessoa04) {
  return (
    'Seja bem-vindo ' +
    pessoa.nome +
    '!' +
    ' Sua função aqui na empresa será ' +
    pessoa.funcao +
    '.' +
    ' Você trabalhará com a linguagem ' +
    pessoa.linguagem +
    '.'
  );
}
console.log("*** a Bordo 4 - optional ***");
console.log(aBordo_04({ nome: 'Tahvo Bataev', funcao: 'Cloud Advocate', linguagem: 'JavaScript/Typescript' }));
//=========================================
interface Pessoa05 {
  nome: string;
  funcao: string;
  linguagem: string;
  readonly email: string;
}
function aBordo_05(pessoa: Pessoa05) {
  return (
    'Seja bem-vindo ' +
    pessoa.nome +
    '!' +
    ' Sua função aqui na empresa será ' +
    pessoa.funcao +
    '.' +
    ' Você trabalhará com a linguagem ' +
    pessoa.linguagem +
    '.' +
    ' Seu e-mail será ' +
    pessoa.email
  );
}
console.log("*** a Bordo 5 ***");
console.log(aBordo_05(
  {
    nome: 'Tahvo Bataev',
    funcao: 'Cloud Advocate',
    linguagem: 'JavaScript/Typescript',
    email: 'tahvos@clientserver.com'
  }
));

//========================================= extends (heranças)
interface Mae {
  nome: string;
}
interface Pai {
  sobrenome: string;
}
interface Filha extends Mae, Pai {
  idade: number;
}
const filha: Filha = {
  nome: 'Tahvo',
  sobrenome: 'Bataev',
  idade: 35
}
console.log("*** Filha ***");
console.log(filha);

//========================================= Interseções
interface Cachorro {
  tipo: string;
}
interface Gato {
  tipo: string;
}
type Animal = Cachorro & Gato;

//========================================= Generic Objects
type Usuario = {
  nome: string;
  email: string;
}
type Admin = {
  nome: string;
  email: string;
  admin: true;
}
const usuario: Usuario = {
  nome: 'Tahvo Bataev',
  email: 'masterkey@gmail.com'
}

const admin: Admin = {
  nome: 'Tahvo Bataev',
  email: 'masterkey@gmail.com',
  admin: true
}
function acessarSistema<T>(usuario: T): T {
  return usuario;
}
console.log("*** acessarSistema <Usuario> ***");
console.log(acessarSistema<Usuario>(usuario));
console.log(acessarSistema<Admin>(admin));
//=========================================
