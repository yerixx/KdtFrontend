const func = (a: number, b: number): number => {
  return a + b;
};
const func1 = (name: "David"): void => {
  console.log();
};

//졸아서 못들음
const self = (name = "사용자", age: number, tall?: number): void => {
  console.log(`${age}세 ${name}님 반갑습니다!`);
  if (typeof tall === "number") {
    console.log(`${name}님 의 키는 ${tall}입니다`);
  }
};

// ...rest = 배열의 형태: number[]
const getItem = (...rest: number[]): number => {
  let sum = 0;
  rest.forEach((it) => (sum += it));
  return sum;
};

//반환값 타입도 number
type Add = (a: number, b: number) => number;
//타입별칭 생성 후 함수 시그니처 적용
const add0: Add = (a, b) => a + b;
const add1: Add = (a, b) => a * b;
const add2: Add = (a, b) => a / b;
const add3: Add = (a, b) => a - b;
