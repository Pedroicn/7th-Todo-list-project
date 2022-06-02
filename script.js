let addTaskButton = document.querySelector('#criar-tarefa');

addTaskButton.addEventListener('click', addTasks)
function addTasks(event) {
  let input = document.querySelector('#texto-tarefa');
  let taskList = document.querySelector('#lista-tarefas');
  let li = document.createElement('li');
  
  if (input.value.length === 0) {
    event.preventDefault();
  } else {
    taskList.appendChild(li);
    li.innerHTML = input.value
    li.className = 'list-item'
  }
  input.value = '';
  
}

// adiciona cor de fundo a um elemento da lista quando clicado
let list = document.querySelector('#lista-tarefas');
list.addEventListener('click', changeColorTask)

function changeColorTask(event) {
  let item = document.querySelectorAll('.list-item')
  for(let i = 0; i < item.length; i += 1) {
    item[i].style.backgroundColor = '';
    item[i].classList.remove('selected')
  }
  event.target.style.backgroundColor = 'gray' 
  event.target.classList.add('selected')
}


// adiciona e remove style textdecoration
list.addEventListener('dblclick', addDecor)
function addDecor(event) {
  if(event.target.className === 'list-item selected') {
    event.target.classList.add('completed');
    event.target.style.textDecoration = 'line-through solid black'
  }else {
    event.target.classList.remove('completed');
    event.target.style.textDecoration = '';
  }
  
}


// botão que remove todos os item da lista
let clearButton = document.querySelector('#apaga-tudo')
clearButton.addEventListener('click', clearList)
function clearList() {
  let item = document.querySelectorAll('.list-item')
  for(let i = 0; i < item.length; i += 1) {
    item[i].remove();
  }
} 

// Botão que remove os itens da lista finalizados

let finishedButton = document.querySelector('#remover-finalizados')
finishedButton.addEventListener('click', clearFinishedTasks)
function clearFinishedTasks() {
  let finishedTasks = document.querySelectorAll('.completed')
  for(let i = 0; i < finishedTasks.length; i += 1) {
    finishedTasks[i].remove();
  }
}

let saveButton = document.querySelector('#salvar-tarefas')

saveButton.addEventListener('click', saveTasks)
function saveTasks() {
  let list = document.querySelector('#lista-tarefas');
  localStorage.setItem('mylist', JSON.stringify(list.innerHTML))
 
}

window.onload = carregar;
function carregar() {
  const myTasks = JSON.parse(localStorage.getItem('mylist'));
  list.innerHTML = myTasks;
}


const upButton = document.querySelector('#mover-cima')
upButton.addEventListener('click', moveUp)

function moveUp() {
  const selecionado = document.querySelector('.selected')
  if(selecionado && selecionado.previousSibling) {
    list.insertBefore(selecionado, selecionado.previousSibling)
  }
}

const downButton = document.querySelector('#mover-baixo');
downButton.addEventListener('click', moveDown)
function moveDown() {
  const selecionado = document.querySelector('.selected')
  if(selecionado && selecionado.nextSibling) {
    list.insertBefore(selecionado.nextSibling, selecionado)
  }
}