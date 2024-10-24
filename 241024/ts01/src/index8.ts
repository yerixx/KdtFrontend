import { run } from "node:test";

const arr: number[] = [1, 2, 3];
const newArr = arr.map((it) => it * 2);
console.log(newArr);

//high-level 함수(*고급함수)
//선언형 함수 방식 프로그래밍 코드
const map = <T>(arr: T[], callback: (item: T) => T): T[] => {
  let result: T[] = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
};

//low-level 함수(*저급함수)
//명령형 함수 방식 프로그래밍 코드
const arrTest = [1, 2, 3];
const result = arrTest.map((item) => item);
