const calc = (value: number, cb: (arg: number) => void): void => {
  let add = (a: number, b: number) => a + b;
  let multiply = (a: number, b: number) => a * b;
  // value 값이 왜 30?
  let result = multiply(add(1, 2), value);
  cb(result);
};

calc(30, (result: number) => console.log(`result is ${result}`));

// 고차함수
// const add =
//   (a: number): ((arg0: number) => number) =>
//   (b: number) =>
//     a + b;

// const resultA = add(1)(2);
// console.log(resultA);

//함수 시그니처
// (arg0: number) => number; 숫자를 받아서 숫자로 변환한다.
type NumberToNumber = (arg0: number) => number;

const add = (a: number): NumberToNumber => {
  const _add = (b: number): number => {
    return a + b;
  };

  return _add;
};

const result = add(1)(2);
console.log(result);

// 선언형 프로그래밍 코딩 훈련
// 파이프, 커리, 모나드, 람다 함수
