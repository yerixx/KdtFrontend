//사용자로부터 이름과 나이를 입력받으세요
//반드시 콜백함수를 통해서 사용자의 값을 활용해 alert 으로 "안녕하세요 00님 나이가 00세 이시군요"

/////// 집가서 해보기!!
// const userName = prompt("이름을 입력해주세요");
// const userYear = prompt("생년월일을 입력해주세요");

// const userinfo = () => {
//   let userAge = 2024 - userYear;
//   window.document.write(`안녕하세요 ${userName}님 나이가 ${userAge} 이시군요 `);
// };
// userinfo(userName);
// userinfo(userYear);

/// 다시 이해 필요
// function showdata(name, age) {
//   alert(`안녕하세요 ${name}님 나이가 ${age} 이시군요 `);
// }
// //부모 요소 생성
// function getData(callback) {
//   const userName = prompt("이름을 입력해주세요");
//   const userAge = prompt("나이를 입력해주세요");
//   callback(userName, userAge);
// }
// getData(showdata);

// function hello() {
//   //함수가 실행되면 안녕하세요 반환
//   return "안녕하세요!";
// }
// function bye() {
//   //함수가 실행되면 안녕히가세요 반환
//   return "안녕히가세요!";
// }

// function userCheck(name, fn) {
//   console.log(`${name}님`, fn());
// }
// userCheck("홍길동", hello);
// userCheck("영심이", bye);

/////////

// const init = () => {
//   return (a, b) => {
//     return a - b > 0 ? a - b : b - a;
//   };
// };
// console.log(`${init()(30, 20)}`);
