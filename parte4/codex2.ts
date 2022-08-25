/*
 * Non-null assertion operator 
 * https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#:~:text=Non-null%20assertion%20operator&text=post-fix%20expression%20operator%20may,with%20null%20and%20undefined%20excluded.
 * 
 * Operador de asserção não nulo Uma nova ! O operador de expressão 
 * post-fix pode ser usado para afirmar que seu operando é não nulo 
 * e não indefinido em contextos em que o verificador de tipos não 
 * consegue concluir esse fato. Especificamente, a operação x! produz
 * um valor do tipo x com nulo e indefinido excluídos. Semelhante a
 * asserções de tipo das formas <T>x e x como T, o ! operador de 
 * asserção não nulo é simplesmente removido no código JavaScript emitido.
 * 
 */
// Compiled with --strictNullChecks
function validateEntity(e?: Entity) {
  // Throw exception if e is null or invalid entity
}
function processEntity(e?: Entity) {
  validateEntity(e);
  let s = e!.name; // Assert that e is non-null and access name
}

 
