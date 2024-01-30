
let todoList = [];
displayTodo();

function addTodo(){
    const inputElement = document.getElementById("inputTag");
   
    if(!inputElement.value===""){
         inputElement.value = "";
        todoList.push(inputElement.value);
      
        displayTodo()
    };
    
        return false;
    
};

function displayTodo(){
      let todoContainer = document.querySelector(".todoContainer");
    let inicialHtml = " ";
        for(i = 0; i<todoList.length; i++){
            inicialHtml +=`
            <div class="todolist">
            <h>${todoList[i]}</h>
            <button onclick="todoList.splice(${i},1); displayTodo()">Delete</button>
            </div>`
        }
        todoContainer.innerHTML = inicialHtml
 };
