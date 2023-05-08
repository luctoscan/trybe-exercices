/* Considere a variável saldo, que representa a quantia em conta de determinada(o) cliente do TrybeBank e escreva quatro programas que: */

let saldo = 500;
//Adicione um valor ao saldo.
function somaSaldo(valor) {
  return valor + saldo;
};
//Subtraia um valor do saldo.
function subtraiSaldo(valor) {
  return saldo - valor;
};
// Multiplique o valor do saldo por uma taxa.
function multiplicaSaldo(valor) {
  return valor * saldo;
};
//Divida o valor do saldo.
function divideSaldo(valor) {
  return saldo / valor;
};

console.log(somaSaldo(500));
console.log(subtraiSaldo(250));
console.log(multiplicaSaldo(4));
console.log(divideSaldo(4));