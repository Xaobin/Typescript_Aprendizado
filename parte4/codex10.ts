/*
 https://github.com/matheusbattisti/curso_typescript/blob/main/7_CRIACAO_DE_TIPOS/index.ts (Linha 81)
 https://www.typescript-training.com/course/intermediate-v1/08-indexed-access-types/
 Os tipos de acesso indexado fornecem um mecanismo para
 recuperar parte(s) de uma matriz ou tipo de objeto por 
 meio de índices. Veremos como esse tipo funciona e alguns
 exemplos práticos de onde você pode usá-los.

No nível mais simples, esses tipos de tipos são sobre
acessar alguma parte de outro tipo, por meio de um índice
 */

interface Car {
  make: string
  model: string
  year: number
  color: {
    red: string
    green: string
    blue: string
  }
}
 
let carColor: Car["color"] 
