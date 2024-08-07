//사용자로부터 태어난 년도를 받으세요
//태어난 연도를 기준으로 나이가 몇살인지 result 공간에 출력해주세요
// innerText 속성을 통해 특정 Node 안에 텍스트 문장을 삽입할 수 있다

const year = Number(prompt("태어난년도를 입력해주세요"));
const btn = document.querySelector("button");

const userAge = () => {
  const age = 2024 - year;
  document.querySelector("#result").innerText = `당신의 나이는 ${age}입니다`;
};
btn.addEventListener("click", userAge);
