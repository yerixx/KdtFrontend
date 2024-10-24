//제네릭이 필요한 상황!!
//generic 종합적인
//종합적인 타입을 정의하고 싶을 때 사용

// <T> : 타입변수 선언
// (value: T) : 타입변수 지정
// : T : 타입변수 반환
const func = <T>(value: T): T => {
  return value;
};

const swap = <T, U>(a: T, b: U) => {
  return [b, a];
};
const [a, b] = swap("1", 2);

const funcArray = <T>(data: T[]) => {
  return data[1];
};

const num = funcArray([0, 1, 2]);
console.log(num);

let str = funcArray([1, "Hello", "World"]);
console.log(str);

//
const retunFirst = <T>(data: [T, ...unknown[]]): T => {
  return data[0];
};

const strA = retunFirst([1, "Hello", "World"]);
console.log(strA);

const func4 = <T extends { length: number }>(data: T) => {
  return data.length;
};

// 이터러블
console.log(func4("1234"));
console.log(func4([1, 2, 3]));
console.log(func4({ length: 1 }));
