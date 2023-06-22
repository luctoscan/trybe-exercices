import { nanoid } from 'nanoid';
import copy from 'clipboard-copy';
import Swal from 'sweetalert2'; // instala npm de alerta e importa: npm install sweetalert2

import './style.css';

const passwordBtnEl = document.querySelector('button');
const displayPasswordEl = document.querySelector('h2');

passwordBtnEl.addEventListener('click', () => {
  const randomPassword = nanoid();
  displayPasswordEl.innerHTML = randomPassword;
});

displayPasswordEl.addEventListener('click', (event) => {
  copy(event.target.innerHTML);
  Swal.fire({
    text: 'Senha copiada!',
    icon: 'success',
  });
});
