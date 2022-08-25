//APRENDIZADO TYPESCRIPT - ReadOnly Modifier
export { };

//=============================================
class Escritor {
  readonly dataNasc: Date; //<- ReadOnly

  constructor(dataNasc: Date) {
    this.dataNasc = dataNasc;
  }
}

const escritor = new Escritor(new Date(1999, 11, 11));
// escritor.dataNasc = new Date(1999, 11, 12);

//============================================

class Escritor_01 {
  constructor(readonly dataNasc: Date) {
    this.dataNasc = dataNasc;
  }
}

//=============================================

class Escritor_03 {
  nome: string;
  readonly codigoEscritor: number;

  constructor(nome: string, codigo: number) {
    this.codigoEscritor = codigo;
    this.nome = nome;
  }
}

const escr = new Escritor_03('Jacques Moliet', 223344);
escr.nome = 'Jacques Bermer';
// escr.codigoEscritor = 113344;

console.log(escr);

//==================================== Interface

interface IEscritor {
  codigoEscritor: number;
  nomeEscritor: string;
}

const escritor_01: Readonly<IEscritor> = {
  codigoEscritor: 506699,
  nomeEscritor: 'Dion Fortune',
};

// escritor_01.codigoEscritor = 564374;
// escritor_01.nomeEscritor = 'Rob Sangster';

const escritor_02: IEscritor = {
  codigoEscritor: 506699,
  nomeEscritor: 'David Jacobs',
};

escritor_02.codigoEscritor = 887653;
escritor_02.nomeEscritor = 'Rob Sangster'; 
