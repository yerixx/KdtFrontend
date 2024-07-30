// 사용자로부터 3개의 값을 받으세요
// 교통비, 식대, 음료비
// 위 3개의 값이 10,000원을 초과한다면 "예산관리 잘 해주세요!"
// 위 3개의 값이 10,000원 이하라면 "예산 관리 잘 하셨어요!"알림창

// const name = prompt("이름을 입력해주세요", "ex.홍길동");
// const price1 = parseFloat(prompt("교통비를 입력해주세요"));
// const price2 = parseFloat(prompt("식대를 입력해주세요"));
// const price3 = parseFloat(prompt("음료비 입력해주세요"));

// const priceSum = price1 + price2 + price3;

// if (priceSum <= 10000) {
//   alert(`${name}님 예산관리 잘 하셨어요`);
// } else if (priceSum > 10000) {
//   alert(`${name}님 예산관리 잘 해주세요`);
// }

//master
//방법1
// const traffic = Number(prompt("교통비 입력!!"));
// const food = Number(prompt("식대 입력!"));
// const drink = Number(prompt("음료비 입력!"));

//방법2
// 빈배열 선언
let arr = [];

for (let i = 0; i < 3; i++) {
  const userNum = Number(prompt("교통비, 식대, 음료비 순으로 입력해주세요"));
  arr.push(userNum);
}
// console.log(arr);

//배열 안의 값을 각각의 변수에 넣기 . 구조분해할당
const [traffic, food, drink] = arr;
const sum = traffic + food + drink;
// console.log(sum);

//isNaN 숫자가 아니면 참
//예외조항처리
if (isNaN(sum) || sum === 0) {
  alert("잘못입력했습니다");
} else if (sum < 10000) {
  alert("예산 관리를 참 잘하셨네요~~");
} else {
  alert("예산 관리 잘하셔야해요!!");
}
