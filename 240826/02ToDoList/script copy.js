const form = document.querySelector("form");
const todoItem = document.querySelector("#todoItem");
const todos = document.querySelector(".todos");

const savelocal = (todo) => {
  let todos;
  if (localStorage.getItem("todos") === "null") todos = [];
  else todos = JSON.parse(localStorage.getItem("todos"));

  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
};

const addTodo = (e) => {
  e.preventDefault();
  if (todoItem.value !== "") {
    const newli = document.createElement("li");
    newli.className = "todo";

    const newspan = document.createElement("span");
    newspan.className = "todoContent";
    newspan.innerText = todoItem.value;

    const completBtn = document.createElement("button");
    completBtn.className = "completBtn";
    completBtn.innerText = "완료";

    const deletBtn = document.createElement("button");
    deletBtn.className = "deletBtn";
    deletBtn.innerText = "삭제";

    newli.append(newspan, completBtn, deletBtn);
    todos.appendChild(newli);

    savelocal(todoItem.value);

    todoItem.value = "";
  }
};

const removeLocal = () => {
  
}

const manageTodo = (e) => {
  const whichButton = e.target.classList[0];

  if (whichButton === "completBtn") {
    const todoItem = e.target.parentElement;
    todoItem.children[0].classList.toggle("completed");
  } else if (whichButton === "deletBtn") {
    const todoItem = e.target.parentElement;
    removeLocal(todoItem);

    todoItem.remove();
  }
};

todos.addEventListener("click", manageTodo);
form.addEventListener("submit", addTodo);
