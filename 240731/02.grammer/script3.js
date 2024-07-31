//자바스크립트 for문을 활용해서
//2단 ~9단 까지 출력

// 2 * 1~9
//
// 바깥 for 는 행
// for (let i = 1; i <= 9; i++) {
//   // for 는 열을 의미
//   for (let k = 1; k <= 9; k++) {
//     document.write(`${i}* ${k}`=);
//   }
//   document.write("<br/>");
// }

for (let a = 2; a <= 9; a++) {
  document.write(`<h2>[구구단 ${a} 단 ]</h2>`);
  for (let b = 1; b <= 9; b++) {
    document.write(`${a} x ${b} = ${a * b}`);
    document.write("<br/>");
  }
}
