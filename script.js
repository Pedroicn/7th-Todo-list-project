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
  let item = document.querySelectorAll('.list-item')
  for(let i = 0; i < item.length; i += 1) {
    item[i].style.backgroundColor = '';
  }
  event.target.style.backgroundColor = 'gray' 

}



list.addEventListener('dblclick', addDecor)
function addDecor(event) {
  if(event.target.className === 'list-item') {
    event.target.classList.add('completed');
    event.target.style.textDecoration = 'line-through solid black'
  }else {
    event.target.classList.remove('completed');
    event.target.style.textDecoration = '';
  }
  
}

