/* 6 - Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer. */
let peca = "bispo";

switch (peca.toLowerCase()) {
  case "peao":
    console.log("Peão-> Diagonal.");
    break;
  case "bispo":
    console.log("Bispo-> Diagonal.");
    break;
  case "rainha":
    console.log("Rainha-> Diagonal.");
    break;
  default:
    console.log("Erro, peça inválida!");
}
