// Refatore a função removeCliente para diminuir sua complexidade e quebrá-la em funções menores.

let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function removeCliente(cliente) {
  if (typeof cliente !== 'string') {
    return 'O parâmetro passado deve ser do tipo "string"!';
  }

  const clienteIndex = clientesTrybeBank.findIndex((c) => c === cliente);

  if (clienteIndex === -1) {
    return 'Cliente não encontrado';
  }

  clientesTrybeBank.splice(clienteIndex, 1);

  return 'Cliente excluída(o) com sucesso.';
}
console.log(removeCliente(false));
console.log(removeCliente('John'));
console.log(removeCliente('Mario'));
console.log(clientesTrybeBank);