/* 5 - 🚀 Utilize if/else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro. */
let angulo1 = 100;
let angulo2 = 30;
let angulo3 = 50;

let soma = angulo1 + angulo2 + angulo3;

if (angulo1 > 0 && angulo2 > 0 && angulo3 > 0) {
  if (soma === 180) {
    console.log(true);
  } else {
    console.log(false);
  }
} else {
  console.log("Erro");
}
