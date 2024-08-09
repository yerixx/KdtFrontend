// 현 시점의 날짜정보 가져오고 싶음

//new = 예약어 + class를 통해서 어디선가 만들어 놓은걸 가져다 쓰는 것
//Date = 프로토타입의 함수 .일반함수x
//today = 객체
//today.getMonth = 객체안에 포함되어져 있는 메서드 함수

// const today = new Date();
// //날짜 정보만!!!!! 0부터 시작함 그래서 aug 인데 7로 나오는 것 꼭 +1 해야함
// const month = today.getMonth() + 1;
// const date = today.getDate();
// // 일 = 0 ... 목 = 4
// const day = today.getDay();

// document.write(`<h1>오늘 날짜 정보</h1>`);
// document.write(`${month}월`);
// document.write(`<br/>`);
// document.write(`${date}일`);
// document.write(`<br/>`);
// document.write(`${day}요일`);

//밀리초 변환 개념!!
//초 / 분 / 시
// 1초 = 1000밀리초
// 1분 = 60초 = (60*1000) = 60,000밀리초
// 1시간 = (60*60*1000) = 3,600,000밀리초
// 1일 = (24*60*60*1000) =

////////

// const today = new Date();
// const year = today.getFullYear();

// // 올해 마지막날 구하기. 12월은  0 부터 시작하니까 11일이라고 기입
// const lastDate = new Date(year, 11, 31);
// const diffDate = lastDate - today;

// const result = Math.round(diffDate / (24 * 60 * 60 * 1000));
// alert(`올 연말 마지막날까지 ${result}일 남았습니다`);

// 올해 마지막날 구하기

// //현재 시간 가져오기
// const today = new Date();
// //년도 가져오기
// const year = today.getFullYear();
// console.log(year);

// const lastDay = new Date(2024, 7, 13);
// const diffDate = lastDay - today;

// const finalDate = Math.round(diffDate / (24 * 60 * 60 * 1000));
// alert(`제한이 생일${finalDate}일 남았어요!`);

const userdate = prompt("처음 커플이 된 날짜를 입력해주세요!", "2024-07-27");
const accentDate = document.querySelector(".accentday");

const now = new Date();
const FirstDay = userdate;

const toNow = now.getTime();
const toFirst = FirstDay.getTime();

const diffDate = toNow - toFirst;
const resultDate = Math.round(diffDate);

accentDate.innetText = `${resultDate}일 이에용`;

// const calcDate = (days) => {
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
