// const boolArr: Array<boolean> = [true, false, true];
// const numArr: number[] = [1, 2, 3];
// const strArr: string[] = ["hello", "yerim"];

// // let multiArr: Array<number | string> = [1, "hello"];
// let multiArr: (number | string)[] = [1, "hello"];

// //다차원배열,중첩배열
// let doubleArr: number[][] = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];

// //튜플타입으로 만드는 경우 재할당시 인자값 수와 위치 중요!!!!!!
// let tup1: [number, number] = [1, 2];

// // tup1=[3,4,5] // error
// tup1 = [3, 4];
// tup1.push(5); //push는 예외로 가능함 *유의

//객체 & 함수 타입 정의

//실무에서는 object타입 사용하지 않음 => 객체안의 키 값을 찾아올 수 없어서

// const user: object = {
//   id: 1,
//   name: "David",
// };
// const result = user.id

//그래서 구조적 타입 시스템을 적용!! => 무식하지만 가장 확실한 방법- 난 안쓸래

//점진적 타입 시스템

//옵셔널 타입 적용 => ? : 값이 들어 올 수도, 안들어 올 수도
const user: {
  id?: number;
  name: string;
} = {
  name: "David",
};

//선택적 타입 적용
let config: {
  // readonly 읽기전용, 타인이 가져가서 쓸 수 없음
  readonly apikey: string;
} = {
  apikey: "1234567890",
};

// config.apikey = "Hacked";

// 타입 별칭, 대문자 시작 * 전역에서는 한번만 가능 // 지역에서는 중복 선언 가능
type User = {
  id: number;
  name: string;
  location: string;
};

let user1: User = {
  id: 1,
  name: "Yerim",
  location: "Seoul",
};

let user2: User = {
  id: 2,
  name: "peter",
  location: "Incheon",
};

const fnc = () => {
  type User = {};
};

//인덱스 시그니처 > 타입 별칭으로 어떤 타입을 정의하려고 할 때 => 해당 타입이 하위요소의 모든 타입의 형태가 동일한 경우

type ContryCodes = {
  [key: string]: string;
};

const countryCodes = {
  korea: "ko",
  unitedState: "us",
  UnitedKingdom: "uk",
};

//객체의 타입 : interface타입 = 최우선
interface User01 {
  id: number;
}
// implements // extends
interface Person {
  name: string;
  age: number;
  etc?: boolean;
}
// const person: Person = {
//   name: "Peter",
//   age: 20,
//   etc: true,
// };
// const person01: Person = {
//   name: "Peter",
//   age: 20,
// };
// const person02: Person = {
//   name: "Peter",
//   age: 20,
//   etc: true,
// };
// class Person1 {
//   name: string;
//   age: number;
// }
// // 여기 왜 이렇게 쓰는지 전혀 이해 안됨
// const person03: Person1 = new Person1();
// person03.name = "peter";
// person03.age = 20;
// console.log(person03);
// class Person2 {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class Person2 {
//   // 접근제어자
//   constructor(public name: string, public age: number) {}
// }
// const person04 = new Person2("Romeo", 20);
// console.log(person04);

// interface Person5 {
//   name: string;
//   age: number;
// }

// //implements => 반드시 실행하다
// class Person6 implements Person5 {
//   constructor(public name: string, public age: number) {}
// }

// const person05 = new Person6("juliet", 20);
// console.log(person05);

// 추상클래스 abstract class
// 추상화 : 형태가 없는 비정형화된 사물을 표현하는 것
// 어떤 클래스를 정의하기 위해서 추상적인 개념을 만들어 놓고, 해당 추상적인 개념을 모티브로 클래스를 선언 및 생성하는 것

//클래스를 만들기 위한 목적으로
// abstract class Person7 {
//   constructor(public name: string, public age: number) {}
// }

// class Person8 extends Person7 {
//   public location: string;

//   constructor(name: string, age: number, location: string) {
//     super(name, age);
//     this.location = location;
//   }
// }

// const person06 = new Person8("Bruce", 20, "서울");
// console.log(person06);

// //static 속성
// class TestA {
//   static initialValue = 1;
// }

// const test01A = TestA.initialValue;

// console.log(test01A);

// enum Role {
//   ADMIN = 0,
//   USER = 1,
//   GUEST = 2,
// }

// const userA = {
//   name: "David",
//   role: Role.ADMIN,
// };
// const userB = {
//   name: "David",
//   role: Role.USER,
// };
// const userC = {
//   name: "David",
//   role: Role.GUEST,
// };

// console.log(userA, userB, userC);

let test01: any = 10;
test01 = "Hello";
test01 = 1;
test01 = () => {};

let test02: unknown;
test02 = "World";
test02 = 1;
test02 = () => {};

let test03 = test01;

console.log(test03);

let test04: number = 20;
// unknown은 값을 무한정 받아도 재할당 불가
// test04 = test02;

//타입 제한 적용
if (typeof test02 === "number") {
  test04 = test02;
}

const func1 = (): string => {
  return "hello";
};

// 함수의 반환값이 존재하지 않을 때 void 사용
const func2 = (): void => {
  console.log("World");
};

//반환할 값이 없다 = void
let test05: void;
// test05 = 1;
// test05 = "1";
// test05 = true;
//undefined는 할당 가능
test05 = undefined;

// never = 어떤 값도 정의할 수 없는 경우
let test06: never;
// test06 = 1;
// test06 = "1";
// test06 = true;
// test06 = any;
// test06 = null;

// never는 언제 쓰면 좋을까? 반복문을 돌렸을 때 아무 값도 안나와야 할 때
const func3 = (): never => {
  while (true) {}
};

//object 타입은 .name 못가져옴

//타입 단언 다시 공부 해야함
interface Person01 {
  name: string;
  age: number;
}

let person01 = {} as Person01;

person01.name = "";
person01.age = 20;

console.log(person01);

let obj: object = {
  name: "David",
};
interface Nameable {
  name: string;
}

let name1 = (<Nameable>obj).name;
let name2 = (obj as Nameable).name;

console.log(name1, name2);

const add = (a: number, b: number): number => {
  return a + b;
};

const printMe = (name: string, age: number): void => {
  console.log(`name: ${name}, age: ${age}`);
};

// 함수 시그니처
const printMeA: (arg01: string, arg02: number) => void = (name, age) => {
  console.log(`name: ${name}, age: ${age}`);
};

// 타입별칭 (어디서부터 어디까지가 정의인지 잘 모르겠을 때)
type PrintMeFnc = (name: string, age: number) => void;
const printMe2: PrintMeFnc = (name, age) => {
  console.log(`name: ${name}, age: ${age}`);
};
// 값이 보류가 되는 중 // => 타입 가드 설치
interface Nameable02 {
  name: string;
}
const getName = (o: Nameable02) => {
  return o !== undefined ? o.name : "Loading..";
};

const dataResult = getName(undefined);
console.log(dataResult);
console.log({ name: "Dk" });

const getNameA = (o: Nameable02 | undefined) => {
  return o !== undefined ? o.name : "Loading...";
};
