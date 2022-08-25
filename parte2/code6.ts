//OPTIONAL PARAMETER - APRENDIZADO TYPESCRIPT
export {};
//==============================================
function informPessoaDados(idPessoa: number, nome: string, email?: string) {
  console.log('Id Funcionário...: ', idPessoa, 'Nome...: ', nome);

  if (email != undefined) console.log('E-mail...: ', email);
}
//------Mesma função - QTDE diferente de parâmetros
informPessoaDados(886644, 'Rajna Stefanovska');
informPessoaDados(993453, 'Dara Bubamara', 'dara@famous.com');
//==============================================
function msgLog(mensagem: string, usuarioId?: number) {
  const horaLog = new Date().toLocaleTimeString();

  console.log(horaLog, mensagem, usuarioId || 'Usuário(a) não conectado(a)');
}
msgLog('Atualizar Página');
msgLog('Usuário(a) logado(a) com sucesso');
//==============================================
type Pessoa = {
  idFuncionario: number;
  nome: string;
  idade?: number;
  email?: string;
};
let pessoa: Pessoa;
pessoa = {
  idFuncionario: 663399,
  nome: 'Rajna Stefanovska',
};
console.log(pessoa);
//==============================================
