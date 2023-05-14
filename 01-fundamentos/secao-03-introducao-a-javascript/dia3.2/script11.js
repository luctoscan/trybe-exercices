/* Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra, como a palavra “banana” para “ananab”. */

let word = 'Lucas';
let palavraInvertida = '';

palavraInvertida = word.split('').reverse().join('');

console.log(palavraInvertida);

/* O método .split('') é usado para dividir a string em um array de caracteres. O parâmetro '' indica que a string deve ser dividida em cada caractere individualmente.

O método .reverse() é usado para inverter a ordem dos elementos no array.

O método .join('') é usado para unir os caracteres do array em uma única string novamente, sem nenhum caractere separador. O parâmetro '' é usado para indicar que não deve haver separador entre os caracteres. */