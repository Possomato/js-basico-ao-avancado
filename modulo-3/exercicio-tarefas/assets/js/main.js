const inputAdd = document.querySelector('#inputAdd');
const botaoAdd = document.querySelector('#botaoAdd');
const listaTarefas = document.querySelector('#listaTarefas');

let contador = 0;

botaoAdd.addEventListener('click', () => {
  let inputValue = inputAdd.value;

  const novoItem = document.createElement('li');
  novoItem.className = `item-${contador}`;
  novoItem.innerHTML = `${inputValue} <button class="deletar">Deletar</button>`;

  listaTarefas.appendChild(novoItem);

  const novoBotaoDeletar = novoItem.querySelector('.deletar');

  novoBotaoDeletar.addEventListener('click', () => {
    novoItem.remove();
  });

  inputAdd.value = ''
  inputAdd.focus()

  contador++;
});
