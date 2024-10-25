// 타입 별칭 + 인덱스타입 + 제네릭

type Map2<T> = {
  // 인덱스 타입
  // [key: string | number]: string | number;
  // [key: string]: string;
  [key: string]: T;
};
const stringMap2: Map2<string> = {
  name: "yerim",
  nicname: "yerixx",
};
const stringMap3: Map2<number> = {
  age: 23,
  birthYear: 2002,
};

//제네릭과 인터페이스 조합
interface KeyPair<T, U> {
  key: T;
  value: U;
}

const keyPair: KeyPair<string, number> = {
  key: "key",
  value: 0,
};
const keyPairA: KeyPair<boolean, string[]> = {
  key: true,
  value: ["1"],
};
