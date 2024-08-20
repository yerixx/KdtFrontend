//문자열
let hi = "hello";

for (let ch of hi) {
  console.log(ch);
}

let chArray = [...hi];
console.log(chArray);

let [ch1, ch2, ch3, ch4, ch5] = hi;

console.log(ch1, ch2, ch3, ch4, ch5);

console.log(hi);

const arr = [1, 2, 3, 4, 5];
console.log(arr);

let it = arr[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

//이터러블한 객체가 되려면 이터레이터 객체 속성을 가지고 있어야함
//이터레이터 객체 속성은 => next() 함수를 가지고 있음
//next() => 반복문으로 무언가를 실행시키고자 할 때, 실행되는 메서드 함수 !!

//이터러블 하지 못한 데이터 자료구조는 반복문 사용 불가
//이터러블 하지 못한 객체를 이터러블 하게 쓰고싶을 때

//generater 함수
function* fnc() {
  yield 1;
  yield 2;
  yield 3;
}
const g1 = fnc();

// console.log(g1);
// console.log(g1.next());
// console.log(g1.next());
// console.log(g1.next());
// console.log(g1.next());

for (let i of g1) {
  console.log(i);
}
