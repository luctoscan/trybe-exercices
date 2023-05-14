// Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Para isso, assuma que o valor de n será sempre ímpar.

let n = 7;
let meio = (n + 1) / 2;
let esquerda = meio;
let direita = meio;
let symbol = '*';
for (let line = 1; line <= meio; line += 1) {
  let outputLine = '';
  for (let col = 1; col <= n; col += 1) {
    if (col == esquerda || col == direita || line == meio) {
      outputLine += symbol;
    } else {
      outputLine += ' ';
    }
  }
  esquerda -= 1;
  direita += 1;
  console.log(outputLine);
}