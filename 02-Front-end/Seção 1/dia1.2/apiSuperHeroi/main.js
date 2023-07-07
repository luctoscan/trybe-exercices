// Importa a biblioteca Swal do pacote 'sweetalert2'
import Swal from 'sweetalert2';

// Seleciona o elemento HTML com o id 'image' e atribui à constante 'img'
const img = document.querySelector('#image');

// Seleciona o elemento HTML com o id 'name' e atribui à constante 'name'
const name = document.querySelector('#name');

// Seleciona o elemento HTML com o id 'button' e atribui à constante 'button'
const button = document.querySelector('#button');

// Define a URL base para fazer as requisições na API de super-heróis
const BASE_URL = 'https://akabab.github.io/superhero-api/api';

// Define o número máximo de heróis disponíveis
const MAX_HEROES = 1000;

// Função que gera um ID de herói aleatório entre 0 e o número máximo de heróis
const randomId = () => Math.floor(Math.random() * MAX_HEROES);

// Adiciona um ouvinte de evento de clique ao botão
button.addEventListener('click', (event) => {
  event.preventDefault(); // Impede o comportamento padrão do clique do botão (recarregar a página, por exemplo)

  // Gera um ID aleatório para obter um herói diferente a cada clique
  const id = randomId();

  // Faz uma requisição fetch para obter os dados do herói com o ID gerado
  fetch(`${BASE_URL}/id/${id}.json`)
    .then((result) => result.json()) // Converte a resposta da requisição em formato JSON
    .then((data) => {
      // Atualiza a imagem do herói exibida no elemento 'img' com a imagem do herói obtida na resposta
      img.src = data.images.md;
      // Atualiza o nome do herói exibido no elemento 'name' com o nome do herói obtido na resposta
      name.innerHTML = data.name;
    })
    .catch((error) => {
      // Se ocorrer um erro durante a requisição, exibe uma mensagem de erro usando o Swal
      Swal.fire({
        title: 'Hero not found', // Título da mensagem de erro
        text: error.message, // Mensagem de erro detalhada
        icon: 'error', // Ícone de erro exibido na mensagem
        confirmButtonText: 'Cool', // Texto do botão de confirmação
      });
    });
});
