//APRENDIZADO TYPESCRIPT - CLASSES
//=====================================
export {};
//=====================================
class Empresa {
  razaoSocial: string;
  pessoaJuridica: string;

  constructor(nome: string, pj: string) {
    this.razaoSocial = nome;
    this.pessoaJuridica = pj;
  }

  dadosCompletos(): string {
    return `${this.razaoSocial} ${this.pessoaJuridica}`;
  }
}
const empresa = new Empresa('Mnemonic Enterprise', '37464.47474-00');
console.log(empresa.dadosCompletos());
//===================================== Classes - without constructor
class Terminator {
  codeTerminator: string;
  anoFabricacao: string;
}
const exterminador = new Terminator();
exterminador.codeTerminator = 'T-800';
exterminador.anoFabricacao = '22-09-2133';

console.log('Código do Terminator...: ' + exterminador.codeTerminator);
console.log('Nome do Terminator...: ' + exterminador.anoFabricacao);

//=====================================- Classes with constructor
class Terminator {
  codeTerminator: string;
  anoFabricacao: string;

  constructor(codigo: string, ano: string) {
    this.codeTerminator = codigo;
    this.anoFabricacao = ano;
  }

  listarTerminator(): void {
    console.log('Código do exterminator...: ' + this.codeTerminator);
    console.log('Nome do exterminator...: ' + this.anoFabricacao);
  }
}
const exterminador1 = new Terminator('T-600', '31-06-2099');
console.log(
  'Lendo o atributo Código do exterminador...: ' + exterminador1.codeTerminator,
);
console.log(
  'Lendo o atributo Nome do Terminator...: ' + exterminador1.anoFabricacao,
); 
