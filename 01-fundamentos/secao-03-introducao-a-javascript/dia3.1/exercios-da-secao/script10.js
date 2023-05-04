/* 10 - Utilize if/else para escrever um código que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, o código deve calcular o lucro (ou seja, o valor de venda menos o custo do produto) da empresa ao vender mil produtos. */
let valorCusto = 3;
let valorVenda = 7;

if (valorCusto >= 0 && valorVenda >= 0) {
  let valorCustoTotal = (valorCusto * (20/100));
  let lucro = (valorVenda - valorCustoTotal) * 1000;
  console.log(lucro);
} else {
  console.log("Erro nos valores");
};