// // 커피 주문을 받는 함수

// // //어떤 값을 받아서 출력하는 역할로 쓸 것
// const display = (result) => {
//   console.log(`${result} 준비 완료!`);
// };

// //order 함수를 실행시키면 인자값을 받아서 실행시킴
// const order = (coffee, callback) => {
//   console.log(`${coffee} 주문 접수!`);
//   setTimeout(() => {
//     callback(coffee);
//   }, 3000);
// };

// order("아메리카노", display);

const display = (coffee) => {
  console.log(`${coffee}가 완료`);
};

// 메뉴, 주문 상태
const order = (coffee, callback) => {
  console.log(coffee);
  setTimeout(() => {
    callback(coffee);
  }, 2000);
};
order("아메리카노", display);
