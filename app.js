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
