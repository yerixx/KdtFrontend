const button = document.querySelector("button");
const buttonAction = (e) => {
  console.log(e.target);
  console.log(e.currentTarget);
};

button.addEventListener("click", buttonAction);
//e객체 발생시 target 찾음 ||  currentTarget

// currentTarget 은 event 핸들러가 부착되어진 요소 의미 . EX) click 을 찾아오는 것
//console.log 에서 안나오는 이유는 비동기적이어서. 실시간 x
// target은 실제 이벤트가 발생된 요소를 가져옴
