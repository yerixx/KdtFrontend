//타입 구조도
//모든 타입 슈퍼타입 & 서브타입
//타입 수용 => 타입 호환성

let num1: number = 10;
let num2: 10 = 10;

num1 = num2;
// num2 = num1;

//타입스크립트에 기본적으로 내장되어 있는 내장타입 > 리터럴 타입
//서브타입을 슈퍼타입으로 호환시키는 액션행위ㅣ(*업케스팅)
//슈퍼타입을 서브타입으로 호환시키려고 하는 액션행ㅇ위(*다운캐스팅) : 거의 대부분 불가

interface Animal {
  name: string;
  color: string;
}
const animal: Animal = {
  name: "고양이",
  color: "White",
};

interface Dog {
  name: string;
  color: string;
  breed: string;
}
const dog: Dog = {
  name: "강아지",
  color: "brown",
  breed: "진돗개",
};

//animal은 dog보다 슈퍼타입
//dog는 animal 보다 서브타입
animal = dog;
//dog = animal;

interface Book {
  name: string;
  price: number;
}

let book: Book;

interface ProgrammimgBook {
  name: string;
  price: number;
  skill: string;
}
let programmimgBook: ProgrammimgBook = {
  name: "TS",
  price: 330000,
  skill: "Typescript",
};

book = programmimgBook;
// programmimgBook; = book;

//초과 프로퍼티 검사 // 별도의 변수에 할당해줘야함
let book3: Book = programmimgBook;

//대수타입 , 복수의 타입을 합성하거나 교차한 형태의 타입을 만들어
//합집합의 형태로 타입 : union타입
//교집합의 형태로 타입 : intersection 타입

let a: string | number;

a = 1;
a = "Hello";

type DogA = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = DogA | Person;

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

// let union4: Union1 = {
//   name: "",
// };

type Intersection = DogA & Person;

let intersection: Intersection = {
  name: "",
  color: "",
  language: "",
};

type DogB = {
  name: string;
  color: string;
};

// 초과 프로퍼티 검사 넘어가는 법
const dogB: DogB = {
  name: "뽀삐",
  color: "brown",
  breed: "똥깨",
} as DogB;

//타입 단언은 any 다음으로 치트키
// 타입 단언을 실행시키려면 반드시 다음의 조건 필요 => 상호간 슈퍼 & 서브타입 이어야함 => 같은 항렬끼리는 못씀
let numA = 10 as never;
let numB = 10 as unknown;
// 같은 항렬끼리는 못씀 그래서 최상단으로 보냈다가 다시 내려옴
let numC = 10 as unknown as string;

// const 상수 = const처럼 쓰겠다
let num4: 10 = 10 as const;

//타입가드 (타입 좁히기)
const func = (value: number | string) => {
  if (typeof value === "number") {
    value.toFixed(2);
  } else if (typeof value === "string") {
    value.toUpperCase();
  }
};

// unknown 은 재할당이 불가해서 안됨
// const func = (value: unknown) => {
//   if (typeof value === "number") {
//     value.toFixed(2);
//   } else if (typeof value === "string") {
//     value.toUpperCase();
//   }
// };
