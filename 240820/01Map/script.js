// let bag = new Map();

// bag.set("color", "red");
// // bag.set("키 값", "value값");
// // console.log(bag);

// // 배열의 형태로 가져올 수도 있음
// //인스턴트 객체 생성 동시에 프로퍼티 생성 가능
// let myCup = new Map([
//   ["color", "white"],
//   ["material", "ceramic"],
//   ["capacity", "300ml"],
// ]);

// //프로퍼티 추가 방법
// myCup.set("type", "mini");

// //여러가지 프로퍼티를 추가 하려면
// //메서트 체이닝 기법 사용
// myCup.set("type", "mini").set("purpose", "daily");

// console.log(myCup);

// console.log(myCup.get("color"));
// console.log(myCup.size);
// console.log(myCup.has);

// console.log(myCup.delete("type"));
// console.log(myCup);

// // console.log(myCup.clear());
// // console.log(myCup);

// console.log(myCup.keys());
// console.log(myCup.values());
// console.log(myCup.entries());

// for (let key of myCup.keys()) {
//   console.log(key);
// }
// for (let key of myCup.values()) {
//   console.log(key);
// }
// for (let key of myCup.entries()) {
//   console.log(key);
// }

let bags = new Map([
  ["color", "white"],
  ["one", "01"],
  ["two", "02"],
]);

for (let [key, value] of bags.entries()) {
  window.document.write(`${key}:${value} <br/>`);
}

const obj = {
  name: "john",
  age: "30",
  job: "developer",
};

// const entries = Object.entries(bags);
// console.log(entries);

// bags.set("three", "03").set("four", "04");
// // console.log(bags.clear());
// console.log(bags.entries());

function multiply(x, y) {
  return x * y;
}

let result = multiply(4, 5);
console.log(result);
