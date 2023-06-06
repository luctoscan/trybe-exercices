// Agora, inverta o lado do triângulo. Não basta, aqui, imprimir somente asteriscos. Você precisa de uma lógica para imprimir espaços também.

let n = 15;
let symbol = '*';
let inputLine = '';
let inputPosition = n - 1;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex < n; columnIndex += 1) {
    // se coluna atual for menor que a coluna de inicio
    if (columnIndex < inputPosition) {
      inputLine = inputLine + ' '; // adiciona espaço em branco
    } else {
      inputLine = inputLine + symbol; // se não adiciona o simbolo
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
};
