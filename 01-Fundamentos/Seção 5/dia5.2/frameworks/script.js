document.addEventListener('DOMContentLoaded', function() {
  new JustValidate('.js-form', {
    rules: {
      fullName: {
        required: true,
        minLength: 10,
        maxLength: 40,
      },
      email: {
        required: true,
        email: true,
      },
      destination: {
        required: true,
      },
      why: {
        required: true,
        maxLength: 500,
      },
      date: {
        required: true,
      },
      agreement: {
        required: true,
      },
    },
    messages: {
      fullName: {
        required: 'Por favor, digite seu nome completo.',
        minLength: 'O nome deve ter no mínimo 10 caracteres.',
        maxLength: 'O nome deve ter no máximo 40 caracteres.',
      },
      email: {
        required: 'Por favor, digite seu endereço de e-mail.',
        email: 'Por favor, digite um endereço de e-mail válido.',
      },
      destination: {
        required: 'Por favor, selecione um destino.',
      },
      why: {
        required: 'Por favor, digite sua resposta vencedora.',
        maxLength: 'A resposta não pode exceder 500 caracteres.',
      },
      date: {
        required: 'Por favor, selecione a data da viagem.',
      },
      agreement: {
        required: 'Você deve concordar com os termos.',
      },
    },
    submitHandler: function(form, values, ajax) {
      // Lógica para lidar com o envio do formulário
      form.submit();
    },
    invalidFormCallback: function(errors) {
      // Exibir alerta com os erros do formulário
      var errorMessages = Object.values(errors).map(function(error) {
        return error.join('\n');
      });
      alert('Por favor, corrija os seguintes erros:\n\n' + errorMessages.join('\n'));
    },
  });
});
