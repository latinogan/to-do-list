/* eslint-disable */
/*import './index.css';*/

const taskinput = document.querySelector('.insert-text');
const content = document.querySelector('.content');

let editId;
let isEditedTask = false;
// JSON.parse(localStorage.getItem("todo-list"))
let todos;
if (!localStorage.getItem('todo-list')) {
  todos = [];
} else {
  todos = JSON.parse(localStorage.getItem('todo-list'));
}
function showTodo() {
  let li = ' ';
  if (todos) {
    todos.forEach((todo, id) => {
      li += ` <div id="task">   
            <input  onclick="updateStatus(this)"  type="checkbox" id="${id}"  >
               <p>  ${todo.description} </p>     
             <div class="setting">
           <i  onclick="showMenu(this)"  class="fa fa-ellipsis-v menu" aria-hidden="true"></i>
        <ul class="task-menu">
         <li class="pepe"  onclick="editTask(${id}, '${todo.description} ') "> <i class="fa fa-pencil" aria-hidden="true"></i>edit </li>  
        <li  onclick="deleteTask(${id})"> <i class="fa fa-trash" aria-hidden="true"></i>remove </li>  
       </ul>
      </div>
    </div>`;
    });
  }
  content.innerHTML = li;
}
showTodo();

function updateStatus(selectedTask) {
    /* console.log(selectedTask) */
      // getting paragraph that contains task name
      const taskName = selectedTask.parentElement.childNodes[3];// esto deberia subrayar el texto
      if (selectedTask.checked) {
        taskName.classList.add('checked');
        // optional for the delted button completed
        todos[selectedTask.id].completed = 'completed';
      } else {
        taskName.classList.remove('checked');
        todos[selectedTask.id].completed = 'pending';
      }
      localStorage.setItem('todo-list', JSON.stringify(todos));
    }

function showMenu(selectedTask) {
  // console.log(selectedTask);
  const taskMenu = selectedTask.parentElement.childNodes[3];
  taskMenu.classList.add('show');
  document.addEventListener('click', (e) => {
    // removing show class from task menu on the document click
    if (e.target.tagName !== 'I' || e.target !== selectedTask) {
      taskMenu.classList.remove('show');
    }
  });
}

function editTask(taskId, taskName) {
//  console.log(taskId ,taskName)
  editId = taskId;
  isEditedTask = true;
  taskinput.value = taskName;
}

function deleteTask(deleteId) {
  // removing selected array
  todos.splice(deleteId, 1);
  localStorage.setItem('todo-list', JSON.stringify(todos));
  showTodo();
}



taskinput.addEventListener('keyup', (e) => {
  const userTask = taskinput.value.trim();
  if (e.key === 'Enter' && userTask) {
    if (!isEditedTask) {
      if (!todos) {
        todos = [];
      }
      const taskInfo = { description: userTask, completed: 'false', index: todos.length + 1 };
      todos.push(taskInfo); // adding new task to todos abj
    } else {
      isEditedTask = false;
      todos[editId].description = userTask;
    }

    taskinput.value = ' ';
    localStorage.setItem('todo-list', JSON.stringify(todos));
    showTodo();
  }
});

/* import './index.css';
import {showTodo} from "./modules/functions.js"

let taskinput= document.querySelector(".insert-text");

showTodo()
taskinput.addEventListener("keyup", e => {
    let userTask = taskinput.value.trim();
    if(e.key == "Enter" && userTask){
        if(!localStorage.getItem("todo-list")) {
            todos=[];
          } else {
          todos=JSON.parse(localStorage.getItem("todo-list"))
          }
        taskinput.value ="";
        let taskInfo ={ description: userTask,
            completed: 'false',
              index: todos.length +1
            } ;
        todos.push(taskInfo);   //adding new task to todos abj
        localStorage.setItem("todo-list" , JSON.stringify(todos));
      showTodo()
    }
}); */
