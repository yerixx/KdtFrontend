const result = document.querySelector("#result");

const member1 = ["Html", "Node", "React"];
const member2 = ["CSS", "JavaScript", "React"];
const member3 = ["JavaScript", "React"];

//전개 연산자 사용해서 하나의 배열에 넣음
const subjects = [...member1, ...member2, ...member3];

const resultList = new Set();
console.log(resultList);

subjects.forEach((subject) => {
  resultList.add(subject);
});

// console.log(resultList);

// 이 부분 다시 이해하기. map 에 대한 개념
result.innerHTML = `
<ul>${[...resultList].map((subject) => `<li>${subject}</li>`).join("")}</ul>
`;

//표현식문 vs 실행문
//JSX => Javascript And Xml

// result.innerHTML =`
// <ul> ${[...]}
// </ul>`
