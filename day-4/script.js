const todoCollection = document.getElementById("todo-collection");//todo-collection id hai html ki jisme ham sabhi todo ko display krenge. 
const inputTodo = document.getElementById("input-todo");//isme ham user se input lenge.
const todoPriority = document.getElementById("todo-priority");
const todoButton = document.getElementById("todo-button");
let todoList = JSON.parse(localStorage.getItem("todo")) || [];//ham todolist ke ander local storage se data get kr rhe hai.
let isupdate = false;//is update bnaaya hai taaki mai ek hi button pr do condition ko apply kr sku 

const priorityFilter = document.getElementById("priority-filter")
let index = 0; //hmne ek index variabl bnaaya hai jisme ham aage i ko store krenge 
const addTodo = () => {//addtodo user se input lene ka kaam kr rha hai aur todolist me data ku push kr rha hai aur local storage pr set kr rha hai
    const input = inputTodo.value;
    const priority = todoPriority.value;
    todoList.push({//todo list ke ander ek object bhej rhe hai jisme title, priority sur iscomplete hai 
        title: input,//titel ke ander user input.value ko store kr rhe hai 
        priority: priority,//prioty ke ander user priority ko store kr rhe hai 
        isCompleted: false//by default false hi rhega 
    })

    localStorage.setItem("todo", JSON.stringify(todoList))//local storage me ek todo name ki key bnaai hai jisme todolist (data)ko 
    //string me convirt krke store kr rhe hai
    displayNote();//displaynote ko calll kr diya hai
    inputTodo.value = "";//jab display note call ho jaaye to jis jahag user se input liya gya hai.
    //  vo khali kr rha hai taaki dubaara dusri data ko user se get kiya jaa ske.
     
}

const handlCompleteTodo =(i)=>{
     
    if(todoList[i].isCompleted){
        
        todoList[i].isCompleted.value = false;
    }
    else{
        todoList[i].isCompleted.value = true;
    }
}
const displayNote = () => {//displaynote se hm addnote se jo data mil rhi hai usko ek structure me rkh kr krke document pr display kr rha hai
    todoCollection.innerHTML = "";//agar dispalynote ke ander agr pahle se koi data hai to usko khali krne ke liye
    todoButton.textContent = "Add todo";//jab updatetodo ko caalll kiya hai tab button ki value update button tha to vapas se add bitton krne ke liye
    todoList.forEach((todo, i) => {//todo list ke ander forEach ka loop chlaaya taaki vo ek ek element ke upr work kr ske 
        //todolist ke ander ke object ko todo naam diya hai ye ham koi bhi naam de skte hai aur todo ke ander user data hai 
        const div = document.createElement("div");//document ke ander ek div creat ho rha hai jaha pr uder todo ko display krne ka code hoga
        div.innerHTML = `<div class=" form-check m-2 d-flex align-items-center">
                        <div class=" shadow px-4 py-2 rounded border ${todo.priority == 'High' ? "border-danger" : (todo.priority == 'Medium') ? "border-warning" : "border-success"}">
                            <input onclick = "handlCompleteTodo(${i})" ${(todo.isCompleted) ? "checked" : ""} class="mb-1 ms-3 fs-1 " type="checkbox">
                            ${(todo.isCompleted)?`<span class="fs-4 me-4 text-decoration-line-through">${todo.title}</span> `:` <span class="fs-4 me-4 ">${todo.title}</span>`}
                            <i onclick ="removeTodo(${i})" class="ri-close-circle-line fs-4"></i>
                            <i onclick ="editTOdo(${i})" class="ri-pencil-line fs-4"></i>
                        </div>                        
                    </div>`;
        todoCollection.appendChild(div);//todocollection ke ander ek ek todo ko bhej rhe hai aaur usko display ke ander display krenge 
        // localStorage.setItem("todo", JSON.stringify(todoList));//aur jo todo todocollection ke andr aa rha hai usko local storag me todo naam ki key ke ander store kr rhe hai 
    })

}

const editTOdo = (i) => {// jab user edit button ke uper click krega tab 
    index = i;//index me i ko stoe kr rhe hai 

    inputTodo.value = todoList[i].title;//jo user ko edit krna hoga uska daara data user input pr dikh jaayega jisko vo kahi se bhi edit ya update kr skta hai 
    todoPriority.value = todoList[i].priority;//usk priority edit krne ka bhi option dikh jaayega jisko vo change krke update kr a=skta hai 


    isupdate=true;//yaha pe iski value changekr di taaki aage mai isper condition ko appy kr sku
    todoButton.textContent = "Update todo";//add button ko update button dikhaane ke liye button me text content kiya hai  
    
}
const updatetodo = () => {
    // console.log(index);
    // console.log("-----------")
    todoList[index] = {//todo list ke ander 0 number pr is object ko change kr rhe hai
        title: inputTodo.value,//object me title ke ander input value ko store kiya hai. jo update hoker aa rha hai 
        priority: todoPriority.value,// isme priority jo update hoke aayega vo ya jo tha vo 
        isCompleted: false// ye to same hi hai
    };
    // todoList[index].title=inputTodo.value;
    // todoList[index].priority=todoPriority.value;
    // todoList[index].isCompleted=false;
    
    isupdate=false;//isupdate value ko change kiya hai dubaara se 
    localStorage.setItem("todo", JSON.stringify(todoList))//local storage ke ander set kr rhe hai todolist ko 
     inputTodo.value = "";//user input fir se khali ho jaayega 
    todoPriority.value = "default";//prioriy vaps se default rhega ( select your priority)
    displayNote();//ye sab process hone ke baad sipaly note ko call kr diya hai 

}
const removeTodo = (i) => {//todo ko display se remove krne ke liye 
    todoList.splice(i, 1);  //todo list ke ander kitene number ki index aur index se kis number ki value / data ko remove krna hai
    localStorage.setItem("todo", JSON.stringify(todoList));//remove krne ke baad usko local storage me store kiya hai 
    displayNote();// aur displayNote ko call kr diya hai 
}
const handlePriorityFilter=(e)=>{
    console.log("++++")
    todoList = JSON.parse(localStorage.getItem("todo")) || [];
    todoList= todoList.filter((todo)=> todo.priority==priorityFilter.value||priorityFilter.value =='All')
    displayNote();
}

todoButton.addEventListener("click",()=>{//button ke uper click krne pr kya kya event hoga ye iske ander hoga
if(isupdate){//isupdate ki value true hogi to update todo call higa 
    //jaise hi user edit ko click krega to edittodo call hoga aur uske ander isupdate ki value ko true kiya hai to ab 
    //isupdate ki value true hai to updatetodo call hoga jab buton ko click krenge to 
updatetodo();
//call hone ke baad dubaara se isupdate ki value ko false kr diya hai taaki ab addtodo call ho.
//aur text ko change kr diya hai textcontent de ke 
}
else{//agar isupdate ki value false hogi to addtodo call hoga 
    //ham pahle se hi isupdat ki value ko false me rkhe hai taaki addto call hoga jab ki edit pr ns click ke 
addTodo();
}
}    
 );
displayNote();//addeventlistner ke baad dsplay ko call kr rhe hai taaki jo bhi value aa rhi hai usko display krvaane ke liye 

