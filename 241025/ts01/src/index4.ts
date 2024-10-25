//Keyof 연산자 : 객체 타입으로부터 프로퍼티 모든 속성의 key의 타입을
// 유니온 형식으로 추출해주는 연산자

// interface Person {
//   name: string;
//   age: number;
//   location: string;
// }

// const getProperty = (person: Person, key: "name" | "age") => {
//   return person[key];
// }
type Person = typeof person;

const person = {
  name: "yerim",
  age: 22,
  location: "seoul",
};

const getProperty = (person: Person, key: keyof typeof person) => {
  return person[key];
};
