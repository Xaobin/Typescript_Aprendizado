/*
 * https://betterprogramming.pub/mastering-typescript-template-literal-types-f4131a94ffb1
 template literal types
 https://github.com/matheusbattisti/curso_typescript/blob/main/7_CRIACAO_DE_TIPOS/index.ts Line 108
 Os  template literal types são usados ​​para produzir
 qualquer combinação de strings e tipos de string. A saída 
 será uma string de união de todas as combinações possíveis.

Vejamos um exemplo de sintaxe:
 *
 */ 
type attrs = "Phone" | "Name";
type target = `get${attrs}`;
// ✅ Result
// target = "getPhone" | "getName";
