//TS 타입
//기본제공타입
//number,string,boolean,object
//unknown,any,null,undefind, void,symbol,never etc.....

//점진적 타입시스템 => 타입추론 => 타입 주석을 입력하지 않아도 타입 정의
let num = 1;
num = 10;

let str: string = "hello";
str = "world";

let bool: boolean = true;

let obj: object = {
  name: "david",
};

//다양한 종류의 타입 가운데, 치트키의 역할
//any는 모든 타입을 수용할 수 있음
let sample: any = 0;

sample = "hello";

//undefined
let sample01: undefined = undefined;

sample01 = undefined;

// unknown 타입은 아무 값이나 할당할 수 있는 타입이지만, 값을 사용하기 전에 타입 검사를 해야 합니다.
let sample02: unknown = 10;
// sample02 = "1";
if (typeof sample02 === "string") {
  console.log(sample02);
} else {
  console.log("타입 오류");
}

//배열 타입
const numArr: number[] = [1, 2, 3];
const strArr: string[] = ["David", "peter"];
// 제네릭 타입
const boolArr: Array<boolean> = [true, false, true];
//union 타입
const multiArr: (string | number | boolean)[] = [1, "hello", true];
//중첩배열
const doubleAtt: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

type MixedType = string | number | boolean; // 자주 사용하는 타입을 별칭으로 정의

const mulArr: MixedType[] = [1, "hello", true, 42, "world"];

//길이 & 타입이 고정된 배열 = tuple 타입
let tup1: [number, number] = [1, 2];

const users: [string, number][] = [
  ["david", 1],
  ["romeo", 2],
  ["yerim", 3],
  ["peter", 4],
  ["david", 1],
  ["romeo", 2],
  ["yerim", 3],
  ["peter", 4],
  ["david", 1],
  ["romeo", 2],
  ["yerim", 3],
  ["peter", 4],
  ["david", 1],
  ["romeo", 2],
  ["yerim", 3],
  ["peter", 4],
  // [4, "peter"],
];
