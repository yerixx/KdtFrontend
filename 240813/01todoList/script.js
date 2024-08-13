//1. 사용자로부터 input태그를 통해서 입력값을 받는다
//2. 입력값이 확인되면, ul 태그 자식요소로 하나씩 추가해준다
//3. ul 태그 자식요소 중 삭제 버튼을 클릭했을 때, 버튼을 포함하고 있는 부모 요소를 확인 후 같이 삭제해준다

//4.사용자가 입력한 값이 영구적으로 보관될 수 있도록 local storage를 활용해서 값을 저장시킨다

//5.사용자가 값을 입력하면 다이렉트로 ui 화면에 출력되는 것이 아니라, 이제부터는 local storage안에 저장된 값을 찾아와서 ui 화면에 출력시키도록 한다.

//6.삭제 버튼을 클릭한다면, 직접적으로 ui 화면 내 값을 삭제 해주는 것이 아니라, localstorage 값을 먼저 삭제 후 삭제가 없데이트 된 값을 ui화면에 출력 시켜준다.

const form = document.querySelector("form");
const input = document.querySelector("input[type='text']");
const ul = document.querySelector("ul");

let todos = [];
const save = () => {
  localStorage.setItem(`todos`, JSON.stringify(todos));
};

const delItem = (e) => {
  // 이벤트가 발생된 타겟의 부모요소 값 넣기
  const target = e.target.parentElement;
  todos = todos.filter((todo) => todo.id != target.id);
  save();
  target.remove();
};

const addItem = (todo) => {
  if (todo.text !== "") {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    span.innerText = todo.text;
    button.innerText = `삭제`;
    button.addEventListener("click", delItem);

    li.appendChild(span);
    li.appendChild(button);
    ul.appendChild(li);
    li.id = todo.id;
  }
};

//리팩토링 - 1. 입력값 받는 곳
const handler = (e) => {
  e.preventDefault();

  const todo = {
    id: Date.now(),
    text: input.value,
  };

  todos.push(todo);
  addItem(todo);
  save();
  //input값 초기화
  input.value = "";
};

//새로고침해도 안 없어지도록.
const init = () => {
  const userTodos = JSON.parse(localStorage.getItem(`todos`));
  userTodos.forEach((todo) => {
    addItem(todo);
  });
  todos = userTodos;
};
init();

form.addEventListener("submit", handler);

/////////////////////////////////////////
// const form = document.querySelector("form");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const input = document.querySelector("input[type='text']");
//   const ul = document.querySelector("ul");
//   const li = document.createElement("li");
//   li.innerText = input.value;

//   ul.appendChild(li);
//   //input값 초기화
//   input.value = "";
// });
/////////////////////////////////////////

/////////////////////////////////////////
//로컬스토리지 : 반영구->삭제가 되지 않는 전제조건 // 무한정
//세션스토리지 : 임시로 .. 웹 브라우저가 작동되고 있을 때.. 컴퓨터 실행

//1. 로컬스토리지 데이터를 저장하는 방법
// localStorage.setItem("Hello", "world");

//2. 로컬스토리지 데이터를 가져오는 방법
// const myData = localStorage.getItem("Hello");
// console.log(myData);

//3. 로컬스토리지 데이터를 삭제하는 방법
