//APRENDIZADO TYPESCRIPT - diferença entre type aliases e interface

/*
 * https://ageek.dev/ts-types-interfaces
 * 
 * Ambos podem ser usados ​​para declarar a forma do objeto. 
 * Como o TypeScript é um sistema de tipo estrutural, 
 * é possível misturar seu uso também.
 */
type BirdType = {
  wings: 2
}

interface BirdInterface {
  wings: 2
}

const bird1: BirdType = {wings: 2}
const bird2: BirdInterface = {wings: 2}
const bird3: BirdInterface = bird1
/*
 * Uma grande diferença entre aliases de tipo e interfaces 
 * é que as interfaces são abertas e os aliases de tipo são 
 * fechados. Isso significa que você pode estender uma 
 * interface declarando-a várias vezes e será tratada como
 * uma única interface (com membros de todas as declarações 
 * sendo mescladas).
 * 
*/
interface Point {
  x: number
}
interface Point {
  y: number
}
const point: Point = {x: 1, y: 2}
/*
 * No outro caso, um tipo não pode ser alterado fora de
 * sua declaração.
 */
type Puppy = {
  color: string
}

type Puppy = {
  toys: number
}
// Error: duplicate identifier Puppy
/*
 * Dependendo de seus objetivos, essa diferença pode ser positiva 
 * ou negativa. * No entanto, para tipos expostos publicamente, 
 * é melhor torná-los uma interface.

Sempre use interfaces para definição de API pública ao criar uma 
biblioteca ou definições de tipo de ambiente de terceiros.
--------------------------------------
Ambos podem ser estendidos

Ambos suportam a extensão de outras interfaces e tipos. Os aliases 
de tipo fazem isso por meio de tipos de interseção, enquanto as
interfaces têm uma palavra-chave.
 */
type Owl = {nocturnal: true} & BirdType
type Robin = {nocturnal: false} & BirdInterface

interface Peacock extends BirdType {
  colorful: true
  flies: false
}
interface Chicken extends BirdInterface {
  colorful: false
  flies: false
}

let owl: Owl = {wings: 2, nocturnal: true}
let chicken: Chicken = {wings: 2, colorful: false, flies: false}
