 /*
  https://mariusschulz.com/blog/conditional-types-in-typescript
  
#Introdução aos tipos condicionais

Um tipo condicional descreve um teste de relacionamento 
de tipo e seleciona um dos dois tipos possíveis, 
dependendo do resultado desse teste. Sempre tem a 
seguinte forma:

T extends U ? X : Y

... ? ... : ...Os tipos condicionais usam a sintaxe familiar
que o JavaScript usa para expressões condicionais. T, U, Xe Y 
representam tipos arbitrários. A T extends Uparte descreve o
teste de relacionamento de tipo. Se esta condição for atendida,
o tipo Xé selecionado; caso contrário, o tipo Y é selecionado.

Em linguagem humana, esse tipo condicional é lido da seguinte
forma: Se o tipo Tfor atribuível ao tipo U, selecione o tipo X;
caso contrário, selecione o tipo Y.

Aqui está um exemplo de um tipo condicional predefinido no arquivo
de definição de tipo lib.es5.d.ts do TypeScript :

/**
 * Exclude null and undefined from T
 */
type NonNullable<T> = T extends null | undefined ? never : T;

/*
 O NonNullable <T> tipo seleciona o never type se o tipo T for 
 atribuível ao tipo nullou ao tipo undefined; caso contrário, ele
 mantém o tipo T. O nevertipo é o tipo inferior do TypeScript , 
 o tipo para valores que nunca ocorrem.
*/

/* 
 #Tipos Condicionais Distributivos
Então, por que a combinação de um tipo condicional e o tipo never é
útil? Ele efetivamente nos permite remover tipos constituintes de 
um tipo de união. Se o teste de relacionamento no tipo condicional 
verificar um parâmetro de tipo nu, o tipo condicional será chamado 
de tipo condicional distributivo e será distribuído por um tipo de 
união quando esse tipo de união for instanciado.

Como NonNullable<T>verifica um parâmetro de tipo nu, ele é distribuído
em um tipo de união A | B. Isso significa que NonNullable<A | B> é 
resolvido como NonNullable<A> | NonNullable<B>. Se, por exemplo ,
NonNullable<A>resolver para o nevertipo, podemos remover Ado tipo de
união resultante, filtrando efetivamente o tipo Adevido à sua nulidade.
O mesmo vale para NonNullable<B>.

Esta descrição era bastante abstrata, então vamos ver um exemplo
concreto. Definiremos um EmailAddressalias de tipo que representa
uma união de quatro tipos diferentes, incluindo os tipos de unidade
nulle :undefined
*/
type EmailAddress = string | string[] | null | undefined;
/* Vamos agora aplicar o NonNullable<T>tipo EmailAddresse resolver o
tipo resultante passo a passo: */
type NonNullableEmailAddress = NonNullable<EmailAddress>;
//Começaremos substituindo EmailAddresspelo tipo de união que ele alia:

type NonNullableEmailAddress = NonNullable<
  string | string[] | null | undefined
>;
/*
É aqui que entra em jogo a natureza distributiva dos tipos condicionais.
Estamos aplicando o NonNullable<T>tipo a um tipo de união; isso é 
equivalente a aplicar o tipo condicional a todos os tipos no tipo união:
*/
type NonNullableEmailAddress =
  | NonNullable<string>
  | NonNullable<string[]>
  | NonNullable<null>
  | NonNullable<undefined>;
//Agora podemos substituir NonNullable<T>por sua definição em todos os lugares:

type NonNullableEmailAddress =
  | (string extends null | undefined ? never : string)
  | (string[] extends null | undefined ? never : string[])
  | (null extends null | undefined ? never : null)
  | (undefined extends null | undefined ? never : undefined);
/*
  Em seguida, teremos que resolver cada um dos quatro tipos condicionais.
  Nem stringnem string[]são atribuíveis a null | undefined, razão pela 
  qual os dois primeiros tipos selecionam stringe string[]. Ambos nulle 
  undefinedsão atribuíveis a null | undefined, razão pela qual os dois 
  últimos tipos selecionam never:
*/
type NonNullableEmailAddress = string | string[] | never | never;
/*Por neverser um subtipo de todo tipo, podemos omiti-lo do tipo união. 
Isso nos deixa com o resultado final: */

type NonNullableEmailAddress = string | string[];
//E isso é realmente o que esperamos que nosso tipo seja!
