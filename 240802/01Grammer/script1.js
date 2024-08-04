// let counter = 0;

// const timer = setInterval(() => {
//   console.log("안녕하세요!");
//   counter++;
//   if (counter === 5) {
//     clearInterval(timer);
//   }
// }, 2000);

//재귀함수 호출
//모든걸 가지고 있는 timer 변수를 안으로 끌어오는것

// let num = 0;

// const testFnc = () => {
//   num++;
//   document.write(num, "<br/>");
//   if (num === 10) return /*"return 뒤에는 보이지 않는 무의 반환값이 있다는 뜻 "*/;
//   testFnc();
// };
// testFnc();

//return => 단순히 구문 종결만 하는 건 아님
// return + 값 => 값을 바깥으로 반환 후 종결..

setTimeout(() => {
  document.write("3초가 지났습니다");
}, 3000);
