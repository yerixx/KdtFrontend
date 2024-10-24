//선택적/옵셔널 프로퍼티
interface Person {
  name: string;
  age?: number;
  sayHi?: () => void;
}

const personA: Person = {
  name: "David",
  sayHi: () => {
    console.log("Hi");
  },
};

const personB: Person = {
  name: "peter",
  age: 23,
};

type TypeA = number | string;
type TypeB = number & string;

interface PersonA {
  name: string;
  age: number;
}
// 이건 안됨
// interface PersonA {
//   name: string;
//   age: number;
// }| number

type TypeC = number | string | PersonA;

const person = {
  name: "David",
  age: 20,
};

//이렇게 비효율적으로 쓰지말고
// interface animall {
//   name: string;
//   age: number;
// }
// interface Dogg {
//   name: string;
//   age: number;
//   isBark: boolean;
// }
// interface Catt {
//   name: string;
//   age: number;
//   isScratch: boolean;
// }
// interface Chicken {
//   name: string;
//   age: number;
//   isFly: boolean;
// }

// interface Animal {
//   name: string;
//   age: number;
// }

//type 별칭 사용 사능
type Animal = {
  name: string;
  age: number;
};
interface Dog extends Animal {
  isBark: boolean;
}
interface Cat extends Animal {
  isScratch: boolean;
}
interface chicken extends Animal {
  isFly: boolean;
}
interface DogCat extends Dog, Cat {
  breed: string;
}

const dog: Dog = {
  name: "뽀삐",
  age: 5,
  isBark: true,
};
