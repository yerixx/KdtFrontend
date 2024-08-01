//현재 보고있는 웹브라우저 문서 내 버튼 생성
//해당 버튼을 클릭할 때 마다 색상이 변경되도록 해주세요
//변경 되어야 하는 색상은 white yellow aqua purple 색상이며
//마지막 purple 색상의 다음번 색상은 첫번째 색상인 white 으로 변경되면 됩니다. (*무한반복으로 색상 변경)

//함수
//각각의 컬러를 배열 자료구조 사용
//배열 내 각각의 아이템은 index값을 가지고 있다
//0부터 시작하는 인덱스 값이 1개씩 증가해야한다
//증감 연산자가 필요하다
//이벤트 (*클릭했을 때 , click )

// document.body.innerHTML += `<button id="btn">Button</button>`;

// const colors = ["white", "yellow", "aqua", "purple"];

// const btn = document.querySelector("#btn");
// btn.addEventListener("click", () => {
//   for (let i = 0; i < colors.length; i++) {
//     console.log(colors.length);
//   }
// });
// console.log("");

////////////////

const color = ["white", "yellow", "aqua", "purple"];
const button = document.querySelector("button");

let i = 0;

button.addEventListener("click", () => {
  i++;
  if (i >= color.length) i = 0;
  const bodyTag = document.querySelector("body");
  bodyTag.style.backgroundColor = color[i];
});
