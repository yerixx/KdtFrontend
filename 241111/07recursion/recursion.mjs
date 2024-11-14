const myFunc = (number) => {
  if (number > 3) return; // 기저 조건: number가 3보다 크면 함수 종료
  console.log(number); // 현재 number 값을 출력
  myFunc(number + 1); // number를 1 증가시켜 myFunc를 재호출
};

myFunc(1); // 함수 호출 1,2,3

// 1.	myFunc(1)을 호출하면, number가 1이 됩니다.
// •	number는 3보다 크지 않으므로 console.log(1)을 실행하고, myFunc(2)를 호출합니다.
// 2.	myFunc(2)가 호출되면, number가 2가 됩니다.
// •	마찬가지로 number는 3보다 크지 않으므로 console.log(2)를 실행하고, myFunc(3)을 호출합니다.
// 3.	myFunc(3)가 호출되면, number가 3이 됩니다.
// •	number는 여전히 3보다 크지 않으므로 console.log(3)을 실행하고, myFunc(4)를 호출합니다.
// 4.	myFunc(4)가 호출되면, number가 4가 됩니다.
// •	이때 number > 3 조건을 만족하므로, 함수가 바로 종료됩니다(return).

// const funcA = () => {
//   let a = 10;
//   let b = 5;
//   return a + b;
// };
// const funcB = () => {
//   let c = 10;
//   let d = 5;
//   return c - d;
// };

// funcA();
// funcB();

// const funcC = () => {
//   let a = 10;
//   let b = 5;
//   return a + b;
// };
// const funcD = () => {
//   let c = 10;
//   let d = 5;
//   let e = funcC();
//   return c + d + e;
// };

// funcD();
// funcC();
