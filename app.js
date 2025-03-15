// DOM Elements

let todoField = document.getElementById("todo-input");
let todoListData = document.getElementById("todo-list");
let addBtn = document.getElementById("add-button");
let clearAllBtn = document.getElementById("clear-all-button");

let todoList = JSON.parse(localStorage.getItem("todo-list")) || [];

let renderTodoData = () => {
  todoListData.innerHTML = "";
  todoList.forEach((todo, index) => {
    todoListData.innerHTML += `
             <h1>${todo}</h1>
             <Button onClick=deleteTodo(${index})>Delete</Button>
             <Button onClick=editTodo(${index})>Edit</Button>
             `;
  });
};

// Add Task Function

let addData = () => {
  let todoData = todoField.value.trim();
  console.log(todoData)
  if (!todoData) return; 
  todoList.push(todoData);
  localStorage.setItem("todo-list", JSON.stringify(todoList));
  todoField.value = "";
  renderTodoData();
};

console.log(localStorage.getItem("todo-list"), "local storage data");

// Delete Task Function

let deleteTodo = (index) => {
    todoList.splice(index,1)
    localStorage.setItem("todo-list", JSON.stringify(todoList));
    renderTodoData();
}

addBtn.addEventListener("click", addData);
