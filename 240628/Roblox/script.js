//1.웹 브라우저에게 클릭할 이벤트 대상을 알려준다
// queruselector()
// addEventListener()

// 2. 클릭을 했을 때 css로 정의해놓은 가상클래스를 원하는 요소에 적용시킨다
// classList
// add() || remove()
// button 의 기본 속성 무력화 시켜야함 ->preventDefault()

// 2-1.가상클래스 = filldeA & filldeB
//

// const femaleBtn = document.querySelector("#femalebtn");
//전체를 훑고 찾아주는
const femaleBtn = document.getElementById("femalebtn");
// id 값만 찾아주는.. 더 빠르게 효율적으로 id값을 찾을 수 있다고 하는데 규모가 크면 구분 해주면 좋음
const maleBtn = document.getElementById("malebtn");

femaleBtn.addEventListener("click", (event) => {
  event.preventDefault();
  femaleBtn.querySelector("i").classList.toggle("filledA");
  maleBtn.querySelector("i").classList.remove("filledB");
});

maleBtn.addEventListener("click", (event) => {
  event.preventDefault();
  maleBtn.querySelector("i").classList.toggle("filledB");
  femaleBtn.querySelector("i").classList.remove("filledA");
});
