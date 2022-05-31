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


let list = document.querySelector('#lista-tarefas');
list.addEventListener('click', changeColorTask)

function changeColorTask(event) {
  event.target.style.backgroundColor = 'gray'  
}