/* Faça um algoritmo que indique se um número definido em uma variável é primo ou não.

Um número é classificado como primo se ele é maior do que 1 e divisível apenas por 1 e por ele mesmo, ou seja, a divisão dele por quaisquer outros números dá resto diferente de zero. Lembrando que números primos, são números naturais, ou seja, também não podem ser divididos por números negativos Exemplos: 13 é um número primo, pois é divisível por 1 e por 13, apenas. Já o número 20 não é primo, pois pode ser dividido por 1, 2, 4, 5, 10 e 20, todos com resto zero.

Dica: você vai precisar fazer um loop que vá de 0 ao número definido. Além disso, vai precisar fazer uma checagem a cada iteração e armazenar os resultados em algum lugar. */

let divisors = 1;
let numberToCheck = 31;

for (let number = 2; number <= numberToCheck; number += 1) {
  if (numberToCheck % number === 0) divisors += 1;
}

if (divisors === 2) console.log(numberToCheck + ' é primo');
else console.log(numberToCheck + ' não é primo');