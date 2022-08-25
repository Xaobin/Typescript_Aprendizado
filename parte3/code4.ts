//APRENDIZADO TYPESCRIPT - GETTERS E SETTERS
export { };

//========================================get
class PedraPreciosa {
  private nome = "Ametista";
  private preco = 1200.00;
  desconto=0.07

  get calcularPreco() {
    return this.preco *(1- this.desconto);
  }
}

console.log(new PedraPreciosa().calcularPreco);
//========================================set
class Smartphone {
  nome: string;

  retornarNomeSmartphone(setNomeSmartphone: string) {
    this.nome = setNomeSmartphone;
  }
}

const smartphone = new Smartphone();
smartphone.retornarNomeSmartphone('Motorola Edge 20');
console.log('O smartphone é...: ', smartphone.nome);

//==================================================get
class Livro {
  private _nome = 'Operation trojan horse';
  private _qtdePaginas: number;
  private _autor: string;

  public get nomeLivro() {
    return this._nome;
  }
}

const livro = new Livro();
const resultado = livro.nomeLivro;
console.log(resultado);

//================================================================
class Livro_01 {
  nome: string;
  qtdePaginas: number;
  autor: string;

  constructor(nomeLivro: string, qtdePaginasLivro: number, autorLivro: string) {
    this.nome = nomeLivro;
    this.qtdePaginas = qtdePaginasLivro;
    this.autor = autorLivro;
  }

  public get autors() {
    return this.autor;
  }

  public set autors(setLivro: string) {
    this.autor = setLivro;
  }
}

const livro_01 = new Livro_01('The Go Programming', 400, 'Alan A. A. Donovan');
console.log(livro_01);

// Setter call
livro_01.autor = 'Alan A. A. Donovan';

// Getter call
console.log('Livro atualizado...:', livro_01.autors);
//========================================================
