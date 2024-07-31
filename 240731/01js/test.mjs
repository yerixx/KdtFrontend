//사용자로부터 태어난 년도를 받으세요
//태어난 연도를 기준으로 나이가 몇살인지 result 공간에 출력해주세요
// innerText 속성을 통해 특정 Node 안에 텍스트 문장을 삽입할 수 있다

// const year = Number(prompt("태어난 년도를 입력해주세요"));

// const age = 2024 - year;

// const result = document.querySelector("#result");

// console.log((result.innerText = `당신의 나이는 ${age} 입니다`));

const button = document.querySelector("button");
const calc = () => {
  const birthYear = Number(prompt("태어난 년도를 입력해주세요", "2002"));
  const currentYear = 2024;
  const age = currentYear - birthYear;
  const result = document.querySelector("#result");
  result.innerText = `당신의 나이는 ${age}세 입니다`;
};

button.addEventListener("click", calc);
