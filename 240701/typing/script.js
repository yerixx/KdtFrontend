const content =
  // H =0 띄어쓰기도 숫자에 포함
  "Hi!💖✨😃👀✔🎁 I'm Yerim \n Front-End Developer. \n Welcome To My World :D";

// 들어갈 html 의 클래스 node 값 찾기
const text = document.querySelector(".text");
console.log(text);

// 문자 0부터 순차적으로 들어왔으면 좋겠음-> 증감연산자 사용
// \n을 만나면 행을 바꾸게 하고싶음

// 기준값 0 필요
let i = 0;

const typing = () => {
  // content[0] = 문자열 첫번째 부터 찾아오겠다는 뜻
  //  i++ 증감 연산자 사용해서 마지막 문자까지 증감해서 찾아오겠다
  let txt = content[i++];
  // += 복합 대입 연산자
  // text.innerHTML 에 txt 을 하나씩 넣어줘
  text.innerHTML += txt === "\n" ? "<br/>" : txt;
  setTimeout(typing, 200);
  // content.length = 콘텐츠 총 개수
  // 문자열 초과하는 순간 리셋 시키도 다시 찾아오게 하는 함수
  if (i > content.length) {
    text.textContent = "";
    i = 0;
  } else {
    curser.style.animation = "none";
    curser.style.displan = "none";
  }
};
// setInterval =  특정주기에 맞춰서 실행해주는 함수
// 0.25초에 한번씩 typimg 함수가 실행하게 해줘
typing();
