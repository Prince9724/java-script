const input = document.getElementById("input");
const button = document.getElementById("btn");
const todosdiv =document.getElementById ("todos");

const addtodo = ()=>{
    const value = input.value;
    const div = document.createElement("div");//<div> </div>
    div.className="todo"; //<div class="todo"> </div>
    div.textContent=value;
    todosdiv.appendChild(div);
}

button.addEventListener ("click",addtodo); 

 