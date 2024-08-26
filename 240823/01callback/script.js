//싱글 스레드
// const displayA = () => {
//   console.log("a");
// };
// const displayB = () => {
//   console.log("b");
// };
// const displayC = () => {
//   console.log("c");
// };

// displayA();
// displayB();
// displayC();

//멀티스레드 => 비동기 방식 처럼 처리 하려면..
//예제 1
// const displayA = () => {
//   console.log("a");
// };
// const displayB = () => {
//   // setTimeout 실행시킬함수 , 시간
//   setTimeout(() => console.log("b"), 2000);
// };
// const displayC = () => {
//   console.log("c");
// };

// displayA();
// displayB();
// displayC();

//예제2
const displayA = () => {
  console.log("a");
};
//콜스택- 먼저 들어온게 나중에 나감 // 나중에 들어온게 먼저 나감
const displayB = (callback) => {
  // setTimeout 실행시킬함수 , 시간
  setTimeout(() => {
    callback();
    console.log("b");
  }, 2000);
};
const displayC = () => {
  console.log("c");
};

displayA();
displayB(displayC);
