//사용자로부터 어떤 숫자를 입력받는다
//사용자에게 받은 숫자가 "소수"이면 바탕화면에 "00 숫자는 소수입니다"출력
//만약 아니라면, "00숫자는 소수가 아닙니다"
// 소수 = 1과 자기 자신만으로 나눠질 수 있는 숫자
//1은 소수가 아닙니다

// const num = Number(prompt("숫자를 입력해주세요"));
// if (num === 1) {
//   document.write("1은 소수가 아닙니다");
// } else if (num === 2) {
//   document.write("2는 소수입니다");
// } else {
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       document.write(`${num} 소수가 아닙니다`);
//       break;
//     } else {
//       document.write(`${num} 소수 입니다`);
//       break;
//     }
//   }
// }

const num = Number(prompt("숫자를 입력해주세요"));
let isPrime;

if (num === 1) {
  document.write("1은 소수가 아닙니다");
} else if (num === 2) {
  document.write("2는 소수입니다");
  isPrime = true;
} else {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    } else {
      isPrime = true;
    }
  }
  if (isPrime) {
    document.write(`${num}는 소수 입니다`);
  } else {
    document.write(`${num}는 소수가 아닙니다`);
  }
}
