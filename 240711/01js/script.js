const name = prompt("이름을 입력해주세요", "홍길동");

document.write("<b><strong>" + name + "</strong></b>님, 환영합니다");

// const btn = document.querySelector("button");
// btn.addEventListener("click", (e) => {
//   // btn의 기본 속성 [값을 보내려는] 없애기
//   e.preventDefault();
//   // 값을 적용하고자 하는 클래스 부르기
//   // toggle =  add + remove 값이 합쳐있는 기능
//   document.body.classList.toggle("dark");
//   // btn 내용 텍스트까지 바뀌게 하려면
//   // contains() 매개변수 안에 값이 참이면 조건문 참
//   if (document.body.classList.contains("dark"))
//     btn.innerText = "라이트 모드로 바꾸기";
//   else {
//     btn.innerText = "다크 모드로 바꾸기";
//   }
// });
