// let pets = ["dog", "cat", "mouse"];

// pets[0] = "hamster";
// console.log(pets[0]);

// 이터러블 객체
// 배열 => 이터러블한 객체다.
// 이터러블하지 않은  것이 더 많다.

// iterator 가 있냐 없냐에 따라서, 이터레이터 요소!
// 반복문을 쓸 수 있는지?
// 제너레이터
// map & set

// for // for  of  // forEach
// 1) 복수형
// 2) 블록변수 값 왜 0부터 시작하는지?

// const colors = ["red", "green", "blue", "white", "black"];

// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

//  초기깞  // 범위 //  증감

// for (let color of colors) {
// }

// colors.forEach((color, index) => {
//   console.log(`colors[${index}]  :  ${color}`);
// });

// colors.forEach((color, index, array) => {
//   console.log(`p${array}] [${index}] : [${color}]`);
// });

// // 둘 이상의 배열을 한  개로 합쳐노는 역할
// const vegitable = ["양상추", "'토마토", "피클"];
// const cheese = ["모짜렐라", "슈레드"];
// const meat = ["불고기"];

// const meatBurger = vegitable.concat(meat, "빵");

// console.log(meatBurger);

// // 전개연산자

// const cheeseBurger = [...vegitable, ...cheese, "빵"];
// console.log(cheeseBurger);

// let numbers = [6, 9, 3, 21, 18];
// console.log(numbers);

// // 순서를 바꿔주는  역할
// console.log(numbers.reverse());

// let week = ["sun", "mon", "tue"];

// let values = [5, 20, 3, 11, 4, 15];

// console.log(week);
// //sort오름차순..
// console.log(week.sort());

// console.log(values);
// console.log(values.sort());

// values.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
//   if (a === 0) return 0;
// });

// // 위에 축약 아래
// console.log(values);

// values.sort((a, b) => {
//   return a - b;
// });
// console.log(values);

///////////////////

// let animals = ["lion", "bear", "bird"];

// // animals.pop();
// animals.push("tiger");
// console.log(animals);

// let fruits = ["apple", "pear", "banana"];
// fruits.unshift("cherry");
// console.log(fruits);

//////////////////////

let subjects = ["html", "css", "javascript", "react", "typescript"];
// console.log(subjects.splice(2));

let week = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

console.log(week.splice(1, 5, "holiday"));
// 원본 데이터 값을 변경 시킴 주의요망
console.log(week);

//첫번째 인자값= 인덱스 ,  두번째 인자값 개수 의미
// console.log(week.splice(1, 5));

let colors = ["red", "green", "blue", "white", "black"];

console.log(colors.slice(2));
console.log(colors.slice(1, 4));
