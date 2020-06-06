const todoForm = document.querySelector(".js-todoForm"),
todoInput = todoForm.querySelector("input"),
todoList = document.querySelector(".js-todoList");

const TODOS_LS = 'todos';

const todos = [];

function saveTodos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(todos)); 
    // JSON.stringify(todos) : object를 String 형태로 저장하기 위해
}

function loadTodos(){
    const loadedTodos = localStorage.getItem(TODOS_LS);
    if (loadedTodos !== null) {
        console.log(loadedTodos);
        const parsedTodos = JSON.parse(loadedTodos);
        console.log(parsedTodos);
    }
}

function paintTodo(text){
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    const span = document.createElement("span");
    const newID = todos.length + 1;

    delBtn.innerText = "❌";
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    todoList.appendChild(li);
    li.id = newID;

    const todoObj = {
        id: newID,
        text: text,
    };
    todos.push(todoObj);    
    saveTodos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = todoInput.value;
    paintTodo(currentValue);
    todoInput.value = "";
}

function init(){
    loadTodos();
    todoForm.addEventListener("submit", handleSubmit);
}
init();
