const content =document.querySelector(".content")
//JSON.parse(localStorage.getItem("todo-list"))
export let todos ;
if(!localStorage.getItem("todo-list")) {
  todos=[];
} else {
    todos=JSON.parse(localStorage.getItem("todo-list"))

}
export function showTodo(){
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



