//상속값과 변수값을 잘 구분해야함
const userAnswer = prompt("우리 만난지 ...", "2024-06-14");
const accent = document.querySelector(".accent");
// const date100 = document.querySelector("#date100");
// const date200 = document.querySelector("#date200");
// const date365 = document.querySelector("#date365");
// const date500 = document.querySelector("#date500");

const now = new Date();
const firstDay = new Date(userAnswer);

// 밀리초로 담기
const toNow = now.getTime();
const toFirst = firstDay.getTime();

const passedTime = toNow - toFirst;
const paddedDate = Math.round(passedTime / (24 * 60 * 60 * 1000));

accent.innerText = `❤️${paddedDate}일이에요❤️`;

// //D-100
// let future = toFirst + 100 * (24 * 60 * 60 * 1000);
// let someday = new Date(future);
// // console.log(someday);
// let year = someday.getFullYear();
// let month = someday.getMonth() + 1;
// let date = someday.getDate();
// // console.log(year, month, date);

// date100.innerText = `${year}년 ${month}월 ${date}일`;

// //D-200
// future = toFirst + 200 * (24 * 60 * 60 * 1000);
// someday = new Date(future);
// year = someday.getFullYear();
// month = someday.getMonth() + 1;
// date = someday.getDate();
// date200.innerText = `${year}년 ${month}월 ${date}일`;

// //D-365
// future = toFirst + 365 * (24 * 60 * 60 * 1000);
// someday = new Date(future);
// year = someday.getFullYear();
// month = someday.getMonth() + 1;
// date = someday.getDate();
// date365.innerText = `${year}년 ${month}월 ${date}일`;

// //D-500
// future = toFirst + 500 * (24 * 60 * 60 * 1000);
// someday = new Date(future);
// year = someday.getFullYear();
// month = someday.getMonth() + 1;
// date = someday.getDate();
// date500.innerText = `${year}년 ${month}월 ${date}일`;

//함수를 활용해서 보다 효율적으로 코드를 짜는법

// function hoistiong(*끌어올리다)
//기본적으로 화살표 함수는 hoisting 기능을 사용할 수 없음
//=> 반드시 선언이 오고 호출이 와야함

const calcDate = (days) => {
  future = toFirst + days * (24 * 60 * 60 * 1000);
  someday = new Date(future);
  year = someday.getFullYear();
  month = someday.getMonth() + 1;
  date = someday.getDate();

  document.querySelector(
    `#date${days}`
  ).innerText = `${year}년 ${month}월 ${date}일`;
};
calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);

// //function 함수의 경우 기명함수에 경우만 호이스팅 기능이 가능
// function calcDate (days)  {
//   future = toFirst + days * (24 * 60 * 60 * 1000);
//   someday = new Date(future);
//   year = someday.getFullYear();
//   month = someday.getMonth() + 1;
//   date = someday.getDate();

//   document.querySelector(
//     `#date${days}`
//   ).innerText = `${year}년 ${month}월 ${date}일`;
// };
// calcDate(100);
// calcDate(200);
// calcDate(365);
// calcDate(500);
