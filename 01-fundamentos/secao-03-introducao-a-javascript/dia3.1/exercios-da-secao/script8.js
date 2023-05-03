/* 8 - Utilize if/else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, o código deve retornar false. */
let n1 = 1;
let n2 = 2;
let n3 = 3;

let par = false;
if (n1 % 2 === 0 || n2 % 2 === 0 || n3 % 2 === 0) {
  par = true;
}
console.log(par);
