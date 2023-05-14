/* Um número primo é um número inteiro maior que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que imprima no console o maior número primo entre 2 e 50. */
let maiorNumeroPrimo = 0;

for (let numeroAtual = 2; numeroAtual <= 50; numeroAtual += 1) {
  let verificador = true;
  for (let divisorAtual = 2; divisorAtual < numeroAtual; divisorAtual += 1) {
    if (numeroAtual % divisorAtual === 0) {
      verificador = false;
    }
  }
  if (verificador) {
    maiorNumeroPrimo = numeroAtual;
  }
}

console.log(maiorNumeroPrimo); 