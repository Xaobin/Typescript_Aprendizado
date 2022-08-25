//APRENDIZADO TYPESCRIPT - MODIFICADORES DE ACESSO
/*
 * https://www.javatpoint.com/typescript-access-modifiers
 * 
 Público (public)
No TypeScript, por padrão, todos os membros (propriedades e métodos) de 
uma classe são públicos. Portanto, não há necessidade de prefixar os 
membros com essa palavra-chave. Podemos acessar esse membro de dados em 
qualquer lugar sem qualquer restrição.

Privado (private)
O modificador de acesso privado não pode ser acessado fora de sua
classe que o contém. Ele garante que os membros da classe sejam visíveis
apenas para a classe na qual está contido.

Protegido (protected)
Um modificador de acesso protegido pode ser acessado apenas dentro da 
classe e sua subclasse. Não podemos acessá-lo de fora de uma classe na 
qual ele está contido.
=======================================================================
Segundo O slide do Prof. Matheus Battisti, o modificador protected pode
ser acessado apenas pela subclasse
 */

export {};
//============================================= public
class TopologiaDeRede {
  tipoDeRede: string;
  caracteristica: string;
}

const rede = new TopologiaDeRede();
rede.tipoDeRede = "Estrela";
rede.caracteristica = 'Nós se conectam a um hub central';

console.log(rede.tipoDeRede);
console.log(rede.caracteristica);

//=========================================== private
class TopologiaDeRede_02 {
  tipoDeRede: string;
  caracteristica: string;
  private dataImplantacao: string; // <-Tem um private aqui

  constructor(tipo: string, caract: string, datah: string) {
    this.tipoDeRede = tipo;
    this.caracteristica = caract;
    this.dataImplantacao = datah;
  }

  retornarDadosTopologiaDeRede() {
    return `Tipo da Rede...: ${this.tipoDeRede}.
      Característica da Rede...: ${this.caracteristica}.
      Implantação da Rede...: ${this.dataImplantacao}`;
  }
}

const rede_02 = new TopologiaDeRede_02("Anel", 'Os dados viajam por cada dispositivo', '28/12/2021');
console.log(rede_02.retornarDadosTopologiaDeRede());

//============================================= protected
class TopologiaDeRede_03 {
  tipoDeRede: string;
  protected caracteristica: string; //<- Tem um protect aqui

  constructor(tipoDeRede: number, caracteristica: string) {
    this.tipoDeRede = tipoDeRede;
    this.caracteristica = caracteristica;
  }
}

class MinhaRede extends TopologiaDeRede_03 {
  private tamanho: string;

  constructor(tipoDeRede: string, caracteristica: string, tam: string) {
    super(tipoDeRede, caracteristica);
    this.tamanho = tam;
  }

  retornarDados() {
    return `Tipo de Rede: ${this.tipoDeRede}.
    Característica: ${this.caracteristica}.
    Tamanho: ${this.tamanho}`;
  }
}

const rede_03 = new MinhaRede('Barramento', 'os dados fluem unidirecionalmente por um único cabo', '10 Metros');
console.log(rede_03.retornarDados());
//=======================================================
