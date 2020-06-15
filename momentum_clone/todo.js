const todoForm = document.querySelector(".js-todoForm"),
todoInput = todoForm.querySelector("input"),
todoList = document.querySelector(".js-todoList");

const TODOS_LS = 'todos';

let todos = [];

function deleteTodo(event){
    const btn = event.target;
    const li = btn.parentNode;
    todoList.removeChild(li);

    const cleanTodos = todos.filter(function(todo){
        return todo.id !== parseInt(li.id);
    });
    todos = cleanTodos;
    saveTodos();
}

function saveTodos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(todos)); 
    // JSON.stringify(todos) : object를 String 형태로 저장하기 위해
}

function logging(todo){
    paintTodo(todo.text);
}

function loadTodos(){
    const loadedTodos = localStorage.getItem(TODOS_LS);
    if (loadedTodos !== null) {
        const parsedTodos = JSON.parse(loadedTodos);
        // parsedTodos.forEach(function(todo){
        //     paintTodo(todo.text);
        // });
        parsedTodos.forEach(logging);
    }
}

function paintTodo(text){
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    const span = document.createElement("span");
    const newID = todos.length + 1;

    if(newID <= 3){
        delBtn.innerText = `\u2716`;
        delBtn.addEventListener("click", deleteTodo);
        span.innerText = text;
        li.appendChild(span);
        todoList.appendChild(li);
        li.appendChild(delBtn);
        li.id = newID;

        const todoObj = {
            id: newID,
            text: text,
        };
        todos.push(todoObj);    
        saveTodos();
    }
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
