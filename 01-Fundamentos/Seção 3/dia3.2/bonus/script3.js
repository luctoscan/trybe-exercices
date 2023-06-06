/* Escreva um algoritmo que, dado um valor N positivo, ou seja, N > 1, imprima na tela um quadrado feito de asteriscos de tamanho N. */
let n = 5;
let symbol = '*';
let inputLine = '';

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  inputLine = inputLine + symbol;
};
for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  console.log(inputLine);
};
