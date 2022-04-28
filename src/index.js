import './index.css';

let taskinput= document.querySelector(".insert-text");
const content =document.querySelector(".content")
//JSON.parse(localStorage.getItem("todo-list"))
let todos ;
if(!localStorage.getItem("todo-list")) {
    todos=[];
} else {
    todos=JSON.parse(localStorage.getItem("todo-list"))

}
function showTodo(){
    let li ="";
    todos.forEach(( todo,id) => {
     li += `   <div id="task">   
            <input type="checkbox" id="${id}">
               <p>  ${todo .description} </p>          
             <div class="setting">
           <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
        <ul class="task-menu">
         <li> <i class="fa fa-pencil" aria-hidden="true"></i> </li>  
        <li> <i class="fa fa-trash" aria-hidden="true"></i> </li>  
       </ul>
      </div>
    </div>`;
    });
    content.innerHTML= li ;
}
showTodo()
taskinput.addEventListener("keyup", e => {
    let userTask = taskinput.value.trim();
    if(e.key == "Enter" && userTask){
        if( ! todos) {
            todos = [];
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
});






/*import './index.css';
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
});*/