// A 슈퍼 타입 B 서브타입
// 슈퍼타입은 서브타입을 호환 할 수 있음
// a = b ok
// b = a xxx
// 업캐스팅
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => 10;
let d: D = (value) => 10;

// 다운캐스팅 이거 알려줘
// c = d;
d = c;

//슈터타입
type Animal = {
  name: string;
};
//서브타입
//1. 서브타입이 객체인 경우는 유일하게 다운캐스팅이 가능함
type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal): void => {
  console.log(animal.name);
};
let dogFunc = (dog: Dog): void => {
  console.log(dog.name);
  console.log(dog.color);
};

//2. 왜 못받을까? color가 없어서.
// animalFunc = dogFunc;
dogFunc = animalFunc;

//함수의 매개변수의 값은 거의 유일하게 다운 캐스팅이 허용되는 상황이다

//매개변수의 개수가 다른경우
type FuncA = (a: number, b: number) => void;
type FuncB = (a: number) => void;

let funcA: FuncA = (a, b) => {};
let funcB: FuncB = (a) => {};

funcA = funcB;
// funcB = funcA;

//함수 시그니처를 실제 구현되는 함수 위에다가 사전 작성 => 함수 오버로딩
// const funA = (a: number): void => {};
// const funB = (a: number): void => {};

//함수의 시그니처를 오버로딩 시킨 상황
function fun(a: number): void;
function fun(a: number, b: number, c: number): void;

//실제 함수 선언부
function fun(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

//함수 실행 & 호출
fun(1);
// 오버로드가 준비되지 않아서 실행불가
// fun(1, 2);
fun(1, 2, 3);

type Dogs = {
  name: string;
  isBark: boolean;
};
type Cat = {
  name: string;
  isScratch: boolean;
};
//서로소 유니온타입
type Animals = Dogs | Cat;
const warning = (animal: Animals): void => {
  if ("isBark" in animal) {
    console.log(animal.isBark ? "짖습니다" : "짖지않습니다");
  } else if ("isScratch" in animal) {
    console.log(animal.isScratch ? "할큅니다" : "안할큅니다.");
  }
};
// const warning = (animal: Animals): void => {
//   if ("isBark" in animal) {
//     console.log(animal.isBark ? "짖습니다" : "짖지않습니다");
//   } else if ("isScratch" in animal) {
//     console.log(animal.isScratch ? "할큅니다" : "안할큅니다.");
//   }
// };

// 많이 쓰진 않는다
// 강아지와 고양이일때만 도는 함수
const isDog = (animal: Animals): animal is Dogs => {
  // return값이 true인 경우에 animal가 반환이됨
  return (animal as Dogs).isBark !== undefined;
};

const isCat = (animal: Animals): animal is Cat => {
  // return값이 true인 경우에 animal가 반환이됨
  return (animal as Cat).isScratch !== undefined;
};

const warningA = (animal: Animals) => {
  if (isDog(animal)) {
    console.log(animal.isBark ? "짖습니다" : "짖지 않습니다.");
  } else {
    console.log(animal.isScratch ? "할큅니다" : "안할큅니다.");
  }
};
